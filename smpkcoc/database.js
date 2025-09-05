const sqlite3 = require('sqlite3').verbose();
const axios = require('axios');
const dateObj = new Date();
const currentYear = dateObj.getFullYear();

const db = new sqlite3.Database('./events.db');

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        event_id TEXT UNIQUE,
        title TEXT NOT NULL,
        description TEXT,
        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL,
        reference_rule TEXT
    )
`;

async function importEvents() {
    const baseUrl = `https://api.chmeetings.com/Public/Calendar/Events?isPublicPage=true&chId=4895C97227BEBCDF&calendars=&start=${currentYear}-01-01&end=${currentYear}-12-31`;

    try {
        console.log('Fetching events from API...');
        const response = await axios.get(baseUrl);

        const data = response.data;
        console.log(`Found ${data.Data?.length || 0} events`);

        const insertQuery = `
            INSERT OR REPLACE INTO events (
                event_id, title, description, start_date, end_date, reference_rule
            ) VALUES (?, ?, ?, ?, ?, ?)
        `;

        const stmt = db.prepare(insertQuery);
        let insertedCount = 0;
        let skippedCount = 0;

        for (const event of data.Data || []) {
            const eventId = event.Id || event.TaskId;
            const title = event.Title;
            const description = event.Description;
            const startDate = event.Start;
            const endDate = event.End;
            let referenceRule = event.RecurrenceRule;

            if (!startDate || !endDate || !title) {
                console.log(`Skipping event due to missing required fields:`, {
                    id: eventId,
                    title: title,
                    startDate: startDate,
                    endDate: endDate
                });
                skippedCount++;
                continue;
            }

            stmt.run([
                eventId,
                title,
                description || '',
                startDate,
                endDate,
                referenceRule
            ]);
            insertedCount++;
        }

        stmt.finalize();

    } catch (error) {
        console.log(error);
    } finally {
        db.close();
    }
}

// Create table first, then import events
db.run(createTableQuery, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
        db.close();
    } else {
        console.log('Events table created successfully');
        // Only import events after table is created
        importEvents();
    }
});
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Custom middleware
const middleWare = function (req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
}

app.use(middleWare);

// Database connection
const db = new sqlite3.Database('./events.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Routes

// Get all events
app.get("/events", (req, res) => {
    const query = 'SELECT * FROM events ORDER BY start_date ASC';

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Database error:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({
                success: true,
                count: rows.length,
                events: rows
            });
        }
    });
});

// Get events by date range
app.get("/events/range", (req, res) => {
    const { start, end } = req.query;

    if (!start || !end) {
        return res.status(400).json({
            error: 'Please provide both start and end date parameters'
        });
    }

    const query = 'SELECT * FROM events WHERE start_date >= ? AND end_date <= ? ORDER BY start_date ASC';

    db.all(query, [start, end], (err, rows) => {
        if (err) {
            console.error('Database error:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({
                success: true,
                count: rows.length,
                events: rows,
                dateRange: { start, end }
            });
        }
    });
});

// Get upcoming events (from today)
app.get("/events/upcoming", (req, res) => {
    const today = new Date().toISOString().split('T')[0];
    const query = 'SELECT * FROM events WHERE start_date >= ? ORDER BY start_date ASC LIMIT 10';

    db.all(query, [today], (err, rows) => {
        if (err) {
            console.error('Database error:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({
                success: true,
                count: rows.length,
                events: rows
            });
        }
    });
});

// Get event by ID
app.get("/events/:id", (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM events WHERE id = ? OR event_id = ?';

    db.get(query, [id, id], (err, row) => {
        if (err) {
            console.error('Database error:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else if (!row) {
            res.status(404).json({ error: 'Event not found' });
        } else {
            res.json({
                success: true,
                event: row
            });
        }
    });
});

// Search events by title
app.get("/events/search/:term", (req, res) => {
    const { term } = req.params;
    const query = 'SELECT * FROM events WHERE title LIKE ? ORDER BY start_date ASC';

    db.all(query, [`%${term}%`], (err, rows) => {
        if (err) {
            console.error('Database error:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({
                success: true,
                count: rows.length,
                events: rows,
                searchTerm: term
            });
        }
    });
});

// Get events happening today
app.get("/events/today", (req, res) => {
    const today = new Date().toISOString().split('T')[0];
    const query = 'SELECT * FROM events WHERE DATE(start_date) = ? ORDER BY start_date ASC';

    db.all(query, [today], (err, rows) => {
        if (err) {
            console.error('Database error:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({
                success: true,
                count: rows.length,
                events: rows,
                date: today
            });
        }
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        } else {
            console.log('Database connection closed');
        }
        process.exit(0);
    });
});

app.listen(3001, () => {
    console.log(`Server running on http://localhost:3001`);
});
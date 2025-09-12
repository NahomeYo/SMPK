import './App.css';
import './index.css';
import { useState, useEffect } from 'react';

export function Calendar(props) {
    const [event, setEvent] = useState([]);

    const makeAPICall = async () => {
        let baseUrl = "";

        try {
            const response = await fetch(`${baseUrl}`);
            const data = await response.json();

            const eventArray = data.events;

            const mappedEvents = eventArray.map((event) => ({
                title: event.title,
                description: event.description || '',
                start: event.start_date,
                end: event.end_date,
                recurrence: event.reference_rule || ''
            }));

            mappedEvents.forEach((e) => {
                let eventYear = e.recurrence
                let eventMonth;
                let eventDay;
                let eventStartTime;

                if (e.recurrence && e.recurrence.includes('FREQ=WEEKLY') && typeof e.recurrence === 'string') {
                    e.recurrence = "FREQ=WEEKLY";
                }

                if (e.start) {
                    e.start = new Date(eventYear, eventMonth, eventDay, eventStartTime);

                }

                if (e.end) {
                    e.end = new Date(eventYear, eventMonth, eventDay, eventStartTime);
                }
            })

            const yearFilteredEvents = mappedEvents.filter((e) => {
                const dateObj = new Date(e.start);
                const eventYear = dateObj.getFullYear();
                const eventReference = e.recurrence;

                if (eventReference && eventYear !== currentYear) {
                    return false;
                }

                return eventYear === currentYear;
            });

            const allEvents = [...yearFilteredEvents];

            mappedEvents.forEach((e) => {
                if (e.recurrence.includes('FREQ=WEEKLY')) {
                    let weekCount = 1;

                    while (weekCount < 5) {
                        const clonedEvent = cloneWithSpread(e);
                        const startDate = clonedEvent.start;
                        const endDate = clonedEvent.end;

                        const newStart = startDate.getDay() + (weekCount * 7) - 1;
                        const newEnd = endDate.getDay() + (weekCount * 7) - 1;

                        clonedEvent.start = new Date(currentYear, month, newStart);
                        clonedEvent.end = new Date(currentYear, month, newEnd);

                        if (!month) {
                            break;
                        }

                        allEvents.push(clonedEvent);
                        weekCount++;
                    }
                }
            });

            setEvent(allEvents);

        } catch (error) {
            console.log(error);
            setEvent([]);
        }
    }

    const cloneWithSpread = (obj) => ({
        ...obj,
        start: new Date(obj.start),
        end: new Date(obj.end)
    });

    useEffect(() => {
        makeAPICall();
    }, []);

    useEffect(() => {
        const lengthyTab = document.querySelectorAll('.lengthyTabOutline');
        let tabSquare = document.createElement('div');
        tabSquare.style.width = '1rem';
        tabSquare.style.height = '1rem';
        tabSquare.style.margin = '0';
        tabSquare.style.padding = '0';
        tabSquare.style.background = 'var(--sixthly)';
        tabSquare.style.position = 'absolute';
        tabSquare.style.left = '0';
        tabSquare.style.top = '0';

        if (lengthyTab) {
            lengthyTab.forEach((tab) => {
                let clone001 = tabSquare.cloneNode(true);
                tab.append(clone001);

                let clone002 = clone001.cloneNode(true);
                clone002.style.position = 'absolute';
                clone002.style.width = '1rem';
                clone002.style.height = '1rem';
                clone002.style.margin = '0';
                clone002.style.padding = '0';
                clone002.style.background = 'var(--sixthly)';
                clone002.style.position = 'absolute';
                clone002.style.left = '100%';
                clone002.style.transform = 'translateX(-100%)';
                clone002.style.top = '0';
                tab.append(clone002);
            })
        }
    }, [])

    let dateObj = new Date();
    let month = dateObj.getMonth();
    let weekday = dateObj.getDate();
    let currentYear = dateObj.getFullYear();
    let firstDayofMonth = new Date(currentYear, month, 1).getDay();
    let lastDayOfMonth = new Date(currentYear, month + 1, 0).getDay();
    let year = <h1>{currentYear}</h1>
    let copticYearNum = currentYear - 284;
    let copticYear = <h1>{copticYearNum}</h1>
    let monthStr;
    let copticMonth;

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const daysInCurrentMonth = getDaysInMonth(month, currentYear);
    const days = [];

    for (let i = 1; i <= daysInCurrentMonth; i++) {
        days.push(i);
    }

    for (let i = 1; i <= firstDayofMonth; i++) {
        days.unshift("");
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        days.push("");
    }

    switch (month) {
        case 0:
            monthStr = "January";
            copticMonth = weekday < 9 ? 'Koiak' : 'Tobi';
            break;
        case 1:
            monthStr = "February";
            copticMonth = weekday < 8 ? 'Tobi' : 'Meshir';
            break;
        case 2:
            monthStr = "March";
            copticMonth = weekday < 10 ? 'Meshir' : 'Paremhat';
            break;
        case 3:
            monthStr = "April";
            copticMonth = weekday < 9 ? 'Paremhat' : 'Paremoude';
            break;
        case 4:
            monthStr = "May";
            copticMonth = weekday < 9 ? 'Paremoude' : 'Pashons';
            break;
        case 5:
            monthStr = "June";
            copticMonth = weekday < 8 ? 'Pashons' : 'Paoni';
            break;
        case 6:
            monthStr = "July";
            copticMonth = weekday < 8 ? 'Paoni' : 'Epip';
            break;
        case 7:
            monthStr = "August";
            copticMonth = weekday < 7 ? 'Epip' : 'Mesori';
            break;
        case 8:
            monthStr = "September";
            copticMonth = weekday < 11 ? 'Mesori' : 'Thout';
            break;
        case 9:
            monthStr = "October";
            copticMonth = weekday < 11 ? 'Thout' : 'Paopi';
            break;
        case 10:
            monthStr = "November";
            copticMonth = weekday < 10 ? 'Paopi' : 'Hathor';
            break;
        case 11:
            monthStr = "December";
            copticMonth = weekday < 10 ? 'Hathor' : 'Koiak';
            break;
        default:
            monthStr = "Unknown";
            copticMonth = "Unknown";
    }

    let currentMonth = <h2>{monthStr}</h2>
    let copMonth = <h2>{copticMonth}</h2>

    function formatDateForDisplay(dateObj) {
        let hours = dateObj.getHours().toString().padStart(2, '0');
        let minutes = dateObj.getMinutes().toString().padStart(2, '0');

        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;

        return `${hours}:${minutes} ${ampm}`;
    }

    const createEventList = (day, index) => {
        const dayEvents = event.filter((e) => {
            const eventDate = new Date(e.start);

            return (
                eventDate.getDate() === day &&
                eventDate.getMonth() === month &&
                eventDate.getFullYear() === currentYear
            )
        });

        return (
            <div className="eventList" key={index}>
                <div style={{ color: 'var(--thirdly)', fontFamily: "BoucherieBlockBold" }} className="dayNumber">{day}</div>

                {dayEvents.length > 0 && (
                    dayEvents.map((evt, eventIndex) => {
                        return (
                            <>
                                <div key={eventIndex} className='dayEvent'>
                                    <h2 style={{ fontSize: '0.5rem', letterSpacing: '0.05rem', color: 'var(--secondary)' }}>{evt.title}</h2>
                                    <p>{formatDateForDisplay(evt.start)}</p>
                                </div>
                            </>
                        )
                    }
                    ))}
            </div>
        );
    }

    return (
        <article className="article" style={{ paddingTop: props.height, width: 'var(--pageWidth)', margin: '0vw 5vw' }} >
            <span className="lengthyTabOutline" style={{ width: '100%', paddingTop: '0.5rem', paddingLeft: 0, paddingRight: 0 }}>
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', flexDirection: 'column' }}>{[currentMonth, year]}</span>

                <t>Calendar</t>

                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}>{[copMonth, copticYear]}</span>
            </span>

            <div style={{ display: 'flex', gap: 0, flexDirection: 'column', width: '100%' }}>
                <div className="daysHeader">
                    <h2>Sunday</h2>
                    <h2>Monday</h2>
                    <h2>Tuesday</h2>
                    <h2>Wednesday</h2>
                    <h2>Thursday</h2>
                    <h2>Friday</h2>
                    <h2>Saturday</h2>
                </div>

                <div className="calenderContainer">
                    {days.map((day, index) => {
                        return (
                            <>
                                <div className="calendarBox" style={{ position: "relative", overflow: 'visible', background: 'var(--sixthly)' }}>
                                    {createEventList(day, index)}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </article>
    )
}

export default function init() {
    return (
        <Calendar height="" />
    )
}
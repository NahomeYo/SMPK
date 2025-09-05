import { useState, useEffect } from 'react';
import "./App.css";
import "./index.css"

export const Cross = (props) => {
    return (
        <svg className="smallIcon" width="15" height="15" viewBox="0 0 61 61" xmlns="http://www.w3.org/2000/svg">
            <path fill={props.fill} d="M45.0618 52.742L36.9946 44.742V37.242H44.5576L53.1291 44.742V37.242L60.6921 30.742L53.1291 24.242V16.742L44.5576 24.242H36.9946V15.742L45.0618 8.24203H36.9946L30.44 0.742035L23.8854 8.24203H15.8181L23.3812 16.742V24.242H16.8265L8.7593 16.742V24.742L0.692078 30.742L8.7593 37.242V44.742L16.8265 37.242H23.3812V44.742L15.8181 52.742H23.8854L30.44 60.742L36.9946 52.742H45.0618Z" />
        </svg>
    )
}

export const Termtab = (props) => {
    return (
        <div className="eventTab" style={{ margin: 0, borderRadius: 'calc(var(--border) * 2)', background: 'none', border: `solid var(--border) ${props.color}`, padding: 'calc(var(--space) / 2)', display: 'grid', gridTemplateColumns: 'repeat(2, auto' }}>
            <Cross fill={props.color} />
            <span>
                <h2 style={{ color: props.color }}>{props.term}</h2>
                <p style={{ color: props.color }}>{props.definition}</p>
            </span>
        </div>
    )
}

export function EventTab(props) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let dateObject = new Date();
    let dayOfWeek = dateObject.getDay();
    let dayString;

    switch (dayOfWeek) {
        case 0:
            dayString = "Sunday";
            break;
        case 1:
            dayString = "Monday";
            break;
        case 2:
            dayString = "Tuesday";
            break;
        case 3:
            dayString = "Wednesday";
            break;
        case 4:
            dayString = "Thursday";
            break;
        case 5:
            dayString = "Friday";
            break;
        case 6:
            dayString = "Saturday";
            break;
        default:
            dayString = "";
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            setLoading(true);

            const response = await fetch('http://localhost:4000/calender');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            let todaysEvents = data.filter((event) => {
                return event.day === dayString;
            })

            setEvents(todaysEvents);
            setError(null);
        } catch (error) {
            console.error('Error fetching events:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h2>Loading events...</h2>
    }

    if (error) {
        return <div className="eventTab">Error: {error}</div>;
    }

    if (events.length === 0) {
        return (
            <div>
                <h2>No events scheduled for today</h2>
            </div>
        );
    }

    return (
        <>
            {events.map((event) => {
                <div className="eventTab" key={event._id} style={{ marginBottom: '20px' }}>
                    <Cross fill={props.color} />
                    <span>
                        <h2>{event.name}</h2>
                        <p>{event.time?.start} - {event.time?.end}</p>
                    </span>
                </div>
            })}

            {events.map((event) => {
                if (event.day === "Thursday") {
                }
            })}
        </>
    )
}

export default function init() {
    return (
        <>
            <EventTab color="" />
            <Termtab term="" definition="" color="" />
        </>
    );
}
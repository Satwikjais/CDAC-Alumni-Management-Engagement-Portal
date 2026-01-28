// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Events = () => {
//     const [events, setEvents] = useState([]);
//     const user = JSON.parse(localStorage.getItem('user'));

//     useEffect(() => {
//         fetchEvents();
//     }, []);

//     const fetchEvents = async () => {
//         try {
//             const res = await axios.get('/api/events');
//             setEvents(res.data);
//         } catch (error) {
//             console.error('Error fetching events', error);
//         }
//     };

//     const handleRSVP = async (eventId) => {
//         if (!user) return alert('Please login to RSVP');
//         try {
//             await axios.post(`/api/events/${eventId}/rsvp`);
//             alert('RSVP Successful!');
//         } catch (error) {
//             alert(error.response?.data?.message || 'RSVP Failed');
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h2 className="section-title">Upcoming Events</h2>
//             <div className="list-group">
//                 {events.map(event => (
//                     <div className="list-group-item list-group-item-action flex-column align-items-start mb-3 border rounded" key={event.id}>
//                         <div className="d-flex w-100 justify-content-between">
//                             <h5 className="mb-1">{event.title}</h5>
//                             <small className="text-muted">{new Date(event.event_date).toLocaleString()}</small>
//                         </div>
//                         <p className="mb-1">{event.description}</p>
//                         <small className="text-muted">Location: {event.location} | Capacity: {event.capacity}</small>
//                         <div className="mt-2">
//                             <button className="btn btn-primary btn-sm" onClick={() => handleRSVP(event.id)}>RSVP Now</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Events;

import React from "react";
import '../style/event.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "National AI & HPC Conference 2025",
      description:
        "C-DAC is organizing a national-level conference focusing on Artificial Intelligence, High Performance Computing, and emerging technologies.",
      date: "2025-01-18T10:00",
      location: "C-DAC Pune",
      type: "Conference",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Cyber Security Awareness Workshop",
      description:
        "An expert-led workshop covering modern cyber threats, ethical hacking, and secure infrastructure practices.",
      date: "2025-01-25T11:30",
      location: "C-DAC Bengaluru",
      type: "Workshop",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "PG-DAC Orientation Program",
      description:
        "Orientation program for newly admitted PG-DAC students introducing curriculum, faculty, and infrastructure.",
      date: "2025-02-01T09:30",
      location: "All C-DAC Centers",
      type: "Orientation",
      status: "Important",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="events-title">C-DAC Event Alerts</h2>
      <p className="events-subtitle">
        Stay informed about upcoming programs, workshops, and conferences at
        C-DAC
      </p>

      <div className="row g-4 mt-4">
        {events.map((event) => (
          <div className="col-md-6 col-lg-4" key={event.id}>
            <div className="event-card">
  <div className="event-badge">{event.status}</div>

  {/* 🔑 CONTENT WRAPPER */}
  <div className="event-body">
    <h5 className="event-title">{event.title}</h5>

    <p className="event-desc">{event.description}</p>

    <div className="event-info">
      <span>
        <strong>Date:</strong>{" "}
        {new Date(event.date).toLocaleString()}
      </span>
      <span>
        <strong>Location:</strong> {event.location}
      </span>
      <span>
        <strong>Type:</strong> {event.type}
      </span>
    </div>
  </div>

              <button className="btn btn-cdac-orange">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;


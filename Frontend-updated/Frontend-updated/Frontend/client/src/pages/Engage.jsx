// import React from 'react';

// const Engage = () => {
//     return (
//         <div className="container mt-4">
//             <h1>Engage</h1>
//             <p>Get involved with the C-DAC community.</p>

//             <div className="row">
//                 <div className="col-md-3">
//                     <div className="card text-center p-3">
//                         <h5>Be a Mentor</h5>
//                         <p>Guide current students.</p>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="card text-center p-3">
//                         <h5>Volunteer</h5>
//                         <p>Help with events and activities.</p>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="card text-center p-3">
//                         <h5>Guest Lecturer</h5>
//                         <p>Share your technical expertise.</p>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="card text-center p-3">
//                         <h5>Motivational Speaker</h5>
//                         <p>Inspire the next batch.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Engage;

import React from "react";
import '../style/engage.css';

const Engage = () => {
  const engageData = [
    {
      id: 1,
      title: "Be a Mentor",
      desc: "Guide and support current C-DAC students with your experience and industry knowledge.",
      icon: "🎓",
    },
    {
      id: 2,
      title: "Volunteer",
      desc: "Participate in academic, cultural, and technical events conducted by C-DAC.",
      icon: "🤝",
    },
    {
      id: 3,
      title: "Guest Lecturer",
      desc: "Deliver expert talks, workshops, and lectures to share real-world insights.",
      icon: "🧠",
    },
    {
      id: 4,
      title: "Motivational Speaker",
      desc: "Inspire and motivate students by sharing your professional journey and success stories.",
      icon: "🎤",
    },
  ];

  return (
    <div className="container my-5">
      <div className="engage-box">

        <h1 className="engage-title">Engage with C-DAC</h1>
        <p className="engage-subtitle">
          Collaborate, contribute, and connect with the C-DAC community to make
          a meaningful impact.
        </p>

        <div className="row g-4 mt-4">
          {engageData.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <div className="engage-card">
                <div className="engage-icon">{item.icon}</div>
                <h5 className="engage-card-title">{item.title}</h5>
                <p className="engage-card-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="engage-footer">
          <button className="btn btn-cdac-orange">Join the Community</button>
        </div>

      </div>
    </div>
  );
};

export default Engage;

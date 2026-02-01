// import React from 'react';

// const Contribute = () => {
//     return (
//         <div className="container mt-4">
//             <h1>Contribute</h1>
//             <p>Give back to your alma mater and support the next generation of C-DAC students.</p>

//             <div className="list-group">
//                 <div className="list-group-item">
//                     <h5 className="mb-1">Donations</h5>
//                     <p className="mb-1">Support infrastructure and scholarship funds.</p>
//                 </div>
//                 <div className="list-group-item">
//                     <h5 className="mb-1">Awards & Medals</h5>
//                     <p className="mb-1">Sponsor course topper medals and awards.</p>
//                 </div>
//                 <div className="list-group-item">
//                     <h5 className="mb-1">Internships & MoUs</h5>
//                     <p className="mb-1">Offer internships or sign MoUs for collaboration.</p>
//                 </div>
//                 <div className="list-group-item">
//                     <h5 className="mb-1">Start-ups</h5>
//                     <p className="mb-1">Support alumni start-ups and innovation.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contribute;


import React from "react";
import '../style/contribute.css';

const Contribute = () => {
  const contributeData = [
    {
      id: 1,
      title: "Donations",
      description:
        "Support C-DAC initiatives by contributing towards infrastructure development, research facilities, and student scholarships.",
      icon: "💙",
    },
    {
      id: 2,
      title: "Awards & Medals",
      description:
        "Sponsor awards, medals, and recognitions to motivate academic excellence among students.",
      icon: "🏅",
    },
    {
      id: 3,
      title: "Internships & MoUs",
      description:
        "Collaborate with C-DAC by offering internships, industrial training, or signing MoUs for academic partnerships.",
      icon: "🤝",
    },
    {
      id: 4,
      title: "Start-ups & Innovation",
      description:
        "Support alumni-led start-ups, innovation projects, and entrepreneurship initiatives.",
      icon: "🚀",
    },
  ];

  return (
    <div className="container my-5">
      <div className="contribute-box">

        <h1 className="contribute-title">Contribute to C-DAC</h1>
        <p className="contribute-subtitle">
          Give back to your alma mater and help shape the future of innovation,
          research, and excellence at C-DAC.
        </p>

        <div className="row g-4 mt-4">
          {contributeData.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <div className="contribute-card">
                <div className="contribute-icon">{item.icon}</div>
                <h5 className="contribute-card-title">{item.title}</h5>
                <p className="contribute-card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contribute-footer">
          <button className="btn btn-cdac-orange">
            Get Involved
          </button>
        </div>

      </div>
    </div>
  );
};

export default Contribute;

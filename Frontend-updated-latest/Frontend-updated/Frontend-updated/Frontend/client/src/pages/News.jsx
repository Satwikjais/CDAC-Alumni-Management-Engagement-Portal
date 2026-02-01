// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const News = () => {
//     const [newsList, setNewsList] = useState([]);

//     useEffect(() => {
//         fetchNews();
//     }, []);

//     const fetchNews = async () => {
//         try {
//             const res = await axios.get('/api/news');
//             setNewsList(res.data);
//         } catch (error) {
//             console.error('Error fetching news', error);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h2 className="section-title">News & Updates</h2>
//             <div className="row">
//                 {newsList.map(news => (
//                     <div className="col-md-6 mb-4" key={news.id}>
//                         <div className="card h-100">
//                             {news.image_url && (
//                                 <img src={news.image_url} className="card-img-top" alt={news.title} style={{ height: '200px', objectFit: 'cover' }} />
//                             )}
//                             <div className="card-body">
//                                 <h5 className="card-title">{news.title}</h5>
//                                 <p className="card-text text-muted small">{new Date(news.created_at).toLocaleDateString()}</p>
//                                 <p className="card-text">{news.summary}</p>
//                                 <button className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#newsModal${news.id}`}>Read More</button>
//                             </div>
//                         </div>

//                         {/* Modal */}
//                         <div className="modal fade" id={`newsModal${news.id}`} tabIndex="-1">
//                             <div className="modal-dialog modal-lg">
//                                 <div className="modal-content">
//                                     <div className="modal-header">
//                                         <h5 className="modal-title">{news.title}</h5>
//                                         <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//                                     </div>
//                                     <div className="modal-body">
//                                         {news.image_url && <img src={news.image_url} className="img-fluid mb-3" alt={news.title} />}
//                                         <p style={{ whiteSpace: 'pre-line' }}>{news.content}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default News;

import React from 'react';
import '../style/news.css';

const News = () => {
  const newsList = [
    {
      id: 1,
      title: "India's First Indigenous 64-bit Dual-Core Microprocessor: DHRUV-64",
      summary: "India has quietly made a decisive move in the global semiconductor race with the launch of DHRUV-64...",
      content:
        `India has quietly made a decisive move in the global semiconductor race with the launch of DHRUV-64, the country’s first indigenous 64-bit dual-core microprocessor, developed by CDACINDIA under MeitY. Built on open-source RISC-V architecture, clocked at 1.0 GHz, supporting Linux, and fabricated on 28 nm technology, DHRUV-64 is designed for secure, long-life, mission-critical applications. Rather than targeting consumer devices, it focuses on areas where trust and sovereignty matter most — defence, telecom & 5G, industrial automation, embedded & IoT systems, secure government computing, and research. It strengthens India’s indigenous processor ecosystem alongside SHAKTI, AJIT, VIKRAM, and THEJAS, and stands competitive with global RISC-V and ARM-based embedded solutions.

As a PG Diploma (VLSI) student at ACTS CDAC Hyderabad, this milestone is both inspiring and motivating. DHRUV-64 reflects the larger vision of the India Semiconductor Mission, supported by initiatives like MDP, DIR-V, C2S, and DLI — moving India from being a major chip consumer to a serious chip creator. For students like us, it reinforces the importance of learning RTL design, verification, SoC architecture, and hardware security with a real national impact in mind. This is more than a processor launch — it’s a step toward technological sovereignty and Atmanirbhar Bharat.
#ACTS CDAC Hyderabad #cdac #semiconindia`,
      image_url: "/images/docs/druv microprocessor.jpg",
      date: "2025-12-21",
    },
    {
      id: 2,
      title: "Supporting Partner for ETHRWorld Future Forward – Hyderabad Chapter",
      summary: "We’re glad to be a Supporting Partner for the ETHRWorld Future Forward – Hyderabad Chapter...",
      content:
        `We’re glad to be a Supporting Partner for the ETHRWorld Future Forward – Hyderabad Chapter! 

This event brings together top HR leaders and industry experts to share insights and shape the future of work. 

At ACTS CDAC Hyderabad, we offer 6-month PG Certificate Programs with strong placement opportunities, empowering students to build successful careers in the ICT industry. 

📅 12 December 2025 
📍 Radisson Blu Plaza, Hyderabad 
📌 Come meet us at Booth No. 6

Looking forward to meaningful conversations, impactful insights, stronger industry connections, and a more inclusive tomorrow.`,
      image_url: "/images/docs/supporting partner.jpg",
      date: "2025-12-12",
    },
    {
      id: 3,
      title: "Celebrating Our Toppers – February 2025 Batch",
      summary: "We are proud to celebrate the outstanding achievements of our brilliant students...",
      content:
        `We are proud to celebrate the outstanding achievements of our brilliant students who have excelled in their respective PG Diploma courses at ACTS CDAC Hyderabad – 𝗙𝗲𝗯𝗿𝘂𝗮𝗿𝘆 𝟮𝟬𝟮𝟱 𝗕𝗮𝘁𝗰𝗵 🌟

🏆 Mohammed Faiz – 𝗣𝗚-𝗗𝗔𝗖
🏆 Prabhanshu Chaturvedi – 𝗣𝗚-𝗗𝗔𝗦𝗦𝗗
🏆 Mamidi Bhanu Prasad – 𝗣𝗚-𝗗𝗘𝗦𝗗
🏆 Santvan Rajesh Jagtap – 𝗣𝗚-𝗗𝗕𝗗𝗔

👏 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 to our toppers for their dedication, hard work, and exceptional performance. You are an inspiration for future batches to aim higher and achieve excellence!`,
      image_url: "/images/docs/Topper.jpg",
      date: "2025-02-28",
    },
    {
      id: 4,
      title: "Placement Success: PG-DESD February 2025 Batch",
      summary: "Congratulations to our February 2025 Batch PG-DESD students on their successful placements...",
      content:
        `𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗼 𝗼𝘂𝗿 𝗙𝗲𝗯𝗿𝘂𝗮𝗿𝘆 𝟮𝟬𝟮𝟱 𝗕𝗮𝘁𝗰𝗵 𝗣𝗚-𝗗𝗘𝗦𝗗 𝘀𝘁𝘂𝗱𝗲𝗻𝘁𝘀 𝗼𝗻 𝘁𝗵𝗲𝗶𝗿 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗽𝗹𝗮𝗰𝗲𝗺𝗲𝗻𝘁𝘀.

We are proud of their achievements and wish them great success in their careers. Their dedication and hard work have paved the way for a bright future ahead!

At ACTS CDAC Hyderabad, we are committed to shaping careers and building bright futures.`,
      image_url: "/images/docs/pgdesd feb25 successfull place2.jpg",
      date: "2025-02-25",
    },
    {
      id: 5,
      title: "Placement Success: PG-DAC February 2025 Batch",
      summary: "Congratulations to our February 2025 Batch PG-DAC students on their successful placements...",
      content:
        `𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗼 𝗼𝘂𝗿 𝗙𝗲𝗯𝗿𝘂𝗮𝗿𝘆 𝟮𝟬𝟮𝟱 𝗕𝗮𝘁𝗰𝗵 𝗣𝗚-𝗗𝗔𝗖 𝘀𝘁𝘂𝗱𝗲𝗻𝘁𝘀 𝗼𝗻 𝘁𝗵𝗲𝗶𝗿 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗽𝗹𝗮𝗰𝗲𝗺𝗲𝗻𝘁𝘀.

We are proud of their achievements and wish them great success in their careers. Their dedication and hard work have paved the way for a bright future ahead!

At ACTS CDAC Hyderabad, we are committed to shaping careers and building bright futures.`,
      image_url: "/images/docs/pgdac feb25 successfull place.jpg",
      date: "2025-03-5",
    },
    {
      id: 6,
      title: "Placement Success: PG-DAC February 2025 Batch",
      summary: "Congratulations to our February 2025 Batch PG-DAC students on their successful placements...",
      content:
        `𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗼 𝗼𝘂𝗿 𝗙𝗲𝗯𝗿𝘂𝗮𝗿𝘆 𝟮𝟬𝟮𝟱 𝗕𝗮𝘁𝗰𝗵 𝗣𝗚-𝗗𝗔𝗖 𝘀𝘁𝘂𝗱𝗲𝗻𝘁𝘀 𝗼𝗻 𝘁𝗵𝗲𝗶𝗿 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗽𝗹𝗮𝗰𝗲𝗺𝗲𝗻𝘁𝘀.

We are proud of their achievements and wish them great success in their careers. Their dedication and hard work have paved the way for a bright future ahead!

At ACTS CDAC Hyderabad, we are committed to shaping careers and building bright futures.`,
      image_url: "/images/docs/pgdac feb25 successfull place3.jpg",
      date: "2025-02-15",
    },
  ];


  return (
    <div className="container my-5">
      <h2 className="news-title">News & Updates</h2>

      <div className="row g-4">
        {newsList.map(news => (
          <div className="col-md-6 col-lg-4" key={news.id}>
            <div className="card h-100 news-card">

              <div className="news-img-wrapper">
                <img src={news.image_url} className="card-img-top" alt={news.title} />
                <span className="news-date">
                  {new Date(news.date).toLocaleDateString()}
                </span>
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="news-card-title">{news.title}</h5>
                <p className="news-summary">{news.summary}</p>

                <button
                  className="btn btn-cdac-orange mt-auto"
                  data-bs-toggle="modal"
                  data-bs-target={`#newsModal${news.id}`}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* MODAL */}
            <div className="modal fade" id={`newsModal${news.id}`} tabIndex="-1">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header news-modal-header">
                    <h5 className="modal-title">{news.title}</h5>
                    <button className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                  </div>
                  <div className="modal-body">
                    <img src={news.image_url} className="img-fluid mb-3 rounded" alt="" />
                    <p>{news.content}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default News;


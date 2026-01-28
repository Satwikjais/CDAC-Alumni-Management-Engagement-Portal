// import React from 'react';
// import LogoStrip from "../components/LogoStrip";

// const Blog = () => {
//   const thumbStyle = { width: '115px', height: '70px', objectFit: 'cover' };

//   return (
//     <div className="testimonial-page">
//       {/* ================= HERO SECTION (matches Testimonials) ================= */}
//       <div className="testimonial-hero">
//         <div className="testimonial-hero-content">
//           <h1>Blog</h1>

//           <div className="breadcrumb-pill">
//             <i className="bi bi-house-door"></i>
//             <span>🏠 /</span>
//             <span>Blog</span>
//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN CONTENT ================= */}
//       <div className="container mt-4">
//         <h1 className="section-title">Blog</h1>
//         <p className="text-muted">
//           C-DAC as a pioneering organisation in Information Technology and electronics has committed itself to broaden the horizons of the present areas in Information Technology domain as well as explore and engage in the avant-garde visionary areas. We also resonate with the idea of disseminating the knowledge and awareness of how technology can benefit society at large by making their lives easy and conducive. Publishing blogs is another endeavour leading us to that objective.
//         </p>

//         <div className="accordion mt-4" id="blogAccordion">
//           {/* Category: Blockchain */}
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingBlockchain">
//               <button
//                 className="accordion-button"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseBlockchain"
//                 aria-expanded="true"
//                 aria-controls="collapseBlockchain"
//                 style={{ backgroundColor: '#eef7ff' }}
//               >
//                 <strong>Blockchain</strong>
//               </button>
//             </h2>

//             <div id="collapseBlockchain" className="accordion-collapse collapse show" aria-labelledby="headingBlockchain" data-bs-parent="#blogAccordion">
//               <div className="accordion-body p-0">
//                 <div className="list-group list-group-flush">
//                   <a
//                     href="https://www.cdac.in/index.aspx?id=blog_blockchain"
//                     className="list-group-item list-group-item-action d-flex align-items-start py-3"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img
//                       src="/images/docs/blog_blockchain.jpeg"
//                       alt="Blockchain 1"
//                       style={thumbStyle}
//                       className="rounded me-3 d-none d-sm-block"
//                       onError={(e) => (e.target.src = '/images/docs/index.png')}
//                     />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><span className="text-primary">Blockchain – What's the hype about?</span></h5>
//                       <p className="mb-1 text-muted">Blockchain has been creating a lot of buzz for being the technology behind the "magic beans" (Bitcoins). So let's understand the hype behind it.</p>
//                       <small className="text-muted">3 days ago</small>
//                     </div>
//                   </a>

//                   <hr className="my-0" />

//                   <a href="#" className="list-group-item list-group-item-action d-flex align-items-start py-3">
//                     <img src="/images/docs/blog_blockchain1.jpeg" alt="Blockchain 2" style={thumbStyle} className="rounded me-3 d-none d-sm-block" />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><a href="https://www.cdac.in/index.aspx?id=blog_blockchain_exp_CFS" className="text-primary text-decoration-none">Blockchain Explained – Concept, Function and Security</a></h5>
//                       <p className="mb-1 text-muted">A primer on how blockchain works, consensus and security aspects to be aware of.</p>
//                       <small className="text-muted">1 week ago</small>
//                     </div>
//                   </a>

//                   <hr className="my-0" />

//                   <a href="#" className="list-group-item list-group-item-action d-flex align-items-start py-3">
//                     <img src="/images/docs/blog_blockchain2.jpeg" alt="Blockchain 3" style={thumbStyle} className="rounded me-3 d-none d-sm-block" />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><a href="https://www.cdac.in/index.aspx?id=blog_blockchain_benefits" className="text-primary text-decoration-none">Benefits of Blockchain that can Transform Businesses</a></h5>
//                       <p className="mb-1 text-muted">The market of blockchain is evolving rapidly and the reason is its ability to provide some prodigious benefits for businesses.</p>
//                       <small className="text-muted">2 weeks ago</small>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Category: Digital Signatures (e-Sign) */}
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingEsign">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseEsign"
//                 aria-expanded="false"
//                 aria-controls="collapseEsign"
//                 style={{ backgroundColor: '#eaf3ff', border: '1px solid #d6e8ff' }}
//               >
//                 <strong>Digital Signatures (e‑Sign)</strong>
//               </button>
//             </h2>

//             <div id="collapseEsign" className="accordion-collapse collapse" aria-labelledby="headingEsign" data-bs-parent="#blogAccordion">
//               <div className="accordion-body p-0">
//                 <div className="list-group list-group-flush">
//                   <a href="#" className="list-group-item list-group-item-action d-flex align-items-start py-4">
//                     <img src="/images/docs/digital.jpeg" alt="Digital Sign 1" style={{ width: '95px', height: '60px', objectFit: 'cover' }} className="rounded me-3 d-none d-sm-block" />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><a href="https://www.cdac.in/index.aspx?id=blog_e-sign" className="text-primary text-decoration-none">How Digital Signatures are The Future of Document Authentication?</a></h5>
//                       <p className="mb-1 text-muted">The digital signature market is expected to grow manifolds with various sectors adopting this advanced practice of authentication which is faster, cheaper and secure, but how?</p>
//                     </div>
//                   </a>

//                   <hr className="my-0" />

//                   <a href="#" className="list-group-item list-group-item-action d-flex align-items-start py-4">
//                     <img src="/images/docs/digital1.jpeg" alt="Digital Sign 2" style={{ width: '95px', height: '60px', objectFit: 'cover' }} className="rounded me-3 d-none d-sm-block" />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><a href="https://www.cdac.in/index.aspx?id=blog_e-hastakshar" className="text-primary text-decoration-none">e-Hastakshar: A Secure and Convenient Approach to Digital Signing.</a></h5>
//                       <p className="mb-1 text-muted">With the countless number of business transactions and document exchange happening over the internet today, who doesn’t need a secure, reliable and legal method of signing and authenticating documents?</p>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Category: Pioneering Contributions (UPDATED) */}
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingPioneer">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapsePioneer"
//                 aria-expanded="false"
//                 aria-controls="collapsePioneer"
//                 style={{ backgroundColor: '#eaf3ff', border: '1px solid #d6e8ff' }}
//               >
//                 <strong>Pioneering Contributions in National Initiatives</strong>
//               </button>
//             </h2>

//             <div id="collapsePioneer" className="accordion-collapse collapse" aria-labelledby="headingPioneer" data-bs-parent="#blogAccordion">
//               <div className="accordion-body p-0">
//                 <div className="list-group list-group-flush">
//                   <a href="#" className="list-group-item list-group-item-action d-flex align-items-start py-4">
//                     <img src="/images/docs/pioneering.jpeg" alt="Mobility Card" style={{ width: '110px', height: '60px', objectFit: 'cover' }} className="rounded me-3 d-none d-sm-block" />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><a href="https://www.cdac.in/index.aspx?id=blog_ni_onoc" className="text-primary text-decoration-none">National Common Mobility Card - A Single Card for a Gamut of Digital Transactions</a></h5>
//                       <p className="mb-1 text-muted">Imagine the convenience of carrying just one card which can take care of both your banking and transport requirements. It could be used at transport vendors and for other merchant payments with equal ease.</p>
//                     </div>
//                   </a>

//                   <hr className="my-0" />

//                   <a href="#" className="list-group-item list-group-item-action d-flex align-items-start py-4">
//                     <img src="/images/docs/pioneering1.jpeg" alt="Emergency Response" style={{ width: '110px', height: '60px', objectFit: 'cover' }} className="rounded me-3 d-none d-sm-block" />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><a href="https://www.cdac.in/index.aspx?id=blog_ni_erss" className="text-primary text-decoration-none">Emergency Response Support System: A big step in reaching out to the distressed</a></h5>
//                       <p className="mb-1 text-muted">A unified emergency response number was the need of the hour not only to end the confusion amongst distress callers but to make the system faster and efficient.</p>
//                     </div>
//                   </a>

//                   <hr className="my-0" />

//                   <a href="#" className="list-group-item list-group-item-action d-flex align-items-start py-4">
//                     <img src="/images/docs/pioneering2.jpeg" alt="e-Pramaan" style={{ width: '110px', height: '60px', objectFit: 'cover' }} className="rounded me-3 d-none d-sm-block" />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><a href="https://www.cdac.in/index.aspx?id=blog_ni_e-pramaan" className="text-primary text-decoration-none">e-Pramaan: A National Authentication Service along with Aadhaar</a></h5>
//                       <p className="mb-1 text-muted">Here comes a multifactor centralized authentication mechanism to provide a standard based highly secure identity management system for the integrated services.</p>
//                     </div>
//                   </a>

//                   <hr className="my-0" />

//                   <a href="#" className="list-group-item list-group-item-action d-flex align-items-start py-4">
//                     <img src="/images/docs/pioneering3.jpeg" alt="m-Consultation" style={{ width: '110px', height: '60px', objectFit: 'cover' }} className="rounded me-3 d-none d-sm-block" />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><a href="https://www.cdac.in/index.aspx?id=blog_ni_m-Consultation" className="text-primary text-decoration-none">m-Consultation through e-Sushrut Integrated Mobile App</a></h5>
//                       <p className="mb-1 text-muted">In light of the current crisis where the greater challenge is to contain the pandemic through social distancing and being indoors, m-Consultation has become the need of the hour.</p>
//                     </div>
//                   </a>

//                   <hr className="my-0" />

//                   <a href="#" className="list-group-item list-group-item-action d-flex align-items-start py-4">
//                     <img src="/images/docs/pioneering4.jpeg" alt="Central Dashboard" style={{ width: '110px', height: '60px', objectFit: 'cover' }} className="rounded me-3 d-none d-sm-block" />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><a href="https://www.cdac.in/index.aspx?id=blog_ni_central_dashboard" className="text-primary text-decoration-none">Central Dashboard: Performance Indicator of Drugs Supply Chain at National Level in MoHFW, GoI</a></h5>
//                       <p className="mb-1 text-muted">A centralized platform to manage the Drugs and Vaccine Distribution Management System operating at the state level will improve transparency, increase chances of availability at the right time and minimize wastage.</p>
//                     </div>
//                   </a>

//                   <hr className="my-0" />

//                   <a href="#" className="list-group-item list-group-item-action d-flex align-items-start py-4">
//                     <img src="/images/docs/pioneering5.png" alt="e-RaktKosh" style={{ width: '110px', height: '60px', objectFit: 'cover' }} className="rounded me-3 d-none d-sm-block" />
//                     <div className="flex-grow-1">
//                       <h5 className="mb-1"><a href="https://www.cdac.in/index.aspx?id=blog_ni_e-RaktKosh" className="text-primary text-decoration-none">e-RaktKosh (Centralized Blood Bank Management System)</a></h5>
//                       <p className="mb-1 text-muted">C‑DAC’s e‑RaktKosh is an endeavour to maintain the uninterrupted flow of vital blood-related services across the country.</p>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-4">
//           <a href="#" className="text-decoration-none"> </a>
//         </div>
//       </div>
//       {/* GOVERNMENT LOGOS */}
//               <LogoStrip />
//     </div>
//   );
// };

// export default Blog;


import React from "react";

import '../style/blog.css';

const Blog = () => {
  return (
    <div className="testimonial-page">
      {/* ================= HERO SECTION (matches Testimonials) ================= */}
       <div className="testimonial-hero">
         <div className="testimonial-hero-content">
           <h1>Blog</h1>

           <div className="breadcrumb-pill">
             <i className="bi bi-house-door"></i>
             <span>/</span>
             <span>Blog</span>
           </div>
         </div>
       </div>

      {/* CONTENT */}
      <div className="container my-">
        <div className="blog-box">

          <h2 className="section-title">C-DAC Blog</h2>
          <p className="blog-intro">
            C-DAC, as a pioneering organization in Information Technology and
            Electronics, actively shares insights, innovations, and national
            initiatives through its blogs—aimed at spreading awareness and
            empowering society through technology.
          </p>

          <div className="accordion blog-accordion mt-4" id="blogAccordion">

            {/* BLOCKCHAIN */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#blockchain">
                  Blockchain
                </button>
              </h2>
              <div id="blockchain" className="accordion-collapse collapse show" data-bs-parent="#blogAccordion">
                <div className="accordion-body">
                  <BlogItem
                    img="/images/docs/blog_blockchain.jpeg"
                    title="Blockchain – What's the hype about?"
                    desc="Understanding why blockchain has created a buzz beyond cryptocurrencies."
                    link="https://www.cdac.in/index.aspx?id=blog_blockchain"
                  />
                  <BlogItem
                    img="/images/docs/blog_blockchain1.jpeg"
                    title="Blockchain Explained – Concept, Function and Security"
                    desc="A primer on blockchain fundamentals, security and consensus."
                    link="https://www.cdac.in/index.aspx?id=blog_blockchain_exp_CFS"
                  />
                  <BlogItem
                    img="/images/docs/blog_blockchain2.jpeg"
                    title="Benefits of Blockchain that can Transform Businesses"
                    desc="How blockchain is reshaping modern enterprises."
                    link="https://www.cdac.in/index.aspx?id=blog_blockchain_benefits"
                  />
                </div>
              </div>
            </div>

            {/* DIGITAL SIGN */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#esign">
                  Digital Signatures (e-Sign)
                </button>
              </h2>
              <div id="esign" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <BlogItem
                    img="/images/docs/digital.jpeg"
                    title="How Digital Signatures are the Future of Authentication?"
                    desc="Why e-Sign is becoming essential for secure documentation."
                    link="https://www.cdac.in/index.aspx?id=blog_e-sign"
                  />
                  <BlogItem
                    img="/images/docs/digital1.jpeg"
                    title="e-Hastakshar: Secure Digital Signing"
                    desc="A legal, reliable and convenient approach to digital signing."
                    link="https://www.cdac.in/index.aspx?id=blog_e-hastakshar"
                  />
                </div>
              </div>
            </div>

            {/* NATIONAL INITIATIVES */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#national">
                  Pioneering National Initiatives
                </button>
              </h2>
              <div id="national" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <BlogItem
                    img="/images/docs/pioneering.jpeg"
                    title="National Common Mobility Card"
                    desc="One card for banking and transport transactions."
                    link="https://www.cdac.in/index.aspx?id=blog_ni_onoc"
                  />
                  <BlogItem
                    img="/images/docs/pioneering1.jpeg"
                    title="Emergency Response Support System"
                    desc="A unified emergency number for faster help."
                    link="https://www.cdac.in/index.aspx?id=blog_ni_erss"
                  />
                  <BlogItem
                    img="/images/docs/pioneering5.png"
                    title="e-RaktKosh – Centralized Blood Bank System"
                    desc="Ensuring uninterrupted blood services nationwide."
                    link="https://www.cdac.in/index.aspx?id=blog_ni_e-RaktKosh"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
};

const BlogItem = ({ img, title, desc, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="blog-item">
    <img src={img} alt={title} onError={(e) => e.target.style.display = "none"} />
    <div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  </a>
);

export default Blog;

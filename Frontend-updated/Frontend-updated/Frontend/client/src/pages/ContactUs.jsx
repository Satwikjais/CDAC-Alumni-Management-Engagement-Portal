import React, { useEffect } from "react";
// Assuming AOS might be initialized globally, but if not, we leave data-aos attributes as requested.

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* HERO SECTION */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <div className="breadcrumb-pill">
            <i className="bi bi-house-door"></i>
            <span>/ Contact Us</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container contact-container my-5">
        <div className="row justify-content-center">

          {/* C-DAC Corporate Office */}
          <div className="col-md-12 pb-5" data-aos="fade-right" data-aos-delay="200">
            <div className="card text-center">
              <div className="col-md-12">
                <div className="card-header fs-5">
                  <strong>C-DAC Corporate Office</strong>
                </div>

                <div className="card-body">
                  <h5 className="card-title">Centre for Development of Advanced Computing</h5>
                  <p className="card-text">
                    Pune University Campus, Ganesh Khind<br />
                    Pune - 411 007<br />
                    Maharashtra (India)<br />
                    Phone:+91-20-2570-4100, Fax: +91-20-2569 4004
                  </p>
                  <p className="mt-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60519.92126355775!2d73.7538253582031!3d18.551705799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3cae807ab1%3A0xf7a781596496f5c8!2sC-DAC-Office!5e0!3m2!1sen!2sin!4v1663569512560!5m2!1sen!2sin"
                      title="C-DAC Pune University Campus Navigation Map"
                      width="98%"
                      height="300"
                      className="border border-white shadow"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </p>
                  <span id="BL"></span><span id="CH"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Hyderabad Office */}
          <div className="col-md-12 pb-5" data-aos="fade-right" data-aos-delay="200">
            <div className="card text-center">
              <div className="col-md-12">
                <div className="card-header fs-5">
                  <strong>Hyderabad</strong>
                </div>

                <div className="card-body">
                  <h6><strong>Centre for Development of Advanced Computing</strong></h6>
                  <p className="card-text">
                    Plot No. 6 &amp; 7, Hardware Park,<br />
                    Sy No. 1/1, Srisailam Highway,<br />
                    Pahadi Shareef Via (Keshavagiri Post) <br />
                    Hyderabad - 501510 -
                    Telangana (India)<br />
                    Phone:+91-9100034446/7/8 /
                    Fax: +91-9100034450
                  </p>
                  <p className="mt-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.5625316442492!2d78.47306195070504!3d17.239998988109065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba57e67a2bc25%3A0xc0d5031672bc95cd!2sCentre%20for%20Development%20of%20Advanced%20Computing!5e0!3m2!1sen!2sin!4v1663568866871!5m2!1sen!2sin"
                      title="C-DAC Hyderabad Navigation Map"
                      allowFullScreen
                      width="98%"
                      height="300"
                      className="shadow border border-white"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p className="small">
                            C-DAC, Hyderabad<br />
                            Plot No. 6 &amp; 7, Hardware Park,<br />
                            Sy No. 1/1, Srisailam Highway,<br />
                            Pahadi Shareef Via (Keshavagiri Post) <br />
                            Hyderabad - 501510 -
                            Telangana (India)<br />
                            Phone:+91-9100034446/7/8 /
                            Fax: +91-9100034450
                        </p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.5625316442492!2d78.47306195070504!3d17.239998988109065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba57e67a2bc25%3A0xc0d5031672bc95cd!2sCentre%20for%20Development%20of%20Advanced%20Computing!5e0!3m2!1sen!2sin!4v1663568866871!5m2!1sen!2sin"
                            title="C-DAC Hyderabad Navigation Map"
                            allowFullScreen
                            width="98%"
                            height="200"
                            className="shadow border border-white mt-2"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ borderRadius: '4px' }}
                        ></iframe>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="small text-start d-inline-block ps-0">
                            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                            <li><a href="/members" className="text-white text-decoration-none">Alumni Directory</a></li>
                            <li><a href="/news" className="text-white text-decoration-none">News</a></li>
                            <li><a href="/events" className="text-white text-decoration-none">Events</a></li>
                            <li><a href="/gallery" className="text-white text-decoration-none">Gallery</a></li>
                            <li><a href="/jobs" className="text-white text-decoration-none">Jobs & Careers</a></li>
                            <li><a href="/blog" className="text-white text-decoration-none">Blog</a></li>
                            <li><a href="/contribute" className="text-white text-decoration-none">Contribute</a></li>
                            <li><a href="/engage" className="text-white text-decoration-none">Engage</a></li>
                            <li><a href="/testimonials" className="text-white text-decoration-none">Testimonials</a></li>
                            <li><a href="/contact-us" className="text-white text-decoration-none">Contact Us</a></li>
                            <li><a href="/register" className="text-white text-decoration-none">Register</a></li>
                            <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <div className="d-inline-flex flex-column gap-2 text-start">
                            <a href="https://www.facebook.com/actscdachyderabad/" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                                <i className="bi bi-facebook me-2"></i> Facebook
                            </a>
                            <a href="https://in.linkedin.com/company/actscdachyderabad" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                                <i className="bi bi-linkedin me-2"></i> LinkedIn
                            </a>
                            <a href="https://www.instagram.com/acts.cdac.hyderabad/" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                                <i className="bi bi-instagram me-2"></i> Instagram
                            </a>
                            <a href="https://x.com/cdacindia/status/1449976867939700739" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                                <i className="bi bi-twitter-x me-2"></i> X
                            </a>
                            <a href="https://www.youtube.com/channel/UCtfiDrmcYpyCAwANUZIp4uQ/posts" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                                <i className="bi bi-youtube me-2"></i> YouTube
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="bg-white" />
                <span className="small text-white-50">© 2025 C-DAC Hyderabad Alumni Association. All Rights Reserved.</span><br />
                <span className="small text-white-50">Alumni Website providers: CDAC</span>
            </div>
        </footer>
    );
};

export default Footer;

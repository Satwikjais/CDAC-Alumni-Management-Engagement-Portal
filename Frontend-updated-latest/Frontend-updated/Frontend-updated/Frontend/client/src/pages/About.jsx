import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="about-container container-fluid parallax-about bh-26">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-content">
                    <div className="hero-row">
                        <h3 className="banner-title">About C-DAC</h3>
                    </div>

                    <div className="breadcrumb-wrapper">
                        <div className="breadcrumb-pill">
                            <span className="home-icon">🏠</span>
                            <span>/</span>
                            <span>About C-DAC</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* (banner removed) hero uses full-width background image via CSS */}

            {/* About Content */}
            <div className="container-fluid px-5 py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="about-section-title">ABOUT US</h2>

                        <p className="about-intro">
                            Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the Ministry of Electronics and Information Technology (MeitY) for carrying out R&D in IT, Electronics and associated areas. Different areas of C-DAC, had originated at different times, many of which came out as a result of identification of opportunities.
                        </p>

                        <ul className="about-list">
                            <li>
                                The setting up of C-DAC in 1988 itself was to built Supercomputers in context of denial of import of Supercomputers by USA. Since then C-DAC has been undertaking building of multiple generations of Supercomputer starting from PARAM with 1 GF in 1988.
                            </li>
                            <li>
                                Almost at the same time, C-DAC started building Indian Language Computing Solutions with setting up of GIST group (Graphics and Intelligence based Script Technology); National Centre for Software Technology (NCST) set up in 1985 had also initiated work in Indian Language Computing around the same period.
                            </li>
                            <li>
                                Electronic Research and Development Centre of India (ER&DCI) with various constituents starting as adjunct entities of various State Electronic Corporations, had been brought under the hold of Department of Electronics and Telecommunications (now MeitY) in around 1988. They were focusing on various aspects of applied electronics, technology and applications.
                            </li>
                            <li>
                                With the passage of time as a result of creative ecosystem that got set up in C-DAC, more areas such as Health Informatics, etc., got created; while right from the beginning the focus of NCST was on Software Technologies; similarly C-DAC started its education & training activities in 1994 as a spin-off with the passage of time, it grew to a large efforts to meet the growing needs of Indian Industry for finishing schools.
                            </li>
                        </ul>

                        <p className="about-intro mt-3">
                            C-DAC has today emerged as a premier R&D organization in IT&E (Information Technologies and Electronics) in the country working on strengthening national technological capabilities in the context of global developments in the field and responding to change in the market need in selected foundation areas. In that process, C-DAC represents a unique facet working in close junction with MeitY to realize nation’s policy and pragmatic interventions and initiatives in Information Technology. As an institution for high-end Research and Development (R&D), C-DAC has been at the forefront of the Information Technology (IT) revolution, constantly building capacities in emerging/enabling technologies and innovating and leveraging its expertise, caliber, skill sets to develop and deploy IT products and solutions for different sectors of the economy, as per the mandate of its parent, the Ministry of Electronics and Information Technology, Ministry of Communications and Information Technology, Government of India and other stakeholders including funding agencies, collaborators, users and the market-place.
                        </p>

                        <div className="about-sections mt-5">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <h3 className="about-subsection-title">History</h3>
                                    <p>C-DAC has a rich history spanning over three decades of contributions to India's technology landscape. From pioneering supercomputer development to advancing software solutions and digital infrastructure, C-DAC has been instrumental in building India's technological capabilities.</p>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <h3 className="about-subsection-title">Education & Training</h3>
                                    <p>C-DAC's Education and Training programmes are aimed at creating skilled manpower in the country by providing quality training programmes in the field of Electronics and ICT. We conduct various certification and diploma programs to meet industry requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default About;

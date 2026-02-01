import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../style/navbar.css";
const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            localStorage.removeItem('user');
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <header>
            {/* Top Bar */}
            <div className="top-bar py-2">
                <div className="container-fluid px-3 d-flex justify-content-between align-items-center">

                    {/* LOGO + TEXT */}
                    {/* LOGO + TEXT */}
                    <div className="logo-text d-flex flex-column flex-md-row align-items-center">
                        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <img
                                src="/images/docs/logo.png"
                                alt="C-DAC Logo"
                                className="cdac-logo"
                                style={{ height: '55px', cursor: 'pointer' }}
                            />
                        </Link>

                        {/* Divider only on desktop */}
                        <div className="brand-divider mx-3 d-none d-md-block"></div>

                        {/* BRAND TEXT */}
                        <div className="d-flex flex-column align-items-start mt-2 mt-md-0">
                            <span className="brand-title">ACTS CDAC Hyderabad</span>
                            <span className="brand-subtitle">Alumni Association</span>
                        </div>
                    </div>

                    {/* FOLLOW + AUTH */}
                    <div>
                        <div className="d-flex flex-column align-items-end gap-1">
                            {/* Row 1: Socials */}
                            <div className="d-flex align-items-center justify-content-end gap-2">
                                <small className="fw-bold text-dark text-uppercase d-none d-sm-block" style={{ letterSpacing: '1px' }}>Follow Us:</small>
                                <a href="https://www.facebook.com/actscdachyderabad/" target="_blank" rel="noreferrer" className="btn btn-facebook-nav social-follow-btn text-center" style={{ width: '110px' }}>
                                    <i className="bi bi-facebook"></i> Facebook
                                </a>
                                <a href="https://in.linkedin.com/company/actscdachyderabad" target="_blank" rel="noreferrer" className="btn btn-linkedin-nav social-follow-btn text-center" style={{ width: '110px' }}>
                                    <i className="bi bi-linkedin"></i> LinkedIn
                                </a>
                            </div>

                            {/* Row 2: User Actions (Aligned under Socials) */}
                            {user && (
                                <div className="d-flex align-items-center justify-content-end gap-2">
                                    <small className="text-muted me-1 d-none d-sm-block" style={{ fontSize: '0.85rem' }}>Welcome, {user.name.split(' ')[0]}</small>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* NAVIGATION BAR */}
            <nav className="navbar navbar-expand-lg navbar-custom p-0">
                <div className="container-fluid px-0">

                    {/* MOBILE TOGGLER */}
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileMenu"
                        aria-controls="mobileMenu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* DESKTOP MENU  */}
                    <div className="collapse navbar-collapse d-none d-lg-flex">
                        <ul className="navbar-nav nav-equal w-100 flex-wrap flex-lg-nowrap">
                            <li className="nav-item"><Link className="nav-link" to="/">Home Page</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/members">Members</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/news">Newsroom</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contribute">Contribute</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/testimonials">Alumni Testimonials</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/engage">Engage</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    More
                                </a>
                                <ul className="dropdown-menu">
                                    {user && user.role === 'admin' && (
                                        <li><Link className="dropdown-item" to="/admin">Admin Dashboard</Link></li>
                                    )}
                                    <li><Link className="dropdown-item" to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* OFFCANVAS MENU  MOBILE */}
                    <div
                        className="offcanvas offcanvas-start d-lg-none"
                        tabIndex="-1"
                        id="mobileMenu"
                        aria-labelledby="mobileMenuLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="fw-bold text-primary" id="mobileMenuLabel">C-DAC Alumni</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body p-0">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item"><Link className="nav-link text-dark" to="/">Home Page</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/members">Members</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/news">Newsroom</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/testimonials">Alumni Testimonials</Link></li>
                                {user?.role === "admin" && (
                                    <li className="nav-item"><Link className="nav-link text-danger" to="/admin">Admin Dashboard</Link></li>
                                )}
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>

        </header>
    );
};

export default Navbar;

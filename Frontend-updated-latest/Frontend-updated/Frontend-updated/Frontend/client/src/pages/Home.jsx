import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Select, DatePicker, ConfigProvider, Card, Empty, Pagination } from 'antd'; // Added imports
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../style/home.css';
import * as bootstrap from "bootstrap";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Home = () => {
  const navigate = useNavigate();

  // Directory Search State
  const [directoryFilters, setDirectoryFilters] = useState({
    name: "",
    year: null,
    course: null,
    company: ""
  });

  
  const [alumniList, setAlumniList] = useState([]);
  const [loading, setLoading] = useState(false);





  // Handler for controlled input changes in alumni directory
  const handleDirectoryAntChange = (key, value) => {
    setDirectoryFilters(prev => ({ ...prev, [key]: value }));
    setDirectoryPage(1);
  };
  const [directoryMembers, setDirectoryMembers] = useState([]);
  const [directoryPage, setDirectoryPage] = useState(1);
  const [directoryTotalPages, setDirectoryTotalPages] = useState(0);
  const [directoryLoading, setDirectoryLoading] = useState(false);

  // Fetch directory members (restored)
  // const fetchDirectoryMembers = async () => {
  //     //
  //   setDirectoryLoading(true);
  //   try {
  //     // Fetch all alumni from backend
  //     let alumni = await membersAPI.getAlumni();
  //     //
  //     // If backend returns a single object, wrap it in an array
  //     if (alumni && !Array.isArray(alumni)) alumni = [alumni];
  //     let filtered = alumni;
  //     // Filter by name
  //     if (directoryFilters.name) {
  //       const search = directoryFilters.name.toLowerCase();
  //       filtered = filtered.filter(m =>
  //         (m.firstName && m.firstName.toLowerCase().includes(search)) ||
  //         (m.lastName && m.lastName.toLowerCase().includes(search)) ||
  //         (`${m.firstName || ''} ${m.lastName || ''}`.toLowerCase().includes(search))
  //       );
  //     }
  //     // Filter by batch
  //     if (directoryFilters.batch) {
  //       filtered = filtered.filter(m => m.graduationYear === directoryFilters.batch);
  //     }
  //     // Filter by course
  //     if (directoryFilters.course) {
  //       filtered = filtered.filter(m => m.course === directoryFilters.course);
  //     }
  //     // Filter by company
  //     if (directoryFilters.company) {
  //       filtered = filtered.filter(m => m.company && m.company.toLowerCase().includes(directoryFilters.company.toLowerCase()));
  //     }
  //     setDirectoryMembers(filtered);
  //     setDirectoryTotalPages(1);
  //   } catch (err) {
  //     setDirectoryMembers([]);
  //     setDirectoryTotalPages(1);
  //   } finally {
  //     setDirectoryLoading(false);
  //   }
  // };

  // Debounced Auto-Search for Home Page
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDirectoryMembers();
    }, 800);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [directoryFilters, directoryPage]);


  const fetchDirectoryMembers = async () => {
  try {
    setLoading(true);

    const response = await axios.get(
      "http://localhost:8080/api/members/alumni/list"
    );

    let data = response.data;

    // 🔍 Name filter (firstName + lastName)
    if (directoryFilters.name) {
      data = data.filter((item) =>
        `${item.firstName} ${item.lastName}`
          .toLowerCase()
          .includes(directoryFilters.name.toLowerCase())
      );
    }

    // 🎓 Course filter
    if (directoryFilters.course) {
      data = data.filter(
        (item) => item.course === directoryFilters.course
      );
    }

    // 🏢 Company filter
    if (directoryFilters.company) {
      data = data.filter((item) =>
        item.company?.toLowerCase().includes(
          directoryFilters.company.toLowerCase()
        )
      );
    }

    // 📅 Graduation year filter
    if (directoryFilters.year) {
      const selectedYear = dayjs(directoryFilters.year).year();
      data = data.filter(
        (item) => Number(item.graduationYear) === selectedYear
      );
    }

    setAlumniList(data);
  } catch (error) {
    console.error("Failed to fetch alumni", error);
  } finally {
    setLoading(false);
  }
};


  // Carousel manual ID 
  const carouselId = "homeCarousel";

  useEffect(() => {
    const carouselEl = document.getElementById(carouselId);
    let bsCarousel = null;

    if (carouselEl) {
      bsCarousel = new bootstrap.Carousel(carouselEl, {
        interval: 3000,
        ride: "carousel",
        wrap: true,
        pause: false
      });
      bsCarousel.cycle();
    }

    return () => {
      if (bsCarousel) {
        bsCarousel.dispose();
      }
    };
  }, []);

  return (
    <div className="container-fluid px-5 mt-4 home-container">
      {/* HERO SECTION */}
      <div className="row g-4 align-items-stretch">
        {/* Welcome / Carousel */}
        <div className="col-lg-8 col-md-12 d-flex">
          <div className="card newwww hero-card w-100 h-100">
            <div className="card-body newwww d-flex flex-column p-0 h-100">
              <div className="p-4 pb-2">
                <h4 className="fw-bold text-cdac-blue mb-2">
                  Welcome to ACTS CDAC HYDERABAD
                </h4>
                <p >
                  C-DAC Hyderabad has been delivering exceptional human resources
                  to the Electronics & ICT industry for over two decades.
                </p>
              </div>

              <div
                id={carouselId}
                className="carousel slide flex-grow-1"
              >
                <div className="carousel-indicators">
                  <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                {/* Indicators restored as per user request */}
                <div className="carousel-inner h-100">
                  <div className="carousel-item active h-100">
                    <img
                      src="/images/docs/carousel-1.jpg"
                      className="carousel-img d-block w-100 h-100 object-fit-cover"
                      alt="CDAC ACTS"
                      onError={(e) => (e.currentTarget.src = "/images/docs/azadi.png")}
                    />
                  </div>
                  <div className="carousel-item h-100">
                    <img
                      src="/images/docs/carousel-2.jpg"
                      className="carousel-img d-block w-100 h-100 object-fit-cover"
                      alt="Alumni Meet"
                      onError={(e) => (e.currentTarget.src = "/images/docs/azadi.png")}
                    />
                  </div>
                  <div className="carousel-item h-100">
                    <img
                      src="/images/docs/carousel-3.jpg"
                      className="carousel-img d-block w-100 h-100 object-fit-cover"
                      alt="Events"
                      onError={(e) => (e.currentTarget.src = "/images/docs/azadi.png")}
                    />
                  </div>
                  <div className="carousel-item h-100">
                    <img
                      src="/images/docs/carousel-4.jpg"
                      className="carousel-img d-block w-100 h-100 object-fit-cover"
                      alt="Campus"
                      onError={(e) => (e.currentTarget.src = "/images/docs/azadi.png")}
                    />
                  </div>
                  <div className="carousel-item h-100">
                    <img
                      src="/images/docs/carousel-5.jpg"
                      className="carousel-img d-block w-100 h-100 object-fit-cover"
                      alt="Campus 2"
                      onError={(e) => (e.currentTarget.src = "/images/docs/azadi.png")}
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="col-lg-4 col-md-12 d-flex">
          <div className="card newwww login-card w-100 h-100">
            <div className="card-body newwww p-4">
              <h5 className="fw-bold mb-3 text-cdac-blue fs-5">Connect with your classmates</h5>

              <ul className="list-unstyled small mb-3" style={{ fontSize: '0.9rem' }}>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{ color: '#f37021' }}></i> Create your profile</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{ color: '#f37021' }}></i> Post Jobs & Internships</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{ color: '#f37021' }}></i> Share Memories</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{ color: '#f37021' }}></i> Exchange Opportunities</li>
              </ul>

              <div className="d-grid gap-3">
                {/* Facebook */}
                <button className="btn btn-facebook social-btn d-flex align-items-center justify-content-start ps-2 py-2">
                  <div className="icon-box me-2 text-primary" style={{ width: '24px', height: '24px' }}>
                    <FaFacebookF size={14} />
                  </div>
                  <span className="flex-grow-1 text-center me-3 small">Sign in with Facebook</span>
                </button>

                {/* LinkedIn */}
                <button className="btn btn-linkedin social-btn d-flex align-items-center justify-content-start ps-2 py-2">
                  <div className="icon-box me-2" style={{ width: '24px', height: '24px' }}>
                    <FaLinkedinIn size={14} color="#0077b5" />
                  </div>
                  <span className="flex-grow-1 text-center me-3 small">Sign in with LinkedIn</span>
                </button>

                {/* Google */}
                <button className="btn btn-google social-btn d-flex align-items-center justify-content-start ps-2 py-2">
                  <div className="icon-box me-2 bg-white rounded-circle" style={{ width: '24px', height: '24px' }}>
                    <FcGoogle size={14} />
                  </div>
                  <span className="flex-grow-1 text-center me-3 small">Sign in with Google</span>
                </button>


                <Link to="/login" className="btn email-login-btn social-btn d-flex align-items-center justify-content-start ps-2 py-2 text-decoration-none" style={{ marginTop: '0px' }}>
                  <div className="icon-box me-2 text-primary" style={{ width: '24px', height: '24px' }}>
                    <FaEnvelope size={14} color="#003366" />
                  </div>
                  <span className="flex-grow-1 text-center me-3 small">Email Login</span>
                </Link>
                <Link to="/register" className="text-center small register-link mt-2" style={{ fontSize: '0.9rem' }}>
                  New User? Register
                </Link>

                <div className="mt-4 text-center">
                  <div className="avatar-group mb-2">
                    <img src="/images/docs/Student1.png" alt="Alumni" />
                    <img src="/images/docs/Student2.png" alt="Alumni" />
                    <img src="/images/docs/Student3.png" alt="Alumni" />
                    <div className="avatar-more shadow-sm">+2k</div>
                  </div>
                  <p className="small text-muted fw-medium mb-0">
                    Join <span className="text-cdac-blue fw-bold">2,500+</span> connected alumni
                  </p>

                  <div className="mt-3 pt-3 border-top w-75 mx-auto">
                    <p className="text-muted mb-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>ALUMNI WORKING AT</p>
                    <div className="company-icons align-items-center">
                      <img src="/images/docs/logo.png" alt="C-DAC" title="C-DAC India" />
                      <i className="bi bi-google" title="Google"></i>
                      <i className="bi bi-microsoft" title="Microsoft"></i>
                      <i className="bi bi-amazon" title="Amazon"></i>
                      <i className="bi bi-apple" title="Apple"></i>
                      <i className="bi bi-amd" title="AMD"></i>
                      <i className="bi bi-cpu" title="Qualcomm"></i>
                      <i className="bi bi-suit-spade-fill" title="Capgemini"></i>
                      <i className="bi bi-key-fill" title="HotelKey"></i>
                    </div>
                    <p className="text-muted mt-2 mb-0" style={{ fontSize: '0.65rem', fontStyle: 'italic' }}>...and leading organizations worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widgets */}
      <div className="row g-4 mt-1">
        <div className="col-lg-6 col-md-12">
          <div className="card h-100 newwww">
            <div className="card-header newwww">
              <i className="bi bi-briefcase me-2" ></i> Jobs & Internships
            </div>
            <div className="card-body">
              <p>Alumni can share job, internship, and referral opportunities here.</p>
              <Link to="/opportunities" className="btn btn-cdac-orange">
                Share Opportunities
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="card h-100 newwww">
            <div className="card-header newwww" >
              <i className="bi bi-newspaper me-2"></i> News & Updates
            </div>
            <div className="card-body">
              <p>Campus updates & alumni achievements.</p>
              <Link to="/news" className="btn btn-cdac-orange">
                Read News
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Alumni */}
      <div className="row g-4 mt-1">
        <div className="col-md-12">
          <div className="card newwww">
            <div className="card-header newwww">Distinguished Alumni</div>
            <div className="card-body">
              <div className="row g-3">
                {[
                  {
                    name: "Aarav Parihar",
                    role: "Senior Engineer",
                    quote: "C-DAC shaped my professional career.",
                    img: "/images/docs/Student1.png"
                  },
                  {
                    name: "Simar Saniyal",
                    role: "Tech Lead",
                    quote: "The faculty and peers were amazing.",
                    img: "/images/docs/Student2.png"
                  },
                  {
                    name: "Rohan Gupta",
                    role: "Product Manager",
                    quote: "Innovation starts here.",
                    img: "/images/docs/Student3.png"
                  }
                ].map((alum, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <div className="alumni-card p-3 rounded text-center">
                      <img
                        src={alum.img}
                        className="rounded-circle mb-2"
                        alt={alum.name}
                        onError={(e) => (e.currentTarget.src = "/images/docs/pioneering.jpeg")}
                      />
                      <h6>{alum.name}</h6>
                      <small className="text-dark fw-bold">{alum.role}</small>
                      <p className="small mt-2 text-dark">
                        "{alum.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-center mt-4">
                <Link to="/testimonials" className="btn btn-cdac-orange">
                  View All Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Directory Search Section */}
      <div className="row g-4 mt-3 mb-5">
        <div className="col-md-12">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#f37021',
                borderRadius: 6,
                padding: 12,
                colorBorder: '#595959', // Much darker border for high visibility
                controlHeightLG: 48,
              },
              components: {
                Input: {
                  activeBorderColor: '#f37021',
                  hoverBorderColor: '#f37021',
                },
                Select: {
                  colorPrimaryHover: '#f37021',
                },
                DatePicker: {
                  colorPrimaryHover: '#f37021',
                }
              }
            }}
          >
            <div className="card newwww shadow-sm border-0">
              {/* Header styled to match Distinguished Alumni */}
              <div className="card-header newwww">Alumni Directory</div>

              <div className="card-body p-4 bg-light bg-opacity-10">
                <div className="row g-3">
                  {/* Name Search */}
                  <div className="col-lg-3 col-md-6">
                   <Input
  placeholder="Search by Name"
  size="large"
  prefix={<SearchOutlined className="text-muted" />}
  allowClear
  value={directoryFilters.name}
  onChange={(e) =>
    setDirectoryFilters({ ...directoryFilters, name: e.target.value })
  }
/>

                  </div>

                  {/* Batch Year (Calendar) */}
                  <div className="col-lg-3 col-md-6">
                   <DatePicker
  picker="year"
  placeholder="Batch Year"
  style={{ width: "100%" }}
  size="large"
  value={directoryFilters.year}
  onChange={(value) =>
    setDirectoryFilters({ ...directoryFilters, year: value })
  }
/>

                  </div>

                  {/* Course Selection */}
                  <div className="col-lg-3 col-md-6">
                   <Select
  placeholder="Course"
  style={{ width: "100%" }}
  size="large"
  allowClear
  value={directoryFilters.course || undefined}
  onChange={(value) =>
    setDirectoryFilters({ ...directoryFilters, course: value })
  }
>

                      <Select.Option value="PG-DAC">PG-DAC</Select.Option>
                      <Select.Option value="PG-DBDA">PG-DBDA</Select.Option>
                      <Select.Option value="PG-DESD">PG-DESD</Select.Option>
                      <Select.Option value="PG-DITISS">PG-DITISS</Select.Option>
                      <Select.Option value="PG-DVLSI">PG-DVLSI</Select.Option>
                      <Select.Option value="PG-DMC">PG-DMC</Select.Option>
                      <Select.Option value="PG-DASSD">PG-DASSD</Select.Option>
                      <Select.Option value="PG-DIOT">PG-DIOT</Select.Option>
                    </Select>
                  </div>

                  {/* Company Search */}
                  <div className="col-lg-3 col-md-6">
                 <Input
  placeholder="Company"
  size="large"
  allowClear
  value={directoryFilters.company}
  onChange={(e) =>
    setDirectoryFilters({ ...directoryFilters, company: e.target.value })
  }
/>

                  </div>
                </div>

                {/* Search Button (Restored) */}
                <div className="d-flex justify-content-center mt-4">
                  <button
                    className="btn btn-cdac-orange px-5 py-2 rounded"
                    onClick={fetchDirectoryMembers}
                  >
                    Search Alumni <i className="bi bi-search ms-2"></i>
                  </button>
                  
                </div>

                {/* Results Grid (Live Search) */}
                <div className="row g-4 mt-4">
                 <div className="row mt-5">
  {loading && <p className="text-center">Loading...</p>}

  {!loading && alumniList.length === 0 && (
    <p className="text-center text-muted">No alumni found</p>
  )}

  {alumniList.map((alumni) => (
    <div key={alumni.id} className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="fw-bold">
            {alumni.firstName} {alumni.lastName}
          </h5>
          <p className="mb-1"><b>Course:</b> {alumni.course}</p>
          <p className="mb-1"><b>Company:</b> {alumni.company || "N/A"}</p>
          <p className="mb-1">
            <b>Graduation Year:</b> {alumni.graduationYear || "N/A"}
          </p>
          <p className="mb-0 text-muted">{alumni.email}</p>
        </div>
      </div>
    </div>
  ))}
</div>
                   
                 
                </div>

                {/* Pagination (Mini) */}
                {directoryTotalPages > 1 && (
                  <div className="d-flex justify-content-center mt-3">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-secondary" disabled={directoryPage === 1} onClick={() => setDirectoryPage(p => p - 1)}>Prev</button>
                      <span className="btn btn-outline-secondary disabled border-top-0 border-bottom-0">Page {directoryPage}</span>
                      <button className="btn btn-outline-secondary" disabled={directoryPage === directoryTotalPages} onClick={() => setDirectoryPage(p => p + 1)}>Next</button>
                    </div>
                    <div className="ms-3 align-self-center">
                      <Link to="/members" className="small text-primary text-decoration-none fw-bold">View Full Directory &rarr;</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ConfigProvider>
        </div>
      </div>

      {/* Logo Strip removed (now global) */}
    </div>
  );
};

export default Home;

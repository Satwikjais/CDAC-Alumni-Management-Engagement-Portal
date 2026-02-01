import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/careers.css';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [resume, setResume] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('/api/jobs');
      setJobs(res.data);
    } catch (error) {
      console.error('Error fetching jobs', error);
    }
  };

  const handleApply = async (jobId) => {
    if (!user) return alert('Please login to apply');
    if (!resume) return alert('Please select a resume file first');

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      await axios.post(`/api/jobs/${jobId}/apply`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Application Submitted!');
      setResume(null);
    } catch (error) {
      alert(error.response?.data?.message || 'Application Failed');
    }
  };

  return (
    <div className="career-page">

       {/* ========= HERO SECTION ========= */}
<div className="career-hero">
  <div className="career-hero-content">
    <h1>Careers@C-DAC</h1>
    

    <div className="breadcrumb-pill">
       <i className="bi bi-house-door"></i>
      
      <span>/ Careers</span>
    </div>
  </div>
</div>

      {/* ========= MAIN CONTENT ========= */}
      <div className="container career-container">

        <div className="row g-4">

          {/* LEFT INFO CARD */}
          <div className="col-lg-4">
            <div className="career-info-card">
              <img
                src="/images/docs/career.jpg"
                alt="Careers at CDAC"
              />
              <div className="career-info-body">
                <h4>Why Work at C-DAC?</h4>
                <p>
                  C-DAC follows an employee-friendly HR philosophy with strong
                  mentoring, structured induction programs, continuous learning,
                  transparent appraisals and recognition systems.
                </p>
                <p>
                  Join us to work on national-scale projects, advanced research
                  and impactful technologies.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="col-lg-8">
            <div className="row g-4">

              {careerCards.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="career-card">
                    {/* <div className="career-card-icon">{item.icon}</div> */}
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                      {item.external ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-cdac-orange"
                        >
                          Know More →
                        </a>
                      ) : (
                        <button
                          className="btn btn-cdac-orange"
                          onClick={() => navigate(item.link)}
                        >
                          Know More →
                        </button>
                      )}
                  </div>
                </div>
              ))}

            </div>

            {/* ========= ALUMNI OPPORTUNITIES SECTION ========= */}
            <div className="mt-5" id="alumni-jobs-section">
              <div className="row g-4">
                {jobs.length > 0 ? (
                  jobs
                    .filter(job => job.postedByAlumni) // Only show jobs posted by alumni
                    .map(job => (
                      <div className="col-md-6" key={job.id}>
                        <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '12px' }}>
                          <div className="card-body p-4">
                            <h5 className="card-title fw-bold text-primary mb-1">{job.title}</h5>
                            <div className="mb-2">
                              <span className="badge bg-light text-dark border me-2">{job.company}</span>
                              <span className="text-muted small"><i className="bi bi-geo-alt-fill me-1"></i>{job.location}</span>
                            </div>
                            <p className="card-text text-secondary small mb-3">{job.description}</p>
                            {job.apply_link ? (
                              <a href={job.apply_link} target="_blank" rel="noreferrer" className="btn btn-cdac-orange btn-sm w-100">Apply Externally</a>
                            ) : (
                              <div className="input-group input-group-sm mt-3">
                                <input type="file" className="form-control" onChange={(e) => setResume(e.target.files[0])} accept=".pdf,.doc,.docx" />
                                <button className="btn btn-cdac-orange" type="button" onClick={() => handleApply(job.id)}>Apply</button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                ) : null}
              </div>
            </div>

          </div>

        </div>

      </div>


    </div>
  );
};

const careerCards = [
  {
    title: "Jobs",
    desc: "Explore current openings and career opportunities at C-DAC.",
    link: "https://www.cdac.in/index.aspx?id=current_jobs",
    external: true
  },
  {
    title: "Jobs Posted by Alumni",
    desc: "See opportunities posted by C-DAC alumni.",
    link: "/alumni-jobs-list",
    external: false
  },
  {
    title: "Corporate Profile",
    desc: "Learn more about India’s leading multidisciplinary IT organization.",
    link: "https://www.cdac.in/index.aspx?id=CorporateProfile",
    external: true
  },
  {
    title: "Work Environment",
    desc: "Understand C-DAC’s culture, leadership and work ethics.",
    link: "https://www.cdac.in/index.aspx?id=workenv",
    external: true
  },
];

export default Careers;

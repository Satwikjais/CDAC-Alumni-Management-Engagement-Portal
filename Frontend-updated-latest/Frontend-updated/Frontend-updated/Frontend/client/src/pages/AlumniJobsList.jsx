import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/careers.css';

const AlumniJobsList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('/api/opportunities');
        setJobs(res.data.filter(job => (job.postedByRole || '').toLowerCase() === 'alumni'));
      } catch (error) {
        setJobs([]);
      }
      setLoading(false);
    };
    fetchJobs();
  }, []);

  return (
    <div className="container career-container mt-5">
      <h2 className="mb-4">All Jobs Posted by Alumni</h2>
      {loading ? (
        <div>Loading...</div>
      ) : jobs.length === 0 ? (
        <div className="text-center text-muted">No alumni jobs found.</div>
      ) : (
        <div className="row g-4">
          {jobs.map(job => (
            <div className="col-md-6" key={job.id}>
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '12px' }}>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold text-primary mb-1">{job.title}</h5>
                  <div className="mb-2">
                    <span className="badge bg-light text-dark border me-2">{job.company}</span>
                    <span className="text-muted small"><i className="bi bi-geo-alt-fill me-1"></i>{job.location}</span>
                  </div>
                  <p className="card-text text-secondary small mb-3">{job.description}</p>
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noreferrer" className="btn btn-cdac-orange btn-sm w-100">Apply Externally</a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlumniJobsList;

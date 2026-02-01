import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Opportunities = () => {
  const [form, setForm] = useState({
    title: '',
    type: 'Job',
    company: '',
    location: '',
    description: '',
    link: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const user = JSON.parse(localStorage.getItem('user'));
    // Debug: log the full user object and role
    console.log('User object for job posting:', user);
    console.log('User role type:', typeof user.role, 'User role value:', user.role);
    if (!user) {
      setError('You must be logged in to post a job or internship.');
      return;
    }
    let roleString = user.role;
    if (typeof roleString === 'object' && roleString !== null) {
      // If role is an object, try to extract a string value
      roleString = roleString.name || roleString.value || JSON.stringify(roleString);
    }
    if (!roleString || typeof roleString !== 'string') {
      setError('Your user role is missing or invalid. Please log out and log in again, or contact support.');
      return;
    }
    if (roleString.toLowerCase() !== 'alumni') {
      setError('Only alumni can post a job or internship.');
      return;
    }
    try {
      const response = await fetch('/api/opportunities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, postedBy: user.email, postedByRole: user.role })
      });
      if (!response.ok) throw new Error(await response.text());
      // Redirect to alumni jobs list after successful post
      navigate('/alumni-jobs-list');
    } catch (err) {
      setError('Failed to submit opportunity.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Post a Job or Internship</h2>
      {submitted ? (
        <div className="alert alert-success">Opportunity submitted!</div>
      ) : (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" name="title" value={form.title} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <select className="form-select" name="type" value={form.type} onChange={handleChange}>
              <option value="Job">Job</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Company</label>
            <input type="text" className="form-control" name="company" value={form.company} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" name="location" value={form.location} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" value={form.description} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Application Link</label>
            <input type="url" className="form-control" name="link" value={form.link} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default Opportunities;

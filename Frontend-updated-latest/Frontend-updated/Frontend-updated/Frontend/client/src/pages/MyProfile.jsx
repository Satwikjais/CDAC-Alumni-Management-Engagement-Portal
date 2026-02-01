import React, { useState } from 'react';
import '../style/profile.css';

const MyProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user || {};
  });
  const user = form;

  if (!user) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning text-center">
          You are not logged in.
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    setEditMode(false);
  };

  return (
    <div className="container my-5 profile-page">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow profile-card">
            <div className="card-body text-center">
              <img
                src={user.profile_pic || '/images/docs/Student1.png'}
                alt={user.firstName}
                className="rounded-circle mb-3 profile-avatar shadow"
                style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #f37021' }}
                onError={e => (e.target.src = 'https://via.placeholder.com/120')}
              />
              {editMode ? (
                <form onSubmit={handleSave} className="text-start">
                  <div className="mb-2">
                    <label className="form-label fw-bold">First Name</label>
                    <input className="form-control" name="firstName" value={form.firstName || ''} onChange={handleChange} required />
                  </div>
                  <div className="mb-2">
                    <label className="form-label fw-bold">Last Name</label>
                    <input className="form-control" name="lastName" value={form.lastName || ''} onChange={handleChange} required />
                  </div>
                  <div className="mb-2">
                    <label className="form-label fw-bold">Email</label>
                    <input className="form-control" name="email" value={form.email || ''} onChange={handleChange} required type="email" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label fw-bold">Course</label>
                    <input className="form-control" name="course" value={form.course || ''} onChange={handleChange} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label fw-bold">Batch</label>
                    <input className="form-control" name="batch" value={form.batch || ''} onChange={handleChange} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label fw-bold">Graduation Year</label>
                    <input className="form-control" name="graduationYear" value={form.graduationYear || ''} onChange={handleChange} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label fw-bold">Current Company</label>
                    <input className="form-control" name="current_company" value={form.current_company || ''} onChange={handleChange} />
                  </div>
                  <div className="d-flex justify-content-end gap-2 mt-3">
                    <button type="button" className="btn btn-secondary rounded-pill px-4" onClick={() => setEditMode(false)}>Cancel</button>
                    <button type="submit" className="btn btn-cdac-orange rounded-pill px-4">Save</button>
                  </div>
                </form>
              ) : (
                <>
                  <h3 className="fw-bold text-cdac-blue mb-1">{user.firstName} {user.lastName}</h3>
                  <p className="text-muted mb-2">{user.email}</p>
                  <span className="badge bg-cdac-orange mb-3">
                    {user.role
                      ? user.role.toUpperCase() === 'USER'
                        ? 'USER'
                        : user.role.toUpperCase() === 'ALUMNI'
                          ? 'ALUMNI'
                          : user.role.toUpperCase()
                      : 'ALUMNI'}
                  </span>
                  <hr />
                  <div className="row text-start mb-3">
                    <div className="col-6 mb-2">
                      <strong>Course:</strong> <span>{user.course || '-'}</span>
                    </div>
                    <div className="col-6 mb-2">
                      <strong>Batch:</strong> <span>{user.batch || '-'}</span>
                    </div>
                    <div className="col-6 mb-2">
                      <strong>Graduation Year:</strong> <span>{user.graduationYear || '-'}</span>
                    </div>
                    <div className="col-6 mb-2">
                      <strong>Current Company:</strong> <span>{user.current_company || '-'}</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center gap-2 flex-wrap">
                    <a href={`mailto:${user.email}`} className="btn btn-cdac-orange rounded-pill px-4 mt-2">Contact Me</a>
                    <button className="btn btn-outline-cdac-orange rounded-pill px-4 mt-2" onClick={() => setEditMode(true)}>
                      <i className="bi bi-pencil me-1"></i> Edit Profile
                    </button>
                    <button
                      className="btn btn-danger rounded-pill px-4 mt-2"
                      onClick={() => {
                        localStorage.removeItem('user');
                        window.location.href = '/login';
                      }}
                    >
                      <i className="bi bi-box-arrow-right me-1"></i> Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

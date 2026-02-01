import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('news');
    const [newsData, setNewsData] = useState({ title: '', summary: '', content: '' });
    const [eventData, setEventData] = useState({ title: '', description: '', event_date: '', location: '', capacity: 100 });
    const [jobData, setJobData] = useState({ title: '', company: '', description: '', location: '', apply_link: '' });
    const [galleryData, setGalleryData] = useState({ title: '' });
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const submitNews = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(newsData).forEach(key => formData.append(key, newsData[key]));
        if (file) formData.append('image', file);

        try {
            await axios.post('/api/news', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            alert('News Created!');
            setNewsData({ title: '', summary: '', content: '' });
            setFile(null);
        } catch (error) {
            alert('Failed to create news');
        }
    };

    const submitEvent = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/events', eventData);
            alert('Event Created!');
            setEventData({ title: '', description: '', event_date: '', location: '', capacity: 100 });
        } catch (error) {
            alert('Failed to create event');
        }
    };

    const submitJob = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/jobs', jobData);
            alert('Job Posted!');
            setJobData({ title: '', company: '', description: '', location: '', apply_link: '' });
        } catch (error) {
            alert('Failed to post job');
        }
    };

    const submitGallery = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', galleryData.title);
        if (file) formData.append('image', file);

        try {
            await axios.post('/api/gallery', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            alert('Image Uploaded!');
            setGalleryData({ title: '' });
            setFile(null);
        } catch (error) {
            alert('Failed to upload image');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="section-title">Admin Dashboard</h2>

            <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'news' ? 'active' : ''}`} onClick={() => setActiveTab('news')}>Post News</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'events' ? 'active' : ''}`} onClick={() => setActiveTab('events')}>Create Event</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'jobs' ? 'active' : ''}`} onClick={() => setActiveTab('jobs')}>Post Job</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'gallery' ? 'active' : ''}`} onClick={() => setActiveTab('gallery')}>Upload Gallery</button>
                </li>
            </ul>

            <div className="card p-4">
                {activeTab === 'news' && (
                    <form onSubmit={submitNews}>
                        <h4>Post News</h4>
                        <div className="mb-3"><label>Title</label><input className="form-control" value={newsData.title} onChange={e => setNewsData({ ...newsData, title: e.target.value })} required /></div>
                        <div className="mb-3"><label>Summary</label><textarea className="form-control" value={newsData.summary} onChange={e => setNewsData({ ...newsData, summary: e.target.value })} required /></div>
                        <div className="mb-3"><label>Content</label><textarea className="form-control" rows="5" value={newsData.content} onChange={e => setNewsData({ ...newsData, content: e.target.value })} required /></div>
                        <div className="mb-3"><label>Image</label><input type="file" className="form-control" onChange={handleFileChange} /></div>
                        <button type="submit" className="btn btn-primary">Publish News</button>
                    </form>
                )}

                {activeTab === 'events' && (
                    <form onSubmit={submitEvent}>
                        <h4>Create Event</h4>
                        <div className="mb-3"><label>Title</label><input className="form-control" value={eventData.title} onChange={e => setEventData({ ...eventData, title: e.target.value })} required /></div>
                        <div className="mb-3"><label>Description</label><textarea className="form-control" value={eventData.description} onChange={e => setEventData({ ...eventData, description: e.target.value })} required /></div>
                        <div className="mb-3"><label>Date & Time</label><input type="datetime-local" className="form-control" value={eventData.event_date} onChange={e => setEventData({ ...eventData, event_date: e.target.value })} required /></div>
                        <div className="mb-3"><label>Location</label><input className="form-control" value={eventData.location} onChange={e => setEventData({ ...eventData, location: e.target.value })} required /></div>
                        <div className="mb-3"><label>Capacity</label><input type="number" className="form-control" value={eventData.capacity} onChange={e => setEventData({ ...eventData, capacity: e.target.value })} required /></div>
                        <button type="submit" className="btn btn-primary">Create Event</button>
                    </form>
                )}

                {activeTab === 'jobs' && (
                    <form onSubmit={submitJob}>
                        <h4>Post Job</h4>
                        <div className="mb-3"><label>Job Title</label><input className="form-control" value={jobData.title} onChange={e => setJobData({ ...jobData, title: e.target.value })} required /></div>
                        <div className="mb-3"><label>Company</label><input className="form-control" value={jobData.company} onChange={e => setJobData({ ...jobData, company: e.target.value })} required /></div>
                        <div className="mb-3"><label>Location</label><input className="form-control" value={jobData.location} onChange={e => setJobData({ ...jobData, location: e.target.value })} required /></div>
                        <div className="mb-3"><label>Description</label><textarea className="form-control" rows="4" value={jobData.description} onChange={e => setJobData({ ...jobData, description: e.target.value })} required /></div>
                        <div className="mb-3"><label>Apply Link (Optional)</label><input className="form-control" value={jobData.apply_link} onChange={e => setJobData({ ...jobData, apply_link: e.target.value })} /></div>
                        <button type="submit" className="btn btn-primary">Post Job</button>
                    </form>
                )}

                {activeTab === 'gallery' && (
                    <form onSubmit={submitGallery}>
                        <h4>Upload to Gallery</h4>
                        <div className="mb-3"><label>Title/Caption</label><input className="form-control" value={galleryData.title} onChange={e => setGalleryData({ ...galleryData, title: e.target.value })} /></div>
                        <div className="mb-3"><label>Image</label><input type="file" className="form-control" onChange={handleFileChange} required /></div>
                        <button type="submit" className="btn btn-primary">Upload Image</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Admin;

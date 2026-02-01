import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { Input, Select, DatePicker, ConfigProvider } from 'antd'; // Added imports
import '../style/home.css';

const Members = () => {
    const [searchParams] = useSearchParams();
    const [members, setMembers] = useState([]);
    const [filters, setFilters] = useState({
        search: searchParams.get('search') || '',
        batch: searchParams.get('batch') || '',
        course: searchParams.get('course') || '',
        company: searchParams.get('company') || ''
    });
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    // Debounced Auto-Search
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchMembers();
        }, 800); // 800ms debounce for smoother typing experience

        return () => clearTimeout(timer); // Cleanup previous timer on each change
    }, [page, filters]);

    const fetchMembers = async () => {
        setLoading(true);
        try {
            // Remove empty filters so we don't send search="" to backend
            const activeFilters = Object.fromEntries(
                Object.entries(filters).filter(([_, v]) => v && v !== '')
            );
            const params = { ...activeFilters, page };

            const res = await axios.get('/api/members', { params });
            // Mock response structure if API doesn't return exactly this
            setMembers(res.data.members || []);
            setTotalPages(res.data.totalPages || 1);
        } catch (error) {
            console.error('Error fetching members', error);
            setMembers([]);
        } finally {
            setLoading(false);
        }
    };

    const handleAntChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
        setPage(1);
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#f37021',
                    borderRadius: 6,
                    padding: 12,
                    colorBorder: '#595959', // Much darker border for high visibility
                    controlHeightLG: 48,    // Taller inputs
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
            <div className="container mt-5 mb-5" style={{ minHeight: '80vh' }}>

                {/* Search Section */}
                <div className="card newwww shadow-sm border-0 mb-5">
                    <div className="card-header newwww">Alumni Directory</div>
                    <div className="card-body p-4 bg-white"> {/* Changed to pure white for contrast */}
                        <div className="row g-3">
                            {/* Name Search */}
                            <div className="col-lg-3 col-md-6">
                                <Input
                                    placeholder="Search by Name"
                                    size="large"
                                    allowClear
                                    value={filters.search}
                                    onChange={(e) => handleAntChange('search', e.target.value)}
                                />
                            </div>

                            {/* Batch Year */}
                            <div className="col-lg-3 col-md-6">
                                <DatePicker
                                    picker="year"
                                    placeholder="Batch Year"
                                    style={{ width: '100%' }}
                                    size="large"
                                    onChange={(date, dateString) => handleAntChange('batch', dateString)}
                                />
                            </div>

                            {/* Course */}
                            <div className="col-lg-3 col-md-6">
                                <Select
                                    placeholder="Course"
                                    style={{ width: '100%' }}
                                    size="large"
                                    allowClear
                                    value={filters.course || undefined}
                                    onChange={(value) => handleAntChange('course', value)}
                                >
                                    <Select.Option value="PG-DAC">PG-DAC</Select.Option>
                                    <Select.Option value="PG-DBDA">PG-DBDA</Select.Option>
                                    <Select.Option value="PG-DESD">PG-DESD</Select.Option>
                                    <Select.Option value="PG-DITISS">PG-DITISS</Select.Option>
                                    <Select.Option value="PG-DVLSI">PG-DVLSI</Select.Option>
                                    <Select.Option value="PG-DMC">PG-DMC</Select.Option>
                                    <Select.Option value="PG-DASSD">PG-DASSD</Select.Option>
                                    <Select.Option value="PG-DIOT">PG-DIOT</Select.Option>
                                    <Select.Option value="PG-DHPCSA">PG-DHPCSA</Select.Option>
                                    <Select.Option value="PG-DAIML">PG-DAIML</Select.Option>
                                    <Select.Option value="PG-DFBD">PG-DFBD</Select.Option>
                                    <Select.Option value="PG-DSSD">PG-DSSD</Select.Option>
                                    <Select.Option value="PG-DCLP">PG-DCLP</Select.Option>
                                    <Select.Option value="PG-DGIA">PG-DGIA</Select.Option>
                                    <Select.Option value="PG-DVLDD">PG-DVLDD</Select.Option>
                                    <Select.Option value="PG-DCSF">PG-DCSF</Select.Option>
                                </Select>
                            </div>

                            {/* Company */}
                            <div className="col-lg-3 col-md-6">
                                <Input
                                    placeholder="Company"
                                    size="large"
                                    allowClear
                                    value={filters.company}
                                    onChange={(e) => handleAntChange('company', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Members Grid */}
                <div className="row g-4">
                    {members.length > 0 ? members.map(member => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={member.id}>
                            <div className="card h-100 text-center p-3 shadow-sm border-0 member-card hover-lift">
                                <img
                                    src={member.profile_pic || '/images/docs/Student1.png'}
                                    alt={member.name}
                                    className="rounded-circle mx-auto mb-3 shadow-sm"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/100'}
                                />
                                <h5 className="fw-bold mb-1">{member.name}</h5>
                                <p className="text-muted small mb-2">{member.course} - {member.batch_year}</p>
                                <span className="badge bg-light text-dark border mb-3">{member.current_company || 'Alumni'}</span>
                                <div className="d-block">
                                    <a href={`mailto:${member.email}`} className="btn btn-cdac-orange btn-sm rounded-pill px-4">Connect</a>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="col-12 text-center py-5">
                            <p className="text-muted">No alumni found matching these filters.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">
                        <div className="btn-group shadow-sm" role="group">
                            <button
                                className="btn btn-outline-secondary"
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                            >
                                <i className="bi bi-chevron-left me-1"></i> Previous
                            </button>
                            <button className="btn btn-outline-secondary disabled text-dark fw-bold">
                                Page {page} of {totalPages}
                            </button>
                            <button
                                className="btn btn-outline-secondary"
                                disabled={page === totalPages}
                                onClick={() => setPage(page + 1)}
                            >
                                Next <i className="bi bi-chevron-right ms-1"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </ConfigProvider>
    );
};

export default Members;

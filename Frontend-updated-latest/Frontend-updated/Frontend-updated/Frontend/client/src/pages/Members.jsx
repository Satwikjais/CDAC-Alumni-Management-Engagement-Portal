import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { Input, Select, DatePicker, ConfigProvider } from 'antd'; // Added imports
import '../style/home.css';
import { Table } from "antd";

import { SearchOutlined } from '@ant-design/icons';


const Members = () => {
    const [searchParams] = useSearchParams();
    const [directoryFilters, setDirectoryFilters] = useState({
        name: "",
        year: null,
        course: null,
        company: ""
    });


    const [alumniList, setAlumniList] = useState([]);
    const [loading, setLoading] = useState(false);

    const [allAlumni, setAllAlumni] = useState([]);     // full list
    const [filteredAlumni, setFilteredAlumni] = useState([]); // shown in table

    useEffect(() => {
        fetchAllAlumni();
    }, []);

    const fetchAllAlumni = async () => {
        try {
            setLoading(true);
            const res = await axios.get("http://localhost:8080/api/members/alumni/list");

            setAllAlumni(res.data);
            setFilteredAlumni(res.data); // show all initially
        } catch (err) {
            console.error("Failed to fetch alumni", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        let data = [...allAlumni];

        // Name
        if (directoryFilters.name) {
            data = data.filter(a =>
                `${a.firstName} ${a.lastName}`
                    .toLowerCase()
                    .includes(directoryFilters.name.toLowerCase())
            );
        }

        // Course
        if (directoryFilters.course) {
            data = data.filter(a => a.course === directoryFilters.course);
        }

        // Company
        if (directoryFilters.company) {
            data = data.filter(a =>
                a.company?.toLowerCase().includes(directoryFilters.company.toLowerCase())
            );
        }

        // Graduation Year
        if (directoryFilters.year) {
            const year = directoryFilters.year.year();
            data = data.filter(a => Number(a.graduationYear) === year);
        }

        setFilteredAlumni(data);
    };

    const columns = [
        {
            title: "Name",
            render: (_, record) => `${record.firstName} ${record.lastName}`,
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Course",
            dataIndex: "course",
        },
        {
            title: "Company",
            dataIndex: "company",
            render: text => text || "N/A",
        },
        {
            title: "Graduation Year",
            dataIndex: "graduationYear",
            render: y => y || "N/A",
        },
    ];



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
                                    prefix={<SearchOutlined className="text-muted" />}
                                    allowClear
                                    value={directoryFilters.name}
                                    onChange={(e) =>
                                        setDirectoryFilters({ ...directoryFilters, name: e.target.value })
                                    }
                                />
                            </div>

                            {/* Batch Year */}
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

                            {/* Course */}
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
                                    value={directoryFilters.company}
                                    onChange={(e) =>
                                        setDirectoryFilters({ ...directoryFilters, company: e.target.value })
                                    }
                                />

                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <button
                                className="btn btn-cdac-orange px-5 py-2 rounded"
                                onClick={fetchDirectoryMembers}
                            >
                                Search Alumni <i className="bi bi-search ms-2"></i>
                            </button>

                        </div>
                    </div>
                </div>

                {/* Members Grid */}
                <div className="row g-4 mt-4">
                    <div className="row mt-5">

                        <Table
                            columns={columns}
                            dataSource={filteredAlumni}
                            rowKey="id"
                            loading={loading}
                            pagination={{ pageSize: 5 }}
                        />

                    </div>


                </div>
            </div>
        </ConfigProvider>
    );
};

export default Members;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button, Upload, Row, Col, Alert, Select, DatePicker } from 'antd';
import { UploadOutlined, UserAddOutlined } from '@ant-design/icons';
import { authAPI, setToken, membersAPI } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    company: '',
    designation: '',
    graduationYear: '',
    role: 'alumni' // default role
  });

  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (changedValues) => {
    setFormData(prev => ({ ...prev, ...changedValues }));
  };

  const handleSubmit = async () => {
  if (formData.password !== formData.confirmPassword) {
    setError('Passwords do not match');
    return;
  }

  // 🔥 SPLIT FULL NAME HERE
  const nameParts = (formData.name || '').trim().split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ') || ' ';

  setLoading(true);
  try {
    const response = await authAPI.register(
      formData.email,
      formData.password,
      firstName,
      lastName,
      formData.role // send role to backend
    );

    setToken(response.token);
    localStorage.setItem('user', JSON.stringify({
      id: response.userId,
      email: response.email,
      firstName: response.firstName,
      lastName: response.lastName,
      role: response.role
    }));

    // If alumni, also create in members service
    if ((response.role || '').toLowerCase() === 'alumni') {
      await membersAPI.create({
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        company: formData.company,
        graduationYear: formData.graduationYear,
        course: formData.course,
        isAlumni: true
      });
    }

    navigate('/');
    window.location.reload();
  } catch (err) {
    setError(err.response?.data || 'Registration failed');
  } finally {
    setLoading(false);
  }
};




  // Generate Batch Options (Feb & Aug for last 15 years)
  const currentYear = new Date().getFullYear();
  const batches = [];
  for (let y = currentYear + 1; y >= 2010; y--) {
    batches.push(`Feb-${y}`);
    batches.push(`Aug-${y}`);
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f7fb' }}>
      <Card
        title={<><UserAddOutlined /> Alumni Registration</>}
        className="register-card-head"
        style={{ width: '100%', maxWidth: 900, borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
      >
        {error && <Alert type="error" title={error} showIcon style={{ marginBottom: 16 }} />}

        <Form layout="vertical" onValuesChange={(_, allValues) => handleChange(allValues)} onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Registering as" name="role" rules={[{ required: true }]}
                initialValue={formData.role}>
                <Select onChange={value => setFormData(prev => ({ ...prev, role: value }))}>
                  <Select.Option value="alumni">Alumni</Select.Option>
                  <Select.Option value="user">User</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Name" name="name" rules={[{ required: true }]}> 
                <Input placeholder="Full Name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}> 
                <Input placeholder="email@example.com" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Contact Number" name="phone"> 
                <Input placeholder="Phone Number" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Profile Picture"> 
                <Upload beforeUpload={(file) => { setFile(file); return false; }} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="C-DAC Course" name="course" rules={[{ required: true, message: 'Please select your course' }]}> 
                <Select placeholder="Select Course">
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
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Batch Year" name="batch_year" rules={[{ required: true, message: 'Please select your batch' }]}> 
                <DatePicker picker="month" format="MMM-YYYY" placeholder="Select Batch (Month-Year)" style={{ width: '100%' }} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Placed Company (C-DAC)" name="placed_company"> 
                <Input placeholder="Company Name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Current Company" name="current_company"> 
                <Input placeholder="Company Name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Password" name="password" rules={[{ required: true, min: 8 }]}> 
                <Input.Password placeholder="Minimum 8 characters" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Passwords do not match'));
                    }
                  })
                ]}
              >
                <Input.Password placeholder="Re-enter password" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large" className="register-btn">
                  Register
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Register;

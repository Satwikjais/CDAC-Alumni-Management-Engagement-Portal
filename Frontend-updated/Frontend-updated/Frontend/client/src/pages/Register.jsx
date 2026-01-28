import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button, Upload, Row, Col, Alert, Select, DatePicker } from 'antd';
import { UploadOutlined, UserAddOutlined } from '@ant-design/icons';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    course: '',
    batch_year: '',
    placed_company: '',
    current_company: ''
  });

  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (changedValues) => {
    setFormData(prev => ({ ...prev, ...changedValues }));
  };

  const handleSubmit = async () => {
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'batch_year' && formData[key] && typeof formData[key].format === 'function') {
        data.append(key, formData[key].format('MMM-YYYY'));
      } else {
        data.append(key, formData[key]);
      }
    });
    if (file) data.append('profile_pic', file);

    try {
      await axios.post('/api/auth/register', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
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
        {error && <Alert type="error" message={error} showIcon style={{ marginBottom: 16 }} />}

        <Form layout="vertical" onValuesChange={(_, allValues) => handleChange(allValues)} onFinish={handleSubmit}>
          <Row gutter={16}>
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

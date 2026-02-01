import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button, Alert, Row, Col } from 'antd';
import { LoginOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
// import '../style/login.css'; // Removed to use global index.css theme

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/login', values);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f7fb', padding: '20px' }}>
      <Card
        className="register-card-head"
        style={{ width: '100%', maxWidth: 900, borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.12)', overflow: 'hidden' }}
        bodyStyle={{ padding: 0 }}
      >
        <Row>
          {/* Left Side: Login Form */}
          <Col xs={24} md={12} style={{ padding: '40px', borderRight: '1px solid #f0f0f0' }}>
            <h3 style={{ textAlign: 'center', color: '#003366', fontWeight: 'bold', marginBottom: '24px', fontSize: '1.5rem' }}>
              <LoginOutlined style={{ marginRight: 8 }} /> Alumni Login
            </h3>

            {error && <Alert type="error" message={error} showIcon style={{ marginBottom: 16 }} />}

            <Form
              name="login_form"
              layout="vertical"
              onFinish={onFinish}
              size="large"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Invalid email!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="email@example.com" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
              </Form.Item>

              <div style={{ textAlign: 'right', marginBottom: '24px', marginTop: '-10px' }}>
                <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
              </div>

              <Form.Item>
                <Button type="primary" htmlType="submit" block className="register-btn" loading={loading}>
                  LOGIN
                </Button>
              </Form.Item>

              <div style={{ textAlign: 'center' }}>
                New User? <a href="/register" className="register-link">Register Here</a>
              </div>
            </Form>
          </Col>

          {/* Right Side: Info Panel */}
          <Col xs={24} md={12} style={{ background: '#003366', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div>
              <h2 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '20px' }}>About C-DAC</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: '1.6' }}>
                The Centre for Development of Advanced Computing (C-DAC) is India’s premier R&D organization in IT, Electronics, and associated areas.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '30px' }}>
                Join our alumni community to connect with professionals, explore opportunities, and share knowledge.
              </p>
              <img
                src="/images/docs/india.gov.png"
                alt="C-DAC"
                style={{ maxHeight: '60px', opacity: 1 }}
              />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;

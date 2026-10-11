import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  
  const validateForm = () => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: null });
    }
    if (loginError) {
      setLoginError('');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Check if user exists in localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === formData.email);
      
      if (!user || user.password !== formData.password) {
        setLoginError('Invalid email or password. Please try again.');
        return;
      }

      // Store logged in user in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      
      // Redirect to home page
      navigate('/');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <div className="auth-form-container">
            <div className="auth-logo text-center mb-4">
              <h2 className="text-primary">Krishna Travels</h2>
            </div>
            
            <h3 className="auth-title">Welcome Back!</h3>
            
            {loginError && (
              <Alert variant="danger" className="mb-4">
                {loginError}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!formErrors.email}
                  />
                </div>
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group className="mb-4" controlId="password">
                <Form.Label>Password</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!formErrors.password}
                  />
                </div>
                <Form.Control.Feedback type="invalid">
                  {formErrors.password}
                </Form.Control.Feedback>
              </Form.Group>
              
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Form.Check
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  label="Remember me"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <Link to="/forgot-password" className="text-primary">
                  Forgot Password?
                </Link>
              </div>
              
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 mb-4 d-flex align-items-center justify-content-center"
                size="lg"
              >
                <FaSignInAlt className="me-2" /> Login
              </Button>
              
              <div className="auth-links text-center">
                <p>
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaUserPlus } from 'react-icons/fa';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    setFormErrors(errors);
    console.log('Validation Errors:', errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted with:', formData);
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      console.log('Existing Users:', users);
      
      if (users.some(user => user.email === formData.email)) {
        console.log('Email already exists!');
        setFormErrors(prevErrors => ({
          ...prevErrors,
          email: 'Email already exists'
        }));
        return;
      }
      
      const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        createdAt: new Date().toISOString()
      };
      
      users.push(newUser);
      console.log('New User Added:', newUser);

      localStorage.setItem('users', JSON.stringify(users));
      
      setSignupSuccess(true);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      });
      
      setTimeout(() => {
        navigate('/login');
      }, 2000);
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
            
            <h3 className="auth-title">Create an Account</h3>
            
            {signupSuccess && (
              <Alert variant="success" className="mb-4">
                Registration successful! Redirecting to login...
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              {/* Name Field */}
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full Name</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!formErrors.name}
                  />
                </div>
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              
              {/* Email Field */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
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
              
              {/* Phone Field */}
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaPhone />
                  </span>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    isInvalid={!!formErrors.phone}
                  />
                </div>
                <Form.Control.Feedback type="invalid">
                  {formErrors.phone}
                </Form.Control.Feedback>
              </Form.Group>
              
              {/* Password Field */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!formErrors.password}
                  />
                </div>
                <Form.Control.Feedback type="invalid">
                  {formErrors.password}
                </Form.Control.Feedback>
              </Form.Group>
              
              {/* Confirm Password Field */}
              <Form.Group className="mb-4" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!formErrors.confirmPassword}
                  />
                </div>
                <Form.Control.Feedback type="invalid">
                  {formErrors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
              
              {/* Agree Terms */}
              <Form.Group className="mb-4" controlId="agreeTerms">
                <Form.Check
                  type="checkbox"
                  name="agreeTerms"
                  label="I agree to the Terms & Conditions and Privacy Policy"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  isInvalid={!!formErrors.agreeTerms}
                  feedback={formErrors.agreeTerms}
                  feedbackType="invalid"
                />
              </Form.Group>
              
              {/* Submit Button */}
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 mb-4 d-flex align-items-center justify-content-center"
                size="lg"
              >
                <FaUserPlus className="me-2" /> Sign Up
              </Button>
              
              <div className="auth-links text-center">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;

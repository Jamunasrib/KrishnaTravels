import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    return true;
  };
  
  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      // Form is valid, submit it (in a real app, this would call an API)
      console.log('Password reset request for:', email);
      setSubmitted(true);
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
            
            <h3 className="auth-title">Reset Your Password</h3>
            
            {!submitted ? (
              <>
                <p className="text-center mb-4">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaEnvelope />
                      </span>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        isInvalid={!!emailError}
                      />
                    </div>
                    <Form.Control.Feedback type="invalid">
                      {emailError}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100 mb-4 d-flex align-items-center justify-content-center"
                    size="lg"
                  >
                    <FaPaperPlane className="me-2" /> Send Reset Link
                  </Button>
                </Form>
              </>
            ) : (
              <Alert variant="success" className="mb-4">
                Password reset instructions have been sent to {email}. Please check your email.
              </Alert>
            )}
            
            <div className="auth-links text-center">
              <p>
                Remember your password? <Link to="/login">Back to Login</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
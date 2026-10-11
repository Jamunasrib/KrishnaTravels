import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import Newsletter from '../components/Newsletter';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: null });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, submit it (in a real app, this would send data to a server)
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Our Location",
      info: "123 Travel Street, Connaught Place, New Delhi, India - 110001"
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Phone Number",
      info: "+91 98765 43210",
      info2: "+91 11 2345 6789"
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email Address",
      info: "info@krishnatravels.com",
      info2: "bookings@krishnatravels.com"
    },
    {
      icon: <FaClock size={24} />,
      title: "Working Hours",
      info: "Monday - Saturday: 9:00 AM - 7:00 PM",
      info2: "Sunday: Closed"
    }
  ];

  return (
    <>
      <div className="hero-section position-relative mb-5">
        <img 
          src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Contact Us" 
          className="w-100"
          style={{ height: '50vh', objectFit: 'cover' }}
        />
        <div className="hero-content">
          <Container>
            <h1 className="hero-title">Contact Us</h1>
            <p className="lead">We're here to help plan your perfect journey</p>
          </Container>
        </div>
      </div>

      <section className="section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Get In Touch</h2>
              <p className="lead">
                Have questions or need assistance? Our team is ready to help you plan your next adventure
              </p>
            </Col>
          </Row>
          
          <Row className="g-5">
            <Col lg={5}>
              <div className="contact-info">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item mb-4 bg-light p-4 rounded">
                    <div className="contact-icon">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="mb-2">{item.title}</h5>
                      <p className="mb-1">{item.info}</p>
                      {item.info2 && <p className="mb-0">{item.info2}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            
            <Col lg={7}>
              <div className="contact-form bg-white shadow-sm rounded p-4 p-md-5">
                {submitted && (
                  <Alert variant="success" className="mb-4">
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="name">
                        <Form.Label>Your Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          isInvalid={!!formErrors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="email">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!formErrors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="phone">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isInvalid={!!formErrors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group controlId="message" className="mb-4">
                    <Form.Label>Your Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!formErrors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Our Locations</h2>
              <p className="lead">
                Visit us at one of our offices across India
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h4 className="mb-3">New Delhi (Headquarters)</h4>
                <p className="mb-1">
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  123 Travel Street, Connaught Place
                </p>
                <p className="mb-1">
                  <FaPhoneAlt className="me-2 text-primary" />
                  +91 11 2345 6789
                </p>
                <p>
                  <FaEnvelope className="me-2 text-primary" />
                  delhi@krishnatravels.com
                </p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h4 className="mb-3">Mumbai</h4>
                <p className="mb-1">
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  456 Marine Drive, Nariman Point
                </p>
                <p className="mb-1">
                  <FaPhoneAlt className="me-2 text-primary" />
                  +91 22 8765 4321
                </p>
                <p>
                  <FaEnvelope className="me-2 text-primary" />
                  mumbai@krishnatravels.com
                </p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h4 className="mb-3">Jaipur</h4>
                <p className="mb-1">
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  789 Pink City Road, MI Road
                </p>
                <p className="mb-1">
                  <FaPhoneAlt className="me-2 text-primary" />
                  +91 141 9876 5432
                </p>
                <p>
                  <FaEnvelope className="me-2 text-primary" />
                  jaipur@krishnatravels.com
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="map-section" style={{ height: '400px' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.91349056617!2d77.20649128042535!3d28.633200911262967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1629275001125!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Krishna Travels Location"
        ></iframe>
      </div>

      <Newsletter />
    </>
  );
};

export default Contact;
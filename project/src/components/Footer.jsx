import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h3 className="text-white mb-4">Krishna Travels</h3>
            <p className="mb-4">Discover the world with Krishna Travels, your trusted partner for unforgettable journeys and adventures.</p>
            <div className="d-flex mb-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon me-3">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon me-3">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon me-3">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6}>
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white-50 text-decoration-none">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={2} md={6}>
            <h5 className="text-white mb-4">Popular Destinations</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="/services" className="text-white-50 text-decoration-none">Taj Mahal</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white-50 text-decoration-none">Ram Temple</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white-50 text-decoration-none">Goa Beaches</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white-50 text-decoration-none">Kerala Backwaters</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={4} md={6}>
            <h5 className="text-white mb-4">Newsletter</h5>
            <p className="mb-3">Subscribe to get special offers, free giveaways, and updates.</p>
            <Form className="d-flex mb-4">
              <Form.Control
                type="email"
                placeholder="Your Email"
                className="me-2"
              />
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
            <div className="contact-info">
              <p className="mb-2 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" /> 123 Travel Street, New Delhi, India
              </p>
              <p className="mb-2 d-flex align-items-center">
                <FaPhoneAlt className="me-2" /> +91 98765 43210
              </p>
              <p className="mb-0 d-flex align-items-center">
                <FaEnvelope className="me-2" /> info@krishnatravels.com
              </p>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col>
            <p className="text-center mb-0">
              &copy; {currentYear} Krishna Travels. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
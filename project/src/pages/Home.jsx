import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaHotel, FaCar, FaRoute } from 'react-icons/fa';

import HeroSlider from '../components/HeroSlider';
import PopularDestinations from '../components/PopularDestinations';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <HeroSlider />
      
      {/* Services Overview */}
      <section className="py-5">
        <Container>
          <Row className="g-4 text-center">
            <Col md={3} sm={6}>
              <div className="p-4 bg-white rounded shadow-sm">
                <FaPlaneDeparture size={40} className="text-primary mb-3" />
                <h4 className="fs-5">Flight Bookings</h4>
                <p className="text-muted">Domestic & International</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="p-4 bg-white rounded shadow-sm">
                <FaHotel size={40} className="text-primary mb-3" />
                <h4 className="fs-5">Hotel Reservations</h4>
                <p className="text-muted">Luxury & Budget Options</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="p-4 bg-white rounded shadow-sm">
                <FaCar size={40} className="text-primary mb-3" />
                <h4 className="fs-5">Transportation</h4>
                <p className="text-muted">Cars, Buses & Trains</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="p-4 bg-white rounded shadow-sm">
                <FaRoute size={40} className="text-primary mb-3" />
                <h4 className="fs-5">Custom Tours</h4>
                <p className="text-muted">Personalized Itineraries</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* About Us Overview */}
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.pexels.com/photos/3769118/pexels-photo-3769118.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="About Krishna Travels" 
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col lg={6}>
              <h2 className="mb-4">Welcome to Krishna Travels</h2>
              <p className="lead mb-4">
                Your trusted travel partner for exploring India and beyond since 2005
              </p>
              <p className="mb-4">
                At Krishna Travels, we believe that travel is not just about seeing new places, but about creating 
                unforgettable experiences. Our expert team curates journeys that showcase the best of India's 
                rich cultural heritage, breathtaking landscapes, and spiritual traditions.
              </p>
              <p className="mb-4">
                Whether you're seeking a spiritual retreat, a family vacation, or an adventure tour, 
                we offer personalized itineraries tailored to your preferences and needs.
              </p>
              <Button as={Link} to="/about" variant="primary">
                Read More About Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      
      <PopularDestinations />
      
      <WhyChooseUs />
      
      <Testimonials />
      
      <Newsletter />
    </>
  );
};

export default Home;
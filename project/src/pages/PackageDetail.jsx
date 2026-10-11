import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Tabs, Tab, Form, Alert } from 'react-bootstrap';
import { 
  FaClock, 
  FaStar, 
  FaMapMarkerAlt, 
  FaCheck, 
  FaTimes, 
  FaUtensils, 
  FaHotel, 
  FaBus, 
  FaUserFriends 
} from 'react-icons/fa';

import { tourPackages } from '../data/tourPackages';
import Newsletter from '../components/Newsletter';

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [guests, setGuests] = useState(1);
  const [travelDate, setTravelDate] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState('');
  
  useEffect(() => {
    const foundPackage = tourPackages.find(p => p.id === parseInt(id));
    setPackageData(foundPackage);
    setLoading(false);
  }, [id]);

  const handleBooking = () => {
    if (!travelDate) {
      setBookingError('Please select a travel date');
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
      return;
    }

    // Create booking object
    const booking = {
      id: Date.now().toString(),
      userId: user.id,
      packageId: packageData.id,
      packageName: packageData.name,
      packageImage: packageData.image,
      location: packageData.location,
      price: packageData.price,
      duration: packageData.duration,
      guests,
      travelDate,
      bookedAt: new Date().toISOString()
    };

    // Get existing bookings or initialize empty array
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    
    // Add new booking
    bookings.push(booking);
    
    // Save to localStorage
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Show success message
    setBookingSuccess(true);
    
    // Reset form
    setGuests(1);
    setTravelDate('');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setBookingSuccess(false);
    }, 3000);
  };
  
  if (loading) {
    return (
      <Container className="my-5 py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }
  
  if (!packageData) {
    return (
      <Container className="my-5 py-5 text-center">
        <h2>Package not found</h2>
        <p>The tour package you're looking for doesn't exist.</p>
        <Button as={Link} to="/services" variant="primary">
          Browse Packages
        </Button>
      </Container>
    );
  }
  
  const totalPrice = guests * packageData.price;
  
  return (
    <>
      <div 
        className="position-relative"
        style={{ 
          backgroundImage: `url(${packageData.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh'
        }}
      >
        <div 
          className="position-absolute top-0 start-0 end-0 bottom-0"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <Container className="d-flex align-items-center justify-content-center h-100">
            <div className="text-white text-center">
              <h1 className="display-4 fw-bold">{packageData.name}</h1>
              <div className="d-flex justify-content-center align-items-center">
                <FaMapMarkerAlt className="me-2" />
                <p className="lead mb-0">{packageData.location}</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col lg={8}>
              <Card className="border-0 shadow-sm mb-4">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <h4 className="package-price mb-0 me-3">
                        ₹{packageData.price.toLocaleString()}
                        <small className="text-muted"> / per person</small>
                      </h4>
                      {packageData.discount && (
                        <Badge bg="danger" className="px-3 py-2">
                          {packageData.discount}% OFF
                        </Badge>
                      )}
                    </div>
                    <div className="d-flex align-items-center">
                      <FaClock className="text-primary me-2" />
                      <span className="fw-bold">{packageData.duration}</span>
                    </div>
                  </div>
                  
                  <p className="mb-4">{packageData.description}</p>
                  
                  <Row>
                    <Col md={6}>
                      <h5 className="mb-3">Package Inclusions</h5>
                      <ul className="list-unstyled">
                        {packageData.inclusions.map((inclusion, index) => (
                          <li key={index} className="mb-2">
                            <FaCheck className="text-success me-2" />
                            {inclusion}
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h5 className="mb-3">Exclusions</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <FaTimes className="text-danger me-2" />
                          Personal expenses
                        </li>
                        <li className="mb-2">
                          <FaTimes className="text-danger me-2" />
                          Travel insurance
                        </li>
                        <li className="mb-2">
                          <FaTimes className="text-danger me-2" />
                          Optional activities
                        </li>
                        <li className="mb-2">
                          <FaTimes className="text-danger me-2" />
                          Lunches (unless specified)
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              
              <Card className="border-0 shadow-sm mb-4">
                <Card.Body>
                  <h4 className="mb-4">Itinerary</h4>
                  
                  {packageData.itinerary.map((day, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex align-items-center mb-3">
                        <div 
                          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                          style={{ width: '40px', height: '40px' }}
                        >
                          {index + 1}
                        </div>
                        <h5 className="mb-0">{day.day}: {day.title}</h5>
                      </div>
                      <ul className="list-unstyled ms-5 ps-3 border-start border-2 border-light">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="mb-2 ps-3 position-relative">
                            <div 
                              className="position-absolute top-50 start-0 translate-middle-y" 
                              style={{ width: '8px', height: '8px', backgroundColor: '#1a73e8', borderRadius: '50%', marginLeft: '-4px' }}
                            ></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Card.Body>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Tabs defaultActiveKey="highlights" className="mb-4">
                    <Tab eventKey="highlights" title="Highlights">
                      <div className="p-3">
                        <h5 className="mb-3">Highlights of {packageData.name}</h5>
                        <Row className="g-3">
                          <Col md={6}>
                            <div className="d-flex align-items-center mb-2">
                              <FaCheck className="text-primary me-3" />
                              <span>Expert local guides</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <FaCheck className="text-primary me-3" />
                              <span>Comfortable transportation</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <FaCheck className="text-primary me-3" />
                              <span>Handpicked accommodations</span>
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="d-flex align-items-center mb-2">
                              <FaCheck className="text-primary me-3" />
                              <span>Cultural experiences</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <FaCheck className="text-primary me-3" />
                              <span>Photo opportunities</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <FaCheck className="text-primary me-3" />
                              <span>24/7 support</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                    <Tab eventKey="accommodations" title="Accommodations">
                      <div className="p-3">
                        <h5 className="mb-3">Where You'll Stay</h5>
                        <div className="d-flex align-items-start mb-3">
                          <FaHotel className="text-primary mt-1 me-3" size={24} />
                          <div>
                            <h6 className="mb-1">Carefully Selected Hotels</h6>
                            <p className="text-muted">
                              We select our accommodations based on location, cleanliness, amenities, and service quality. 
                              All hotels are reviewed regularly to ensure they meet our standards.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <FaUtensils className="text-primary mt-1 me-3" size={24} />
                          <div>
                            <h6 className="mb-1">Dining Experience</h6>
                            <p className="text-muted">
                              Enjoy local and international cuisine at our partner hotels. Daily breakfast is included, 
                              with dinner as specified in the itinerary.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="transportation" title="Transportation">
                      <div className="p-3">
                        <h5 className="mb-3">How You'll Travel</h5>
                        <div className="d-flex align-items-start mb-3">
                          <FaBus className="text-primary mt-1 me-3" size={24} />
                          <div>
                            <h6 className="mb-1">Comfortable Vehicles</h6>
                            <p className="text-muted">
                              All transfers and sightseeing are done in air-conditioned vehicles appropriate for your group size. 
                              Our vehicles are regularly maintained for safety and comfort.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <FaUserFriends className="text-primary mt-1 me-3" size={24} />
                          <div>
                            <h6 className="mb-1">Professional Drivers</h6>
                            <p className="text-muted">
                              Our experienced drivers are familiar with the routes and provide safe transportation throughout your journey.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <div className="sticky-lg-top" style={{ top: '100px' }}>
                <Card className="border-0 shadow-sm mb-4">
                  <Card.Body>
                    <h4 className="mb-4">Book This Tour</h4>
                    
                    {bookingSuccess && (
                      <Alert variant="success" className="mb-4">
                        Booking successful! Check your profile for details.
                      </Alert>
                    )}
                    
                    {bookingError && (
                      <Alert variant="danger" className="mb-4">
                        {bookingError}
                      </Alert>
                    )}
                    
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Travel Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={travelDate}
                          onChange={(e) => {
                            setTravelDate(e.target.value);
                            setBookingError('');
                          }}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label>Number of Guests</Form.Label>
                        <Form.Control
                          type="number"
                          min="1"
                          value={guests}
                          onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                        />
                      </Form.Group>
                      
                      <div className="d-flex justify-content-between mb-3">
                        <span>Price per person:</span>
                        <span>₹{packageData.price.toLocaleString()}</span>
                      </div>
                      
                      <div className="d-flex justify-content-between mb-4">
                        <span className="fw-bold">Total price:</span>
                        <span className="fw-bold">₹{totalPrice.toLocaleString()}</span>
                      </div>
                      
                      <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-100 mb-3"
                        onClick={handleBooking}
                      >
                        Book Now
                      </Button>
                      
                      <Button variant="outline-primary" size="lg" className="w-100">
                        Enquire Now
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <h5 className="mb-3">Need Help?</h5>
                    <p className="mb-4">Contact our travel experts for assistance with booking or customization</p>
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-light p-2 rounded-circle me-3">
                        <FaPhoneAlt className="text-primary" />
                      </div>
                      <div>
                        <small className="text-muted d-block">Call us at</small>
                        <span className="fw-bold">+91 98765 43210</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="bg-light p-2 rounded-circle me-3">
                        <FaEnvelope className="text-primary" />
                      </div>
                      <div>
                        <small className="text-muted d-block">Email us at</small>
                        <span className="fw-bold">booking@krishnatravels.com</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <Newsletter />
    </>
  );
};

export default PackageDetail;
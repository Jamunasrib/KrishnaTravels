import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Tab, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCalendar } from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));

    // Get bookings from localStorage
    const userBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(userBookings.filter(booking => booking.userId === JSON.parse(userData).id));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return null;
  }

  return (
    <Container className="py-5 mt-5">
      <Row>
        <Col lg={4} className="mb-4 mb-lg-0">
          <Card className="border-0 shadow-sm">
            <Card.Body className="text-center">
              <div className="mb-4">
                <div 
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto"
                  style={{ width: '100px', height: '100px', fontSize: '40px' }}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <h4 className="mb-1">{user.name}</h4>
              <p className="text-muted mb-4">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <FaEnvelope className="text-primary me-2" />
                  <span>{user.email}</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaPhone className="text-primary me-2" />
                  <span>{user.phone}</span>
                </div>
              </div>
              
              <Button variant="outline-primary" onClick={handleLogout}>
                Logout
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <Tab.Container defaultActiveKey="bookings">
                <Nav variant="pills" className="mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="bookings">My Bookings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="upcoming">Upcoming Tours</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="completed">Completed Tours</Nav.Link>
                  </Nav.Item>
                </Nav>
                
                <Tab.Content>
                  <Tab.Pane eventKey="bookings">
                    {bookings.length > 0 ? (
                      bookings.map((booking, index) => (
                        <Card key={index} className="mb-3 border-0 shadow-sm">
                          <Card.Body>
                            <Row className="align-items-center">
                              <Col md={3}>
                                <img 
                                  src={booking.packageImage} 
                                  alt={booking.packageName}
                                  className="img-fluid rounded"
                                />
                              </Col>
                              <Col md={6}>
                                <h5 className="mb-1">{booking.packageName}</h5>
                                <div className="text-muted mb-2">
                                  <FaMapMarkerAlt className="me-1" />
                                  {booking.location}
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                  <FaCalendar className="me-2 text-primary" />
                                  <span>Travel Date: {new Date(booking.travelDate).toLocaleDateString()}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <FaClock className="me-2 text-primary" />
                                  <span>{booking.duration}</span>
                                </div>
                              </Col>
                              <Col md={3} className="text-end">
                                <div className="mb-2">
                                  <Badge bg="primary">
                                    {booking.guests} {booking.guests > 1 ? 'Guests' : 'Guest'}
                                  </Badge>
                                </div>
                                <div className="fw-bold mb-2">
                                  ₹{(booking.price * booking.guests).toLocaleString()}
                                </div>
                                <Button variant="outline-primary" size="sm">
                                  View Details
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-5">
                        <h5>No bookings found</h5>
                        <p className="text-muted">You haven't made any bookings yet.</p>
                        <Button variant="primary" onClick={() => navigate('/services')}>
                          Browse Tour Packages
                        </Button>
                      </div>
                    )}
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="upcoming">
                    {bookings.filter(booking => new Date(booking.travelDate) > new Date()).length > 0 ? (
                      bookings
                        .filter(booking => new Date(booking.travelDate) > new Date())
                        .map((booking, index) => (
                          <Card key={index} className="mb-3 border-0 shadow-sm">
                            <Card.Body>
                              <Row className="align-items-center">
                                <Col md={3}>
                                  <img 
                                    src={booking.packageImage} 
                                    alt={booking.packageName}
                                    className="img-fluid rounded"
                                  />
                                </Col>
                                <Col md={6}>
                                  <h5 className="mb-1">{booking.packageName}</h5>
                                  <div className="text-muted mb-2">
                                    <FaMapMarkerAlt className="me-1" />
                                    {booking.location}
                                  </div>
                                  <div className="d-flex align-items-center mb-2">
                                    <FaCalendar className="me-2 text-primary" />
                                    <span>Travel Date: {new Date(booking.travelDate).toLocaleDateString()}</span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <FaClock className="me-2 text-primary" />
                                    <span>{booking.duration}</span>
                                  </div>
                                </Col>
                                <Col md={3} className="text-end">
                                  <div className="mb-2">
                                    <Badge bg="primary">
                                      {booking.guests} {booking.guests > 1 ? 'Guests' : 'Guest'}
                                    </Badge>
                                  </div>
                                  <div className="fw-bold mb-2">
                                    ₹{(booking.price * booking.guests).toLocaleString()}
                                  </div>
                                  <Button variant="outline-primary" size="sm">
                                    View Details
                                  </Button>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Card>
                        ))
                    ) : (
                      <div className="text-center py-5">
                        <h5>No upcoming tours</h5>
                        <p className="text-muted">You don't have any upcoming tour bookings.</p>
                        <Button variant="primary" onClick={() => navigate('/services')}>
                          Browse Tour Packages
                        </Button>
                      </div>
                    )}
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="completed">
                    {bookings.filter(booking => new Date(booking.travelDate) < new Date()).length > 0 ? (
                      bookings
                        .filter(booking => new Date(booking.travelDate) < new Date())
                        .map((booking, index) => (
                          <Card key={index} className="mb-3 border-0 shadow-sm">
                            <Card.Body>
                              <Row className="align-items-center">
                                <Col md={3}>
                                  <img 
                                    src={booking.packageImage} 
                                    alt={booking.packageName}
                                    className="img-fluid rounded"
                                  />
                                </Col>
                                <Col md={6}>
                                  <h5 className="mb-1">{booking.packageName}</h5>
                                  <div className="text-muted mb-2">
                                    <FaMapMarkerAlt className="me-1" />
                                    {booking.location}
                                  </div>
                                  <div className="d-flex align-items-center mb-2">
                                    <FaCalendar className="me-2 text-primary" />
                                    <span>Travel Date: {new Date(booking.travelDate).toLocaleDateString()}</span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <FaClock className="me-2 text-primary" />
                                    <span>{booking.duration}</span>
                                  </div>
                                </Col>
                                <Col md={3} className="text-end">
                                  <div className="mb-2">
                                    <Badge bg="primary">
                                      {booking.guests} {booking.guests > 1 ? 'Guests' : 'Guest'}
                                    </Badge>
                                  </div>
                                  <div className="fw-bold mb-2">
                                    ₹{(booking.price * booking.guests).toLocaleString()}
                                  </div>
                                  <Button variant="outline-primary" size="sm">
                                    View Details
                                  </Button>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Card>
                        ))
                    ) : (
                      <div className="text-center py-5">
                        <h5>No completed tours</h5>
                        <p className="text-muted">You haven't completed any tours yet.</p>
                        <Button variant="primary" onClick={() => navigate('/services')}>
                          Browse Tour Packages
                        </Button>
                      </div>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
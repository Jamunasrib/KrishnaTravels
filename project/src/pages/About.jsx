import { Container, Row, Col } from 'react-bootstrap';
import { FaRegCheckCircle, FaUserTie, FaHistory, FaAward } from 'react-icons/fa';
import Newsletter from '../components/Newsletter';

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "10,000+", icon: <FaRegCheckCircle /> },
    { label: "Years Experience", value: "18+", icon: <FaHistory /> },
    { label: "Tour Packages", value: "150+", icon: <FaAward /> },
    { label: "Team Members", value: "50+", icon: <FaUserTie /> }
  ];

  return (
    <>
      <div className="hero-section position-relative mb-5">
        <img 
          src="https://images.pexels.com/photos/2245432/pexels-photo-2245432.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="About Us" 
          className="w-100"
          style={{ height: '50vh', objectFit: 'cover' }}
        />
        <div className="hero-content">
          <Container>
            <h1 className="hero-title">About Krishna Travels</h1>
            <p className="lead">Your trusted travel partner since 2005</p>
          </Container>
        </div>
      </div>

      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h2 className="mb-4">Our Story</h2>
              <p className="lead mb-4">From a small travel agency to a trusted name in Indian tourism</p>
              <p className="mb-4">
                Founded in 2005 by travel enthusiast Krishna Sharma, Krishna Travels began as a small 
                agency in New Delhi with a vision to showcase India's incredible diversity to travelers 
                from around the world.
              </p>
              <p className="mb-4">
                Over the years, we have grown into a full-service travel company providing end-to-end 
                solutions for both domestic and international travelers. Our deep understanding of Indian 
                culture, heritage, and spirituality allows us to create authentic experiences that go 
                beyond typical tourist attractions.
              </p>
              <p>
                Today, with offices in Delhi, Mumbai, and Jaipur, Krishna Travels continues to be driven 
                by the same passion for travel and commitment to customer satisfaction that has been our 
                hallmark since day one.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Krishna Travels Team" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col md={3} sm={6} key={index} className="text-center mb-4 mb-md-0">
                <div className="bg-white p-4 rounded shadow-sm h-100">
                  <div className="display-4 text-primary mb-2">{stat.icon}</div>
                  <h3 className="h2 mb-2">{stat.value}</h3>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Our Mission & Values</h2>
              <p className="lead">
                Our core principles guide everything we do at Krishna Travels
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3 className="h4 mb-3">Our Mission</h3>
                <p>
                  To provide exceptional travel experiences that showcase the beauty, culture, and 
                  spirituality of India while ensuring the highest standards of customer service, 
                  safety, and sustainability.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3 className="h4 mb-3">Our Vision</h3>
                <p>
                  To be the most trusted travel company for authentic Indian experiences, recognized 
                  for our expertise, personalized service, and commitment to responsible tourism.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3 className="h4 mb-3">Our Values</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Customer satisfaction above all</li>
                  <li className="mb-2">✓ Integrity and transparency</li>
                  <li className="mb-2">✓ Respect for cultures and traditions</li>
                  <li className="mb-2">✓ Community engagement</li>
                  <li>✓ Environmental responsibility</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="lead">
                The passionate professionals behind Krishna Travels
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={3} sm={6}>
              <div className="bg-white rounded shadow-sm text-center h-100">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Rajesh Sharma" 
                  className="w-100 rounded-top"
                />
                <div className="p-4">
                  <h4 className="h5">Rajesh Sharma</h4>
                  <p className="text-muted">Founder & CEO</p>
                </div>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="bg-white rounded shadow-sm text-center h-100">
                <img 
                  src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Priya Patel" 
                  className="w-100 rounded-top"
                />
                <div className="p-4">
                  <h4 className="h5">Priya Patel</h4>
                  <p className="text-muted">Operations Manager</p>
                </div>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="bg-white rounded shadow-sm text-center h-100">
                <img 
                  src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Vikram Singh" 
                  className="w-100 rounded-top"
                />
                <div className="p-4">
                  <h4 className="h5">Vikram Singh</h4>
                  <p className="text-muted">Head of Tours</p>
                </div>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="bg-white rounded shadow-sm text-center h-100">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Neha Gupta" 
                  className="w-100 rounded-top"
                />
                <div className="p-4">
                  <h4 className="h5">Neha Gupta</h4>
                  <p className="text-muted">Customer Relations</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default About;
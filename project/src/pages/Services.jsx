import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { tourPackages } from '../data/tourPackages';
import PackageCard from '../components/PackageCard';
import Newsletter from '../components/Newsletter';

const Services = () => {
  const categories = [
    { id: 'all', name: 'All Packages' },
    { id: 'pilgrimage', name: 'Pilgrimage Tours' },
    { id: 'heritage', name: 'Heritage Tours' },
    { id: 'nature', name: 'Nature Tours' }
  ];

  // Filter packages by category for demo purposes
  const getPilgrimagePackages = () => tourPackages.filter(pkg => [2, 5].includes(pkg.id));
  const getHeritagePackages = () => tourPackages.filter(pkg => [1, 3, 6].includes(pkg.id));
  const getNaturePackages = () => tourPackages.filter(pkg => [4].includes(pkg.id));

  return (
    <>
      <div className="hero-section position-relative mb-5">
        <img 
          src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Services" 
          className="w-100"
          style={{ height: '50vh', objectFit: 'cover' }}
        />
        <div className="hero-content">
          <Container>
            <h1 className="hero-title">Our Tour Packages</h1>
            <p className="lead">Discover incredible destinations with our expertly crafted tour packages</p>
          </Container>
        </div>
      </div>

      <section className="section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Explore Our Services</h2>
              <p className="lead">
                From spiritual journeys to heritage tours, we offer a wide range of travel experiences for every type of traveler
              </p>
            </Col>
          </Row>

          <Tab.Container id="package-tabs" defaultActiveKey="all">
            <Nav className="justify-content-center mb-5">
              {categories.map((category) => (
                <Nav.Item key={category.id}>
                  <Nav.Link eventKey={category.id} className="px-4">
                    {category.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            
            <Tab.Content>
              <Tab.Pane eventKey="all">
                <Row className="g-4">
                  {tourPackages.map((pack) => (
                    <Col lg={4} md={6} key={pack.id}>
                      <PackageCard pack={pack} />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="pilgrimage">
                <Row className="g-4">
                  {getPilgrimagePackages().map((pack) => (
                    <Col lg={4} md={6} key={pack.id}>
                      <PackageCard pack={pack} />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="heritage">
                <Row className="g-4">
                  {getHeritagePackages().map((pack) => (
                    <Col lg={4} md={6} key={pack.id}>
                      <PackageCard pack={pack} />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="nature">
                <Row className="g-4">
                  {getNaturePackages().map((pack) => (
                    <Col lg={4} md={6} key={pack.id}>
                      <PackageCard pack={pack} />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Our Travel Services</h2>
              <p className="lead">
                We provide comprehensive travel solutions to make your journey hassle-free
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={4}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3 className="h4 mb-3">Flight Bookings</h3>
                <p>We offer competitive airfares for domestic and international flights with all major airlines.</p>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Best price guarantee</li>
                  <li className="mb-2">✓ Flexible booking options</li>
                  <li className="mb-2">✓ Group booking discounts</li>
                  <li>✓ 24/7 customer support</li>
                </ul>
              </div>
            </Col>

            <Col md={4}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3 className="h4 mb-3">Hotel Reservations</h3>
                <p>From luxury resorts to budget stays, we have partnerships with quality accommodations.</p>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Curated hotel selection</li>
                  <li className="mb-2">✓ Special rates & upgrades</li>
                  <li className="mb-2">✓ Last-minute bookings</li>
                  <li>✓ Authentic guest reviews</li>
                </ul>
              </div>
            </Col>

            <Col md={4}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3 className="h4 mb-3">Custom Tours</h3>
                <p>Let us create a personalized travel itinerary based on your interests and preferences.</p>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Tailored experiences</li>
                  <li className="mb-2">✓ Local experiences & activities</li>
                  <li className="mb-2">✓ Expert travel consultants</li>
                  <li>✓ Seamless multi-destination tours</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Services;
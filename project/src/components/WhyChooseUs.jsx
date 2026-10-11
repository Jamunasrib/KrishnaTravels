import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaGlobe, 
  FaHandshake, 
  FaShieldAlt, 
  FaRegSmile 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaGlobe size={40} className="text-primary mb-4" />,
      title: 'Expert Travel Guides',
      description: 'Our experienced guides ensure you have the best experience at each destination.'
    },
    {
      icon: <FaHandshake size={40} className="text-primary mb-4" />,
      title: 'Best Price Guarantee',
      description: 'We offer competitive prices and will match any better offer you find.'
    },
    {
      icon: <FaShieldAlt size={40} className="text-primary mb-4" />,
      title: 'Safe & Secure Travel',
      description: 'Your safety is our priority with 24/7 support during your entire journey.'
    },
    {
      icon: <FaRegSmile size={40} className="text-primary mb-4" />,
      title: 'Customer Satisfaction',
      description: '98% of our customers rate their experience as excellent or very good.'
    }
  ];

  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="lead mb-5">
              Krishna Travels is committed to making your travel experience smooth, enjoyable, and memorable
            </p>
          </Col>
        </Row>
        
        <Row>
          {reasons.map((reason, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 border-0 text-center p-4 shadow-sm">
                <Card.Body>
                  {reason.icon}
                  <Card.Title className="fw-bold mb-3">{reason.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {reason.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
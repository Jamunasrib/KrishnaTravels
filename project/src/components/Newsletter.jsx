import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section className="bg-primary py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center text-white">
            <h2 className="mb-3">Subscribe to Our Newsletter</h2>
            <p className="mb-4">
              Get exclusive deals, travel inspiration and tips delivered to your inbox
            </p>
            <Form>
              <Row className="justify-content-center">
                <Col md={8}>
                  <InputGroup>
                    <Form.Control
                      placeholder="Enter your email address"
                      aria-label="Enter your email address"
                      type="email"
                    />
                    <Button variant="light" className="text-primary">
                      <FaPaperPlane className="me-2" /> Subscribe
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Check
                    type="checkbox"
                    id="newsletter-consent"
                    label="I agree to receive promotional emails and accept the privacy policy"
                    className="text-white-50 text-start d-inline-block"
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
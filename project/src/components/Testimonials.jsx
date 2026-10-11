import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      location: 'Delhi',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Our trip to Rajasthan was perfectly organized by Krishna Travels. The accommodations were excellent, and our guide was knowledgeable and friendly. Would highly recommend!'
    },
    {
      id: 2,
      name: 'Priya Patel',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The Kerala backwaters tour was a dream come true! Krishna Travels took care of every detail, from comfortable houseboats to delicious local cuisine. An unforgettable experience.'
    },
    {
      id: 3,
      name: 'Akash Singh',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'We booked a family trip to Goa through Krishna Travels and were impressed with their attention to detail. The resort was perfect for our needs and the activities were well-planned.'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      location: 'Kolkata',
      image: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The Golden Triangle tour was amazing! Krishna Travels provided experienced guides who shared fascinating insights about each destination. The hotels were comfortable and well-located.'
    }
  ];

  return (
    <section className="section bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="lead mb-5">
              Hear from travelers who have experienced our exceptional service
            </p>
          </Col>
        </Row>
        
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <div className="testimonial-card bg-white shadow-sm rounded">
                <FaQuoteLeft size={30} className="text-primary mb-4" />
                <p className="testimonial-text mb-4">{testimonial.text}</p>
                <div className="d-flex align-items-center justify-content-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="ms-3 text-start">
                    <h5 className="mb-1">{testimonial.name}</h5>
                    <p className="text-muted mb-0">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
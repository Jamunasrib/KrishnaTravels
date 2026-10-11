import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import PackageCard from './PackageCard';
import { tourPackages } from '../data/tourPackages';

const PopularDestinations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Get only the popular packages
  const popularPackages = tourPackages.filter(pack => pack.popular);

  return (
    <section className="section bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">Popular Destinations</h2>
            <p className="lead mb-5">
              Explore our most booked destinations and start planning your next adventure
            </p>
          </Col>
        </Row>
        
        <Slider {...settings}>
          {popularPackages.map((pack) => (
            <div key={pack.id} className="px-2">
              <PackageCard pack={pack} />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default PopularDestinations;
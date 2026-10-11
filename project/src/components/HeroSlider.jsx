import { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Explore India\'s Rich Heritage',
      subtitle: 'Discover ancient temples, majestic forts, and vibrant cultures',
      buttonText: 'Explore Tours',
      buttonLink: '/services'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/5799855/pexels-photo-5799855.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Experience The Taj Mahal',
      subtitle: 'Visit one of the seven wonders of the world',
      buttonText: 'Book Now',
      buttonLink: '/services'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Serene Beach Getaways',
      subtitle: 'Relax and unwind at India\'s most beautiful beaches',
      buttonText: 'View Packages',
      buttonLink: '/services'
    }
  ];

  return (
    <div className="hero-slider">
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        controls={true}
        indicators={true}
        interval={5000}
        fade
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div 
              style={{
                backgroundImage: `url(${slide.image})`,
                height: '80vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <Carousel.Caption className="text-start pb-5 mb-5">
              <h1 className="display-3 fw-bold">{slide.title}</h1>
              <p className="lead mb-4">{slide.subtitle}</p>
              <Button 
                as={Link} 
                to={slide.buttonLink} 
                variant="primary" 
                size="lg" 
                className="me-3"
              >
                {slide.buttonText}
              </Button>
              <Button 
                as={Link} 
                to="/contact" 
                variant="outline-light" 
                size="lg"
              >
                Contact Us
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
import { Card, Badge, Button } from 'react-bootstrap';
import { FaStar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PackageCard = ({ pack }) => {
  const { id, name, location, image, price, duration, rating, discount } = pack;

  return (
    <Card className="package-card h-100 border-0 shadow-sm">
      <div className="position-relative">
        <Card.Img variant="top" src={image} alt={name} className="card-img-top" />
        {discount && (
          <Badge 
            bg="danger" 
            className="position-absolute top-0 end-0 m-2 py-2 px-3"
          >
            {discount}% OFF
          </Badge>
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            <FaStar className="text-warning me-1" />
            <span>{rating}</span>
          </div>
          <div className="d-flex align-items-center text-muted">
            <FaClock className="me-1" size={14} />
            <small>{duration}</small>
          </div>
        </div>
        
        <Card.Title className="mb-1">{name}</Card.Title>
        
        <div className="d-flex align-items-center mb-3">
          <FaMapMarkerAlt className="text-primary me-1" size={14} />
          <small className="text-muted">{location}</small>
        </div>
        
        <Card.Text className="package-price mb-3">
          ₹{price.toLocaleString()}
          <small className="text-muted"> / per person</small>
        </Card.Text>
        
        <div className="mt-auto">
          <Button 
            as={Link}
            to={`/package/${id}`}
            variant="primary" 
            className="w-100"
          >
            Book Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PackageCard;
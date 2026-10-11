import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [location]);

  const closeNavbar = () => {
    setExpanded(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <BootstrapNavbar 
      expand="lg" 
      expanded={expanded} 
      fixed="top" 
      className={`py-3 ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={closeNavbar}>
          <span className="fw-bold fs-4" style={{ color: scrolled ? '#1a73e8' : '#ffffff' }}>
            Krishna Travels
          </span>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={closeNavbar}
              className={location.pathname === '/' ? 'active' : ''}
              style={{ 
                color: scrolled ? '#333' : '#ffffff',
                fontWeight: location.pathname === '/' ? '600' : '400'
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/services" 
              onClick={closeNavbar}
              className={location.pathname === '/services' ? 'active' : ''}
              style={{ 
                color: scrolled ? '#333' : '#ffffff',
                fontWeight: location.pathname === '/services' ? '600' : '400'
              }}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={closeNavbar}
              className={location.pathname === '/about' ? 'active' : ''}
              style={{ 
                color: scrolled ? '#333' : '#ffffff',
                fontWeight: location.pathname === '/about' ? '600' : '400'
              }}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              onClick={closeNavbar}
              className={location.pathname === '/contact' ? 'active' : ''}
              style={{ 
                color: scrolled ? '#333' : '#ffffff',
                fontWeight: location.pathname === '/contact' ? '600' : '400'
              }}
            >
              CONTACT
            </Nav.Link>
          </Nav>
          
          <Nav>
            {user ? (
              <Dropdown>
                <Dropdown.Toggle 
                  variant={scrolled ? "primary" : "light"}
                  className="d-flex align-items-center"
                >
                  <FaUserCircle className="me-2" /> {user.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Button 
                  as={Link} 
                  to="/login" 
                  variant={scrolled ? "primary" : "outline-light"}
                  className="me-2 d-flex align-items-center"
                  onClick={closeNavbar}
                >
                  <FaUserCircle className="me-2" /> Login
                </Button>
                <Button 
                  as={Link} 
                  to="/signup" 
                  variant={scrolled ? "outline-primary" : "light"}
                  onClick={closeNavbar}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
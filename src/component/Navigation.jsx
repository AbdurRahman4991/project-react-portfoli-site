
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
//Previews //
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
 import { Link,  } from "react-router-dom";
 import logo from '../assets/images/logo.png';
function Navigation() {
    return (
        <div>
<Navbar expand="lg" className="bg-danger fixed-top" >
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navItem' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='navItem'  as={Link} to="/about">About</Nav.Link>
            <Nav.Link className='navItem' as={Link} to="/service">Service</Nav.Link>
            <Nav.Link className='navItem' as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link className='navItem' as={Link} to="/blog">Blog</Nav.Link>
            <NavDropdown  className='text-whit' title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/todo">To Do </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


            {/* <Container fluid={true} className='p-0 m-0'>            
                <Navbar expand="lg" className="fixed-top">
                    <Container >
                        <Navbar.Brand to="/"><img className='logo ' src={logo} alt="" /></Navbar.Brand>
                        <Link className='navItem' to="/">Home</Link>
                        <Link className='navItem' to="/about">About</Link>
                        <Link className='navItem' to="/service">Service</Link>
                        <Link className='navItem' to="/contact">Contact</Link>
                        <Link className='navItem' to="/blog">Blog</Link>
                    </Container>
                </Navbar>
            </Container> */}
        </div>
    );
}

export default Navigation;
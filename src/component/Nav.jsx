import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Nav() {
    return ( 
        <div>           
            <Container fluid={true}>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand to="">Navbar</Navbar.Brand>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/service">Service</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                    </Container>
                </Navbar>
            </Container>
        </div>
     );
}

export default Nav;
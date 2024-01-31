
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link,  } from "react-router-dom"
function Nav() {
    return ( 
        <div>           
            <Container fluid={true}>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand to="">Navbar</Navbar.Brand>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/blog">Blog</Link>
                    </Container>
                </Navbar>
            </Container>
        </div>
     );
}

export default Nav;

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link,  } from "react-router-dom";
import logo from '../assets/images/logo.Avif';
function Nav() {
    return ( 
        <div>           
            <Container fluid={true} className='p-0 m-0'>
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
            </Container>
        </div>
     );
}

export default Nav;

import { Col, Row, Container } from 'react-bootstrap';
import Image2 from '../assets/images/slide2.jpg'
import Image from '../assets/images/slide.jpg'
import Image1 from '../assets/images/slide3.jpg'
function About() {
    return (
        <div>
            <Container  className="mt-5 text-center ">
                <Row className='m-auto'>
                    <Col md='8' className='m-auto'>
                        <h3>About us</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit facere ipsa aspernatur vel quidem suscipit optio aliquid. Aliquam totam quas reprehenderit soluta. Tenetur, voluptates repudiandae necessitatibus laborum aspernatur tempore. </p>

                    </Col>
                </Row>

                <Row>
                    <Col md="4">
                        <img src={Image} alt="" />
                        <h4>Hi Cycle</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                    <Col md="4">
                        <img src={Image1} alt="" />
                        <h4>Hero Cycle</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                    <Col md="4">
                        <img src={Image2} alt="" />
                        <h4>Nion Cycle</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
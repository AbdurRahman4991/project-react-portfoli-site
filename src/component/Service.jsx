import { Container, Row, Col } from "react-bootstrap";
import { BiAccessibility } from "react-icons/bi";

function Service() {
    return (
        <div>
            <Container className="mt-5 topSpace">
            <Row className="">
                    <Col>
                        <h3>Our Service</h3>
                        <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit facere ipsa aspernatur vel quidem suscipit optio aliquid. Aliquam totam quas reprehenderit soluta. Tenetur, voluptates repudiandae necessitatibus laborum aspernatur tempore. </p>

                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <div className="service">
                            <div className="serviceIcon">
                                <BiAccessibility className="my-4" />
                            </div>
                            <p className="mt-3" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptatum, qui doloremque quos blanditiis consequuntur dolores deserunt quis ut aut velit vero totam veniam.</p>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="service">
                        <div className="serviceIcon">
                                <BiAccessibility className="my-4" />
                            </div>
                            <p className="mt-3" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptatum, qui doloremque quos blanditiis consequuntur dolores deserunt quis ut aut velit vero totam veniam.</p>
                        
                        </div> 
                    </Col>
                    <Col md="4">
                    <div className="service">
                    <div className="serviceIcon">
                                <BiAccessibility className="my-4" />
                            </div>
                            <p className="mt-3" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptatum, qui doloremque quos blanditiis consequuntur dolores deserunt quis ut aut velit vero totam veniam.</p>
                        
                    </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Service;
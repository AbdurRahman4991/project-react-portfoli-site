
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function Contact() {
    return (
        <div>
            <Container className='m-auto topSpace '>
                <Row>
                   <h3 className='text-center'>Contact us</h3>
                    <Form className='text-center mt-4'>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">

        <Col sm="12">
          <Form.Control   placeholder="Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Col sm="12">
          <Form.Control   placeholder="Email" />
        </Col>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       
        <Form.Control placeholder='Message' as="textarea" rows={8}  />
      </Form.Group>

      
      <Button >Primary</Button>{' '}
    </Form>
                   
                </Row>
            </Container>

        </div>
    );
}

export default Contact;
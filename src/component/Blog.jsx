import {Container,Row, Col} from 'react-bootstrap';
import BlogImg from '../assets/images/blog.jpg'
function Blog() {
    return (
        <div>
            <Container className='topSpace'>
                <Row >
                    <Col md='6'>
                        <img style={{width:'100%'}} src={BlogImg} alt="" />
                    </Col>
                    <Col md='6'>
                        <p style={{textAlign:'justify'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam maiores, totam saepe quae voluptatum aliquid optio veritatis provident dolorem exercitationem distinctio magni qui dolore expedita. Maiores ducimus ipsa nesciunt!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam maiores, totam saepe quae voluptatum aliquid optio veritatis provident dolorem exercitationem distinctio magni qui dolore expedita. Maiores ducimus ipsa nesciunt!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam maiores, totam saepe quae voluptatum aliquid optio veritatis provident dolorem exercitationem distinctio magni qui dolore expedita. Maiores ducimus ipsa nesciunt!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam maiores, totam saepe quae voluptatum aliquid optio veritatis provident dolorem exercitationem distinctio magni qui dolore expedita. Maiores ducimus ipsa nesciunt!
                            </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blog;
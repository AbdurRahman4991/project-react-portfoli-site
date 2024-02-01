import Carousel from 'react-bootstrap/Carousel';
import image from "../assets/images/slide.jpg"
import image2 from "../assets/images/slide2.jpg"
import { Container } from 'react-bootstrap';
function Carosal() {
    return (
        <div>
          <Container className='mt-5'>
          <Carousel data-bs-theme="dark" className='mt-5' >
      <Carousel.Item >
        <img
          className="d-block w-50"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='d-flax'>
        <img
          className="d-block w-50"
          src={image}
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Container>
            
           

         
        </div>
    );
}

export default Carosal;
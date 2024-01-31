import Carousel from 'react-bootstrap/Carousel';
import image from "../assets/images/slide.jpg"
import image2 from "../assets/images/slide2.jpg"
function Carosal() {
    return (
        <div>
            
           <Carousel data-bs-theme="dark" >
      <Carousel.Item>
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

         
        </div>
    );
}

export default Carosal;<div>
<h1>Carosal</h1></div>
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import cycle1 from "../assets/images/cycle1.jpg"
import cycle2 from "../assets/images/cycle2.jpg"
import cycle3 from "../assets/images/cycle3.jpg"
import { Container, Row, Col } from "react-bootstrap"
function Carosal() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay:true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <div>
          <Container fluid={true} className="p-0 mt-5 ">
            <Row className="p-0 m-0" >
              <Col md="12" className="p-0 m-0">
                  <Slider {...settings} >
                    <div>
                      <h3>
                        <img src={cycle1} alt="w-100"  />
                        <div className="overlay">
                          <div className="content-data">
                          <span>WELCOM TO OUR CYCLE MART</span>
                          <p>Owl carosal dummy text </p>
                          </div>

                        </div>
                        </h3>
                      
                    </div>
                    <div>
                      <h3><img src={cycle2} alt=""/></h3>
                    </div>
                    <div>
                      <h3><img src={cycle3} alt="" /></h3>
                    </div>

                  </Slider>
              </Col>
            </Row>
          </Container>
            
           

         
        </div>
    );
}

export default Carosal;
import Carousel from 'react-bootstrap/Carousel';
import image1 from "./image/child.webp";
import fixed from "./image/coin.jpg";
import deposit from "./image/deposit.jpg"
export default function Slide(){
    return(
        <>
        <Carousel variant="dark" id="slide">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fixed}
          alt="Second slide"
          id='fixed1'
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={deposit}
          alt="Third slide"
          id='deposit1'
        />
        
      </Carousel.Item>
    </Carousel>
        </>
    )
}
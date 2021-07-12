import React from 'react';
// import { Container } from './styles';
// import Carousel from 'react-elastic-carousel';
// import { Carousel, CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import Video1 from '../assets/video.mp4'
import Video1 from '../../assets/video.mp4'

const CarouselComponent = () => {
    return (
      <Carousel style={{width: '100%'}}>
      <Carousel.Item>
          <video  style={{width: "100%"}}>
            <source src={Video1} />
          </video>
          {/* <img style={{width: '100%'}} src={Video1}/> */}
        <Carousel.Caption
          // as={teste}
        >
          <h3>First slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      {/* <img style={{width: '100%'}} src={Video1}/> */}
      <video style={{width: "100%"}}>
            <source src={Video1} />
          </video>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      {/* <img  src={Video1}/> */}
      <video style={{width: "100%"}}>
            <source src={Video1} />
          </video>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    );
}

export default CarouselComponent;

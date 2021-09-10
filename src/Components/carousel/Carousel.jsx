import React from "react";
import Carousel1 from '../../Assets/Img/download.jpg'
import Carousel2 from '../../Assets/Img/1.jpg'
import Carousel3 from '../../Assets/Img/2.jpg'
import { Carousel, Container } from "react-bootstrap";

const Carousels = () => {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item className="mt-4 ms-100">
          <img
            className="d-block "
            src={Carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-auto"
            src={Carousel2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-auto"
            src={Carousel3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carousels;

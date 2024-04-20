import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function eventsslider(){
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Description for first slide...</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Description for second slide...</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Description for third slide...</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}
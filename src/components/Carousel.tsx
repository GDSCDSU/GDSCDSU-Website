// components/Carousel.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    "/Slider images/Slider1.svg",
    "/Slider images/Slider2.svg",
    "/Slider images/Slider3.svg",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); 
    return () => clearInterval(interval);
  }, []);

  const renderItems = () => {
    const slides = [];
    for (let i = 0; i < items.length; i++) {
      const firstItemIndex = (currentIndex + i) % items.length;
      const secondItemIndex = (currentIndex + i + 1) % items.length;
      slides.push(
        <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <img className="img-fluid" src={items[firstItemIndex]} alt={`Slide ${firstItemIndex + 1}`} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <img className="img-fluid" src={items[secondItemIndex]} alt={`Slide ${secondItemIndex + 1}`} />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return slides;
  };

  return (
    <div className="container text-center my-3">
      <div className="row mx-auto my-auto">
        <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
          <div className="carousel-inner w-100" role="listbox">
            {renderItems()}
          </div>
          <a className="carousel-control-prev w-auto" href="#eventsCarousel" role="button" onClick={handlePrev}>
            <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next w-auto" href="#eventsCarousel" role="button" onClick={handleNext}>
            <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

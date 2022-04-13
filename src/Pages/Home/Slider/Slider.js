import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import bmw from "../../../Images/slider/slider1.png";
import bugatti from "../../../Images/slider/slider2.png";
import ferrari from "../../../Images/slider/slider3.png";

const Slider = () => {
 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img  className="d-block w-100" src={bugatti} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-dark">Choose your first McLaren from us - 20% Off</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bmw} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-dark">Best Lamborgini importer in Bangladesh</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ferrari} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-dark">Pre order your Bugatti now - 30% Off</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };

export default Slider;

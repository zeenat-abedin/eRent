import React from "react";

import { Carousel } from "react-bootstrap";

const PostCarousel = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <img className="d-block w-100" src={image} alt="eRent" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PostCarousel;

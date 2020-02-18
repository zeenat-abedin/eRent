import React from "react";

import { Carousel } from "react-bootstrap";

const PostCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.cnbcfm.com/api/v1/image/105387163-1533822270436gettyimages-614264148.jpeg?v=1533822315&w=678&h=381"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://objectivefinancialpartners.com/wp-content/uploads/2016/02/shutterstock_73089730.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d1q6pqvn5tdr0p.cloudfront.net/24459/medium/e-hall.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default PostCarousel;

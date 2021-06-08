import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.fbi.gov/image-repository/paul-abbate-speaks-at-cyber-press-conference-060721.jpg/@@images/image/high"
            alt="Colonial Pipeline"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.fbi.gov/image-repository/fbi-eads-051221.jpg/@@images/image/high"
            alt="FBI Leadership"
            />
        </Carousel.Item>
      </Carousel> 
    </div>
  )
}

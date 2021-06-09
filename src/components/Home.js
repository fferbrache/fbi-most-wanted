import React from 'react';
import { Carousel } from 'react-bootstrap';
import trojanShield from './trojanShield.jpg'

export default function Home() {
  return (
    <div>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={trojanShield}
            alt="Operation Trojan Shield"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.fbi.gov/image-repository/paul-abbate-speaks-at-cyber-press-conference-060721.jpg/@@images/image/high"
            alt="Colonial Pipeline"
            />
        <Carousel.Caption>
          <h1>Colonial Pipeline</h1>
          <h3>FBI Deputy Director Paul M. Abbate’s Remarks at Press Conference Regarding the Ransomware Attack on Colonial Pipeline</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.fbi.gov/image-repository/fbi-eads-051221.jpg/@@images/image/high"
            alt="FBI Leadership"
            />
        <Carousel.Caption>
          <h1>FBI Leadership</h1>
          <h3>New Executives Reflect Bureau's Push for Diversity</h3>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
    </div>
  )
}

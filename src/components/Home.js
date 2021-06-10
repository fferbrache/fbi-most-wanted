import React from 'react';
import { Carousel } from 'react-bootstrap';
import trojanShield from './trojanShield.jpg'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Home() {
  return (
    <div>
        <Carousel>
        <Carousel.Item>
          <a href="https://www.fbi.gov/news/pressrel/press-releases/fbi-deputy-director-paul-m-abbates-remarks-at-press-conference-regarding-the-ransomware-attack-on-colonial-pipeline">
            <img
            className="d-block w-100"
            src="https://www.fbi.gov/image-repository/paul-abbate-speaks-at-cyber-press-conference-060721.jpg/@@images/image/high"
            alt="Colonial Pipeline"
            />
          </a>
        <Carousel.Caption>
          <h1>Colonial Pipeline</h1>
          <h3>FBI Deputy Director Paul M. Abbate’s Remarks at Press Conference Regarding the Ransomware Attack on Colonial Pipeline</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.fbi.gov/news/stories/fbi-global-partners-announce-results-of-operation-trojan-shield-060821">
            <img
            className="d-block w-100"
            src={trojanShield}
            alt="Operation Trojan Shield"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.fbi.gov/news/stories/new-executives-reflect-fbis-push-for-diversity-051221">
            <img
            className="d-block w-100"
            src="https://www.fbi.gov/image-repository/fbi-eads-051221.jpg/@@images/image/high"
            alt="FBI Leadership"
            />
          </a>
        <Carousel.Caption>
          <h1>FBI Leadership</h1>
          <h3>New Executives Reflect Bureau's Push for Diversity</h3>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      <div>
      <TwitterTimelineEmbed
          sourceType="profile"
          // The preferred screen name goes next: 
          screenName="FBI"
          // Style options goes here:
          options={{ height: 600 }}
/>
      </div>
    </div>
  )
}

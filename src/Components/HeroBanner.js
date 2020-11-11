import React from 'react';
import heroimage from '../images/heroimage.jpg';

function HeroBanner() {
  return (
    <div>
      <div className="container">
        <img src={heroimage} alt="heroImage" />
        <div className="heroBanner">
          <div className="technology">
            <h2>Technology</h2>
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. C/O
              https://placeholder.com/text/lorem-ipsum/
            </p>
          </div>
          <div className="experience">
            <h2>Experience</h2>
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. C/O
              https://placeholder.com/text/lorem-ipsum/
            </p>
          </div>
          <div className="assurance">
            <h2>Assurance</h2>
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. C/O
              https://placeholder.com/text/lorem-ipsum/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;

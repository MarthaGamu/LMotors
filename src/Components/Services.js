import React from 'react';
import bmw from '../images/bmw.png';

function Services() {
  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>The Services We provide include:</h1>
        </div>
        <div className="contentWrapper">
          <div className="information">
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. C/O
              https://placeholder.com/text/lorem-ipsum/
            </p>
          </div>
          <div className="car">
            <img src={bmw} alt="car" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

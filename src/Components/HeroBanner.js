import React from 'react';
import heroimage from '../images/heroimage.jpg';
import styled from 'styled-components';

const HeroStyling = styled.div`
  .container {
    width: 100vw;
    .hero {
      width: 100%;
      height: 90vh;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: rgb(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
          color: white;
          text-align: center;
          h1 {
            font-size: 3.5rem;
          }
          button {
            padding: 1rem 3rem;
            margin-top: 1.5rem;
            font-size: 1.2rem;
            background: red;
            color: white;
          }
        }
      }
    }
  }
  .heroBanner {
    width: 100vw;
    height: 20rem;
    background: #0071bb;
    color: white;
    display: flex;

    .innerContent {
      padding: 3rem;
      text-align: center;
      border-left: 0.5px solid white;

      h2 {
        margin: 0;
        font-size: 2rem;
      }
    }
  }
  @media (min-width: 1800px) {
    .heroBanner {
      .innerContent {
        padding: 5rem 7rem;
      }
    }
  }
`;
function HeroBanner() {
  return (
    <HeroStyling>
      <div className="container">
        <div className="hero">
          <img src={heroimage} alt="heroImage" />
          <div className="overlay">
            <div className="content">
              <h1>Vehicle Repairs & Servicing</h1>
              <button>Get in touch</button>
            </div>
          </div>
        </div>
        <div className="heroBanner">
          <div className="innerContent">
            <h2>Technology</h2>
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. C/O
              https://placeholder.com/text/lorem-ipsum/
            </p>
          </div>
          <div className="innerContent">
            <h2>Experience</h2>
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. C/O
              https://placeholder.com/text/lorem-ipsum/
            </p>
          </div>
          <div className="innerContent">
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
    </HeroStyling>
  );
}

export default HeroBanner;

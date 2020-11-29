import React from 'react';
import mechanics from '../images/mechanics.jpg';
import repair from '../images/repair.jpg';
import fixone from '../images/fixone.jpg';
import carwash from '../images/carwash.jpg';
import interior from '../images/interior.jpg';
import styled from 'styled-components';

const StyledGallery = styled.div`
  width: 100vw;
  height: 45rem;
  background: #e5ecf2;
  text-align: center;

  h1 {
    padding-top: 3rem;
    color: #122e47;
    font-size: 2.5rem;
  }
  .container {
    width: 80vw;
    height: 30rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    .innerContainer {
      width: 350px;
      height: 250px;
      border: 2px solid #151e3d;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 1024px) {
    height: 80rem;
  }
`;
function Gallery() {
  return (
    <StyledGallery>
      <h1>Our Gallery</h1>
      <div className="container">
        <div className="innerContainer">
          <img src={mechanics} alt="mechanic" />
        </div>
        <div className="innerContainer">
          <img src={repair} alt="mechanic" />
        </div>
        <div className="innerContainer">
          <img src={fixone} alt="mechanic" />
        </div>
        <div className="innerContainer">
          <img src={carwash} alt="mechanic" />
        </div>
        <div className="innerContainer">
          <img src={interior} alt="mechanic" />
        </div>
      </div>
    </StyledGallery>
  );
}

export default Gallery;

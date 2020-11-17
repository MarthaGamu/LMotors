import React from 'react';
import fixing from '../images/fixing.jpg';
import styled from 'styled-components';

const HeroStyled = styled.div`
  .imgContainer {
    width: 100vw;
    height: 20rem;
    position: relative;
    font-size: 2rem;
    color: white;

    .overlay {
      background: rgba(0, 0, 0, 0.6);
      width: 100vw;
      height: 20rem;
      position: absolute;
      top: 0%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

function HeroService() {
  return (
    <HeroStyled>
      <div className="imgContainer">
        <img src={fixing} alt="background" />
        <div className="overlay">
          <h1>Our Service</h1>
        </div>
      </div>
    </HeroStyled>
  );
}

export default HeroService;

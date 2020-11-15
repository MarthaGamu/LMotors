import React from 'react';
import { brands } from '../data/Brands';
import styled from 'styled-components';

const BrandsStyled = styled.div`
  width: 100vw;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    padding-top: 3rem;
    font-size: 3rem;
  }
  .logoWrapper {
    height: 20rem;
    width: 80vw;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 4rem;

    .logos {
      width: 15rem;
      height: 15rem;
      border: 1px solid grey;
      padding: 2rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default function Brands() {
  return (
    <BrandsStyled>
      <h1>EXPLORE OUR SPECIAL BRANDS</h1>
      <div className="logoWrapper">
        {brands.map((brand) => (
          <div className="logos">
            <img src={brand.name} alt="car logos" />
          </div>
        ))}
      </div>
    </BrandsStyled>
  );
}

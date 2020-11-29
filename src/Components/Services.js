import React from 'react';
import bmw from '../images/bmw.png';
import styled from 'styled-components';
import { services } from '../data/Services';
const ServiceStyled = styled.div`
  width: 100vw;
  height: 65rem;
  color: #122e47;
  font-weight: 600;

  background: #e5ecf2;
  h1 {
    font-size: 3rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    text-align: center;
    color: #122e47;
  }
  .contentWrapper {
    width: 70vw;
    margin: auto;
    display: flex;
    justify-content: center;

    .information {
      flex: 1;

      display: flex;
      justify-content: center;
      .services {
        padding-left: 3rem;
      }
    }
    .car {
      flex: 2;
      display: flex;
      justify-content: center;
      .innercar {
        width: 800px;
        height: 500px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .explanation {
    width: 50vw;
    margin: auto;

    text-align: center;
    margin-top: 5rem;
  }
`;

function Services() {
  return (
    <ServiceStyled>
      <div className="container">
        <div className="heading">
          <h1>Our Services</h1>
        </div>
        <div className="contentWrapper">
          <div className="information">
            <div className="services">
              <h3>Services we provide include:</h3>
              {services.map((service) => (
                <p key={service.id}>{service.name}</p>
              ))}
            </div>
          </div>
          <div className="car">
            <div className="innercar">
              <img src={bmw} alt="car" />
            </div>
          </div>
        </div>
        <div className="explanation">
          <p>
            You can be confident that we only use main dealer or premium quality
            after-market parts for our repairs. This means that you save money
            without compromising on quality.
          </p>
          <p>
            Our servicing follows all of your car manufacturer’s stipulations
            ensuring that your warranty is maintained.
          </p>
        </div>
      </div>
    </ServiceStyled>
  );
}

export default Services;

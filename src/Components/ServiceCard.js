import React from 'react';
import styled from 'styled-components';
import { servicesPage } from '../data/Services';

const StyledCard = styled.div`
  width: 100vw;
  height: 85rem;
  background: #e5ecf2;

  .heading {
    width: 100vw;
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 2rem;
    font-size: 2rem;
    color: #122e47;
  }
  .containerWrapper {
    padding-top: 3rem;
    width: 98vw;
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 3rem;
    @media (min-width: 1800px) {
      width: 60vw;
    }
    @media (max-width: 1030px) {
      grid-template-columns: auto auto;
    }
    @media (max-width: 770px) {
      grid-template-columns: auto auto;
    }

    .container {
      width: 380px;
      height: 500px;
      background: white;
      box-shadow: 10px 10px 5px 2px rgba(0, 0, 0, 0.75);

      .card {
        .imgContainer {
          width: 380px;
          height: 280px;

          img {
            width: 100%;
            height: 100%;
            object: cover;
          }
        }
        .content {
          padding: 1.2rem;
          h3 {
            color: #122e47;
          }
        }
      }
    }
  }

  @media (max-width: 770px) {
    height: 230rem;
    .heading {
      font-size: 1.5rem;
    }
    .containerWrapper {
      display: flex;
      flex-direction: column;

      .container {
        width: 320px;
        margin: auto;

        .card {
          .imgContainer {
            width: 320px;
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    height: 120rem;
  }
  @media (min-width: 1280px) {
    height: 85rem;
  }
`;

function ServiceCard() {
  return (
    <StyledCard>
      <div className="heading">
        <h1>Our Services</h1>
      </div>
      <div className="containerWrapper">
        {servicesPage.map((service) => {
          return (
            <div className="container" key={service.id}>
              <div className="card">
                <div className="imgContainer">
                  <img src={service.img} alt="services" />
                </div>
                <div className="content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledCard>
  );
}

export default ServiceCard;

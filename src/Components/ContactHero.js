import React from 'react';
import fixing from '../images/fixing.jpg';
import styled from 'styled-components';

const HeroStyled = styled.div`
  h3,
  h5 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .imgContainer {
    width: 100vw;
    height: 20rem;
    position: relative;
    font-size: 2rem;
    color: white;

    .overlay {
      background: rgba(0, 0, 0, 0.8);
      width: 100vw;
      height: 20rem;
      position: absolute;
      top: 0%;
      display: flex;
      .content {
        width: 90vw;
        margin: auto;
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        .time {
          font-size: 1.4rem;
        }
        .phone {
          font-size: 3rem;
          font-weight: 600;
          i {
            font-size: 4rem;
            @media (max-width: 1030px) {
              font-size: 3rem;
            }
          }
        }
        .title {
          font-weight: 900;
          font-size: 2rem;
          @media (max-width: 1030px) {
            font-size: 1.5rem;
          }
        }
        .rightContent {
          text-align: center;
        }
        @media (min-width: 1800px) {
          width: 60vw;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 770px) {
    .rightContent {
      display: none;
    }
  }
`;

function ContactHero() {
  return (
    <HeroStyled>
      <div className="imgContainer">
        <img src={fixing} alt="background" />
        <div className="overlay">
          <div className="content">
            <div className="leftContent">
              <h3>Make an enquiry</h3>
              <p className="time">Give us a call or drop us an enquiry</p>
            </div>
            <div className="rightContent">
              <h5 className="title">SPEAK TO A TECHINICIAN NOW</h5>
              <p className="phone">
                <span>
                  <i className="fas fa fa-phone"></i> +447751099803
                </span>
              </p>
              <p className="time">8am-5:30pm Mon-Fri</p>
            </div>
          </div>
        </div>
      </div>
    </HeroStyled>
  );
}

export default ContactHero;

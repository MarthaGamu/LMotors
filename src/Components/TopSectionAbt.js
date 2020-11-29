import React from 'react';
import styled from 'styled-components';
import bmw from '../images/about.jpg';
const StyledTop = styled.div`
  width: 100vw;
  height: 35rem;
  background: #e5ecf2;
  color: #122e47;

  .container {
    width: 80vw;
    height: 100%;

    margin: auto;
    display: flex;
    .imageSide {
      flex: 1;
      .imgContainer {
        padding-top: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
    .inforSide {
      flex: 1;

      .content {
        padding: 3rem 2rem;
        line-height: 1.8;
        .quotebtn {
          padding: 1rem 1.5rem;
          background: #122e47;
          color: white;
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 768px) {
    height: 50rem;
    .container {
      flex-direction: column;
      .inforSide {
        .content {
          padding: 0.2rem 0.2rem;
          h1 {
            padding-top: 1rem;
            font-size: 1.5rem;
          }
        }
      }

      .imageSide {
        display: none;
      }
    }
  }
  @media (max-width: 1024px) {
    height: 40rem;
    .container {
      flex-direction: column;
      .inforSide {
        .content {
          padding: 0.2rem 0.2rem;
          h1 {
            padding-top: 1rem;
            font-size: 1.5rem;
          }
        }
      }

      .imageSide {
        display: none;
      }
    }
  }
`;

function TopSectionAbt() {
  return (
    <StyledTop>
      <div className="container">
        <div className="inforSide">
          <div className="content">
            <h1>About Our Company:</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="quotebtn">Call us for a free Quote</button>
          </div>
        </div>
        <div className="imageSide">
          <div className="imgContainer">
            <img src={bmw} alt="bmw" />
          </div>
        </div>
      </div>
    </StyledTop>
  );
}

export default TopSectionAbt;

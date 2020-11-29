import React from 'react';
import styled from 'styled-components';

const VideoStyled = styled.div`
  width: 100vw;
  height: 60rem;

  .container {
    width: 80vw;
    margin: auto;
    text-align: center;
    .heading {
      padding: 3rem 4rem;
      color: #122e47;
      font-size: 1.5rem;
    }
    iframe {
      width: 700px;
      height: 500px;
    }
  }
  @media (max-width: 600px) {
    height: 40rem;
    h1 {
      font-size: 1.5rem;
    }
    .container {
      iframe {
        width: 300px;
        height: 400px;
        display: flex;
        justify-content: center;
      }
    }
  }
`;

function Video() {
  return (
    <VideoStyled>
      <div className="container">
        <div className="heading">
          <h1>Our Garage Tour...</h1>
        </div>
        <iframe
          src="https://www.youtube.com/embed/9QaXPr94sP0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </VideoStyled>
  );
}

export default Video;

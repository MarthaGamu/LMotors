import React from 'react';
import styled from 'styled-components';

const WelcomeStyled = styled.div`
  width: 100vw;
  height: 40rem;

  h2 {
    padding-top: 5rem;
    font-size: 2rem;
    color: #122e47;
  }

  .content {
    width: 60vw;
    margin: auto;
    line-height: 1.6;
    .line {
      width: 100%;
      height: 0.1rem;
      background: #727272;
      margin: 1rem 0rem 1rem 0rem;
    }
    h3 {
      color: #727272;
    }
  }
`;

function Welcome() {
  return (
    <WelcomeStyled>
      <div className="content">
        <h2>Welcome To Lmotors</h2>
        <div className="line"></div>
        <h3>Specialised Service For Special Brands</h3>
        <p>
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          {' '}
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. C/O https://placeholder.com/text/lorem-ipsum/
        </p>
        <p>
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </WelcomeStyled>
  );
}

export default Welcome;

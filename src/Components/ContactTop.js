import React from 'react';
import styled from 'styled-components';

const TopStyled = styled.div`
  width: 100vw;
  height: 7rem;
  background: #155c9a;
  .container {
    width: 80vw;
    margin: auto;
    color: white;
    text-align: center;
    padding-top: 1rem;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default function ContactTop() {
  return (
    <TopStyled>
      <div className="container">
        <h2> We are located at 52 Kaguvi Street,Harare ,Zimbabwe</h2>
      </div>
    </TopStyled>
  );
}

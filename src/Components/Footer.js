import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
  width: 100vw;
  height: 22rem;
  background: #155c9a;
  color: white;
  text-align: center;
  .container {
    width: 80vw;
    height: 12rem;
    margin: auto;
    padding: 2rem;
    display: flex;

    .visit,
    .opening,
    .social {
      flex: 1;

      i {
        margin-left: 1rem;
        font-size: 2rem;
      }
    }
  }
  .copy {
    padding-top: 2rem;
  }
  @media (max-width: 600px) {
    height: 36rem;

    .container {
      height: 24rem;
      flex-direction: column;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <div className="container">
        <div className="visit">
          <h3>VISIT US</h3>
          <p>
            62 St Johns Road,Sevenoaks
            <br />
            United Kingdom
          </p>
          <p>
            <strong>Call:</strong> +2637751099803
          </p>
        </div>
        <div className="opening">
          <h3>OPENING HRS</h3>
          <p>Monday-Saturday</p>
          <span>09:00am-5:00PM</span>
          <p>
            Sunday -{' '}
            <span className="closed">
              <strong>closed</strong>
            </span>
          </p>
        </div>
        <div className="social">
          <h3>SOCIAL MEDIA</h3>
          <div>
            <i class="fab fa fa-facebook-square"></i>
            <i class="fab fa fa-linkedin"></i>
            <i class="fab fa fa-twitter-square"></i>
            <i class="fas fa fa-envelope"></i>
          </div>
        </div>
      </div>
      <div className="copy">
        <p> &#169; 2020 LMOTORS Automotive.All Rights Reserved</p>
      </div>
    </FooterStyled>
  );
}

export default Footer;

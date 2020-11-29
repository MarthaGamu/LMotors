import React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
  width: 100vw;
  height: 25rem;
  background: #e5ecf2;
  color: #122e47;
  line-height: 1.8;
  .container {
    padding-top: 3rem;
    width: 90vw;
    margin: auto;
    h3 {
      font-size: 1.5rem;
      font-weight: 900;
    }
    @media (min-width: 1800px) {
      width: 60vw;
      margin: auto;
    }
  }
  @media (max-width: 770px) {
    height: 40rem;
  }
`;

function ContactDetails() {
  return (
    <StyledDetails>
      <div className="container">
        <h2>Call +44 7751099803 NOW and speak to one of our advisors</h2>
        <h3>OPENING TIMES</h3>
        <p>
          <span>
            <strong>Monday-Friday</strong>{' '}
          </span>
          5:00am :8:00pm
        </p>
        <p>
          <span>
            <strong>Saturday</strong>{' '}
          </span>
          Make an enquiry
        </p>

        <p>
          <span>
            <strong>Sunday</strong>{' '}
          </span>
          Make an enquiry
        </p>
        <p>
          Please feel free to email us at any time,outside of our opening times
          simply fill in our form and we will endeavour to contact you as soon
          as possible.
        </p>
      </div>
    </StyledDetails>
  );
}

export default ContactDetails;

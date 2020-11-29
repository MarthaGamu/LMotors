import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  width: 100vw;
  height: 70rem;
  input {
    padding: 1rem;
    width: 15rem;
    border-radius: 5px;
    border: 1px solid #999999;
    outline: none;
  }
  .checkbox {
    width: 1.5rem;
    position: relative;
    cursor: pointer;
  }
  textarea {
    width: 15rem;
    padding: 2rem 1.2rem;
    border: 1px solid #999999;
    border-radius: 5px;
    outline: none;
  }
  .submit {
    margin-top: 1.5rem;
    padding: 1rem 2rem;
    background: #4d99de;
    border: none;
    color: white;
    font-size: 1.2rem;
    border-radius: 30px;
    outline: none;
  }
  label {
    margin-top: 1.5rem;
    color: #122e47;
    font-weight: 600;
  }
  .details {
    padding-top: 1.2rem;
  }
  .underline {
    text-decoration: underline;
    font-weight: 400;
  }
  .form-container {
    width: 80vw;
    margin: auto;
    margin-top: 5rem;
  }
  @media (min-width: 700px) {
    input {
      width: 34rem;
    }
    textarea {
      width: 34rem;
    }
    .form-container {
      width: 70vw;

      display: flex;
      justify-content: center;
    }
  }
`;

class Contactform extends Component {
  render() {
    return (
      <StyledForm>
        <div className="container">
          <div className="form-container">
            <form>
              <div className="details">
                <label>First Name*</label>
                <br />
                <input type="text" name="firstname" />
              </div>
              <div className="details">
                <label>Last Name*</label>
                <br />
                <input type="text" name="lastname" />
              </div>
              <div className="details">
                <label>Email*</label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="details">
                <label>Phone*</label>
                <br />
                <input
                  type="number"
                  name="phone"
                  placeholder="Mobile/Landline"
                />
              </div>
              <div className="details">
                <label>Vehicle Model*</label>
                <br />
                <input type="text" name="model" />
              </div>
              <div className="details">
                <label>Subject*</label>
                <br />

                <input type="text" name="subject" />
              </div>

              <div className="details">
                <label>Message*</label> <br />
                <textarea placeholder="I am contacting you because..."></textarea>
              </div>
              <div className="details">
                <label>Company</label>
                <br />

                <input
                  type="text"
                  name="subject"
                  placeholder="Are you contacting us on behalf of a company?"
                />
              </div>
              <div className="details">
                <label>Consent*</label>
                <br />
                <br />
                <input type="checkbox" className="checkbox" />I agree to the
                <span className="underline">
                  <strong> Privacy Policy</strong>
                </span>
                <br />
              </div>
              <button className="submit">Send Enquiry</button>
            </form>
          </div>
        </div>
      </StyledForm>
    );
  }
}

export default Contactform;

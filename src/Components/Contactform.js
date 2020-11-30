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
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      model: '',
      subject: '',
      message: '',
      company: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.prevenDefault();
    console.log('enquiry has been send');
  };
  render() {
    return (
      <StyledForm>
        <div className="container">
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="details">
                <label>First Name*</label>
                <br />
                <input
                  type="text"
                  name="firstname"
                  onChange={this.handleChange}
                />
              </div>
              <div className="details">
                <label>Last Name*</label>
                <br />
                <input
                  type="text"
                  name="lastname"
                  onChange={this.handleChange}
                />
              </div>
              <div className="details">
                <label>Email*</label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  onChange={this.handleChange}
                />
              </div>
              <div className="details">
                <label>Phone*</label>
                <br />
                <input
                  type="number"
                  name="phone"
                  placeholder="Mobile/Landline"
                  onChange={this.handleChange}
                />
              </div>
              <div className="details">
                <label>Vehicle Model*</label>
                <br />
                <input type="text" name="model" onChange={this.handleChange} />
              </div>
              <div className="details">
                <label>Subject*</label>
                <br />

                <input
                  type="text"
                  name="subject"
                  onChange={this.handleChange}
                />
              </div>

              <div className="details">
                <label>Message*</label> <br />
                <textarea
                  placeholder="I am contacting you because..."
                  name="message"
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="details">
                <label>Company</label>
                <br />

                <input
                  type="text"
                  name="subject"
                  placeholder="Are you contacting us on behalf of a company?"
                  onChange={this.handleChange}
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

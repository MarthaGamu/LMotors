import React from 'react';
import styled from 'styled-components';
import { reviews } from '../data/Reviews';

const StyledReview = styled.div`
  width: 100vw;
  height: 60rem;
  p {
    margin: 0;
    padding: 0;
  }
  .container {
    width: 80vw;
    margin: auto;
    h1 {
      text-align: center;
      font-size: 2rem;
      padding-top: 3rem;
      color: #122e47;
    }
    .flexWrapper {
      width: 80vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;

      .card {
        width: 30rem;
        height: 20rem;
        background: #e5ecf2;
        border: 2px solid #f8f8f8;

        .header {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          .name {
            padding-left: 2rem;
          }
          .firstname {
            font-size: 1.4rem;
            i {
              color: green;
              margin-left: 2px;
              font-size: 1.2rem;
            }
          }
          .date {
            color: #a6a6a6;
          }
          .serviceType {
            margin-right: 2rem;
            .stars {
              color: #fed53e;
              font-size: 1.6rem;
              margin-top: 3px;
              margin-bottom: 2px;

              display: flex;
              gap: 0.1rem;
            }
            .type {
              background: #4d99de;
              color: white;
              padding: 0.2rem 0.8rem;
              border-radius: 8px;
              text-align: center;
            }
          }
        }
      }
      .bodyMessage {
        p {
          padding: 4rem 3rem;
        }
      }
    }
  }
  @media (min-width: 1800px) {
    .container {
      width: 60vw;

      .flexWrapper {
        padding-top: 5rem;
        margin: auto;
        width: 50vw;
      }
    }
  }
`;

function Review() {
  return (
    <StyledReview>
      <div className="container">
        <h1>Recent Customer Reviews</h1>
        <div className="flexWrapper">
          {reviews.map((review) => (
            <div className="card">
              <div className="header">
                <div className="name">
                  <p className="firstname">
                    <strong>{review.name}</strong>
                    <span>
                      <i class="fas fa fa-check-circle"></i>
                    </span>
                  </p>
                  <span className="date">{review.date}</span>
                </div>
                <div className="serviceType">
                  <p className="stars">
                    <i class="fas fa fa-star"></i>
                    <i class="fas fa fa-star"></i>
                    <i class="fas fa fa-star"></i>
                    <i class="fas fa fa-star"></i>
                    <i class="fas fa fa-star"></i>
                  </p>
                  <p className="type">{review.service}</p>
                </div>
              </div>
              <div className="bodyMessage">
                <p>{review.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledReview>
  );
}

export default Review;

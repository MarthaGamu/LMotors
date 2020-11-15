import React from 'react';
import { NavLinks } from '../data/menuItems';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyling = styled.div`
  width: 100vw;
  height: 6rem;

  .desktopLink {
    width: 80vw;
    margin: auto;
    display: flex;
    padding-top: 2rem;
    justify-content: space-between;

    .menuLink {
      display: flex;

      ul {
        list-style: none;
        display: flex;
        a {
          text-decoration: none;
          color: black;
        }

        li {
          margin-left: 5rem;
          font-weight: 600;
        }
      }
      .book {
        margin-left: 2rem;
        background: #155c9a;
        padding: 0.6rem 0.5rem 0.6rem 0.5rem;
        color: white;
        outline: inheritç;
      }
    }
  }

  .mobileLink {
    display: none;
  }
  @media (max-width: 800px) {
    .desktopLink {
      display: none;
    }
  }
`;

function Navbar() {
  const menuItems = NavLinks.map((NavLink) => (
    <Link to={NavLink.link}>
      <li key={NavLink.id}> {NavLink.name}</li>
    </Link>
  ));

  return (
    <NavStyling>
      <div className="desktopLink">
        <div className="logo">LMOTORS</div>
        <div className="menuLink">
          <ul>{menuItems}</ul>
          <button className="book">Book Appointment</button>
        </div>
      </div>
      <div className="mobileLink">
        <div className="logo">LMOTORS</div>
        <ul>{menuItems}</ul>
      </div>
    </NavStyling>
  );
}

export default Navbar;

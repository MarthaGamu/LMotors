import React, { useState } from 'react';
import { NavLinks } from '../data/menuItems';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/Logo.png';
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
  @media (max-width: 800px) {
    .desktopLink {
      display: none;
    }
  }

  .mobileLink {
    display: flex;
    justify-content: space-between;

    .hamburger {
      i {
        font-size: 3rem;
        margin-right: 1.2rem;
      }
    }
  }
  .links {
    width: 100vw;
    background: #122e47;
    height: 30rem;
    position: absolute;
    z-index: 1;
    text-align: center;
    margin-top: 1rem;
    ul {
      list-style: none;
      a {
        text-decoration: none;
        color: white;
        font-weight: 600;
        font-size: 1.2rem;
      }
      li {
        padding: 2rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .mobileLink {
      display: none;
    }
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuItems = NavLinks.map((NavLink) => (
    <Link to={NavLink.link}>
      <li key={NavLink.id}> {NavLink.name}</li>
    </Link>
  ));

  return (
    <NavStyling>
      <div className="desktopLink">
        <div className="logo">
          <Link to="/">
            {' '}
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="menuLink">
          <ul>{menuItems}</ul>
        </div>
      </div>
      <div className="mobileLink">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="hamburger">
          <span onClick={() => setOpen(!open)}>
            {open === true ? (
              <>
                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
              </>
            ) : (
              <i className="fas fa fa-bars"></i>
            )}
          </span>
        </div>
      </div>
      {open === true ? (
        <div className="links" onClick={() => setOpen(!open)}>
          <ul>{menuItems}</ul>
        </div>
      ) : (
        ''
      )}
    </NavStyling>
  );
}

export default Navbar;

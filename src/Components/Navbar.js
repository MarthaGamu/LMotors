import React from 'react';
import { NavLinks } from '../data/menuItems';

function Navbar() {
  const menuItems = NavLinks.map((NavLink) => (
    <li key={NavLink.id}>{NavLink.name}</li>
  ));

  return (
    <div>
      <div className="logo">LMOTORS</div>
      <div className="navLink">
        <ul>{menuItems}</ul>
      </div>
    </div>
  );
}

export default Navbar;

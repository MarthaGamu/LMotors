import React from 'react';
import { brands } from '../data/Brands';

export default function Brands() {
  return (
    <div>
      {brands.map((brand) => (
        <div>
          <img src={brand.name} alt="car logos" />
        </div>
      ))}
    </div>
  );
}

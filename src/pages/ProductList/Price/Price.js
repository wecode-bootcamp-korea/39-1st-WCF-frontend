import React, { useState } from 'react';
import './Price.js';

const PRICE = [
  { id: 1, name: '10,000 ~ 20,000' },
  { id: 2, name: '20,000 ~ 30,000' },
  { id: 3, name: '30,000 ~ 40,000' },
  { id: 4, name: '40,000 ~ 50,000' },
];

export default function Price() {
  const [selectedPrice, setSelectedPrice] = useState([]);

  const handleCheckbox = e => {
    const { checked, value } = e.target;
    checked
      ? setSelectedPrice([...selectedPrice, Number(value)])
      : setSelectedPrice(selectedPrice.filter(el => el !== Number(value)));
  };

  return (
    <section className="filter-price" data-type="price">
      <div className="panel-inline">
        <ul className="panel-list">
          {PRICE.map((price, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                value={price.id}
                checked={selectedPrice.includes(price.id)}
                onChange={handleCheckbox}
              />
              <span>{price.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

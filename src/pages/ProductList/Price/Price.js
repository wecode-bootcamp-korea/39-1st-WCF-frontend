import React from 'react';
import './Price.js';

const PRICE = [
  '10,000 ~ 20,000',
  '20,000 ~ 30,000',
  '30,000 ~ 40,000',
  '40,000 ~ 50,000',
];

export default function Price() {
  return (
    <section className="filter-price" data-type="price">
      <div className="panel-inline">
        <ul className="panel-list">
          {PRICE.map((price, idx) => (
            <li key={idx}>
              <span>
                <input type="checkbox" /> {price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

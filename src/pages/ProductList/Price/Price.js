import React, { useState } from 'react';
import './Price.js';

const PRICE = [
  { id: 1, name: '10,000 ~ 20,000' },
  { id: 2, name: '20,000 ~ 30,000' },
  { id: 3, name: '30,000 ~ 40,000' },
  { id: 4, name: '40,000 ~ 50,000' },
];

export default function Price({ setSelectedAllFilter, selectedFilter }) {
  const handleCheckbox = e => {
    const { checked, value } = e.target;
    checked
      ? setSelectedAllFilter({
          ...selectedFilter,
          selectedPrice: [...selectedFilter, value],
        })
      : setSelectedAllFilter({
          ...selectedFilter,
          selectedPrice: selectedFilter.filter(el => el !== value),
        });
  };

  return (
    <section className="filter-price" data-type="price">
      <div className="panel-inline">
        <ul className="panel-list">
          {PRICE.map((price, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                value={price.name}
                checked={selectedFilter.includes(price.name)}
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

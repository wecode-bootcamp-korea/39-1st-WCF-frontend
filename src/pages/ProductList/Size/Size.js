import React, { useState } from 'react';
import './Size.scss';

const SIZE = [
  { id: 1, name: 'XS' },
  { id: 2, name: 'S' },
  { id: 3, name: 'M' },
  { id: 4, name: 'L' },
  { id: 5, name: 'XL' },
  { id: 6, name: 'XXL' },
];

export default function Size({ setSelectedAllFilter, selectedFilter }) {
  const handleCheckbox = e => {
    const { checked, value } = e.target;
    checked
      ? setSelectedAllFilter({
          ...selectedFilter,
          selectedSize: [...selectedFilter, value],
        })
      : setSelectedAllFilter({
          ...selectedFilter,
          selectedSize: selectedFilter.filter(el => el !== value),
        });
  };

  return (
    <section className="filter-size" data-type="size">
      <div className="panel-inline">
        <ul className="panel-list">
          {SIZE.map((size, idx) => (
            <li key={idx}>
              <span>
                <input
                  type="checkbox"
                  value={size.name}
                  checked={selectedFilter.includes(size.name)}
                  onChange={handleCheckbox}
                />
                <span>{size.name}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

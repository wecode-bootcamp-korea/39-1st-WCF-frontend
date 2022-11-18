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

export default function Size() {
  const [selectedSize, setSelectedSize] = useState([]);

  const handleCheckbox = e => {
    const { checked, value } = e.target;
    checked
      ? setSelectedSize([...selectedSize, Number(value)])
      : setSelectedSize(selectedSize.filter(el => el !== Number(value)));
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
                  value={size.id}
                  checked={selectedSize.includes(size.id)}
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

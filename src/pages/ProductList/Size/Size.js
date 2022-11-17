import React from 'react';
import './Size.scss';

const SIZE = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

export default function Size() {
  return (
    <section className="filter-size" data-type="size">
      <div className="panel-inline">
        <ul className="panel-list">
          {SIZE.map((size, idx) => (
            <li key={idx}>
              <span>
                <input type="checkbox" /> {size}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

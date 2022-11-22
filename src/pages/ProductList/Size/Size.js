import React from 'react';
import { useSearchParams } from 'react-router-dom';

import './Size.scss';

export default function Size({ sizeData }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const prevQuery = searchParams.getAll('sizeId');
  const handleCheckbox = e => {
    const { checked, value } = e.target;

    if (checked) {
      searchParams.append('sizeId', value);
      setSearchParams(searchParams);
    } else {
      if (prevQuery.includes(value)) {
        searchParams.delete('sizeId');
        prevQuery
          .filter(query => query !== value)
          .forEach(query => searchParams.append('sizeId', query));
        setSearchParams(searchParams);
      }
    }
  };

  return (
    <section className="filter-size" data-type="size">
      <div className="panel-inline">
        <ul className="panel-list">
          {sizeData.map((size, idx) => (
            <li key={idx}>
              <span>
                <input
                  type="checkbox"
                  value={size.id}
                  checked={prevQuery.includes(size.id.toString())}
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

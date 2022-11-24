import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Price.scss';

const PRICE = [
  { id: 1, name: '10000~20000' },
  { id: 2, name: '20000~30000' },
  { id: 3, name: '30000~40000' },
  { id: 4, name: '40000~50000' },
];

export default function Price() {
  const [searchParams, setSearchParams] = useSearchParams();

  //TODO: querystring 생성
  const prevQuery = searchParams.getAll('priceId');
  const handleCheckbox = e => {
    const { checked, value } = e.target;
    if (checked) {
      searchParams.append('priceId', value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('priceId');
      prevQuery
        .filter(query => query !== value)
        .forEach(query => searchParams.append('priceId', query));
      setSearchParams(searchParams);
    }
  };

  return (
    <section className="filter-price" data-type="price">
      <div className="panel-inline">
        <ul className="panel-list">
          {PRICE.map(price => (
            <li key={price.id}>
              <input
                type="checkbox"
                value={price.name}
                checked={prevQuery.includes(price.name)}
                onChange={handleCheckbox}
              />
              <span>{price.name.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

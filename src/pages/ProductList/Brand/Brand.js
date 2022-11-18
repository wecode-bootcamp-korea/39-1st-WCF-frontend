import React, { useState } from 'react';
import './Brand.scss';

const BRAND = [
  { id: 1, name: '7 seconds' },
  { id: 2, name: 'IAM STUDIO' },
  { id: 3, name: 'GUESSS' },
  { id: 4, name: '2525 by eoeo' },
  { id: 5, name: 'Matin Ku' },
];

function Brand() {
  const [filterList, setFilterList] = useState(BRAND);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const searchBrand = e => {
    const filterBrand = BRAND.filter(brand =>
      brand.name.includes(e.target.value)
    );
    setFilterList(filterBrand);
  };
  const handleCheckbox = e => {
    const { checked, value } = e.target;
    checked
      ? setSelectedBrand([...selectedBrand, Number(value)])
      : setSelectedBrand(selectedBrand.filter(el => el !== Number(value)));
  };

  return (
    <section className="filter-brand" data-type="brand">
      <div className="brand-search">
        <form>
          <input placeholder="브랜드를 검색해주세요." onKeyUp={searchBrand} />
          <button>
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </div>
      <div className="panel">
        <ul className="panel-list">
          {filterList.map((brand, idx) => {
            return (
              <li key={idx}>
                <input
                  type="checkbox"
                  value={brand.id}
                  checked={selectedBrand.includes(brand.id)}
                  onChange={handleCheckbox}
                />
                <span>{brand.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Brand;

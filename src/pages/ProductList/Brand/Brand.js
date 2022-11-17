import React, { useState } from 'react';
import './Brand.scss';

const BRAND = [
  { id: 0, name: '7 seconds' },
  { id: 1, name: 'IAM STUDIO' },
  { id: 2, name: 'GUESSS' },
  { id: 3, name: '2525 by eoeo' },
  { id: 4, name: 'Matin Ku' },
];

function Brand() {
  const [filterList, setFilterList] = useState(BRAND);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const searchBrand = e => {
    const filterBrand = BRAND.filter(brand => brand.includes(e.target.value));
    setFilterList(filterBrand);
  };

  console.log(selectedBrand);
  const handleCheckbox = e => {
    const { checked, value } = e.target;
    console.log(checked, value);
    checked
      ? setSelectedBrand([...selectedBrand, value])
      : setSelectedBrand(selectedBrand.filter(el => el !== value));
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
          {filterList.map((brand, idx) => (
            <li key={idx}>
              <span>
                <input
                  type="checkbox"
                  value={brand.id}
                  checked={selectedBrand.includes(brand.id)}
                  onChange={handleCheckbox}
                />
                {brand.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Brand;

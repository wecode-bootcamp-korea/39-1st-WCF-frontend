import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();

  // 브랜드 검색기능
  const searchBrand = e => {
    const filterBrand = BRAND.filter(brand =>
      brand.name.includes(e.target.value)
    );
    setFilterList(filterBrand);
  };

  const prevQuery = searchParams.getAll('brandId');
  const handleCheckbox = e => {
    const { checked, value } = e.target;

    // checked
    //   ? setSelectedAllFilter(prev => ({
    //       ...prev,
    //       brand: [...selectedFilter, value],
    //     }))
    //   : setSelectedAllFilter(prev => ({
    //       ...prev,
    //       brand: selectedFilter.filter(el => el !== value),
    //     }));

    // if (checked) {
    //   setSelectedAllFilter(prev => ({
    //     ...prev,
    //     brandId: [...prevQuery, value],
    //   }));
    // } else {
    //   if (prevQuery.includes(value)) {
    //     const newQuery = prevQuery.filter(query => query !== value);
    //     setSelectedAllFilter({
    //       brandId: newQuery,
    //     });
    //   }
    // }

    if (checked) {
      searchParams.append('brandId', value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('brandId');
      prevQuery
        .filter(query => query !== value)
        .forEach(query => searchParams.append('brandId', query));
      setSearchParams(searchParams);
    }
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
                  checked={prevQuery.includes(brand.id.toString())}
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

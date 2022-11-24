import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Brand.scss';

const BRAND = [
  { id: 1, name: 'Dabin' },
  { id: 2, name: 'Sujeong.Ku' },
  { id: 3, name: 'Yeonwoo' },
  { id: 4, name: '0Se0' },
  { id: 5, name: 'Yuju' },
  { id: 6, name: 'Jimin' },
  { id: 7, name: 'Sujeong.Kim' },
  { id: 8, name: 'MENTOs' },
  { id: 9, name: 'DongKeun' },
  { id: 10, name: 'MoonYoung' },
  { id: 11, name: 'SangUk' },
  { id: 12, name: 'SangJun' },
  { id: 13, name: 'SeHo' },
  { id: 14, name: 'HyungJin' },
  { id: 15, name: 'God.Yeoup' },
  { id: 16, name: 'SangYoun' },
  { id: 17, name: 'SeokHyeon' },
  { id: 18, name: 'JaeSeon' },
  { id: 19, name: '5JJU' },
  { id: 20, name: 'KunWoo' },
  { id: 21, name: 'DongSeop' },
  { id: 22, name: 'BuSol' },
  { id: 23, name: 'SangWon' },
  { id: 24, name: 'SuMin' },
  { id: 25, name: 'HanSol' },
];
function Brand() {
  const [filterList, setFilterList] = useState(BRAND);
  const [searchParams, setSearchParams] = useSearchParams();

  //TODO: 브랜드 검색기능
  const searchBrand = e => {
    const filterBrand = BRAND.filter(brand =>
      brand.name.includes(e.target.value)
    );
    setFilterList(filterBrand);
  };

  //TODO: querystring 생성
  const prevQuery = searchParams.getAll('brandId');
  const handleCheckbox = e => {
    const { checked, value } = e.target;
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
          {filterList.map(brand => {
            return (
              <li key={brand.id}>
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

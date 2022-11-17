import React, { useState } from 'react';
import Product from './Product';
import Brand from './Brand/Brand';
import Price from './Price/Price';
import Size from './Size/Size';
import './ProductList.scss';

const SORT = ['신상품순', '인기상품순', '낮은가격순', '높은가격순'];

const TABS = [
  { id: 0, title: '브랜드', content: <Brand /> },
  { id: 1, title: '가격', content: <Price /> },
  { id: 2, title: '사이즈', content: <Size /> },
];

export default function ProductList() {
  const [isSelected, setIsSelected] = useState(0);
  const [currentTab, setCurrentTab] = useState({
    id: '',
    bollen: false,
  });

  const imgurl = '/images/icons/marcel-strauss-hwLiTFTGJCY-unsplash.jpg';

  return (
    <div className="productlist container">
      <div className="breadcrumb" />
      <main className="contents inner">
        <section className="contents-list">
          <div className="sub-category">
            <h1>
              아우터 <span>10개의 제품</span>
            </h1>
          </div>
          <section className="filter">
            <div className="left-filter">
              <ul className="filter-list">
                {TABS.map((filter, idx) => (
                  <li key={filter.id}>
                    <button
                      onClick={() => {
                        setCurrentTab({ id: filter.id });
                      }}
                    >
                      {filter.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right-filter">
              <ul className="filter-list">
                {SORT.map((sortMehtod, idx) => (
                  <li key={idx}>
                    <button
                      value={idx}
                      onClick={e => setIsSelected(e.target.value)}
                      className={idx === parseInt(isSelected) ? 'selected' : ''}
                    >
                      {sortMehtod}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {TABS.find(({ id }) => id === currentTab)?.content}
          <div className="products-list">
            <ul className="products">
              <Product
                imgurl={imgurl}
                brand="컴포넌트테스트"
                name="✨구수정착용✨Volume Silhouette Mac-collar Coat - Black"
                price="479,000"
              />
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

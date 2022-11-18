import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product/Product';
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
  const [productList, setProductList] = useState([]);
  const [currentTab, setCurrentTab] = useState('');

  const params = useParams();

  //상품리스트 전체 get으로 받아오기
  // useEffect(() => {
  //   fetch(`http://10.58.52.57:3000/products/subcategory/1`, {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json;charset=utf-8' },
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       setProductList(result.data);
  //     });
  // }, []);

  //TODO: mock data 테스트
  useEffect(() => {
    fetch('/data/productListData.json')
      .then(response => response.json())
      .then(result => {
        setProductList(result);
      });
  }, []);

  return (
    <div className="productlist container">
      <div className="breadcrumb" />
      <main className="contents inner">
        <section className="contents-list">
          <div className="sub-category">
            <h1>
              {productList[0].subcategory}
              <span>{productList.length}개의 제품</span>
            </h1>
          </div>
          <section className="filter">
            <div className="left-filter">
              <ul className="filter-list">
                {TABS.map(filter => {
                  const isCurrent = currentTab === filter.id;

                  return (
                    <li key={filter.id}>
                      <button
                        onClick={() =>
                          setCurrentTab(isCurrent ? '' : filter.id)
                        }
                        className={isCurrent ? 'current' : ''}
                      >
                        {filter.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="right-filter">
              <ul className="filter-list">
                {SORT.map((sortMehtod, idx) => (
                  <li key={idx}>
                    <button
                      value={idx}
                      onClick={e => {
                        setIsSelected(e.target.value);
                      }}
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
              {productList.map((product, idx) => {
                return (
                  <Product
                    imgurl={product.thumbnail}
                    brand={product.name}
                    name={product.title}
                    price={product.price}
                    key={idx}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

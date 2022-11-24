import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Product from './Product/Product';
import Brand from './Brand/Brand';
import Price from './Price/Price';
import Size from './Size/Size';
import './ProductList.scss';

const SORT = [
  { id: 0, title: '신상품순', method: 'created_at' },
  { id: 1, title: '낮은가격순', method: 'price_ASC' },
  { id: 2, title: '높은가격순', method: 'price_DESC' },
];

const SUBCATEGORY = {
  1: '아우터',
  2: '니트',
  3: '티셔츠',
  4: '아우터',
  5: '니트',
  6: '티셔츠',
};

export default function ProductList() {
  // 선택된 정렬버튼
  const [isSelected, setIsSelected] = useState(0);
  // 선택된 필터링탭
  const [currentTab, setCurrentTab] = useState('');
  // 백엔드 및 mock data로 받아온 상품리스트
  const [productList, setProductList] = useState([]);
  // querystring 설정
  const [searchParams, setSearchParams] = useSearchParams();

  const TABS = [
    {
      id: 0,
      title: '브랜드',
      content: <Brand />,
    },
    {
      id: 1,
      title: '가격',
      content: <Price />,
    },
    {
      id: 2,
      title: '사이즈',
      content: <Size />,
    },
  ];

  //TODO: 상품리스트 get요청
  useEffect(() => {
    fetch(`http://10.58.52.233:3000/products?${searchParams.toString()}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(result => {
        setProductList(result.data);
      });
  }, [searchParams]);

  // //TODO: mock data 테스트
  // useEffect(() => {
  //   fetch('/data/productListData.json')
  //     .then(response => response.json())
  //     .then(result => {
  //       setProductList(result);
  //     });
  // }, []);

  const handleSortBtn = e => {
    const { value } = e.target;
    setIsSelected(value);
    searchParams.set(
      'sortMethod',
      SORT.find(({ id }) => id === Number(value))?.method
    );
    setSearchParams(searchParams);
  };

  return (
    <div className="productlist container">
      <div className="breadcrumb" />
      <main className="contents inner">
        <section className="contents-list">
          <div className="sub-category">
            <h1>
              {SUBCATEGORY[searchParams.get('subCategoryId')]}
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
                  <li key={sortMehtod.id}>
                    <button
                      value={sortMehtod.id}
                      onClick={handleSortBtn}
                      className={
                        sortMehtod.id === parseInt(isSelected) ? 'selected' : ''
                      }
                    >
                      {sortMehtod.title}
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
                    id={product.productId}
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

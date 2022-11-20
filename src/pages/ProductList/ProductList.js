import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product/Product';
import Brand from './Brand/Brand';
import Price from './Price/Price';
import Size from './Size/Size';
import SelectedAll from './SelectedAll';
import './ProductList.scss';

const SORT = [
  { id: 0, title: '신상품순' },
  { id: 1, title: '인기상품순' },
  { id: 2, title: '낮은가격순' },
  { id: 3, title: '높은가격순' },
];

export default function ProductList() {
  // 선택된 정렬버튼
  const [isSelected, setIsSelected] = useState(0);
  // 선택된 필터링탭
  const [currentTab, setCurrentTab] = useState('');
  // 백엔드 및 mock data로 받아온 상품리스트
  const [productList, setProductList] = useState([]);
  // 선택된 필터일탭의 체크박스값
  const [selectedFilter, setSelectedFilter] = useState({
    selectedBrand: [],
    selectedPrice: [],
    selectedSize: [],
  });
  const { selectedBrand, selectedPrice, selectedSize } = selectedFilter;
  const TABS = [
    {
      id: 0,
      title: '브랜드',
      content: (
        <Brand
          setSelectedAllFilter={setSelectedFilter}
          selectedFilter={selectedBrand}
        />
      ),
    },
    {
      id: 1,
      title: '가격',
      content: (
        <Price
          setSelectedAllFilter={setSelectedFilter}
          selectedFilter={selectedPrice}
        />
      ),
    },
    {
      id: 2,
      title: '사이즈',
      content: (
        <Size
          setSelectedAllFilter={setSelectedFilter}
          selectedFilter={selectedSize}
        />
      ),
    },
  ];

  useEffect(() => {
    // query parameter로 넘겨줄 params
    const params = {
      brand: selectedBrand,
      price: selectedPrice,
      size: selectedSize,
    };
    const query = params => {
      const result = Object.keys(params)
        .map(paramsKey =>
          params[paramsKey].map(selectedFilterEl => {
            return `${paramsKey}` + '=' + `${selectedFilterEl}`;
          })
        )
        .join('&');
      return result;
    };
    // fetch(`http://10.58.52.57:3000/products/subcategory/1/${query}`, {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json;charset=utf-8' },
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     setProductList(result.data);
    //   });

    console.log('query: ', query(params));
  }, [selectedBrand, selectedPrice, selectedSize]);

  // const params = useParams();

  console.log('selectedFilter', selectedFilter);

  // //상품리스트 전체 get으로 받아오기
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
              {productList.length}
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
                      onClick={e => {
                        setIsSelected(e.target.value);
                      }}
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
          <SelectedAll selectedFilter={selectedFilter} />
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

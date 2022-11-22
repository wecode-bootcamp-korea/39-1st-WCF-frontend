import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import Product from './Product/Product';
import Brand from './Brand/Brand';
import Price from './Price/Price';
import Size from './Size/Size';
import SelectedAll from './SelectedAll';
import './ProductList.scss';

const SORT = [
  { id: 0, title: '신상품순', method: 'created_at' },
  { id: 1, title: '낮은가격순', method: 'price_DESC' },
  { id: 2, title: '높은가격순', method: 'price_ASC' },
];

export default function ProductList() {
  // 받아온 브랜드 리스트
  const [brandData, setBrandData] = useState([]);
  // 받아온 사이즈 리스트
  const [sizeData, setSizeData] = useState([]);
  // 선택된 정렬버튼
  const [isSelected, setIsSelected] = useState(0);
  // 선택된 필터링탭
  const [currentTab, setCurrentTab] = useState('');
  // 백엔드 및 mock data로 받아온 상품리스트
  const [productList, setProductList] = useState([]);
  // querystring 설정
  const [searchParams, setSearchParams] = useSearchParams();
  // const { brand, price, size } = searchParams;
  // const [selectedFilter, setSelectedFilter] = useState({
  //   brand: [],
  //   price: [],
  //   size: [],
  // });
  // const { brand, price, size } = selectedFilter;

  const TABS = [
    {
      id: 0,
      title: '브랜드',
      content: <Brand brandData={brandData} />,
    },
    {
      id: 1,
      title: '가격',
      content: <Price />,
    },
    {
      id: 2,
      title: '사이즈',
      content: <Size sizeData={sizeData} />,
    },
  ];

  // console.log(selectedFilter);
  console.log(searchParams.toString());

  // 필터링 및 sort 변경 시 백엔드에 요청
  // useEffect(() => {
  // fetch(`http://10.58.52.57:3000/products/subcategory=1?${query}`, {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json;charset=utf-8' },
  // })
  //   .then(response => response.json())
  //   .then(result => {
  //     setProductList(result.data);
  //   });
  // }, [searchParams]);

  // //상품리스트 전체 get으로 받아오기
  // //221121 path parameter -> query parameter로 변경
  // useEffect(() => {
  //   fetch(`http://10.58.52.57:3000/products/subcategory=1`, {
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
  useEffect(() => {
    fetch('/data/brandData.json')
      .then(response => response.json())
      .then(result => {
        setBrandData(result);
      });
  }, []);
  useEffect(() => {
    fetch('/data/sizeData.json')
      .then(response => response.json())
      .then(result => {
        setSizeData(result);
      });
  }, []);

  const handleSortBtn = e => {
    setIsSelected(e.target.value);
    searchParams.append(
      'sortMethod',
      SORT.find(({ id }) => id === currentTab)?.method
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
              {productList[0]?.subcategory}
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
          {/* <SelectedAll /> */}
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

import React, { useState } from 'react';
import Product from './Product';
import './ProductList.scss';

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [isSelected, setIsSelected] = useState(0);

  const sortArr = ['신상품순', '인기상품순', '낮은가격순', '높은가격순'];

  console.log('isselcted', isSelected);
  const handleFocus = e => {
    console.log(e.target.value);
    setIsSelected(e.target.value);
  };

  const imgurl = '/images/icons/marcel-strauss-hwLiTFTGJCY-unsplash.jpg';
  const hoverimgurl =
    '/images/icons/gez-xavier-mansfield-b34E1vh1tYU-unsplash.jpg';
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
                <li>
                  <button data-filter="brand">브랜드</button>
                </li>
                <li>
                  <button data-filter="price">가격 </button>
                </li>
                <li>
                  <button data-filter="size">사이즈 </button>
                </li>
              </ul>
            </div>
            <div className="right-filter">
              <ul className="filter-list">
                {/* <li>
                  <span onClick={handleFocus} name="new">
                    신상품순
                  </span>
                </li>
                <li>
                  <span onClick={handleFocus}>인기상품순</span>
                </li>
                <li>
                  <span onClick={handleFocus}>낮은가격순</span>
                </li>
                <li>
                  <span onClick={handleFocus}>높은가격순</span>
                </li> */}
                {sortArr.map((sortMehtod, idx) => (
                  <li key={idx}>
                    <button
                      value={idx}
                      onClick={handleFocus}
                      className={idx === isSelected ? 'selected' : ''}
                    >
                      {sortMehtod}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="filter-brand" data-filter="brand">
            <div className="brand-search">
              <input placeholder="브랜드를 검색해주세요." />
              <button>
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
            <div className="panel">
              <ul className="panel-list">
                <li>
                  <span>
                    <input type="checkbox" /> 8 seconds
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> 8 seconds
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> 8 seconds
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> 8 seconds
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> 8 seconds
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className="filter-price" data-filter="price">
            <div className="panel-inline">
              <ul className="panel-list">
                <li>
                  <span>
                    <input type="checkbox" /> 10,000 ~ 20,000
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> 20,000 ~ 30,000
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> 30,000 ~ 40,000
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> 40,000 ~ 50,000
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> 50,000 ~ 60,000
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className="filter-size" data-filter="size">
            <div className="panel-inline">
              <ul className="panel-list">
                <li>
                  <span>
                    <input type="checkbox" /> XS
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> S
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> M
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> L
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> XL
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" /> 2XL
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <div className="products-list">
            <ul className="products">
              <li>
                <a href="">
                  <img src={imgurl} alt="상품이미지" />
                </a>
                <div className="like" />
                {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
                <div className="info">
                  <span className="brand">kuho plus</span>
                  <span className="name">
                    ✨구수정착용✨Volume Silhouette Mac-collar Coat - Black
                  </span>
                  <span className="price">479,000</span>
                  <span className="heart">
                    <i className="fa-regular fa-heart" />
                    <em>999+</em>
                  </span>
                </div>
              </li>
              <li>
                <a href="">
                  <img src={imgurl} alt="상품이미지" />
                </a>
                <div className="like" />
                {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
                <div className="info">
                  <span className="brand">kuho plus</span>
                  <span className="name">
                    ✨구수정착용✨Volume Silhouette Mac-collar Coat - Black
                  </span>
                  <span className="price">479,000</span>
                  <span className="heart">
                    <i className="fa-regular fa-heart" />
                    <em>999+</em>
                  </span>
                </div>
              </li>
              <li>
                <a href="">
                  <img src={imgurl} alt="상품이미지" />
                </a>
                <div className="like" />
                {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
                <div className="info">
                  <span className="brand">kuho plus</span>
                  <span className="name">
                    ✨구수정착용✨Volume Silhouette Mac-collar Coat - Black
                  </span>
                  <span className="price">479,000</span>
                  <span className="heart">
                    <i className="fa-regular fa-heart" />
                    <em>999+</em>
                  </span>
                </div>
              </li>
              <li>
                <a href="">
                  <img src={imgurl} alt="상품이미지" />
                </a>
                <div className="like" />
                {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
                <div className="info">
                  <span className="brand">kuho plus</span>
                  <span className="name">
                    ✨구수정착용✨Volume Silhouette Mac-collar Coat - Black
                  </span>
                  <span className="price">479,000</span>
                  <span className="heart">
                    <i className="fa-regular fa-heart" />
                    <em>999+</em>
                  </span>
                </div>
              </li>
              <li>
                <a href="">
                  <img src={imgurl} alt="상품이미지" />
                </a>
                <div className="like" />
                {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
                <div className="info">
                  <span className="brand">kuho plus</span>
                  <span className="name">
                    ✨구수정착용✨Volume Silhouette Mac-collar Coat - Black
                  </span>
                  <span className="price">479,000</span>
                  <span className="heart">
                    <i className="fa-regular fa-heart" />
                    <em>999+</em>
                  </span>
                </div>
              </li>
              <li>
                <a href="">
                  <img src={imgurl} alt="상품이미지" />
                </a>
                <div className="like" />
                {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
                <div className="info">
                  <span className="brand">kuho plus</span>
                  <span className="name">
                    ✨구수정착용✨Volume Silhouette Mac-collar Coat - Black
                  </span>
                  <span className="price">479,000</span>
                  <span className="heart">
                    <i className="fa-regular fa-heart" />
                    <em>999+</em>
                  </span>
                </div>
              </li>
              <li>
                <a href="">
                  <img src={imgurl} alt="상품이미지" />
                </a>
                <div className="like" />
                {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
                <div className="info">
                  <span className="brand">kuho plus</span>
                  <span className="name">
                    ✨구수정착용✨Volume Silhouette Mac-collar Coat - Black
                  </span>
                  <span className="price">479,000</span>
                  <span className="heart">
                    <i className="fa-regular fa-heart" />
                    <em>999+</em>
                  </span>
                </div>
              </li>
              <li>
                <a href="">
                  <img src={imgurl} alt="상품이미지" />
                </a>
                <div className="like" />
                {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
                <div className="info">
                  <span className="brand">kuho plus</span>
                  <span className="name">
                    ✨구수정착용✨Volume Silhouette Mac-collar Coat - Black
                  </span>
                  <span className="price">479,000</span>
                  <span className="heart">
                    <i className="fa-regular fa-heart" />
                    <em>999+</em>
                  </span>
                </div>
              </li>
              <li>
                <a href="">
                  <img src={imgurl} alt="상품이미지" />
                </a>
                <div className="like" />
                {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
                <div className="info">
                  <span className="brand">kuho plus</span>
                  <span className="name">
                    ✨구수정착용✨Volume Silhouette Mac-collar Coat - Black
                  </span>
                  <span className="price">479,000</span>
                  <span className="heart">
                    <i className="fa-regular fa-heart" />
                    <em>999+</em>
                  </span>
                </div>
              </li>
              <li>
                <a href="">
                  <img src={imgurl} alt="상품이미지" />
                </a>
                <div className="like" />
                {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
                <div className="info">
                  <span className="brand">kuho plus</span>
                  <span className="name">
                    ✨구수정착용✨Volume Silhouette Mac-collar Coat - Black
                  </span>
                  <span className="price">479,000</span>
                  <span className="heart">
                    <i className="fa-regular fa-heart" />
                    <em>999+</em>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

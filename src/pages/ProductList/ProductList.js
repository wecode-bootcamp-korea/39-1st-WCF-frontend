import React from 'react';
import Product from './Product';
import './ProductList.scss';

export default function ProductList() {
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
          <div className="filter">
            <div className="left-filter">
              <ul className="filter-list">
                <li>
                  <button>브랜드</button>
                </li>
                <li>
                  <button>가격</button>
                </li>
                <li>
                  <button>사이즈</button>
                </li>
              </ul>
            </div>
            <div className="right-filter">
              <ul className="filter-list">
                <li>
                  <span>신상품순</span>
                </li>
                <li>
                  <span>인기상품순</span>
                </li>
                <li>
                  <span>낮은가격순</span>
                </li>
                <li>
                  <span>높은가격순</span>
                </li>
              </ul>
            </div>
          </div>
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

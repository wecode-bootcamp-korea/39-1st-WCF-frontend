import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  return (
    <div className="container product-detail">
      <section className="section section-detail">
        <div class="product-img-area">1</div>
        <div class="product-data-area">2</div>
      </section>
      <section className="section section-banner">
        <ul className="banner-swiper">
          <li className="swiper-item">
            <Link className="" to="/productdetail">
              <em>WFC PLUS</em>
              <b>럭셔리 첫 구매시</b>
              <p>최대 10만원 할인 혜택</p>
            </Link>
          </li>
        </ul>
      </section>
      <section class="section section-products-data">
        <ul class="tabs-list">
          <li>
            <button class="btn">상품정보</button>
          </li>
          <li>
            <button class="btn">리뷰</button>
          </li>
        </ul>
        <div class="products-area">
          <span class="products-img-box">
            <img src="/images/productdetail/" alt="" />
          </span>
        </div>
      </section>
    </div>
  );
}

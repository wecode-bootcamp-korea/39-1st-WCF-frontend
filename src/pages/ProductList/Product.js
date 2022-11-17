import React from 'react';

export default function Product({ imgurl, brand, name, price }) {
  return (
    <li>
      <a href="">
        <img src={imgurl} alt="상품이미지" />
      </a>
      <div className="like" />
      {/* <span className="hover">
                  <img src={imgurl} alt="상품이미지 hover시 나오는 이미지" />
                </span> */}
      <div className="info">
        <span className="brand">{brand}</span>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="heart">
          <i className="fa-regular fa-heart" />
          <em>999+</em>
        </span>
      </div>
    </li>
  );
}

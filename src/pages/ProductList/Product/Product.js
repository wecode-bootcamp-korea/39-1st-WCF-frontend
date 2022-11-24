import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

export default function Product({ imgurl, brand, name, price, id }) {
  return (
    <li>
      <Link to={`/product-detail/${id}`}>
        <img src={imgurl} alt="상품이미지" />
        <div className="like" />
        <div className="info">
          <span className="brand">{brand}</span>
          <span className="name">{name}</span>
          <span className="price">{Number(price).toLocaleString()}</span>
          <span className="heart">
            <i className="fa-regular fa-heart" />
            <em>999+</em>
          </span>
        </div>
      </Link>
    </li>
  );
}

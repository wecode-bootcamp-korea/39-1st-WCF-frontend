import React, { useState } from 'react';

export default function Quantity(props) {
  console.log(props.currentPrice);

  const [productNum, setProductNUm] = useState(1);

  return (
    <div className="product-quantity-box">
      <div className="quantity-numbering">
        <button className="minus">
          <span className="hidden">차감</span>
        </button>
        <span className="num">1</span>
        <button className="add">
          <span className="hidden">증감</span>
        </button>
      </div>
      <div className="price-box">
        <span className="price">323100</span>원
      </div>
    </div>
  );
}

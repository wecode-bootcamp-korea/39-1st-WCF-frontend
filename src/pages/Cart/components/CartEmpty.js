import React from 'react';

export default function CartEmpty() {
  return (
    <div className="cart-empty">
      <div className="basket-img-box">
        <span className="basket-img" />
      </div>
      <p className="cart-empty-text">장바구니에 담긴 상품이 없습니다.</p>
    </div>
  );
}

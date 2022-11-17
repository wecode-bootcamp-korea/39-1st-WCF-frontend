import React from 'react';
import './CartFilled.scss';

const CartFilled = () => {
  return (
    <div className="container cartfilled">
      <div className="top">
        <input id="check-all" type="checkbox" />
        <label for="check-all">전체선택</label>
      </div>

      <div className="goods-list">
        <div className="header">
          <div>상품 혜택정보</div>
          <div>베송정보</div>
          <div>주문금액</div>
        </div>

        <div className="buttons">
          <input type="checkbox" />
          <button type="button" className="delete">
            엑스
          </button>
          <button type="button" className="buy-now">
            바로구매
          </button>
        </div>

        <div className="info">
          <div className="info-left">
            <img src="#" />
            <div className="goods-info">
              <p>LEMAIR</p>
              <p>(UNISEX) Small Croissant Bag - Dark Chocolate</p>
              <p>진한갈색 / F / 1개</p>
              <button type="button">옵션/수량 변경</button>
            </div>
          </div>
          <div className="info-middle">
            <p>무료배송</p>
            <p>내일 출고 예정</p>
          </div>
          <div className="info-right">
            <p>1,680,000원</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartFilled;

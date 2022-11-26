import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import '../Cart.scss';

const CartFilled = ({ cartProducts, setCartProducts, getCartList }) => {
  const checkArr = cartProducts.map(({ checked }) => checked);
  const isAllChecked = checkArr.every(v => v);

  const navigate = useNavigate();

  const totalPrice = cartProducts
    .filter(({ checked }) => checked)
    .reduce((acc, curr) => acc + curr.price, 0);

  const onCheckedAll = () => {
    if (isAllChecked)
      setCartProducts(cartProducts.map(cart => ({ ...cart, checked: false })));
    else
      setCartProducts(cartProducts.map(cart => ({ ...cart, checked: true })));
  };

  const handleCheck = id => e => {
    const nextCartProducts = cartProducts.map(product => {
      if (id === product.id) {
        return { ...product, checked: !product.checked };
      }
      return product;
    });
    setCartProducts(nextCartProducts);
  };

  const deleteProduct = id => {
    setCartProducts(cartProducts.filter(el => el.id != id));
    const deleteItem = cartProducts.filter(el => el.id == id);
    console.log(deleteItem);
    console.log([deleteItem[0].id]);
    fetch(`${BASE_URL}/cart/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        cartId: `${deleteItem[0]?.id}`,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
    setCartProducts(cartProducts);
    getCartList();
  };

  const orderProduct = () => {
    navigate('/payment');
  };

  return (
    <div className="container cartfilled">
      <div className="cartfilled-top">
        <div className="top-left">
          <input
            id="checked-all"
            type="checkbox"
            className="check"
            onChange={onCheckedAll}
            checked={isAllChecked}
          />
          <label htmlFor="checked-all" className="check-all">
            전체선택
          </label>
        </div>
        <button className="delete-chosen-goods">선택 상품 삭제</button>
      </div>
      <div className="cart-data-box">
        {cartProducts.map(item => (
          <div className="cart-data" key={`${item.product_id}${item.size}`}>
            <div className="header">
              <div className="goods-info">상품・혜택정보</div>
              <div className="shipping-info">배송정보</div>
              <div className="ordered-price">주문금액</div>
            </div>
            <div className="info">
              <div className="info-left">
                <input
                  type="checkbox"
                  id={item.id}
                  className="check-goods"
                  value={item.price}
                  checked={item.checked}
                  onChange={handleCheck(item.id)}
                />
                <label htmlFor={item.id} />
                <img src={item.src} alt="사진" />
                <div className="goods-infomation">
                  <p className="info-title">{item.brand}</p>
                  <p className="info-detail">{item.title}</p>
                  <p className="info-option">
                    {item.color ? `${item.color} /` : null} {item.size} /{' '}
                    {item.count}개
                  </p>
                  <button type="button" className="option-quantity-change">
                    옵션/수량 변경
                  </button>
                </div>
              </div>
              <div className="info-middle-right">
                <div className="info-middle">
                  <p className="free-delivery">무료배송</p>
                  <p className="release">내일 출고 예정</p>
                </div>
                <div className="info-right">
                  <p className="total-price">{item.price.toLocaleString()}원</p>
                  <button type="button" className="buy-now">
                    바로구매
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="delete-goods"
                onClick={() => deleteProduct(item.id)}
              >
                <span className="delete-goods-text">엑스</span>
              </button>
            </div>
            <div className="order-amount-box-wrap">
              <div className="order-amount-box">
                <div className="left-sub-box">
                  <p className="left-title">스토어 주문금액 합계</p>
                  <p className="left-sub-title">
                    상품금액 {(item.price * item.count).toLocaleString()}원 +
                    배송비 0원 − 할인금액 0원
                  </p>
                </div>
                <div className="right-sub-box">
                  <p className="price">
                    {(item.price * item.count).toLocaleString()}원
                  </p>
                  <p className="shipping">무료배송</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-order-amount-box">
        <div className="amount-header">결제 예정 금액 총 1건</div>
        <div className="total-amount">
          <div className="goods-amount-price">
            <p className="amount-price">{totalPrice.toLocaleString()}원</p>
            <p className="price-text">상품금액</p>
          </div>
          <div className="amount-sign-plus">+</div>
          <div className="amount-delivery-box">
            <div className="amount-delivery">
              <p className="delivery-price">0원</p>
              <p className="delivery-text">배송비</p>
            </div>
          </div>
          <div className="amount-sign-minus">−</div>
          <div className="amount-discount-box">
            <div className="amount-discount">
              <p className="discount-price">0원</p>
              <p className="discount-text">할인금액</p>
            </div>
          </div>
          <div className="amount-sign-total">=</div>
          <div className="total-amounts-box">
            <div className="total-amounts">
              <p className="total-amounts-price">
                {totalPrice.toLocaleString()}원
              </p>
              <p className="total-amounts-text">총 주문금액</p>
            </div>
          </div>
        </div>
        <div className="order-button-box">
          <button className="order-button" onClick={orderProduct}>
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartFilled;

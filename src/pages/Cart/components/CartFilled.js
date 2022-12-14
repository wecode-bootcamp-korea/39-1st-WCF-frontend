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
            ????????????
          </label>
        </div>
        <button className="delete-chosen-goods">?????? ?????? ??????</button>
      </div>
      <div className="cart-data-box">
        {cartProducts.map(item => (
          <div className="cart-data" key={`${item.product_id}${item.size}`}>
            <div className="header">
              <div className="goods-info">?????????????????????</div>
              <div className="shipping-info">????????????</div>
              <div className="ordered-price">????????????</div>
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
                <img src={item.src} alt="??????" />
                <div className="goods-infomation">
                  <p className="info-title">{item.brand}</p>
                  <p className="info-detail">{item.title}</p>
                  <p className="info-option">
                    {item.color ? `${item.color} /` : null} {item.size} /{' '}
                    {item.count}???
                  </p>
                  <button type="button" className="option-quantity-change">
                    ??????/?????? ??????
                  </button>
                </div>
              </div>
              <div className="info-middle-right">
                <div className="info-middle">
                  <p className="free-delivery">????????????</p>
                  <p className="release">?????? ?????? ??????</p>
                </div>
                <div className="info-right">
                  <p className="total-price">{item.price.toLocaleString()}???</p>
                  <button type="button" className="buy-now">
                    ????????????
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="delete-goods"
                onClick={() => deleteProduct(item.id)}
              >
                <span className="delete-goods-text">??????</span>
              </button>
            </div>
            <div className="order-amount-box-wrap">
              <div className="order-amount-box">
                <div className="left-sub-box">
                  <p className="left-title">????????? ???????????? ??????</p>
                  <p className="left-sub-title">
                    ???????????? {(item.price * item.count).toLocaleString()}??? +
                    ????????? 0??? ??? ???????????? 0???
                  </p>
                </div>
                <div className="right-sub-box">
                  <p className="price">
                    {(item.price * item.count).toLocaleString()}???
                  </p>
                  <p className="shipping">????????????</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-order-amount-box">
        <div className="amount-header">?????? ?????? ?????? ??? 1???</div>
        <div className="total-amount">
          <div className="goods-amount-price">
            <p className="amount-price">{totalPrice.toLocaleString()}???</p>
            <p className="price-text">????????????</p>
          </div>
          <div className="amount-sign-plus">+</div>
          <div className="amount-delivery-box">
            <div className="amount-delivery">
              <p className="delivery-price">0???</p>
              <p className="delivery-text">?????????</p>
            </div>
          </div>
          <div className="amount-sign-minus">???</div>
          <div className="amount-discount-box">
            <div className="amount-discount">
              <p className="discount-price">0???</p>
              <p className="discount-text">????????????</p>
            </div>
          </div>
          <div className="amount-sign-total">=</div>
          <div className="total-amounts-box">
            <div className="total-amounts">
              <p className="total-amounts-price">
                {totalPrice.toLocaleString()}???
              </p>
              <p className="total-amounts-text">??? ????????????</p>
            </div>
          </div>
        </div>
        <div className="order-button-box">
          <button className="order-button" onClick={orderProduct}>
            ????????????
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartFilled;

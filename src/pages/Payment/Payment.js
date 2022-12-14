import React, { useEffect, useState } from 'react';
import './Payment.scss';

export default function Payment() {
  //목데이터
  useEffect(() => {
    fetch('/data/paymentdata.json')
      .then(response => response.json())
      .then(result => {
        setPaymentProducts(result.productData);
        setAddressData(result.userData[0]);
      });
  }, []);

  const [paymentProducts, setPaymentProducts] = useState([]);
  const [addressData, setAddressData] = useState({});

  const totalPrice = paymentProducts.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  if (Object.keys(addressData).length === 0) {
    return null;
  }
  return (
    <main className="container payment">
      <section className="inner-small">
        <h2 className="section-title">주문/결제</h2>
        <div className="table-area">
          <table className="type-product">
            <colgroup>
              <col width="40%" />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <span>상품정보</span>
                </th>
                <th>
                  <span>할인/혜택</span>
                </th>
                <th>
                  <span>배송 정보</span>
                </th>
                <th>
                  <span>주문금액</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentProducts?.map(list => {
                return (
                  <tr key={list.id}>
                    <td>
                      <div className="product-data-box">
                        <div className="img-box">
                          <img src={list.thumbnail} alt="썸네일" />
                        </div>
                        <div className="info-box">
                          <p className="tit">{list.brand}</p>
                          <strong className="txt">{list.title}</strong>
                          <div className="data">
                            <span className="size">
                              {list.size_product_options}
                            </span>
                          </div>
                          <span className="number">{list.quantity}개</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>-</span>
                    </td>
                    <td>
                      <p className="tit">무료배송</p>
                      <p className="txt">입점 파트너에서 출고예정</p>
                    </td>
                    <td>
                      <strong className="price">
                        {list.price * list.quantity}원
                      </strong>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="delivery-info-area">
          <h3>배송지 정보</h3>
          <ul className="form-list">
            <li>
              <label className="tit required" htmlFor="name">
                이름
              </label>
              <div className="form-area">
                <div className="form-box">
                  <input
                    type="text"
                    id="name"
                    defaultValue={addressData.username}
                  />
                </div>
              </div>
            </li>
            <li>
              <label className="tit required" htmlFor="phone">
                휴대폰
              </label>
              <div className="form-area">
                <div className="form-box">
                  <input
                    type="password"
                    id="phone"
                    defaultValue={addressData.phone}
                  />
                </div>
              </div>
            </li>
            <li>
              <label className="tit required" htmlFor="address">
                배송주소
              </label>
              <div className="form-area">
                <div className="form-box">
                  <input
                    type="text"
                    id="address"
                    defaultValue={addressData.address_num}
                  />
                  <button className="btn address">우편번호</button>
                </div>
                <div className="form-box">
                  <input type="text" defaultValue={addressData.address} />
                </div>
                <div className="form-box">
                  <input
                    type="text"
                    defaultValue={addressData.address_detail}
                  />
                </div>
                <div className="check-box">
                  <input type="checkbox" className="hidden" id="address-save" />
                  <label htmlFor="address-save">기본 배송지로 저장</label>
                </div>
              </div>
            </li>
            <li>
              <label className="tit" htmlFor="message">
                배송 메세지
              </label>
              <div className="form-area">
                <div className="form-box">
                  <input
                    type="text"
                    id="message"
                    defaultValue={addressData.messege}
                  />
                </div>
              </div>
            </li>
          </ul>
          <button className="btn reset">새로입력</button>
        </div>

        <div className="payment-way">
          <h3 className="tit">결제수단</h3>
          <ul className="payment-check-list">
            <li>
              <div className="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  className="hidden"
                  id="card"
                />
                <label htmlFor="card">신용카드</label>
              </div>
            </li>
            <li>
              <div className="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  className="hidden"
                  id="kakao"
                />
                <label htmlFor="kakao">카카오페이</label>
              </div>
            </li>
            <li>
              <div className="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  className="hidden"
                  id="toss"
                />
                <label htmlFor="toss">토스</label>
              </div>
            </li>
            <li>
              <div className="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  className="hidden"
                  id="payco"
                />
                <label htmlFor="payco">페이코</label>
              </div>
            </li>
            <li>
              <div className="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  className="hidden"
                  id="naver"
                />
                <label htmlFor="naver">네이버페이</label>
              </div>
            </li>
            <li>
              <div className="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  className="hidden"
                  id="account"
                />
                <label htmlFor="account">계좌이체</label>
              </div>
            </li>
            <li>
              <div className="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  className="hidden"
                  id="no-bank"
                />
                <label htmlFor="no-bank">무통장입금</label>
              </div>
            </li>
            <li>
              <div className="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  className="hidden"
                  id="phone-pay"
                />
                <label htmlFor="phone-pay">휴대폰결제</label>
              </div>
            </li>
          </ul>
        </div>

        <div className="payment-total-area">
          <div className="price-box">
            <span className="price">{totalPrice}</span>원
            <p className="txt">총 상품금액</p>
          </div>
          <span className="sign">-</span>
          <div className="price-box discount">
            <span className="price">0</span>원<p className="txt">총 할인금액</p>
          </div>
          <span className="sign">=</span>
          <div className="price-box">
            <span className="price">{totalPrice}</span>원
            <p className="txt">총 주문금액</p>
          </div>
        </div>

        <div className="btn-area">
          <p className="info-txt">
            위 주문 내용을 확인하였으며 결제에 동의합니다.
          </p>
          <button className="btn btn-payment">결제하기</button>
        </div>
      </section>
    </main>
  );
}

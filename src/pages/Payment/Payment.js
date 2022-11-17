import React from 'react';
import './Payment.scss';

export default function Payment() {
  return (
    <main class="container payment">
      <section class="inner-small">
        <h2 class="section-title">주문/결제</h2>
        <div class="table-area">
          <table class="type-product">
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
              <tr>
                <td>
                  <div class="product-data-box">
                    <div class="img-box">
                      <img src="/images/icons/IMG_8905.JPG" alt="샘플" />
                    </div>
                    <div class="info-box">
                      <p class="tit">NICE</p>
                      <strong class="txt">[SET]클래식 1941 하프넥 셋업</strong>
                      <div class="data">
                        <span class="color">검정색</span>
                        <span class="size">L(맨투맨+롱팬츠)</span>
                      </div>
                      <span class="number">1개</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span>-</span>
                </td>
                <td>
                  <p class="tit">무료배송</p>
                  <p class="txt">입점 파트너에서 출고예정</p>
                </td>
                <td>
                  <strong class="price">84500원</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="product-data-box">
                    <div class="img-box">
                      <img src="/images/icons/IMG_8905.JPG" alt="샘플" />
                    </div>
                    <div class="info-box">
                      <p class="tit">NICE</p>
                      <strong class="txt">[SET]클래식 1941 하프넥 셋업</strong>
                      <div class="data">
                        <span class="color">검정색</span>
                        <span class="size">L(맨투맨+롱팬츠)</span>
                      </div>
                      <span class="number">1개</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span>-</span>
                </td>
                <td>
                  <p class="tit">무료배송</p>
                  <p class="txt">입점 파트너에서 출고예정</p>
                </td>
                <td>
                  <strong class="price">84500원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="delivery-info-area">
          <h3>배송지 정보</h3>
          <ul class="form-list">
            <li>
              <label class="tit required" htmlFor="name">
                이름
              </label>
              <div class="form-area">
                <div class="form-box">
                  <input type="text" id="name" />
                </div>
              </div>
            </li>
            <li>
              <label class="tit required" htmlFor="phone">
                휴대폰
              </label>
              <div class="form-area">
                <div class="form-box">
                  <input type="password" id="phone" />
                </div>
              </div>
            </li>
            <li>
              <label class="tit required" htmlFor="address">
                배송주소
              </label>
              <div class="form-area">
                <div class="form-box">
                  <input type="text" id="address" />
                  <button class="btn address">우편번호</button>
                </div>
                <div class="form-box">
                  <input type="text" />
                </div>
                <div class="form-box">
                  <input type="text" />
                </div>
                <div class="check-box">
                  <input type="checkbox" class="hidden" id="address-save" />
                  <label for="address-save">기본 배송지로 저장</label>
                </div>
              </div>
            </li>
            <li>
              <label class="tit" htmlFor="message">
                배송 메세지
              </label>
              <div class="form-area">
                <div class="form-box">
                  <input type="text" id="message" />
                </div>
              </div>
            </li>
          </ul>
          <button class="btn reset">새로입력</button>
        </div>

        <div class="payment-way">
          <h3 class="tit">결제수단</h3>
          <ul class="payment-check-list">
            <li>
              <div class="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  class="hidden"
                  id="card"
                />
                <label for="card">신용카드</label>
              </div>
            </li>
            <li>
              <div class="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  class="hidden"
                  id="kakao"
                />
                <label for="kakao">카카오페이</label>
              </div>
            </li>
            <li>
              <div class="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  class="hidden"
                  id="toss"
                />
                <label for="toss">토스</label>
              </div>
            </li>
            <li>
              <div class="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  class="hidden"
                  id="payco"
                />
                <label for="payco">페이코</label>
              </div>
            </li>
            <li>
              <div class="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  class="hidden"
                  id="naver"
                />
                <label for="naver">네이버페이</label>
              </div>
            </li>
            <li>
              <div class="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  class="hidden"
                  id="account"
                />
                <label for="account">계좌이체</label>
              </div>
            </li>
            <li>
              <div class="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  class="hidden"
                  id="no-bank"
                />
                <label for="no-bank">무통장입금</label>
              </div>
            </li>
            <li>
              <div class="check-box">
                <input
                  type="radio"
                  name="payment-check"
                  class="hidden"
                  id="phone-pay"
                />
                <label for="phone-pay">휴대폰결제</label>
              </div>
            </li>
          </ul>
        </div>

        <div class="payment-total-area">
          <div class="price-box">
            <span class="price">2190000</span>원<p class="txt">총 상품금액</p>
          </div>
          <span class="sign">-</span>
          <div class="price-box discount">
            <span class="price">0</span>원<p class="txt">총 상품금액</p>
          </div>
          <span class="sign">=</span>
          <div class="price-box">
            <span class="price">2190000</span>원<p class="txt">총 주문금액</p>
          </div>
        </div>

        <div class="btn-area">
          <p class="info-txt">위 주문 내용을 확인하였으며 결제에 동의합니다.</p>
          <button class="btn btn-payment">결제하기</button>
        </div>
      </section>
    </main>
  );
}

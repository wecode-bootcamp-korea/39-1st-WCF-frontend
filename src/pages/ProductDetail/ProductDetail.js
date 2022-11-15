import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';

export default function ProductDetail() {
  return (
    <main className="container ProductDetail">
      <section className="section section-detail">
        <div className="inner-small">
          <div className="product-img-area">
            <div className="product-main-img">
              <img src="/images/productdetail/t-shirts-1.jpg" alt="티셔츠" />
            </div>
            <ul className="product-img-list">
              <li className="active">
                <img src="/images/productdetail/t-shirts-1.jpg" alt="티셔츠" />
              </li>
              <li>
                <img src="/images/productdetail/t-shirts-1.jpg" alt="티셔츠" />
              </li>
              <li>
                <img src="/images/productdetail/t-shirts-1.jpg" alt="티셔츠" />
              </li>
              <li>
                <img src="/images/productdetail/t-shirts-1.jpg" alt="티셔츠" />
              </li>
              <li>
                <img src="/images/productdetail/t-shirts-1.jpg" alt="티셔츠" />
              </li>
              <li>
                <img src="/images/productdetail/t-shirts-1.jpg" alt="티셔츠" />
              </li>
              <li>
                <img src="/images/productdetail/t-shirts-1.jpg" alt="티셔츠" />
              </li>
            </ul>
          </div>
          <div className="product-data-area">
            <div className="product-name-link">
              <Link to="/">Beanpole Ladies</Link>
            </div>
            <div className="product-detail-area">
              <div className="product-detail-tit">
                <strong className="tit">블랙 경량 다운 재킷</strong>
                <div className="share-box">
                  <button className="btn share">
                    <span className="hidden">공유</span>
                  </button>
                  <ul className="share-data-box">
                    <li>
                      <button className="btn share-log">
                        <span className="hidden">share-log</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn share-facebook">
                        <span className="hidden">share-facebook</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn share-kakao">
                        <span className="hidden">share-kakao</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn share-pinter">
                        <span className="hidden">share-pinter</span>
                      </button>
                    </li>
                    <li>
                      <button className="btn share-url">
                        <span className="hidden">share-url</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-price-area">
                <div className="price-box">
                  <b className="price">323,100</b>
                  <span className="price-cancel">354,100</span>
                </div>
                <div className="discount-box">
                  <b className="percent">10%</b>
                  <button className="btn-tooltip">
                    <span className="hidden">툴팁</span>
                  </button>
                </div>
              </div>
              <div className="code-name">
                <span>FW22</span>
                <span>BF2938C015</span>
              </div>
              <div className="review-area">
                <div className="review-box">
                  {/* class : point-0, point-0-5,point-1, point-1-5,point-2, point-2-5,point-3, point-3-5,point-4, point-4-5,point-5 */}
                  <span className="star-point point-4-5">4.5</span>
                  <button className="btn review-move">
                    리뷰 <span className="txt">53</span>건
                  </button>
                </div>
                <div className="link-box">
                  <Link className="btn heart active">474</Link>
                </div>
              </div>
              <ul className="benefit-area">
                <li>
                  <strong className="tit">기프트포인트</strong>
                  <div className="txt-box">
                    <b>최대 32300원 할인(10%)</b>
                    <button className="btn-tooltip">
                      <span className="hidden">툴팁</span>
                    </button>
                    <p>(멤버십 고객 한정)</p>
                  </div>
                </li>
                <li>
                  <strong className="tit">멤버십포인트</strong>
                  <div className="txt-box">
                    <b>16,200P 적립</b>
                  </div>
                </li>
                <li>
                  <strong className="tit">카드할인</strong>
                  <div className="txt-box">
                    <b>농협카드 8개월 무이자할부</b>
                    <button className="btn-tooltip">
                      <span className="hidden">툴팁</span>
                    </button>
                  </div>
                </li>
                <li>
                  <strong className="tit">배송방법</strong>
                  <div className="txt-box">
                    <b>택배배송</b>
                    <p>
                      무료배송/18시 이전주문 시 <span>오늘출고예정</span>
                    </p>
                  </div>
                  <div className="txt-box">
                    <b>퀵배송</b>
                    <button className="btn-tooltip">
                      <span className="hidden">툴팁</span>
                    </button>
                    <p>퀵배송 주문 가능시간이 아닙니다.</p>
                  </div>
                  <div className="txt-box">
                    <b>매장픽업</b>
                    <button className="btn-tooltip">
                      <span className="hidden">툴팁</span>
                    </button>
                    <p>온라인 구매 후 지정 매장에서 수령</p>
                  </div>
                </li>
              </ul>
              <div className="product-selecor-area">
                <strong className="tit">사이즈</strong>
                <ul className="selector-list">
                  <li>
                    <button className="btn size-s">S</button>
                  </li>
                  <li>
                    <button className="btn size-m">M</button>
                  </li>
                  <li>
                    <button className="btn size-l">L</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
      <section className="section section-products-data">
        <ul className="tabs-list">
          <li>
            <button className="btn">상품정보</button>
          </li>
          <li>
            <button className="btn">리뷰</button>
          </li>
        </ul>
        <div className="products-area">
          <div className="txt-area">
            <span className="products-img-box">
              <img
                src="/images/productdetail/products-logo.jpg"
                alt="상품로고"
              />
            </span>
            <b>STIRLING PARKA KOREA</b>
            <p>
              무스너클의 대표 라인인 아이코닉 컬렉션의 스틸링 파카 코리아입니다.
              풍성한 폭스퍼와 아이코닉 고유의 세련된 디자인으로 고급스러운
              연출이 가능한 상품입니다. 코튼나일론 소재의 아웃쉘은 방수, 방풍에
              용이하며 4겹 구조의 다운프루프 라이닝 시스템 및 다운필 충전재는
              추운 겨울을 나기에 적합합니다.
            </p>
          </div>
          <div className="img-area">
            <div className="img-box">
              <img src="/images/productdetail/t-shirts-1.jpg" alt="티셔츠" />
            </div>
          </div>
          <div className="size-guide-area">
            <div className="table-box">
              <table className="type-horizon">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <span>사이즈</span>
                    </th>
                    <th>
                      <span>S</span>
                    </th>
                    <th>
                      <span>M</span>
                    </th>
                    <th>
                      <span>L</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <span>가슴둘레</span>
                    </th>
                    <td>
                      <span>102</span>
                    </td>
                    <td>
                      <span>107</span>
                    </td>
                    <td>
                      <span>112</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>밑단둘레</span>
                    </th>
                    <td>
                      <span>105</span>
                    </td>
                    <td>
                      <span>110</span>
                    </td>
                    <td>
                      <span>115</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>소매길이</span>
                    </th>
                    <td>
                      <span>60</span>
                    </td>
                    <td>
                      <span>60.7</span>
                    </td>
                    <td>
                      <span>61.4</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>소매통너비</span>
                    </th>
                    <td>
                      <span>36.2</span>
                    </td>
                    <td>
                      <span>38</span>
                    </td>
                    <td>
                      <span>39.8</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>소맷부리너비</span>
                    </th>
                    <td>
                      <span>28</span>
                    </td>
                    <td>
                      <span>28.8</span>
                    </td>
                    <td>
                      <span>29.6</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>어깨너비</span>
                    </th>
                    <td>
                      <span>39</span>
                    </td>
                    <td>
                      <span>40</span>
                    </td>
                    <td>
                      <span>41</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>옷길이</span>
                    </th>
                    <td>
                      <span>60</span>
                    </td>
                    <td>
                      <span>61</span>
                    </td>
                    <td>
                      <span>62</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="info-txt">
                디자인, 소재 및 측정 방법에 따라 약간의 오차가 있을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

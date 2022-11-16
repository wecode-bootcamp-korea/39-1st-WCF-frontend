import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';

export default function ProductDetail() {
  return (
    <main className="container product-detail">
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
              <div className="product-selector-area type-size">
                <strong className="tit">사이즈</strong>
                <ul className="select-list">
                  <li>
                    <span className="check-box">
                      <input
                        type="radio"
                        id="size-s"
                        name="size"
                        className="hidden"
                      />
                      <label htmlFor="size-s">S</label>
                    </span>
                  </li>
                  <li>
                    <span className="check-box">
                      <input
                        type="radio"
                        id="size-m"
                        name="size"
                        className="hidden"
                        disabled
                      />
                      <label htmlFor="size-m">M</label>
                    </span>
                  </li>
                  <li>
                    <span className="check-box">
                      <input
                        type="radio"
                        id="size-l"
                        name="size"
                        className="hidden"
                      />
                      <label htmlFor="size-l">L</label>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="product-selector-area type-send">
                <strong className="tit">배송</strong>
                <ul className="select-list">
                  <li>
                    <span className="check-box">
                      <input
                        type="radio"
                        id="send-parcel"
                        name="send"
                        className="hidden"
                        defaultChecked={true}
                      />
                      <label htmlFor="send-parcel">택배</label>
                    </span>
                  </li>
                  <li>
                    <span className="check-box">
                      <input
                        type="radio"
                        id="send-quick"
                        name="send"
                        className="hidden"
                        disabled
                      />
                      <label htmlFor="send-quick">퀵배송</label>
                    </span>
                  </li>
                  <li>
                    <span className="check-box">
                      <input
                        type="radio"
                        id="send-pickup"
                        name="send"
                        className="hidden"
                        disabled
                      />
                      <label htmlFor="send-pickup">매장픽업</label>
                    </span>
                  </li>
                </ul>
                <div className="txt-box">
                  <span className="txt">무료배송, 18시 이전주문 시 </span>
                  <b>오늘출고예정</b>
                </div>
                <div className="txt-box">
                  <span className="txt">
                    5,000원, 14시 이전 주문 당일 18~22시 도착 예정
                  </span>
                  <button className="btn-tooltip">
                    <span className="hidden">툴팁</span>
                  </button>
                </div>
                <div className="txt-box">
                  <span className="txt">온라인 구매 후 지정 매장에서 수령</span>
                  <button className="btn-tooltip">
                    <span className="hidden">툴팁</span>
                  </button>
                </div>
              </div>
              <div className="product-total-result">
                <div className="data-box">
                  <span className="size">S</span>
                  <span className="date">오늘출고예정</span>
                </div>
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
                <div class="btn-wrap">
                  <div class="btn-area">
                    <button class="btn black">장바구니</button>
                    <button class="btn purple">바로구매</button>
                  </div>
                  <div class="btn-area">
                    <button class="btn add">코디 제안 상품</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-banner">
        <div class="inner">
          <div class="banner-wrap">
            <ul className="banner-swiper">
              <li className="swiper-item item1">
                <Link to="/productdetail">
                  <div class="text-box">
                    <em>WFC PLUS</em>
                    <b>럭셔리 첫 구매시</b>
                    <p>최대 10만원 할인 혜택</p>
                  </div>
                </Link>
              </li>
              <li className="swiper-item item2">
                <Link to="/productdetail">
                  <div class="text-box">
                    <em>WFC PLUS</em>
                    <b>럭셔리 첫 구매시</b>
                    <p>최대 10만원 할인 혜택</p>
                  </div>
                </Link>
              </li>
              <li className="swiper-item item3">
                <Link to="/productdetail">
                  <div class="text-box">
                    <em>WFC PLUS</em>
                    <b>럭셔리 첫 구매시</b>
                    <p>최대 10만원 할인 혜택</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section section-products-data inner">
        <ul className="tab-list">
          <li>
            <button className="btn move-data active">상품정보</button>
          </li>
          <li>
            <button className="btn move-size">사이즈</button>
          </li>
        </ul>
        <div className="products-area">
          <div className="txt-area">
            <div class="txt-header">
              <b>Designer’s notes</b>
            </div>
            <p>모델사이즈 174cm 46kg 24인치 , 상의S 하의026</p>
          </div>

          <div className="txt-area">
            <div class="txt-header">
              <b>Size & Fit</b>
              <button className="btn-tooltip">
                <span className="hidden">툴팁</span>
              </button>
            </div>
            <p>
              가벼운 나일론 소재로 제작하여 편안한 착용감을 주는 아우터입니다.
              허리까지 오는 경쾌한 기장감과 여유있는 실루엣에 코듀로이 원단으로
              디테일을 준 재킷 디자인으로, 구스다운 충전재를 넣어주어
              가벼우면서도 따뜻하게 입을 수 있는 데일리 아이템입니다.
            </p>
          </div>

          <div className="txt-area">
            <div class="txt-header">
              <b>Details</b>
              <button className="btn-tooltip">
                <span className="hidden">툴팁</span>
              </button>
            </div>
            <p>겉감 : 나일론 100%.</p>
          </div>

          <div className="img-area">
            <p class="tit">Outfit View</p>
            <p class="txt">
              모델 착용 이미지보다 제품컷 이미지의 컬러가 정확합니다.
            </p>

            <ul class="img-list">
              <li>
                <img src="/images/productdetail/sample-img.jpg" alt="샘플" />
              </li>
              <li>
                <img src="/images/productdetail/sample-img.jpg" alt="샘플" />
              </li>
            </ul>
          </div>

          <div className="size-guide-area">
            <b class="tit">Size Info</b>
            <div class="tab-wrap type-border-bottom">
              <ul class="tab-header">
                <li>
                  <button className="active">실측사이즈</button>
                </li>
                <li>
                  <button>사이즈 가이드</button>
                </li>
              </ul>
              <div class="tab-container">
                <div class="tab-item item-1">
                  <div className="table-area">
                    <table className="table type-horizon">
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
                      디자인, 소재 및 측정 방법에 따라 약간의 오차가 있을 수
                      있습니다.
                    </p>
                  </div>
                </div>
                <div class="tab-item item-2">
                  {/* 2뎁스 탭 */}
                  <div class="table-wrap type-border">
                    <ul class="tab-header">
                      <li>
                        <button className="active">여성상의</button>
                      </li>
                      <li>
                        <button>여성하의</button>
                      </li>
                      <li>
                        <button>여성하의</button>
                      </li>
                      <li>
                        <button>남성상의</button>
                      </li>
                      <li>
                        <button>남성하의</button>
                      </li>
                    </ul>
                    <div class="tab-container">
                      <div class="tab-item item-1">
                        <div className="table-area">
                          <table className="table type-horizon">
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
                            </tbody>
                          </table>
                          <p className="info-txt">
                            디자인, 소재 및 측정 방법에 따라 약간의 오차가 있을
                            수 있습니다.
                          </p>
                        </div>
                      </div>
                      <div class="tab-item item-2">
                        <div className="table-area">
                          <table className="table type-horizon">
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
                            </tbody>
                          </table>
                          <p className="info-txt">
                            디자인, 소재 및 측정 방법에 따라 약간의 오차가 있을
                            수 있습니다.
                          </p>
                        </div>
                      </div>
                      <div class="tab-item item-3">
                        <div className="table-area">
                          <table className="table type-horizon">
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
                            </tbody>
                          </table>
                          <p className="info-txt">
                            디자인, 소재 및 측정 방법에 따라 약간의 오차가 있을
                            수 있습니다.
                          </p>
                        </div>
                      </div>
                      <div class="tab-item item-4">
                        <div className="table-area">
                          <table className="table type-horizon">
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
                            </tbody>
                          </table>
                          <p className="info-txt">
                            디자인, 소재 및 측정 방법에 따라 약간의 오차가 있을
                            수 있습니다.
                          </p>
                        </div>
                      </div>
                      <div class="tab-item item-5">
                        <div className="table-area">
                          <table className="table type-horizon">
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
                            </tbody>
                          </table>
                          <p className="info-txt">
                            디자인, 소재 및 측정 방법에 따라 약간의 오차가 있을
                            수 있습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

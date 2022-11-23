import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ImgArea from './ImgArea/ImgArea';
import './ProductDetail.scss';

export default function ProductDetail() {
  // 상품 전체 데이터
  const [productData, setProductData] = useState({});
  //수량갯수
  const [quantityNum, setQuantityNum] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [postSize, setPostSize] = useState();
  //
  const params = useParams();
  const productId = params.productId;

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://10.58.52.205:3000/product-detail/${productId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(result => {
        setProductData(result.data[0]);
      });
  }, []);

  //수량차감함수
  function quantityMinus() {
    let num = quantityNum;
    if (num === 1) {
      setQuantityNum(1);
    } else {
      setQuantityNum(num - 1);
    }
  }
  //수량증감함수
  function quantityPlus() {
    let num = quantityNum;
    setQuantityNum(num + 1);
  }

  //사이즈 체크 후 서버에 보낼 정보 저장
  function sizeCheck(e) {
    setPostSize(e.target.dataset.id);
  }

  // 바로구매 클릭시 서버에 보낼 데이터 함수
  function moveData(e) {
    fetch('server-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //보낼데이터
        postSize,
        quantityNum,
      }),
    });

    if (e.target.className === 'btn black') {
      postSize === undefined
        ? alert('Size가 체크되지 않았습니다!')
        : navigate('/Cart');
    } else if (e.target.className === 'btn purple') {
      navigate('/Payment');
    }
  }

  //
  if (Object.keys(productData).length === 0) {
    return null;
  }
  return (
    <main className="container product-detail">
      <section className="section section-detail">
        <div className="inner-small">
          <ImgArea productData={productData} />
          <div className="product-data-area">
            <div className="product-name-link">
              <Link to="/">{productData.brand}</Link>
            </div>
            <div className="product-detail-area">
              <div className="product-detail-tit">
                <strong className="tit">{productData.title}</strong>
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
                  <b className="price">
                    {productData.price - productData.price * discount}
                    {/* error : 비동기-동기 에러 처리필요 */}
                  </b>
                  <span className="price-cancel">{productData.price}</span>
                </div>
                <div className="discount-box">
                  <b className="percent">{discount}%</b>
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
                  {productData.size &&
                    productData.size.map(elem => {
                      return (
                        <li key={elem.id}>
                          <span className="check-box">
                            <input
                              type="radio"
                              id={`size-` + elem.size}
                              data-id={elem.product_options}
                              name="size"
                              className="hidden"
                              onClick={sizeCheck}
                            />
                            <label htmlFor={`size-` + elem.size}>
                              {elem.size}
                            </label>
                          </span>
                        </li>
                      );
                    })}
                  {/* <li>
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
                  </li> */}
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
                {/* 수량 기능 */}
                <div className="product-quantity-box">
                  <div className="quantity-numbering">
                    <button className="minus" onClick={quantityMinus}>
                      <span className="hidden">차감</span>
                    </button>
                    <span className="num">{quantityNum}</span>
                    <button className="add" onClick={quantityPlus}>
                      <span className="hidden">증감</span>
                    </button>
                  </div>
                  <div className="price-box">
                    <span className="price">
                      {productData.price * quantityNum}
                      {/* error : 비동기-동기 에러 처리필요 */}
                    </span>
                    원
                  </div>
                </div>
                <div className="btn-wrap">
                  <div className="btn-area">
                    <button className="btn black" onClick={moveData}>
                      장바구니
                    </button>
                    <button className="btn purple" onClick={moveData}>
                      바로구매
                    </button>
                  </div>
                  <div className="btn-area">
                    <button className="btn add">코디 제안 상품</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-banner">
        <div className="inner">
          <div className="banner-wrap">
            <ul className="banner-swiper">
              <li className="swiper-item item1">
                <Link to="/productdetail">
                  <div className="text-box">
                    <em>WFC PLUS</em>
                    <b>럭셔리 첫 구매시</b>
                    <p>최대 10만원 할인 혜택</p>
                  </div>
                </Link>
              </li>
              <li className="swiper-item item2">
                <Link to="/productdetail">
                  <div className="text-box">
                    <em>WFC PLUS</em>
                    <b>럭셔리 첫 구매시</b>
                    <p>최대 10만원 할인 혜택</p>
                  </div>
                </Link>
              </li>
              <li className="swiper-item item3">
                <Link to="/productdetail">
                  <div className="text-box">
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
          {/* <li>
            <button className="btn move-size">사이즈</button>
          </li> */}
        </ul>
        <div className="products-area">
          <div className="txt-area">
            <div className="txt-header">
              <b>Designer’s notes</b>
            </div>
            <p>모델사이즈 174cm 46kg 24인치 , 상의S 하의026</p>
          </div>

          <div className="txt-area">
            <div className="txt-header">
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
            <div className="txt-header">
              <b>Details</b>
              <button className="btn-tooltip">
                <span className="hidden">툴팁</span>
              </button>
            </div>
            <p>겉감 : 나일론 100%.</p>
          </div>

          <div className="img-area">
            <p className="tit">Outfit View</p>
            <p className="txt">
              모델 착용 이미지보다 제품컷 이미지의 컬러가 정확합니다.
            </p>

            <ul className="img-list">
              <li>
                <img src="/images/productdetail/sample-img.jpg" alt="샘플" />
              </li>
              <li>
                <img src="/images/productdetail/sample-img.jpg" alt="샘플" />
              </li>
            </ul>
          </div>

          <div className="size-guide-area">
            <b className="tit">Size Info</b>
            <div className="tab-wrap type-border-bottom">
              <ul className="tab-header">
                <li>
                  <button className="active">실측사이즈</button>
                </li>
                {/* <li>
                  <button>사이즈 가이드</button>
                </li> */}
              </ul>
              <div className="tab-container">
                <div className="tab-item item-1">
                  <div className="table-area first-child-tl">
                    <table className="table">
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
                {/* <div className="tab-item item-2">
                  <div className="table-wrap type-border">
                    <ul className="tab-header">
                      <li>
                        <button className="active">여성상의</button>
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
                    <div className="tab-container">
                      <div className="tab-item item-1">
                        <div className="table-area">
                          <table className="table type-horizon">
                            <colgroup>
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <th colSpan={2} rowSpan={2}>
                                  <span>SIZE</span>
                                </th>
                                <th colSpan={2} rowSpan={2}>
                                  <span>BEAKER</span>
                                </th>
                                <th>
                                  <span>신체사이즈</span>
                                </th>
                              </tr>
                              <tr>
                                <th>
                                  <span>가슴둘레</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <span>S</span>
                                </td>
                                <td>
                                  <span>90</span>
                                </td>
                                <td>
                                  <span>M</span>
                                </td>
                                <td>
                                  <span>002</span>
                                </td>
                                <td>
                                  <span>90</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>M</span>
                                </td>
                                <td>
                                  <span>95</span>
                                </td>
                                <td>
                                  <span>L</span>
                                </td>
                                <td>
                                  <span>003</span>
                                </td>
                                <td>
                                  <span>95</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>L</span>
                                </td>
                                <td>
                                  <span>100</span>
                                </td>
                                <td>
                                  <span>XL</span>
                                </td>
                                <td>
                                  <span>004</span>
                                </td>
                                <td>
                                  <span>100</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <ul className="bullet-list">
                            <li>
                              제품 구매시 참고하실 수 있는 사이즈 조견표입니다.
                            </li>
                            <li>
                              제시된 사이즈는 일반적인 기준으로 체형 등에 따라
                              개인차가 있을 수 있으니 양지 바랍니다.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-item item-2">
                        <div className="table-area">
                          <table className="table type-horizon">
                            <colgroup>
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <th colSpan={2} rowSpan={2}>
                                  <span>SIZE</span>
                                </th>
                                <th colSpan={3} rowSpan={2}>
                                  <span>BEAKER</span>
                                </th>
                                <th>
                                  <span>신체사이즈</span>
                                </th>
                              </tr>
                              <tr>
                                <th>
                                  <span>가슴둘레</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <span>XS</span>
                                </td>
                                <td>
                                  <span>64</span>
                                </td>
                                <td>
                                  <span>XS</span>
                                </td>
                                <td>
                                  <span>000</span>
                                </td>
                                <td>
                                  <span>24-25</span>
                                </td>
                                <td>
                                  <span>64</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>S</span>
                                </td>
                                <td>
                                  <span>67</span>
                                </td>
                                <td>
                                  <span>S</span>
                                </td>
                                <td>
                                  <span>001</span>
                                </td>
                                <td>
                                  <span>001</span>
                                </td>
                                <td>
                                  <span>67</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>M</span>
                                </td>
                                <td>
                                  <span>70</span>
                                </td>
                                <td>
                                  <span>M</span>
                                </td>
                                <td>
                                  <span>002</span>
                                </td>
                                <td>
                                  <span>28-29</span>
                                </td>
                                <td>
                                  <span>70</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>L</span>
                                </td>
                                <td>
                                  <span>73</span>
                                </td>
                                <td>
                                  <span>L</span>
                                </td>
                                <td>
                                  <span>003</span>
                                </td>
                                <td>
                                  <span>30</span>
                                </td>
                                <td>
                                  <span>73</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <ul className="bullet-list">
                            <li>
                              제품 구매시 참고하실 수 있는 사이즈 조견표입니다.
                            </li>
                            <li>
                              제시된 사이즈는 일반적인 기준으로 체형 등에 따라
                              개인차가 있을 수 있으니 양지 바랍니다.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-item item-3">
                        <div className="table-area">
                          <table className="table type-horizon">
                            <colgroup>
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <th colSpan={2} rowSpan={2}>
                                  <span>SIZE</span>
                                </th>
                                <th colSpan={2} rowSpan={2}>
                                  <span>BEAKER</span>
                                </th>
                                <th>
                                  <span>신체사이즈</span>
                                </th>
                              </tr>
                              <tr>
                                <th>
                                  <span>가슴둘레</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <span>S</span>
                                </td>
                                <td>
                                  <span>90</span>
                                </td>
                                <td>
                                  <span>M</span>
                                </td>
                                <td>
                                  <span>002</span>
                                </td>
                                <td>
                                  <span>90</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>M</span>
                                </td>
                                <td>
                                  <span>95</span>
                                </td>
                                <td>
                                  <span>L</span>
                                </td>
                                <td>
                                  <span>003</span>
                                </td>
                                <td>
                                  <span>95</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>L</span>
                                </td>
                                <td>
                                  <span>100</span>
                                </td>
                                <td>
                                  <span>XL</span>
                                </td>
                                <td>
                                  <span>004</span>
                                </td>
                                <td>
                                  <span>100</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <ul className="bullet-list">
                            <li>
                              제품 구매시 참고하실 수 있는 사이즈 조견표입니다.
                            </li>
                            <li>
                              제시된 사이즈는 일반적인 기준으로 체형 등에 따라
                              개인차가 있을 수 있으니 양지 바랍니다.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-item item-4">
                        <div className="table-area">
                          <table className="table type-horizon">
                            <colgroup>
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <th colSpan={2} rowSpan={2}>
                                  <span>SIZE</span>
                                </th>
                                <th colSpan={3} rowSpan={2}>
                                  <span>BEAKER</span>
                                </th>
                                <th>
                                  <span>신체사이즈</span>
                                </th>
                              </tr>
                              <tr>
                                <th>
                                  <span>가슴둘레</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <span>XS</span>
                                </td>
                                <td>
                                  <span>64</span>
                                </td>
                                <td>
                                  <span>XS</span>
                                </td>
                                <td>
                                  <span>000</span>
                                </td>
                                <td>
                                  <span>24-25</span>
                                </td>
                                <td>
                                  <span>64</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>S</span>
                                </td>
                                <td>
                                  <span>67</span>
                                </td>
                                <td>
                                  <span>S</span>
                                </td>
                                <td>
                                  <span>001</span>
                                </td>
                                <td>
                                  <span>001</span>
                                </td>
                                <td>
                                  <span>67</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>M</span>
                                </td>
                                <td>
                                  <span>70</span>
                                </td>
                                <td>
                                  <span>M</span>
                                </td>
                                <td>
                                  <span>002</span>
                                </td>
                                <td>
                                  <span>28-29</span>
                                </td>
                                <td>
                                  <span>70</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>L</span>
                                </td>
                                <td>
                                  <span>73</span>
                                </td>
                                <td>
                                  <span>L</span>
                                </td>
                                <td>
                                  <span>003</span>
                                </td>
                                <td>
                                  <span>30</span>
                                </td>
                                <td>
                                  <span>73</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <ul className="bullet-list">
                            <li>
                              제품 구매시 참고하실 수 있는 사이즈 조견표입니다.
                            </li>
                            <li>
                              제시된 사이즈는 일반적인 기준으로 체형 등에 따라
                              개인차가 있을 수 있으니 양지 바랍니다.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

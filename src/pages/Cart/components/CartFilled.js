import React, { useState, useEffect, useNavigate} from 'react';
import '../Cart.scss';

const navigate = useNavigate();
  const [checkAll, setCheckAll] = useState(false);
  const [totalPrices, setTotalPrices] = useState(0);
  const [total, setTotal] = useState(0);

  const products = props.products;
  const setCartProducts = props.setProducts;

  const checkedArr = [];
  for (let i in products) {
    if (products[i].checkIn === 1) {
      checkedArr.push(products[i].productId);
    }
  }

  useEffect(() => {
    setTotalQuantity(products.length);
  }, [products.length]);

  const pushChecked = event => {
    if (checkedArr.includes(Number(event.target.id))) {
      const rest = checkedArr.filter(item => item !== Number(event.target.id));

      const newString = (checked => {
        if (checked.length === 0) return '';

        let string = '';
        for (let i in checked) {
          string += `productId=${checked[i]}&`;
        }
        string = string.slice(0, -1);
        return string;
      })(rest);

      fetch(`http://3.35.54.156:3000/cart/check?${newString}`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          setCartProducts(json.cart);
        });
    } else {
      const addition = [...checkedArr, Number(event.target.id)];

      const newString = (checked => {
        if (checked.length === 0) return '';

        let string = '';
        for (let i in checked) {
          string += `productId=${checked[i]}&`;
        }
        string = string.slice(0, -1);
        return string;
      })(addition);

      fetch(`http://3.35.54.156:3000/cart/check?${newString}`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          setCartProducts(json.cart);
        });
    }
  };

  const checkEvery = () => {
    if (checkedArr.length !== products.length) {
      const newArr = products.map(product => String(product.productId));

      const newString = (checked => {
        if (checked.length === 0) return '';

        let string = '';
        for (let i in checked) {
          string += `productId=${checked[i]}&`;
        }
        string = string.slice(0, -1);
        return string;
      })(newArr);

      fetch(`http://3.35.54.156:3000/cart/check?${newString}`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          setCartProducts(json.cart);
        });
    } else {
      fetch(`http://3.35.54.156:3000/cart/check`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          setCartProducts(json.cart);
        });
    }
  };

  useEffect(() => {
    checkedArr.length === products.length
      ? setCheckAll(true)
      : setCheckAll(false);
  }, [checkedArr]);

  useEffect(() => {
    let totalProducts = 0;
    let totalDeliver = 0;
    let orderTotalQuantity = 0;
    let totalPrice = 0;

    const productArr = [];
    const deliverArr = [];
    const quantityArr = [];
    for (let i in products) {
      if (checkedArr.includes(products[i].productId)) {
        productArr.push(products[i].price);
        deliverArr.push(products[i].deliveryfee);
        quantityArr.push(products[i].quantity);
      }
    }

    for (let i in productArr) {
      totalProducts += productArr[i];
    }

    for (let i in deliverArr) {
      totalDeliver += deliverArr[i];
    }

    for (let i in quantityArr) {
      orderTotalQuantity += quantityArr[i];
    }

    totalPrice = totalProducts + totalDeliver;

    setTotalPrices(totalProducts);
    setTotalDeliver(totalDeliver);
    setOrderTotalQuantity(orderTotalQuantity);
    setTotal(totalPrice);
  }, [checkedArr]);

  const orderInCart = () => {
    if (checkedArr.length === 0) {
      alert('주문할 상품이 없습니다.');
    } else {
      navigate('/order');
    }
  };

  const deleteThis = event => {
    fetch(`http://3.35.54.156:3000/cart?productId=${Number(event.target.id)}`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setCartProducts(json.cart);
      });
  };

  const deleteChosen = event => {
    const newString = (checked => {
      if (checked.length === 0) return '';

      let string = '';
      for (let i in checked) {
        string += `productId=${checked[i]}&`;
      }
      string = string.slice(0, -1);
      return string;
    })(checkedArr);

    fetch(`http://3.35.54.156:3000/cart?${newString}`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setCartProducts(json.cart);
      });
  };

  const plusCount = event => {
    let quantityForRequest = 0;
    for (let i in products) {
      if (products[i].productId === Number(event.target.id)) {
        quantityForRequest = products[i].quantity;
      }
    }

    fetch(
      `http://3.35.54.156:3000/cart?productId=${Number(
        event.target.id
      )}&quantity=${quantityForRequest + 1}`,
      {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          productId: Number(event.target.id),
          quantity: quantityForRequest + 1,
        }),
      }
    )
      .then(response => response.json())
      .then(json => setCartProducts(json.cart));
  };

  const minusCount = event => {
    let quantityForRequest = 0;
    for (let i in products) {
      if (products[i].productId === Number(event.target.id)) {
        quantityForRequest = products[i].quantity;
      }
    }

    fetch(
      `http://3.35.54.156:3000/cart?productId=${Number(
        event.target.id
      )}&quantity=${quantityForRequest - 1}`,
      {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(response => response.json())
      .then(json => setCartProducts(json.cart));
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
            checked={Object.values(checkList).every(el => el)}
          />
          <label htmlFor="checked-all" className="check-all">
            전체선택
          </label>
        </div>
        <button className="delete-chosen-goods">선택 상품 삭제</button>
      </div>
      <div className="cart-data-box">
        {cartData.map(item => (
          <div className="cart-data" key={item.id}>
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
                  name={item.name}
                  className="check-goods"
                  value={item.price}
                  checked={checkList[item.name]}
                  onChange={handleCheck}
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
                  <p className="total-price">
                    {[item.price]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </p>
                  <button type="button" className="buy-now">
                    바로구매
                  </button>
                </div>
              </div>

              <button type="button" className="delete-goods">
                <span className="delete-goods-text">엑스</span>
              </button>
            </div>

            <div className="order-amount-box-wrap">
              <div className="order-amount-box">
                <div className="left-sub-box">
                  <p className="left-title">스토어 주문금액 합계</p>
                  <p className="left-sub-title">
                    상품금액
                    {[item.price]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원 + 배송비 0원 - 할인금액 0원
                  </p>
                </div>
                <div className="right-sub-box">
                  <p className="price">
                    {[item.price]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
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
            {/* <p className="amount-price">{cartData.price}원</p> */}
            <p className="amount-price">9원</p>
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
              <p className="total-amounts-price">1,680,000원</p>
              <p className="total-amounts-text">총 주문금액</p>
            </div>
          </div>
        </div>
        <div className="order-button-box">
          <button className="order-button">주문하기</button>
        </div>
      </div>
    </div>
  );
};
export default CartFilled;

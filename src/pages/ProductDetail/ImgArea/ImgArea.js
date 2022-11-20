import React, { useState } from 'react';

export default function ImgARea(props) {
  const [isImgStatus, setImgStatus] = useState('');

  function currentImgShow(e) {
    console.log(e.currentTarget);
    setImgStatus('');
    e.currentTarget.className = 'active';
  }

  return (
    <div className="product-img-area">
      <div className="product-main-img">
        <img src={props.productData.thumbnail} alt="티셔츠" />
      </div>
      <ul className="product-img-list">
        {props.productData.images &&
          props.productData.images.map(list => {
            return (
              <li
                key={list.id}
                className={isImgStatus}
                onClick={currentImgShow}
              >
                <img src={list.url} alt={list.alt} />
              </li>
            );
          })}
        {/* <li className="active">
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
        </li> */}
      </ul>
    </div>
  );
}

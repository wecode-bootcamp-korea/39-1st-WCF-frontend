import React, { useState, useEffect } from 'react';

export default function ImgARea(props) {
  const { images } = props.productData;

  const [isImgStatus, setImgStatus] = useState(0);
  const [mainImg, setMainImg] = useState();

  useEffect(() => {
    setMainImg(images[0].url);
  }, [props]);

  function currentImgShow(list, i) {
    setImgStatus(i);
    setMainImg(list.url);
  }

  return (
    <div className="product-img-area">
      <div className="product-main-img">
        <img src={mainImg} />
      </div>
      <ul className="product-img-list">
        {images.map((list, i) => {
          return (
            <li
              key={list.id}
              className={isImgStatus == i ? 'active' : ''}
              onClick={() => currentImgShow(list, i)}
            >
              <img src={list.url} alt={`이미지_ ${list.id}`} />
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

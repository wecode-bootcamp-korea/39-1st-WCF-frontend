import React, { useState, useEffect } from 'react';

export default function ImgARea(props) {
  const { images } = props.productData;

  const [imgIdx, setImgIdx] = useState(0);
  const [mainImg, setMainImg] = useState(images[0].url);

  function currentImgShow(list, i) {
    setImgIdx(i);
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
              className={imgIdx == i ? 'active' : ''}
              onClick={() => currentImgShow(list, i)}
            >
              <img src={list.url} alt={`이미지_ ${list.id}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

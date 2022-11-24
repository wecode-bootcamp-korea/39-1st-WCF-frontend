import React, { useState, useRef, useEffect } from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';
import OUR_PICKS from './OUR_PICKS';
import HotBrand from './HotBrand';
import Marketing from './Marketing';
import OurPicks from './OurPicks';

const TRANSITION = 'all ease 500ms';

export default function Main() {
  //인덱스 저장
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideImgData, setSlideImgData] = useState([]);
  const [transition, setTransition] = useState(TRANSITION);
  // 카운트
  const [count, setCount] = useState(0);
  // 이미지가 몇 초마다 이동할 지
  const slideRef = useRef(null);
  // 버튼 상태
  const [clickButton, setClickButton] = useState(false);

  useEffect(() => {
    fetch('data/mainslide.json')
      .then(response => response.json())
      .then(data => {
        setSlideImgData([data[data.length - 1], ...data, data[0]]);
      });
  }, []);

  // console.log(slideImgData, currentIndex);

  useEffect(() => {
    const slideTime = setTimeout(() => {
      slideIndex();
    }, 5000);

    return () => clearTimeout(slideTime);
  }, [currentIndex]);

  useEffect(() => {
    slideRef.current.style.transition = transition;
    slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex, transition]);

  //슬라이드 정방향으로 넘어가는 조건
  const slideIndex = () => {
    console.log(currentIndex);
    setTransition(TRANSITION);

    const next = currentIndex + 1;
    setCurrentIndex(next);

    const isLastImgIdx = next >= slideImgData.length - 1;
    if (isLastImgIdx) {
      setTimeout(() => {
        setTransition('');
        setCurrentIndex(1);
      }, 500);
    }
  };

  //슬라이드가 이전으로 넘어가는 조건
  const leftSlide = () => {
    setTransition(TRANSITION);

    const prev = currentIndex - 1;
    setCurrentIndex(prev);

    const isLastImgIdx = prev === 0;
    if (isLastImgIdx) {
      setTimeout(() => {
        setTransition('');
        setCurrentIndex(slideImgData.length - 1);
      }, 500);
    }
  };

  return (
    <div>
      <div className="main-container">
        <div className="slider">
          <div className="slideShow">
            <div className="slide-item" ref={slideRef} count={count}>
              {slideImgData.map((slide, index) => (
                <img
                  className="slide-item-image"
                  key={index}
                  src={slide.img}
                  alt="배너이미지"
                />
              ))}
            </div>
            <div className="prev-btn">
              <img
                alt="prev-btn"
                src="./images/main/leftarrow.png"
                onClick={leftSlide}
              />
            </div>
            <div className="next-btn-play">
              <div className="next-btn">
                <img
                  alt="next-btn"
                  src="./images/main/rightarrow.png"
                  onClick={slideIndex}
                />
              </div>
            </div>
          </div>
        </div>
        <Marketing />
        <OurPicks />
        <HotBrand />
        <div className="our-special48">
          <h2 className="our-special48-head">48시간 특가</h2>
          <div className="our-special48-area">
            <div className="our-special48-left">
              <div className="our-special48-item">
                <Link to="">
                  <img alt="48image" src="https://i.ibb.co/5c3ZVWJ/1.jpg" />
                  <div className="our48-title">
                    <p>리뷰로 보는 겨울 아우터</p>
                    <p>48시간 동안 최대 80% 세일!</p>
                    <p className="our48-subtitle">SeHo</p>
                  </div>
                </Link>
              </div>
              <div className="our-special48-subitem">
                <Link to="">
                  <img
                    alt="48image"
                    src="https://images.unsplash.com/photo-1576861048192-fa56cf0a8161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  />
                  <div className="our48-back">
                    <p className="our48-back-title">SeHo</p>
                    <p>니트 모자</p>
                    <p>(8colors) MDTS006</p>
                    <p className="our48-price">59,000</p>
                    <p className="our48-saleprice-title">
                      37%<span>37,050</span>
                    </p>
                  </div>
                </Link>
                <Link to="">
                  <img
                    alt="48image"
                    src="https://images.unsplash.com/photo-1623393807193-e095f7944161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                  <div className="our48-back">
                    <p className="our48-back-title">SeHo</p>
                    <p>니트, 가디건</p>
                    <p>(5colors) DTRS006</p>
                    <p className="our48-price">63,000</p>
                    <p className="our48-saleprice-title">
                      43%<span>35,900</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="our-special48-right">
              <div className="our-special48-item">
                <Link to="">
                  <img
                    alt="48image"
                    src="https://i.ibb.co/t3xVQ9W/imageedit-13-6374660499.jpg"
                  />
                  <div className="our48-title">
                    <p>나에게 어울리는 가방은 뭘까?</p>
                    <p>WCF가 찾아드려요!</p>
                    <p>48시간 동안 최대 50% 세일</p>
                    <p className="our48-subtitle">MENTO's</p>
                  </div>
                </Link>
              </div>
              <div className="our-special48-subitem">
                <Link to="">
                  <img
                    alt="48image"
                    src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=817&q=80"
                  />
                  <div className="our48-back">
                    <p className="our48-back-title">MENTO's</p>
                    <p>블랙프라이데이</p>
                    <p>[셀럽 착용] 조이 버킷백</p>
                    <p className="our48-price">289,000</p>
                    <p className="our48-saleprice-title">
                      28%<span>208,080</span>
                    </p>
                  </div>
                </Link>
                <Link to="">
                  <img
                    alt="48image"
                    src="https://images.unsplash.com/photo-1528384483229-b4a97480dbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                  <div className="our48-back">
                    <p className="our48-back-title">MENTO's</p>
                    <p>디노 플랩 백팩</p>
                    <p>[only] Black</p>
                    <p className="our48-price">329,000</p>
                    <p className="our48-saleprice-title">
                      28%<span>236,880</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-pick-list">
        <div className="our-pick-list-area">
          <ul className="ourpick-list-ul">
            {OUR_PICKS.map(list => (
              <li key={list.id}>
                <Link to={list.link}>
                  <img src={list.img} />
                </Link>
                <p class="subtext">{list.text}</p>
                <p class="title">{list.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

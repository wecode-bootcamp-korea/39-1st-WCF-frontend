import React, { useState, useRef, useEffect } from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';
import OUR_PICKS from './OUR_PICKS';

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
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        setSlideImgData([data[data.length - 1], ...data, data[0]]);
      });
  }, []);

  // console.log(slideImgData, currentIndex);

  useEffect(() => {
    const slideTime = setTimeout(() => {
      slideIndex();
    }, 3000);

    return () => clearTimeout(slideTime);
  }, [currentIndex]);

  useEffect(() => {
    slideRef.current.style.transition = transition;
    slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex, transition]);

  //슬라이드 정방향으로 넘어가는 조건
  const slideIndex = () => {
    setTransition(TRANSITION);

    const next = currentIndex + 1;
    setCurrentIndex(next);

    const isLastImgIdx = next >= slideImgData.length - 1;
    if (isLastImgIdx) {
      setTimeout(() => {
        setTransition('');
        setCurrentIndex(0);
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
                ></img>
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
              <div className="play-btn">
                <img
                  className="play-btn-icon"
                  alt="play-btn"
                  src="./images/main/play.png"
                  // onClick={playHandle}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="our-pick">
          <h2 className="ourpick-title">Our Picks</h2>
          <ul className="ourpick-photo" />
        </div>
        <div className="our-special48">
          <h2 className="our-special48-head">48시간 특가</h2>
          <div className="our-special48-area">
            <div className="our-special48-left">
              <div className="our-special48-item">
                <Link to="">
                  <img
                    alt="48image"
                    src="./images/main/48image/48-image-1.jpg"
                  />
                </Link>
              </div>
              <div className="our-special48-subitem">
                <Link to="">
                  <img
                    alt="48image"
                    src="./images/main/48image/48-image-2.jpg"
                  />
                </Link>
                <Link to="">
                  <img
                    alt="48image"
                    src="./images/main/48image/48-image-3.jpg"
                  />
                </Link>
              </div>
            </div>
            <div className="our-special48-right">
              <div className="our-special48-item">
                <Link to="">
                  <img
                    alt="48image"
                    src="./images/main/48image/48-image-1.jpg"
                  />
                </Link>
              </div>
              <div className="our-special48-subitem">
                <Link to="">
                  <img
                    alt="48image"
                    src="./images/main/48image/48-image-2.jpg"
                  />
                </Link>
                <Link to="">
                  <img
                    alt="48image"
                    src="./images/main/48image/48-image-3.jpg"
                  />
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
                <Link to={list.link} />
                <img src={list.img} />
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

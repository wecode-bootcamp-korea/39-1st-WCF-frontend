import React, { useState, useRef, useEffect } from 'react';

const TRANSITION = 'all ease 500ms';

export default function Marketing() {
  //인덱스 저장
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideImgData, setSlideImgData] = useState([]);
  const [transition, setTransition] = useState(TRANSITION);
  // 카운트
  const [count, setCount] = useState(0);
  // 이미지가 몇 초마다 이동할 지
  const slideRef = useRef(null);
  const marketingList = setSlideImgData([
    data[data.length - 1],
    ...data,
    data[0],
  ]);

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
    <div className="marketing-area">
      <div className="marketing-list">
        <div className="marketing-list-item">
          {MARKETING_LIST.map((slide, index) => (
            <img className="marketing-item"></img>
          ))}
        </div>
      </div>
    </div>
  );
}

const MARKETING_LIST = [
  {
    id: 1,
    img: 'https://i.ibb.co/Yf9Dpnk/image.jpg',
    title: '친구에게 WCF샵을 추천해주세요',
    subtitle: '나눌수록 커지는 코인 혜택!',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/hs4DvW2/1.jpg',
    title: '11월엔 매일 100% 당첨 혜택 받으세요',
    subtitle: '최대 50% 쿠폰부터 100만 코인까지!',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/SKM7fMB/3.jpg',
    title: '첫 구매하셨으니, 다시 돌려드려요',
    subtitle: '신청만 하면 3천 코인 + 세븐세컨즈는 3천 코인 더!',
  },
];

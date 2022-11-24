import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Marketing.scss';

export default function Marketing() {
  const [index, setIndex] = useState(0);

  const goToPrev = () => {
    const firstSlide = index === 0;
    const newIndex = firstSlide ? 3 - 1 : index - 1;
    setIndex(newIndex);
  };

  const goToNext = () => {
    const lastSlide = index === 2;
    const newIndex = lastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="marketing-area">
      <div className="marketing-list">
        <ul
          className="marketing-list-area"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {MARKETING_LIST.map(list => (
            <Link to={list.link}>
              <li key={list.id} className="marketing-list-item">
                <img src={list.img} />
                <div className="marketing-list-title">
                  <p className="marketing-title">{list.title}</p>
                  <p>{list.subtitle}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="marketing-btn">
        <button className="prev-btn" onClick={goToPrev}>
          <i class="fas fa-chevron-left" />
        </button>
        <span>{index + 1} / 3</span>
        <button className="next-btn" onClick={goToNext}>
          <i class="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

const MARKETING_LIST = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    link: '',
    title: '친구에게 WCF샵을 추천해주세요',
    subtitle: '나눌수록 커지는 코인 혜택!',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    link: '',
    title: '11월엔 매일 100% 당첨 혜택 받으세요',
    subtitle: '최대 50% 쿠폰부터 100만 코인까지!',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    link: '',
    title: '첫 구매하셨으니, 다시 돌려드려요',
    subtitle: '신청만 하면 3천 코인 + 세븐세컨즈는 3천 코인 더!',
  },
];

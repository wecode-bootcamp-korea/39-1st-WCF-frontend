import React, { useState } from 'react';
import './HotBrand.scss';

export default function HotBrand() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 3 - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === 2;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="hot-brand-area">
      <h2 className="hot-brand-title">Hot Brand</h2>
      <div
        className="hot-brand-list"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        <ul className="hot-brand-item-area">
          {HOT_BRAND.map(list => (
            <li key={list.id} className="hot-brand-item">
              <p className="hot-item-title">{list.title}</p>
            </li>
          ))}
        </ul>
        <ul className="hot-brand-item-area">
          {HOT_BRAND_SUB.map(list => (
            <li key={list.id} className="hot-brand-item">
              <p className="hot-item-title">{list.title}</p>
            </li>
          ))}
        </ul>
        <ul className="hot-brand-item-area">
          {HOT_BRAND_SUB_SUB.map(list => (
            <li key={list.id} className="hot-brand-item">
              <p className="hot-item-title">{list.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="hot-brand-btn">
        <button className="prev-btn" onClick={goToPrev}>
          <i class="fas fa-chevron-left" />
        </button>
        <span>{currentIndex + 1} / 3</span>
        <button className="prev-btn" onClick={goToNext}>
          <i class="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

const HOT_BRAND = [
  {
    id: 1,
    title: 'Dabin',
    link: '',
  },
  {
    id: 2,
    title: 'Sujeong.Ku',
    link: '',
  },
  {
    id: 3,
    title: 'Yeonwoo',
    link: '',
  },
  {
    id: 4,
    title: '0Se0',
    link: '',
  },
  {
    id: 5,
    title: 'Yuju',
    link: '',
  },
  {
    id: 6,
    title: 'Jimin',
    link: '',
  },
  {
    id: 7,
    title: 'Sujeong.Kim',
    link: '',
  },
  {
    id: 8,
    title: "MENTOs'",
    link: '',
  },
  {
    id: 9,
    title: 'DongKeun',
    link: '',
  },
  {
    id: 10,
    title: 'MoonYoung',
    link: '',
  },
  {
    id: 11,
    title: 'SangUK',
    link: '',
  },
  {
    id: 12,
    title: 'SangJun',
    link: '',
  },
];

const HOT_BRAND_SUB = [
  {
    id: 13,
    title: 'SeHo',
    link: '',
  },
  {
    id: 14,
    title: 'HyungJin',
    link: '',
  },
  {
    id: 15,
    title: 'God.Yeoup',
    link: '',
  },
  {
    id: 16,
    title: 'SangYoun',
    link: '',
  },
  {
    id: 17,
    title: 'SeokHyeon',
    link: '',
  },
  {
    id: 18,
    title: 'JaeSeon',
    link: '',
  },
  {
    id: 19,
    title: '5JJU',
    link: '',
  },
  {
    id: 20,
    title: 'KunWoo',
    link: '',
  },
  {
    id: 21,
    title: 'DongSeop',
    link: '',
  },
  {
    id: 22,
    title: 'BuSol',
    link: '',
  },
  {
    id: 23,
    title: 'SangWon',
    link: '',
  },
  {
    id: 24,
    title: 'SuMin',
    link: '',
  },
];

const HOT_BRAND_SUB_SUB = [
  {
    id: 25,
    title: 'HanSol',
    link: '',
  },
  {
    id: 26,
    title: 'MOIA',
    link: '',
  },
  {
    id: 27,
    title: 'MOIF',
    link: '',
  },
  {
    id: 28,
    title: 'AURAREE',
    link: '',
  },
  {
    id: 29,
    title: 'LEMEIRE',
    link: '',
  },
  {
    id: 30,
    title: 'NOTTHING',
    link: '',
  },
  {
    id: 31,
    title: 'AMOMENTO',
    link: '',
  },
  {
    id: 32,
    title: 'TECKET',
    link: '',
  },
  {
    id: 33,
    title: 'KOTELO',
    link: '',
  },
  {
    id: 34,
    title: 'JOY GRAISON',
    link: '',
  },
];

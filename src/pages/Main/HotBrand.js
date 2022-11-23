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
  },
  {
    id: 2,
    title: 'Sujeong.Ku',
  },
  {
    id: 3,
    title: 'Yeonwoo',
  },
  {
    id: 4,
    title: '0Se0',
  },
  {
    id: 5,
    title: 'Yuju',
  },
  {
    id: 6,
    title: 'Jimin',
  },
  {
    id: 7,
    title: 'Sujeong.Kim',
  },
  {
    id: 8,
    title: "MENTOs'",
  },
  {
    id: 9,
    title: 'DongKeun',
  },
  {
    id: 10,
    title: 'MoonYoung',
  },
  {
    id: 11,
    title: 'SangUK',
  },
  {
    id: 12,
    title: 'SangJun',
  },
];

const HOT_BRAND_SUB = [
  {
    id: 13,
    title: 'SeHo',
  },
  {
    id: 14,
    title: 'HyungJin',
  },
  {
    id: 15,
    title: 'God.Yeoup',
  },
  {
    id: 16,
    title: 'SangYoun',
  },
  {
    id: 17,
    title: 'SeokHyeon',
  },
  {
    id: 18,
    title: 'JaeSeon',
  },
  {
    id: 19,
    title: '5JJU',
  },
  {
    id: 20,
    title: 'KunWoo',
  },
  {
    id: 21,
    title: 'DongSeop',
  },
  {
    id: 22,
    title: 'BuSol',
  },
  {
    id: 23,
    title: 'SangWon',
  },
  {
    id: 24,
    title: 'SuMin',
  },
];

const HOT_BRAND_SUB_SUB = [
  {
    id: 25,
    title: 'HanSol',
  },
  {
    id: 26,
    title: 'MOIA',
  },
  {
    id: 27,
    title: 'MOIF',
  },
  {
    id: 28,
    title: 'AURAREE',
  },
  {
    id: 29,
    title: 'LEMEIRE',
  },
  {
    id: 30,
    title: 'NOTTHING',
  },
  {
    id: 31,
    title: 'AMOMENTO',
  },
  {
    id: 32,
    title: 'TECKET',
  },
  {
    id: 33,
    title: 'KOTELO',
  },
  {
    id: 34,
    title: 'JOY GRAISON',
  },
];

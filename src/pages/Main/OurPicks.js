import React from 'react';
import { Link } from 'react-router-dom';
import './OurPicks.scss';

export default function OurPicks() {
  return (
    <div className="our-picks-area">
      <h2 className="our-picks-title">Our Picks</h2>
      <div className="our-picks-list">
        <ul className="our-picks-item">
          {OURPICKS_LIST.map(list => (
            <li key={list.id} className="our-picks-item-list">
              <Link to={list.link}>
                <img src={list.img} alt="our-picks" />
              </Link>
              <p className="our-picks-item-title">{list.title}</p>
              <p>{list.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const OURPICKS_LIST = [
  {
    id: 1,
    img: 'https://i.ibb.co/c24b4Wj/1.jpg',
    link: '',
    title: '블랙프라이데이 베스트 상품 최대 89%',
    text: 'SangYoun',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    link: '',
    title: 'Wecode Exclusive Items',
    text: 'WELIFE',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/Yf9Dpnk/image.jpg',
    link: '',
    title: 'Must Have a Padding, 보온성과 스타일을 한번에',
    text: 'MoonYoung',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1616715623022-65d18f0042ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    link: '',
    title: '23 S/S NEW CROISSANT',
    text: 'Wecode',
  },
  {
    id: 5,
    img: 'https://i.ibb.co/L15PShR/image.jpg',
    link: '',
    title: '22 WINTER PART.2',
    text: "MENTOs'",
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1512068549487-5e79d74c7fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    link: '',
    title: 'Late Checkout_Day2',
    text: 'Wework',
  },
];

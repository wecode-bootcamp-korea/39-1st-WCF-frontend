import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { SPECIAL_LIST } from './SpecialCtgData';
import { MAIN_CATEGORY } from './MainCtgData';

export default function Nav() {
  return (
    <header className="header">
      <div className="user-info-area">
        <div className="inner">
          <div className="user-info">
            <Link to="">마이페이지</Link>
            <Link to="">로그인</Link>
          </div>
        </div>
      </div>
      <div className="gnb-area">
        <div className="gnb-wrap">
          <div className="inner">
            <h1 className="wcf-logo">WCF SHOP</h1>
            <div className="aside">
              <div className="util">
                <button className="heart-icon">
                  <img alt="heart" src="/images/nav/heart.png" />
                </button>
                <button className="cart-icon">
                  <img alt="cart" src="/images/nav/cart.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="category-wrap">
          <div className="inner">
            <div className="category">
              <div className="main-category">
                <ul className="gnb">
                  {MAIN_CATEGORY.map(category => (
                    <li key={category.id} className="main-nav">
                      <Link to="">{category.text}</Link>
                      <div className="nav-dropdown">
                        <div className="inner">
                          <div className="nav-list">
                            <ul className="ctg-list">
                              {category.subCategory.map(list => {
                                return (
                                  <li key={list.id} className="ctg-dropdown">
                                    <Link to={list.link}>{list.text}</Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="special-category">
                <ul className="special-list">
                  {SPECIAL_LIST.map(list => {
                    return (
                      <li key={list.id} className="special-nav">
                        <Link to={list.link}>{list.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="search-bar">
              <input className="search" type="text" placeholder="검색하기" />
              <button className="search" type="button">
                <img alt="magnify-glass" src="/images/nav/magnify-glass.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

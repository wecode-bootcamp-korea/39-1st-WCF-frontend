import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

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
                <div className="heart-icon">
                  <img alt="heart" src="/images/nav/heart.png" />
                </div>
                <div className="cart-icon">
                  <img alt="cart" src="/images/nav/cart.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category-wrap">
          <div className="inner">
            <div className="category">
              <div className="main-category">
                <ul>
                  <li>
                    <Link to="">WOMEN</Link>
                    <div className="nav-dropdown">
                      <div className="inner">
                        <div className="nav-list">
                          <ul>
                            <li>
                              <Link to="">메인</Link>
                            </li>
                            <li>
                              <Link to="">What's new</Link>
                            </li>
                            <li>
                              <Link to="">Trend new</Link>
                            </li>
                            <li>
                              <Link to="">SALE</Link>
                            </li>
                            <li>
                              <Link to="">전체상품</Link>
                            </li>
                            <li>
                              <Link to="">아우터</Link>
                            </li>
                            <li>
                              <Link to="">재킷/베스트</Link>
                            </li>
                            <li>
                              <Link to="">니트</Link>
                            </li>
                            <li>
                              <Link to="">셔츠/블라우스</Link>
                            </li>
                            <li>
                              <Link to="">티셔츠</Link>
                            </li>
                            <li>
                              <Link to="">원피스</Link>
                            </li>
                            <li>
                              <Link to="">팬츠</Link>
                            </li>
                            <li>
                              <Link to="">스커트</Link>
                            </li>
                            <li>
                              <Link to="">라운지/언더웨어</Link>
                            </li>
                            <li>
                              <Link to="">비치웨어</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="top-brand">
                          <strong className="tit">Top brand</strong>
                          <ul className="brand-list">
                            <li>
                              <Link to="">빈폴레이디스</Link>
                            </li>
                            <li>
                              <Link to="">에잇세컨드</Link>
                            </li>
                            <li>
                              <Link to="">구호</Link>
                            </li>
                            <li>
                              <Link to="">구호 플러스</Link>
                            </li>
                            <li>
                              <Link to="">띠어리</Link>
                            </li>
                            <li>
                              <Link to="">토리버치</Link>
                            </li>
                            <li>
                              <Link to="">르베이지</Link>
                            </li>
                            <li>
                              <Link to="">메종 키츠네</Link>
                            </li>
                            <li>
                              <Link to="">비이커</Link>
                            </li>
                            <li>
                              <Link to="">단톤</Link>
                            </li>
                            <li>
                              <Link to="">꼼데가르송</Link>
                            </li>
                            <li>
                              <Link to="">르메르</Link>
                            </li>
                            <li>
                              <Link to="">준지</Link>
                            </li>
                            <li>
                              <Link to="">코텔로</Link>
                            </li>
                            <li>
                              <Link to="">가니</Link>
                            </li>
                            <li>
                              <Link to="">바오 바오 이세이 미야케</Link>
                            </li>
                            <li>
                              <Link to="">멜리사</Link>
                            </li>
                            <li>
                              <Link to="">마리끌레르</Link>
                            </li>
                            <li>
                              <Link to="">플리츠 플리즈 이세이 미야케</Link>
                            </li>
                            <li>
                              <Link to="">마뗑킴</Link>
                            </li>
                            <li>
                              <Link to="">랙앤본</Link>
                            </li>
                            <li>
                              <Link to="">이세이 미야케</Link>
                            </li>
                            <li>
                              <Link to="">마리떼 프랑소와저버</Link>
                            </li>
                            <li>
                              <Link to="">울랄라</Link>
                            </li>
                            <li>
                              <Link to="">르917</Link>
                            </li>
                            <li>
                              <Link to="">모이아</Link>
                            </li>
                            <li>
                              <Link to="">론론</Link>
                            </li>
                            <li>
                              <Link to="">더 오픈 프로덕트</Link>
                            </li>
                            <li>
                              <Link to="">아위</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="">MEN</Link>
                    <div className="nav-dropdown hidden">
                      <div className="inner">
                        <div className="nav-list">
                          <ul>
                            <li>
                              <Link to="">메인</Link>
                            </li>
                            <li>
                              <Link to="">What's new</Link>
                            </li>
                            <li>
                              <Link to="">Trend new</Link>
                            </li>
                            <li>
                              <Link to="">SALE</Link>
                            </li>
                            <li>
                              <Link to="">전체상품</Link>
                            </li>
                            <li>
                              <Link to="">아우터</Link>
                            </li>
                            <li>
                              <Link to="">정장</Link>
                            </li>
                            <li>
                              <Link to="">재킷/베스트</Link>
                            </li>
                            <li>
                              <Link to="">티셔츠</Link>
                            </li>
                            <li>
                              <Link to="">셔츠</Link>
                            </li>
                            <li>
                              <Link to="">니트</Link>
                            </li>
                            <li>
                              <Link to="">팬츠</Link>
                            </li>
                            <li>
                              <Link to="">언더웨어</Link>
                            </li>
                            <li>
                              <Link to="">비치웨어</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="top-brand">
                          <strong className="tit">Top brand</strong>
                          <ul>
                            <li>
                              <Link to="">빈폴멘</Link>
                            </li>
                            <li>
                              <Link to="">에잇세컨즈</Link>
                            </li>
                            <li>
                              <Link to="">메종 키츠네</Link>
                            </li>
                            <li>
                              <Link to="">준지 멘</Link>
                            </li>
                            <li>
                              <Link to="">아미</Link>
                            </li>
                            <li>
                              <Link to="">띠어리</Link>
                            </li>
                            <li>
                              <Link to="">로가디스</Link>
                            </li>
                            <li>
                              <Link to="">갤럭시 라이프스타일</Link>
                            </li>
                            <li>
                              <Link to="">갤럭시</Link>
                            </li>
                            <li>
                              <Link to="">엠비오</Link>
                            </li>
                            <li>
                              <Link to="">건지울른스</Link>
                            </li>
                            <li>
                              <Link to="">꼼데가르송</Link>
                            </li>
                            <li>
                              <Link to="">지프</Link>
                            </li>
                            <li>
                              <Link to="">단톤</Link>
                            </li>
                            <li>
                              <Link to="">옴므 플리세 이세이 미야케</Link>
                            </li>
                            <li>
                              <Link to="">샌드사운드</Link>
                            </li>
                            <li>
                              <Link to="">수트서플라이</Link>
                            </li>
                            <li>
                              <Link to="">캐나다 구스</Link>
                            </li>
                            <li>
                              <Link to="">코닥</Link>
                            </li>
                            <li>
                              <Link to="">라코스테</Link>
                            </li>
                            <li>
                              <Link to="">더블유브이 프로젝트</Link>
                            </li>
                            <li>
                              <Link to="">제너럴 아이디어</Link>
                            </li>
                            <li>
                              <Link to="">브룩스 브라더스</Link>
                            </li>
                            <li>
                              <Link to="">다니엘 크레뮤</Link>
                            </li>
                            <li>
                              <Link to="">퍼스텝</Link>
                            </li>
                            <li>
                              <Link to="">프랑코페라로</Link>
                            </li>
                            <li>
                              <Link to="">오라리</Link>
                            </li>
                            <li>
                              <Link to="">브라운야드</Link>
                            </li>
                            <li>
                              <Link to="">모이프</Link>
                            </li>
                            <li>
                              <Link to="">캡틴 선샤인</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="">KIDS</Link>
                  </li>
                  <li>
                    <Link to="">LUXURY</Link>
                  </li>
                  <li>
                    <Link to="">BAG&SHOES</Link>
                  </li>
                  <li>
                    <Link to="">SPORTS</Link>
                  </li>
                  <li>
                    <Link to="">GOLF</Link>
                  </li>
                  <li>
                    <Link to="">BEAUTY</Link>
                  </li>
                  <li>
                    <Link to="">LIFE</Link>
                  </li>
                  <li>
                    <Link to="">OUTLET</Link>
                  </li>
                </ul>
              </div>
              <div className="special-category">
                <ul>
                  <li>
                    <Link to="">랭킹</Link>
                  </li>
                  <li>
                    <Link to="">브랜드</Link>
                  </li>
                  <li>
                    <Link to="">매거진</Link>
                  </li>
                  <li>
                    <Link to="">기획전</Link>
                  </li>
                  <li>
                    <Link to="">이벤트</Link>
                  </li>
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

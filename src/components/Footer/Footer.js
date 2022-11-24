import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav-area">
        <div className="inner">
          <div className="footer-article-nav">
            <ul className="article-nav-first">
              <li>
                <a href="#">회사소개</a>
              </li>
              <li>
                <a href="#">이용약관</a>
              </li>
              <li>
                <a className="article-privacy" href="#">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#">이메일무단수집거부</a>
              </li>
            </ul>
            <ul className="article-nav-second">
              <li>
                <a href="#">단체주문</a>
              </li>
              <li>
                <a href="#">제휴문의</a>
              </li>
              <li>
                <a href="#">입점신청</a>
              </li>
              <li>
                <a href="#">멤버십안내</a>
              </li>
              <li>
                <a href="#">8seconds 구매혜택</a>
              </li>
            </ul>
          </div>
          <div className="footer-quick-nav">
            <ul>
              <li>
                <a href="#">고객센터</a>
              </li>
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <a href="#">매장찾기</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-company-area">
        <div className="inner">
          <div className="info-desc">
            <h1>위코드(주)패션부문</h1>
            <ul className="info-ul">
              <li>주소: 서울 강남구 테헤란로 427 위워크</li>
              <li>대표: 송은우</li>
              <li>
                사업자 등록번호: 530-81-01310
                <a href="#">사업자등록번호확인</a>
              </li>
              <li>통신판매업 신고번호: 제 133257-서울강남-012354</li>
              <li>호스팅서비스: 위코드(주)패션부문</li>
            </ul>
            <p>
              wecode 구매안전(에스크로)서비스{' '}
              <a href="#">서비스 가입사실 확인</a> 고객님의 안전거래를 위해 현금
              등으로 5만원 이상 결제 시 저희 쇼핑몰에서 가입한
              구매안전(에스크로)서비스를 이용하실 수 있습니다.
            </p>
            <p className="info-number">
              대표전화
              <em>1588-2525(전국)</em>
              <em>080-1215-1556(수신자부담)</em>
            </p>
            <p className="footer-copy-right">
              Copyright (C) 2022 Wecode C&T Corporation. All rights reserved
            </p>
          </div>
          <div className="footer-etc">
            <ul className="footer-etc-certification">
              <li>
                인증범위: 패션부문 온라인 쇼핑몰 서비스 운영 (WCFSHOP, 위코드)
              </li>
              <li>유효기간: 2022.11.11 ~ 2025.11.11</li>
            </ul>
            <div className="footer-etc-media">
              <button className="youtube">
                <img src="/images/footer-youtube.png" />
              </button>
              <button className="instagram">
                <img src="/images/footer-instagram.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

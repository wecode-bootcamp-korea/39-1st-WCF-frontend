import React from 'react';
import './SignIn.scss';

export default function SignIn() {
  return (
    <main className="container signin">
      <h1 className="signin-title">회원가입</h1>
      <section className="signin-container">
        <form className="signin-form">
          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text required">아이디</div>
              <input className="signin-input" type="text" />
              <p className="valid-status">
                <span className="valid-check-type">
                  <span className="check">체크</span>
                </span>
                <span className="valid-status-type">영문, 숫자, 영문+숫자</span>
                <span className="valid-check-length">
                  <span className="check">체크</span>
                </span>
                <span className="valid-status-length">6자 이상</span>
              </p>
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text required">비밀번호</div>

              <input className="signin-input" type="password" />
              <p className="valid-status">
                <span className="valid-check-type">
                  <span className="check">체크</span>
                </span>
                <span className="valid-status-type">
                  영문, 숫자, 특수문자 2가지 이상 조합
                </span>
                <span className="valid-check-length">
                  <span className="check">체크</span>
                </span>
                <span className="valid-status-length">6자 이상</span>
              </p>
              <input className="signin-input check-password" type="password" />
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text required">이름</div>
              <input className="signin-input" />
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text required">휴대폰 번호</div>
              <input className="signin-input" />
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text required">이메일</div>
              <input className="signin-input" type="email" />
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text">주소</div>
              <input className="signin-input" />
            </div>
          </label>

          <div className="term-box">
            <h2 className="term-title">이용약관 동의</h2>
            <div className="term-check-all">
              <input id="term-check" type="checkbox" />
              <label for="term-check" className="term-check-all-text">
                [필수] 전체동의
              </label>
            </div>

            <ul className="term-list-box">
              <li className="term-list">
                <input id="term-check-2" type="checkbox" />
                <label for="term-check-2" className="term-check-text">
                  [필수] 만 14세 이상
                </label>
              </li>

              <li className="term-list">
                <div className="agree-top">
                  <input id="term-check-3" type="checkbox" />
                  <label for="term-check-3" className="term-check-text">
                    [필수] 온라인사이트 이용약관
                  </label>
                  <button className="btn-accordion">
                    <span className="blind">버튼</span>
                  </button>
                </div>
              </li>

              <li className="term-list">
                <div className="agree-top">
                  <input id="term-check-4" type="checkbox" />
                  <label for="term-check-4" className="term-check-text">
                    [필수] 개인정보 수집 및 이용동의
                  </label>
                  <button className="btn-accordion">
                    <span className="blind">버튼</span>
                  </button>
                </div>
              </li>

              <li className="term-list">
                <div className="agree-top">
                  <input id="term-check-5" type="checkbox" />
                  <label for="term-check-5" className="term-check-text">
                    [필수] 멤버십 이용약관
                  </label>
                  <button className="btn-accordion">
                    <span className="blind">버튼</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="join-button-box">
            <button className="join-button">가입하기</button>
          </div>
        </form>
      </section>
    </main>
  );
}

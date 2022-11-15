import React from 'react';
import './SignIn.scss';

export default function SignIn() {
  return (
    <main className="signin">
      <h1 className="signin-title">회원가입</h1>

      <section className="signin-container">
        <form className="signin-form">
          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text">아이디</div>
              <div className="signin-inputbox">
                <input className="signin-input" />
              </div>
            </div>

            <p className="valid-status">
              <span className="valid-check-type">체크</span>
              <span className="valid-status">영문, 숫자, 영문+숫자</span>
              <span className="valid-check-length">체크</span>
              <span className="valid-status-length">6자 이상</span>
            </p>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text">비밀번호</div>
              <div className="signin-inputbox">
                <input className="signin-input" />
              </div>
            </div>

            <p className="valid-status">
              <span className="valid-check-type">체크</span>
              <span className="valid-status">
                영문, 숫자, 특수문자 2가지 이상 조합
              </span>
              <span className="valid-check-length">체크</span>
              <span className="valid-status-length">6자 이상</span>
            </p>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text">이름</div>
              <div className="signin-inputbox">
                <input className="signin-input" />
              </div>
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text">휴대폰 번호</div>
              <div className="signin-inputbox">
                <input className="signin-input" />
              </div>
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text">이메일</div>
              <div className="signin-inputbox">
                <input className="signin-input" />
              </div>
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text">주소</div>
              <div className="signin-inputbox">
                <input className="signin-input" />
              </div>
            </div>
          </label>
        </form>

        <div className="term-box">
          <h2>이용약관 동의</h2>
          <div className="term-check-all">
            <input type="checkbox" />
            <label>[필수] 전체동의</label>
          </div>
          <ul className="term-list">
            <li>
              <input type="checkbox" />
              <label>[필수] 만 14세 이상</label>
            </li>
            <li>
              <div className="agree-top">
                <input type="checkbox" />
                <label>[필수] 온라인사이트 이용약관</label>
                <button className="btn-accordion">
                  <span className="blind">버튼</span>
                </button>
              </div>
              <div className="agree-bottom">
                <p>약관내용</p>
              </div>
            </li>
            <li>
              <div className="agree-top">
                <input type="checkbox" />
                <label>[필수] 개인정보 수집 및 이용동의</label>
                <button className="btn-accordion">
                  <span className="blind">버튼</span>
                </button>
              </div>
              <div className="agree-bottom">
                <p>제1조 (목적)</p>
              </div>
            </li>
            <li>
              <div className="agree-top">
                <input type="checkbox" />
                <label>[필수] 멤버십 이용약관</label>
                <button className="btn-accordion">
                  <span className="blind">버튼</span>
                </button>
              </div>
              <div className="agree-bottom">
                <p>약관내용</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <button className="join-button">가입하기</button>
    </main>
  );
}

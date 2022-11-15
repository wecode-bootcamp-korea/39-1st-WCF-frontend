import React from 'react';
import './Login.scss';
export default function Login() {
  return (
    <div className="container login">
      <h1 className="login-title">로그인</h1>

      <form className="login-form">
        <div className="login-input-box">
          <input className="login-input" placeholder="아이디" />
          <input className="login-input" placeholder="비밀번호" />
        </div>
        <button className="login-btn">로그인</button>
      </form>

      <div className="login-save-id-box">
        <input id="login-check" type="checkbox" />
        <label for="login-check" className="login-id-check">
          <div className="login-save-id-text">아이디 저장</div>
        </label>
      </div>

      <div className="login-bottom">
        <button className="find-id">아이디 찾기</button>
        <button className="find-pw">비밀번호 찾기</button>
        <button className="join">회원가입</button>
      </div>
    </div>
  );
}

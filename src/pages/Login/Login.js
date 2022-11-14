import React from 'react';

export default function Login() {
  return (
    <div>
      <section className="sign-in">
        <h1 className="login">로그인</h1>
        <form className="login-form">
          <div className="input-box">
            <input type="text" className="user-id" placeholder="아이디" />
          </div>
          <div className="input-box">
            <input
              type="password"
              className="password"
              placeholder="비밀번호"
              maxLength="20"
            />
          </div>
          <button type="button">로그인</button>
          <div className="save-id">
            <span className="checkbox">
              <input type="checkbox" />
              <label>아이디 저장</label>
            </span>
          </div>

          <div class="link">
            <a href="https://www.ssfshop.com/public/member/searchMbrId">
              아이디 찾기
            </a>
            <a href="https://www.ssfshop.com/public/member/searchMbrId#">
              비밀번호 찾기
            </a>
            <a href="https://www.ssfshop.com/public/member/addMemberStep1">
              회원가입
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}

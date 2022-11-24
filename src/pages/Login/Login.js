import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

export default function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const navigate = useNavigate();

  const handleIdInput = e => {
    setInputId(e.target.value);
  };
  const handlePwInput = e => {
    setInputPw(e.target.value);
  };

  const inInputValid = inputId.length >= 6 && inputPw.length >= 8;

  const clickLoginBtn = e => {
    e.preventDefault();
    fetch('http://10.58.52.57:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ username: inputId, password: inputPw }),
    }) //요청
      .then(response => {
        // console.log(response);
        if (response.status != 200) {
          throw new Error('ERROR!!');
        }
        return response.json();
      })
      .catch(err => {
        alert('로그인 실패! 아이디 또는 비밀번호를 확인해주세요.');
      })
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        navigate('/Main');
      });
  };

  return (
    <div className="container login">
      <h1 className="login-title">로그인</h1>

      <form className="login-form">
        <div className="login-input-box">
          <input
            className="login-input"
            type="text"
            placeholder="아이디"
            onChange={handleIdInput}
          />
          <input
            className="login-input"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
        </div>
        <button
          className="login-btn"
          disabled={!inInputValid}
          onSubmit={clickLoginBtn}
        >
          로그인
        </button>
      </form>

      <div className="login-save-id-box">
        <input id="login-check" type="checkbox" />
        <label htmlFor="login-check" className="login-id-check">
          <div className="login-save-id-text">아이디 저장</div>
        </label>
      </div>

      <div className="login-bottom-box">
        <a href="https://www.ssfshop.com/public/member/searchMbrId">
          <button className="login-bottom">아이디 찾기</button>
        </a>
        <a href="https://www.ssfshop.com/public/member/searchMbrId">
          <button className="login-bottom">비밀번호 찾기</button>
        </a>
        <Link to="/Singin">
          <button className="login-bottom">회원가입</button>
        </Link>
      </div>
    </div>
  );
}

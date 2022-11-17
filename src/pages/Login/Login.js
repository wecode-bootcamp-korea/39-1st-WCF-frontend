import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const fetchFn = () => {
    fetch('http://10.58.52.57:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ username: inputId, password: inputPw }),
    }) //요청
      .then(response => {
        console.log(response);
        if (response.status != 200) {
          throw new Error('error');
          alert('로그인 실패'); // 해당 alert는 위의 throw 실행시에 조건문이 종료가 되므로 alert는 실행하지 못합니다!!!!
        }
        ㄱ;
        return response.json();
      })
      .catch(err => {
        console.log(err);
        alert('로그인 실패');
      })
      .then(data => {
        console.log(data);
        localStorage.setItem('token', data.accessToken);
        navigate('./Main');
        // idPwValid();
      });
  };

  return (
    <div className="container login">
      <h1 className="login-title">로그인</h1>

      <form className="login-form" onSubmitCapture={e => e.preventDefault()}>
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
        <button className="login-btn" onClick={fetchFn} type="submit">
          로그인
        </button>
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

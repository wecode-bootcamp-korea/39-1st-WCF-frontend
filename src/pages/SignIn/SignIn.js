import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TERMS } from './termData';
import './SignIn.scss';

const ID_TYPE_REG_EXP = /^(?=.*[a-zA-Z])(?=.*[0-9]).{0,25}$/;
const ID_LENGTH_REG_EXP = /^.{6,25}$/;
const PW_TYPE_REG_EXP = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{0,25}$/;
const PW_LENGTH_REG_EXP = /^.{8,25}$/;

export default function SignIn() {
  const [inputValue, setInputValue] = useState({
    userName: '',
    password: '',
    checkPassword: '',
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
  });

  const [isOnlineTermOpen, setIsOnlineTermOpen] = useState(false);
  const [personalInfoOpen, setpersonalInfoOpen] = useState(false);
  const [membershipOpen, setmembershipOpen] = useState(false);

  const [checkedList, setCheckedLists] = useState([]);

  const navigate = useNavigate();

  const [checkList, setCheckList] = useState({
    age: false,
    online: false,
    personal: false,
    membership: false,
  });

  const { age, online, personal, membership } = checkList;

  const handleCheck = e => {
    setCheckList(prev => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const [ageCheck, setAgeCheck] = useState(false);

  console.log(age);

  const {
    userName,
    password,
    checkPassword,
    phoneNumber,
    email,
    address,
    name,
  } = inputValue;

  const isIdValid1 = ID_TYPE_REG_EXP.test(userName);
  const isIdValid2 = ID_LENGTH_REG_EXP.test(userName);

  const isPwValid1 = PW_TYPE_REG_EXP.test(password);
  const isPwValid2 = PW_LENGTH_REG_EXP.test(password);

  const dataLists = [
    { id: 'term-check-2', data: '[필수] 만 14세 이상' },
    { id: 'term-check-3', data: '[필수] 온라인사이트 이용약관' },
    { id: 'term-check-4', data: '[필수] 개인정보 수집 및 이용동의' },
    { id: 'term-check-5', data: '[필수] 멤버십 이용약관' },
  ];

  const onCheckedAll = useCallback(
    checked => {
      if (checked) {
        const checkedListArray = [];
        dataLists.forEach(list => checkedListArray.push(list));
        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [dataLists]
  );

  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter(el => el !== list));
      }
    },
    [checkedList]
  );

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const fetchFn = () => {
    fetch('http://10.58.52.57:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        username: userName,
        password: password,
        name: name,
        mobile_number: phoneNumber,
        email: email,
        address: address,
      }),
    }) //요청
      .then(response => {
        console.log(response);
        if (response.status !== 200) {
          throw new Error('error');
          alert('회원가입 실패');
        }

        return response.json();
      })
      .catch(err => {
        console.log(err);
        alert('회원가입 실패');
      })
      .then(data => {
        console.log(data);
        alert('회원가입 성공');
        navigate('/login');
      });
  };

  return (
    <main className="container signin">
      <h1 className="signin-title">회원가입</h1>
      <section className="signin-container">
        <form className="signin-form">
          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text required">아이디</div>
              <input
                className="signin-input"
                type="text"
                name="userName"
                onChange={handleInput}
              />
              <p className="valid-status">
                <span
                  className={`valid-check-type ${
                    isIdValid1 ? 'valid-check' : ''
                  }`}
                >
                  <span className="check">체크</span>
                </span>
                <span
                  className={`valid-status-type ${isIdValid1 ? ' valid' : ''}`}
                >
                  영문+숫자
                </span>
                <span
                  className={`valid-check-length ${
                    isIdValid2 ? 'valid-check' : ''
                  }`}
                >
                  <span className="check">체크</span>
                </span>
                <span
                  className={`valid-status-length ${isIdValid2 ? 'valid' : ''}`}
                >
                  6자 이상
                </span>
              </p>
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text required">비밀번호</div>

              <input
                className="signin-input"
                type="password"
                name="password"
                onChange={handleInput}
              />
              <p className="valid-status">
                <span
                  className={`valid-check-type ${
                    isPwValid1 ? 'valid-check' : ''
                  }`}
                >
                  <span className="check">체크</span>
                </span>
                <span
                  className={`valid-status-type ${isPwValid1 ? ' valid' : ''}`}
                >
                  영문, 숫자, 특수문자 2가지 이상 조합
                </span>
                <span
                  className={`valid-check-length ${
                    isPwValid2 ? 'valid-check' : ''
                  }`}
                >
                  <span className="check">체크</span>
                </span>
                <span
                  className={`valid-status-length ${
                    isPwValid2 ? ' valid' : ''
                  }`}
                >
                  8자 이상
                </span>
              </p>
              <input
                className="signin-input check-password"
                type="password"
                name="checkPassword"
                onChange={handleInput}
              />
            </div>
          </label>
          {USERINFO_LIST.map(list => {
            return (
              <label className="signin-box" key={list.id}>
                <div className="signin-box-in">
                  <div className="signin-text required">{list.title}</div>
                  <input
                    className="signin-input"
                    name={list.name}
                    onChange={handleInput}
                    type={list.type}
                  />
                </div>
              </label>
            );
          })}

          <div className="term-box">
            <h2 className="term-title">이용약관 동의</h2>
            <div className="term-check-all">
              <input
                id="term-check"
                type="checkbox"
                onChange={onCheckedAll}
                checked={
                  checkedList.length === 0
                    ? false
                    : checkedList.length === dataLists.length
                    ? true
                    : false
                }
              />
              <label htmlFor="term-check" className="term-check-all-text">
                [필수] 전체동의
              </label>
            </div>

            <ul className="term-list-box">
              <li className="term-list">
                <input
                  id="term-check-2"
                  type="checkbox"
                  name="age"
                  checked={age}
                  onChange={handleCheck}
                />
                <label htmlFor="term-check-2" className="term-check-text">
                  [필수] 만 14세 이상
                </label>
              </li>

              <li className="term-list">
                <div className="agree-top">
                  <input id="term-check-3" type="checkbox" />
                  <label htmlFor="term-check-3" className="term-check-text">
                    [필수] 온라인사이트 이용약관
                  </label>
                  <button
                    className={`btn-accordion ${
                      isOnlineTermOpen ? 'open' : ''
                    }`}
                    type="button"
                    onClick={() => setIsOnlineTermOpen(prev => !prev)}
                  />
                </div>
                {isOnlineTermOpen && (
                  <div class="online-term">
                    <p className="online-term-title">제1조 (목적)</p>
                    <p className="online-term-contents">{TERMS.object}</p>
                    <p className="online-term-title">제2조 (정의)</p>
                    <p className="online-term-contents">{TERMS.justify}</p>
                  </div>
                )}
              </li>

              <li className="term-list">
                <div className="agree-top">
                  <input id="term-check-4" type="checkbox" />
                  <label htmlFor="term-check-4" className="term-check-text">
                    [필수] 개인정보 수집 및 이용동의
                  </label>
                  <button
                    className={`btn-accordion ${
                      personalInfoOpen ? 'open' : ''
                    }`}
                    type="button"
                    onClick={() => setpersonalInfoOpen(prev => !prev)}
                  />
                </div>
                {personalInfoOpen && (
                  <div class="online-term">
                    <p className="online-term-contents">
                      {TERMS.objectPersonal}
                    </p>
                    <p className="online-term-title">
                      1. 수집하는 개인정보 항목 및 수집방법
                    </p>
                    <p className="online-term-subtitle">
                      (1) 개인정보의 수집항목
                    </p>
                    <p className="online-term-contents">
                      {TERMS.justifyPersonal}
                    </p>
                    <p className="online-term-contents-inner">[멤버십 회원]</p>
                    <p className="online-term-contents">
                      {TERMS.justifyPersonalRequried}
                    </p>
                    <p className="online-term-contents">
                      {TERMS.justifyPersonalOption}
                    </p>
                  </div>
                )}
              </li>

              <li className="term-list">
                <div className="agree-top">
                  <input id="term-check-5" type="checkbox" />
                  <label htmlFor="term-check-5" className="term-check-text">
                    [필수] 멤버십 이용약관
                  </label>
                  <button
                    className={`btn-accordion ${membershipOpen ? 'open' : ''}`}
                    type="button"
                    onClick={() => setmembershipOpen(prev => !prev)}
                  />
                </div>
                {membershipOpen && (
                  <div class="membership-term">
                    <p className="mebership-term-contents">제1장 총칙</p>
                    <p className="membership-term-title">제1조 (목적)</p>
                    <p className="membership-term-contents">
                      {TERMS.objectMembership}
                    </p>
                    <p className="membership-term-title">제2조 (정의)</p>
                    <p className="membership-term-contents">
                      {TERMS.justifyMembership}
                    </p>
                    <p className="membership-term-contents">
                      {TERMS.justifyMembershipSecond}
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="join-button-box">
            <button className="join-button" onClick={fetchFn}>
              가입하기
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

const USERINFO_LIST = [
  { id: 1, title: '이름', name: 'name', type: 'text' },
  { id: 2, title: '휴대폰 번호', name: 'phoneNumber', type: 'text' },
  { id: 3, title: '이메일', name: 'email', type: 'email' },
  { id: 4, title: '주소', name: 'address', type: 'text' },
];

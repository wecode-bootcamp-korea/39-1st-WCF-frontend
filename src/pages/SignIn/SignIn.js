import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import { TERMS } from './termData';
import './SignIn.scss';

const ID_TYPE_REG_EXP = /^(?=.*[a-zA-Z])(?=.*[0-9]).{0,25}$/;
const ID_LENGTH_REG_EXP = /^.{6,25}$/;
const PW_TYPE_REG_EXP = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{0,25}$/;
const PW_LENGTH_REG_EXP = /^.{8,25}$/;
// const CHECKPW_REG_EXP = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

export default function SignIn() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userName: '',
    password: '',
    checkPassword: '',
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
  });

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
  const pwCheck = password && checkPassword && password === checkPassword;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const [checkList, setCheckList] = useState({
    age: false,
    online: false,
    personal: false,
    membership: false,
  });

  const onCheckedAll = () => {
    const valueArr = Object.values(checkList).every(el => el === true);
    let newObj = {};
    if (valueArr) {
      for (let key in checkList) {
        newObj = { ...newObj, [key]: false };
      }
    } else {
      for (let key in checkList) {
        newObj = { ...newObj, [key]: true };
      }
    }
    setCheckList(newObj);
  };

  const handleCheck = e => {
    const { name, checked } = e.target;
    setCheckList(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const [checkTermsOpen, setCheckTermsOpen] = useState({
    online: false,
    personal: false,
    membership: false,
  });

  const handleTerm = name => {
    setCheckTermsOpen(prev => ({ ...prev, [name]: !checkTermsOpen[name] }));
  };

  const fetchFn = e => {
    e.preventDefault();

    fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        username: userName,
        password: password,
        checkPassword: checkPassword,
        name: name,
        mobile_number: phoneNumber,
        email: email,
        address: address,
      }),
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        alert('???????????? ??????');
      })
      .then(data => {
        alert('???????????? ??????');
        navigate('/login');
      });
  };

  return (
    <main className="container signin">
      <h1 className="signin-title">????????????</h1>
      <section className="signin-container">
        <form className="signin-form">
          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text required">?????????</div>
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
                  <span className="check">??????</span>
                </span>
                <span
                  className={`valid-status-type ${isIdValid1 ? ' valid' : ''}`}
                >
                  ??????+??????
                </span>
                <span
                  className={`valid-check-length ${
                    isIdValid2 ? 'valid-check' : ''
                  }`}
                >
                  <span className="check">??????</span>
                </span>
                <span
                  className={`valid-status-length ${isIdValid2 ? 'valid' : ''}`}
                >
                  6??? ??????
                </span>
              </p>
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text required">????????????</div>
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
                  <span className="check">??????</span>
                </span>
                <span
                  className={`valid-status-type ${isPwValid1 ? ' valid' : ''}`}
                >
                  ??????, ??????, ???????????? 2?????? ?????? ??????
                </span>

                <span
                  className={`valid-check-length ${
                    isPwValid2 ? 'valid-check' : ''
                  }`}
                >
                  <span className="check">??????</span>
                </span>
                <span
                  className={`valid-status-length ${
                    isPwValid2 ? ' valid' : ''
                  }`}
                >
                  8??? ??????
                </span>
              </p>
            </div>
          </label>

          <label className="signin-box">
            <div className="signin-box-in">
              <div className="signin-text required">???????????? ??????</div>
              <input
                className="signin-input"
                type="password"
                name="checkPassword"
                onChange={handleInput}
              />
              <p className="valid-status">
                <span
                  className={`valid-check-type ${pwCheck ? 'valid-check' : ''}`}
                >
                  <span className="check">??????</span>
                </span>
                <span
                  className={`valid-status-type ${pwCheck ? ' valid' : ''}`}
                >
                  ??????????????? ???????????????.
                </span>
              </p>
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
            <h2 className="term-title">???????????? ??????</h2>
            <div className="term-check-all">
              <input
                id="term-check"
                type="checkbox"
                onChange={onCheckedAll}
                checked={Object.values(checkList).every(el => el === true)}
              />
              <label htmlFor="term-check" className="term-check-all-text">
                [??????] ????????????
              </label>
            </div>

            <ul className="term-list-box">
              {TERMS_LIST.map(({ id, className, data, name, isNeedToggle }) => {
                return (
                  <li className="term-list" key={id}>
                    <div className="agree-top">
                      <input
                        id={className}
                        type="checkbox"
                        name={name}
                        checked={checkList[name]}
                        onChange={handleCheck}
                      />
                      <label htmlFor={className} className="term-check-text">
                        {data}
                      </label>
                      {isNeedToggle && (
                        <div
                          className={`btn-accordion ${
                            checkTermsOpen[name] ? 'open' : ''
                          }`}
                          onClick={() => handleTerm(name)}
                        />
                      )}
                    </div>
                    {checkTermsOpen[name] && (
                      <div className="online-term">
                        <p className="online-term-title">???1??? (??????)</p>
                        <p className="online-term-contents">{TERMS.object}</p>
                        <p className="online-term-title">???2??? (??????)</p>
                        <p className="online-term-contents">{TERMS.justify}</p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="join-button-box">
            <button className="join-button" onClick={fetchFn}>
              ????????????
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

const USERINFO_LIST = [
  { id: 1, title: '??????', name: 'name', type: 'text' },
  { id: 2, title: '????????? ??????', name: 'phoneNumber', type: 'text' },
  { id: 3, title: '?????????', name: 'email', type: 'email' },
  { id: 4, title: '??????', name: 'address', type: 'text' },
];

const TERMS_LIST = [
  {
    id: 1,
    className: 'term-check-2',
    data: '[??????] ??? 14??? ??????',
    name: 'age',
    isNeedToggle: false,
  },
  {
    id: 2,
    className: 'term-check-3',
    data: '[??????] ?????????????????? ????????????',
    name: 'online',
    isNeedToggle: true,
  },
  {
    id: 3,
    className: 'term-check-4',
    data: '[??????] ???????????? ?????? ??? ????????????',
    name: 'personal',
    isNeedToggle: true,
  },
  {
    id: 4,
    className: 'term-check-5',
    data: '[??????] ????????? ????????????',
    name: 'membership',
    isNeedToggle: true,
  },
];

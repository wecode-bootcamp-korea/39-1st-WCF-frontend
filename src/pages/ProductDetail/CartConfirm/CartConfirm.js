import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartConfirm.scss';

export default function CartConfirm(props) {
  const { isConfrmShowingStatus, isConfirmFalse } = props;

  const navigate = useNavigate();
  return (
    <div
      className={
        isConfrmShowingStatus ? 'pop-confirm-wrap open' : 'pop-confirm-wrap'
      }
    >
      <div className="pop-confirm-area">
        <p className="txt">
          장바구니에 상품이 담겼습니다. <br /> 장바구니로 이동하겠습니까?
        </p>
        <div className="btn-area">
          <button className="btn black" onClick={() => navigate('/Cart')}>
            확인
          </button>
          <button className="btn border" onClick={isConfirmFalse}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

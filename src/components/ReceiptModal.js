import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { clearOrder } from "./store";

export default function ReceiptModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderId = useSelector((state) => state.order.id);

  const Button = styled.button`
    width: calc(70px * 3 + 15px * 2);
    height: 100px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #004D98;
    background-color: transparent;
    font-size: 20px;
  `;

  const handleClick = () => {
    navigate("/");
    dispatch(clearOrder());
  }

  return (
    <div className="modal-bg">
      <div className="receipt-modal">
        <p className="payment-title">결제가 완료되었습니다.</p>
        <div className="receipt-icon">
          <img src={process.env.PUBLIC_URL + "/img/icon/icon_receipt.svg"} alt="영수증 아이콘" />
        </div>
        <div className="payment-txt">
          <p style={{fontSize: "20px", marginBottom: "10px"}}>주문 번호</p>
          <p style={{fontSize: "42px", color: "#004D98"}}>{orderId}번</p>
        </div>
        <div className="receipt-btn-box">
          <Button style={{marginRight: "15px"}} onClick={handleClick}>
            영수증<br/>발행
          </Button>
          <Button onClick={handleClick}>
            영수증<br/>미발행
          </Button>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import methods from "../data/paymentMethods";
import styled from "styled-components";

export default function WaitModal() {
  const navigate = useNavigate();
  const [time, setTime] = useState(60);
  const {mid} = useParams();
  const method = methods.find(m => m.id === mid);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);

    const end = setTimeout(() => {
      clearInterval(timer);
    }, 60000);

    const close = setTimeout(() => {
      navigate(-1);
    }, 65000);

    return () => {
      clearInterval(timer);
      clearTimeout(end);
      clearTimeout(close);
    }
  }, [navigate]);

  const Button = styled.button`
    width: 200px;
    height: 60px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    background-color: #004D98;
    color: white;
    font-size: 24px;
  `;

  return (
    <div className="modal-bg">
      <div className="wait-modal">
        <p className="payment-title">결제가 진행중입니다 ...</p>
        <div className="payment-txt">
          <p style={{marginBottom: "10px"}}>{method.wait}</p>
          <p style={{color: "#004D98"}}>{time} 초</p>
        </div>
        <Button onClick={() => navigate(-1)}>취소</Button>
      </div>
      
      <button 
        className="payment-btn" 
        onClick={() => navigate("/payment/complete")}
      >
        버튼을 눌러 결제
      </button>
    </div>
  )
}

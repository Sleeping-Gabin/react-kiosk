import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { numToPriceStr } from "../utils";
import methods from "../data/paymentMethods";

export default function Payment() {
  return (
    <div className="payment">
      <div className="payment-container">
        <p className="payment-title">결제 수단 선택</p>
        <div className="payment-list">
          {methods.map((method) => <PaymentItem key={method.id} method={method} />)}
        </div>
      </div>
      <PaymentFooter />
      <Outlet />
    </div>
  )
}

function PaymentFooter() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.order.cart);

  const Button = styled.button`
    width: calc(70px * 3 + 15px * 2);
    height: 50px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #004D98;
    background-color: transparent;
    font-size: 20px;
  `;

  return (
    <div className="payment-footer">
      <div className="footer-txt">
        <p>주문 수량</p>
        <p>{cart.reduce((prev, cur) => prev + cur.count, 0)} 개</p>
      </div>

      <div className="footer-txt">
        <p>총 금액</p>
        <p style={{color: "#004D98"}}>
          {
            numToPriceStr(cart.reduce((prev, cur) => 
              prev + (cur.food.price + cur.options.reduce((prev, cur) => prev + cur.price, 0)) * cur.count
            , 0)) + " 원"
          }
        </p>
      </div>

      <Button onClick={() => navigate(-1)}>취소</Button>
    </div>
  )
}

function PaymentItem(props) {
  const {method} = props;
  const navigate = useNavigate();

  return (
    <div className="payment-item" onClick={() => navigate("wait/" + method.id)}>
      <div className="pay-img">
        <img src={process.env.PUBLIC_URL + "/img/payments/" + method.icon} alt={method.title + " 아이콘"} />
      </div>
      <p>{method.title}</p>
    </div>
  )
}
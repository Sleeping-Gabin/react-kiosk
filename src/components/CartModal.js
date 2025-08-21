import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { hideModal } from "./store";
import { numToPriceStr } from "../utils";
import { useNavigate } from "react-router-dom";

export default function CartModal() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.order.cart);

  const handleBgClick = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(hideModal());
    }
  }

  return (
    <div className="modal-bg" onClick={handleBgClick}>
      <div className="cart-modal">
        <div className="cart-title">
          <p>주문 확인</p>
        </div>

        <div className="cart-container">
          {cart.map((item, idx) => <CartItem key={item.id} item={item} index={idx} />)}
        </div>

        <CartFooter cart={cart}/>
      </div>
    </div>
  )
}

function CartFooter(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cart} = props;

  const Button = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 10px;
    border: 1px solid #004D98;
    background-color: transparent;
    font-size: 24px;
  `;

  const PointButton = styled(Button)`
    background-color: #004D98;
    color: white;
  `;

  const handlePaymentClick = () => {
    if (cart.length > 0) {
      navigate("/payment");
    }
    dispatch(hideModal());
  }

  return (
    <div className="cart-footer">
      <div className="cart-txt">
        <p>주문 수량</p>
        <p>{cart.reduce((prev, cur) => prev + cur.count, 0)} 개</p>
      </div>

      <div className="cart-txt">
        <p>총 금액</p>
        <p>
          {
            numToPriceStr(cart.reduce((prev, cur) => 
              prev + (cur.food.price + cur.options.reduce((prev, cur) => prev + cur.price, 0)) * cur.count
            , 0)) + " 원"
          }
        </p>
      </div>

      <div className="cart-btn-box">
        <Button style={{marginRight: "20px"}} onClick={() => dispatch(hideModal())}>
          취소
        </Button>
        <PointButton onClick={handlePaymentClick}>결제 하기</PointButton>
        </div>
    </div>
  )
}

function CartItem(props) {
  const {item, index} = props;
  const {food, options, count} = item;

  return (
    <div className="cart-item">
      <div className="item-info">
        <p style={{width: "45px"}}>{index + 1}</p>
        <div className="cart-img">
          <img src={process.env.PUBLIC_URL + "/img/foods/" + food.img} alt={food.name + " 이미지"} />
        </div>
        <p className="cart-name">{food.name}</p>
        <p style={{width: "90px"}}>{count} 개</p>
        <p style={{width: "200px"}}>
          {numToPriceStr((food.price + options.reduce((prev, cur) => prev + cur.price, 0)) * count) + " 원"}
        </p>
      </div>

      {
        options.length > 0 &&
        <ul className="option-list">
          {options.map((option, idx) => 
            <li className="item-option">
              <p>
                {`${option.name} (+${numToPriceStr(option.price)}원)`}
              </p>
            </li>
          )}
        </ul>
      }
    </div>
  )
}
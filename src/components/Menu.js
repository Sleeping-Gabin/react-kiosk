import React, { useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, showModal } from "./store";

import { groupingPerPage, numToPriceStr } from "../utils";
import foods from "../data/foods";
import Food from "./Food";
import MenuCartItem from "./MenuCartItem";
import CartModal from "./CartModal";

export default function Menu() {
  const {cid} = useParams();
  const show = useSelector((state) => state.modal.show);

  return (
    <div className="menu">
      <MenuBar />
      <MenuContainer key={cid} cid={cid}/>
      <MenuCart />
      <Outlet/>
      {show && <CartModal />}
    </div>
  )
}

function MenuBar() {
  return (
    <div className="menu-bar">
      <NavLink to="/menu/new">신메뉴</NavLink>
      <NavLink to="/menu/set">세트메뉴</NavLink>
      <NavLink to="/menu/pizza">피자</NavLink>
      <NavLink to="/menu/chicken">치킨</NavLink>
      <NavLink to="/menu/side">사이드</NavLink>
    </div>
  )
}

function MenuContainer(props) {
  const {cid} = props;
  const [page, setPage] = useState(0);
  const [foodGroups] = useState(() => groupingPerPage(foods.filter(d => d.cid === cid), 12));

  const PageIcon = styled.div`
    width: 70px;
    height: 70px;
    margin-top: -35px;
    position: absolute;
    top: 50%;
    ${
      (props) => props.dir==="left"
      ? "left: calc(-70px - 15px);"
      : "right: calc(-70px - 15px);"
    }
  `

  return (
    <div className="menu-container">
      {
        page > 0 &&
        <PageIcon dir="left" onClick={() => setPage(page - 1)}>
          <img src={process.env.PUBLIC_URL + "/img/icon/icon_left_circle.svg"} alt="이전 페이지" />
        </PageIcon>
      }
      
      {
        foodGroups[page] && foodGroups[page].map((food) => <Food key={food.id} food={food} />)
      }

      {
        page + 1 < foodGroups.length &&
        <PageIcon dir="right" onClick={() => setPage(page + 1)}>
          <img src={process.env.PUBLIC_URL + "/img/icon/icon_right_circle.svg"} alt="다음 페이지" />
        </PageIcon>
      }
    </div>
  )
}


function MenuCart() {  
  const [page, setPage] = useState(0);
  const cart = useSelector(state => state.order.cart);
  const cartGroup = useSelector(state => {
    if (page > 0 && page >= Math.ceil(cart.length/5)) {
      setPage(Math.ceil(cart.length/5) - 1);
    }
   
    return groupingPerPage(state.order.cart, 5);
  });
  const dispatch = useDispatch();

  const Button = styled.button`
    width: calc(70px * 3 + 15px * 2);
    height: 50px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #004D98;
    background-color: transparent;
    font-size: 20px;
  `;

  const PointButton = styled(Button)`
    background-color: #004D98;
    color: white;
  `;

  const CartButton = styled.div`
    width: 36px;
    height: 36px;
    margin-top: -15px;
    position: absolute;
    top: 50%;
    ${
      (props) => props.dir==="left"
      ? "left: 15px;"
      : "right: 15px;"
    }
  `;

  return (
    <div className="menu-cart">
      <div className="cart-title">
        {
          page > 0 &&
          <CartButton dir="left" onClick={() => setPage(page - 1)}>
            <img src={process.env.PUBLIC_URL + "/img/icon/icon_left.svg"} alt="이전 페이지" />
          </CartButton>
        }

        장바구니

        {
          page + 1 < cartGroup.length &&
          <CartButton dir="right" onClick={() => setPage(page + 1)}>
            <img src={process.env.PUBLIC_URL + "/img/icon/icon_right.svg"} alt="다음 페이지" />
          </CartButton>
        }
      </div>

      <div className="item-container">
        { 
          cartGroup[page] && 
          cartGroup[page].map((item) => <MenuCartItem key={item.id} item={item}/>)
        }
      </div>

      <div className="cart-footer">
        <p>
          {
            numToPriceStr(cart.reduce((prev, cur) => 
              prev + (cur.food.price + cur.options.reduce((prev, cur) => prev + cur.price, 0)) * cur.count
            , 0))
            + " 원"
          }
        </p>
        <Button onClick={() => dispatch(clearCart())}>전체 취소</Button>
        <PointButton onClick={() => dispatch(showModal())}>구매하기</PointButton>
      </div>
    </div>
  )
}
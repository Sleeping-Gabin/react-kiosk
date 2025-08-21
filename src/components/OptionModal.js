import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import foods from "../data/foods";
import options from "../data/options";
import { numToPriceStr } from "../utils"
import Option from "./Option";
import { useDispatch } from "react-redux";
import { addCartItem } from "./store";

export default function OptionModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();

  const food = foods.find((f) => f.id === id);
  const optionList = options.filter((option) => 
    food.optTag.some((tag) => option.tag.includes(tag))
  );

  const [count, setCount] = useState(1);
  const [selects, setSelects] = useState(() => {
    const arr = [];

    optionList.filter((opt) => opt.type === "radio").forEach((opt) => {
      const item = opt.options[opt.default];

      arr.push({
        title: opt.title,
        name: item.name,
        price: item.price
      });
    });

    return arr;
  });

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

  const handleBgClick = (e) => {
    if (e.currentTarget === e.target) {
      navigate("/menu/" + food.cid);
    }
  }

  const handleCartClick = () => {
    const cartItem = {
      food: food, 
      options: selects.sort((o1, o2) => 
        o1.title > o2.title ? 1 : o2.title > o1.title ? -1 : 0, 
      ), 
      count: count
    }

    dispatch(addCartItem(cartItem));
    navigate("/menu/" + food.cid);
  }

  return (
    <div className="modal-bg" onClick={handleBgClick}>
      <div className="option-modal">
        <FoodInfo food={food} count={count} setCount={setCount} selects={selects}/>
        <div className="option-container">
          {optionList.map((option) => <Option key={option.title} option={option} selects={selects} setSelects={setSelects}/>)}
        </div>
        <div className="option-footer" 
          style={optionList.length<=0 ? {border: "none"}: {}}
        >
          <Button style={{marginRight: "20px"}} onClick={() => navigate("/menu/" + food.cid)}>
            취소
          </Button>
          <PointButton onClick={handleCartClick}>장바구니 담기</PointButton>
        </div>
      </div>
    </div>
  )
}

function FoodInfo(props) {
  const {food, count, setCount, selects} = props;

  return(
    <div className="food-info">
      <div className="info-box">
        <div className="info-img">
          <img src={process.env.PUBLIC_URL + "/img/foods/" + food.img} alt={food.name + " 이미지"} />
        </div>
        <div className="info-txt">
          <p style={{fontSize: "32px", marginBottom: "10px"}}>
            {food.name}
          </p>
          <p style={{fontSize: "24px", color: "#666"}}>
            {food.intro}
          </p>
        </div>
      </div>

      <div className="count-box">
        <div className="info-btn-box">
          <div className="info-btn" onClick={() => setCount(Math.max(1, count-1))}>
            <img src={process.env.PUBLIC_URL + "/img/icon/icon_minus.svg"} alt="빼기" />
          </div>
          <p style={{fontSize: "32px"}}>{count}</p>
          <div className="info-btn" onClick={() => setCount(count+1)}>
            <img src={process.env.PUBLIC_URL + "/img/icon/icon_plus.svg"} alt="더하기" />
          </div>
        </div>

        <p className="option-price">
          {numToPriceStr((food.price + selects.reduce((prev, cur) => prev + cur.price, 0)) * count) + " 원"}
        </p>
      </div>
    </div>
  )
}
import React from "react";
import { numToPriceStr } from "../utils";
import { useNavigate } from "react-router-dom";

export default function Food({food}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(food.id);
  }

  return (
    <div className="food" onClick={handleClick}>
      <div className="food-img">
        <img src={process.env.PUBLIC_URL + "/img/foods/" + food.img} alt={food.name + " 이미지"} />
      </div>
      <p className="food-name">{food.name}</p>
      <p className="food-price">{numToPriceStr(food.price) + " 원~"}</p>
    </div>
  )
}

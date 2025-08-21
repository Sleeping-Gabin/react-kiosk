import React from "react";

import { numToPriceStr } from "../utils";
import { useDispatch } from "react-redux";
import { decreaseCartCount, deleteCartItem, increaseCartCount } from "./store";

export default function MenuCartItem(props) {
  const {id, food, options, count} = props.item;
  const dispatch = useDispatch();

  return (
    <div className="menu-cart-item">
      <div className="item-btn close-btn" onClick={() => dispatch(deleteCartItem(id))}>
        <img src={process.env.PUBLIC_URL + "/img/icon/icon_close_gray.svg"} alt="닫기" />
      </div>

      <div className="item-img">
        <img src={process.env.PUBLIC_URL + "/img/foods/" + food.img} alt={food.name + "이미지"} />
      </div>

      <p className="item-name">{food.name}</p>
      <p className="item-price">
        {
          numToPriceStr((food.price + options.reduce((prev, cur) => prev + cur.price, 0)) * count)
          + " 원"
        }
      </p>

      <div className="item-btn-box">
        <div className="item-btn" onClick={() => dispatch(decreaseCartCount(id))}>
          <img src={process.env.PUBLIC_URL + "/img/icon/icon_minus.svg"} alt="빼기" />
        </div>
        <p className="item-count">{count}</p>
        <div className="item-btn" onClick={() => dispatch(increaseCartCount(id))}>
          <img src={process.env.PUBLIC_URL + "/img/icon/icon_plus.svg"} alt="더하기" />
        </div>
      </div>
    </div>
  )
}

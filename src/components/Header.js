import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { clearOrder } from "./store";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/" className="home-icon" onClick={() => dispatch(clearOrder())}>
        <img src={process.env.PUBLIC_URL + "/img/icon/icon_home.svg"} alt="홈 아이콘" />
      </Link>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="로고" />
      </div>
    </div>
  )
}

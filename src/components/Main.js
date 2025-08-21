import React from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { changeMethod } from "./store";

export default function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Button = styled.div`
    width: 420px;
    box-sizing: border-box;
    padding: 50px;
    border-radius: 20px;
    background-color: white;
    color: black;
    font-size: 36px;
    text-align: center;
    position: absolute;
    bottom: 200px;

    & img {
      width: 100px;
      height: 100px;
      margin: 0 auto 30px;
    }
  `;
  
  return (
    <div className="main">
      <Button style={{left: "130px"}} onClick={() => {
        dispatch(changeMethod("매장"));
        navigate("/menu/new");
      }}>
        <img src={process.env.PUBLIC_URL + "/img/icon/icon_eat.svg"} alt="매장 식사 아이콘" />
        매장 식사
      </Button>

      <Button style={{right: "130px"}} onClick={() => {
        dispatch(changeMethod("포장"));
        navigate("/menu/new");
      }}>
        <img src={process.env.PUBLIC_URL + "/img/icon/icon_package.svg"} alt="포장 아이콘" />
        포장하기
      </Button>
    </div>
  )
}

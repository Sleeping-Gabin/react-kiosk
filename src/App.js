import "./App.scss";
import "./css/style.scss";

import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import OptionModal from "./components/OptionModal";
import Payment from "./components/Payment";
import WaitModal from "./components/WaitModal";
import ReceiptModal from "./components/ReceiptModal";
import Popup from "./components/Popup";

function App() {
  const [popup, setPopup] = useState(true);

  const Frame = styled.div`
    width: calc(70px * 10 + 15px * 12);
    height: 1410px;
    border-radius: 30px;
    background-color: white;
    overflow: hidden;
    position: relative;
  `;

  return (
    <div className="App">
      <Frame>
        <Header/>
        <Routes>
          <Route index element={<Main />} />
          <Route path="menu/:cid" element={<Menu />} >
            <Route path=":id" element={<OptionModal />} />
          </Route>
          <Route path="payment" element={<Payment/>}>
            <Route path="wait/:mid" element={<WaitModal/>}/>
            <Route path="complete" element={<ReceiptModal />}/>
          </Route>
        </Routes>
      </Frame>
      {
        popup &&
        <Popup setShow={setPopup}>
          <p>해당 프로젝트는 세로형 키오스크를 기준으로 제작되었습니다.</p>
        </Popup>
      }
    </div>
  );
}

export default App;
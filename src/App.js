import "./App.scss";
import "./css/style.scss";

import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import OptionModal from "./components/OptionModal";
import Payment from "./components/Payment";
import WaitModal from "./components/WaitModal";
import ReceiptModal from "./components/ReceiptModal";

function App() {
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
    </div>
  );
}

export default App;
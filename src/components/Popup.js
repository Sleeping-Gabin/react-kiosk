import React from "react";

export default function Popup(props) {
  const {setShow} = props;

  return (
    <div className="popup">
      <div className="close-icon" onClick={() => setShow(false)}>
        <img src={process.env.PUBLIC_URL + "/img/icon/icon_close_gray.svg"} alt="닫기 아이콘" />
      </div>
      {props.children}
    </div>
  )
}

import React, { useState } from "react";

import { numToPriceStr } from "../utils"

export default function Option(props) {
  const {option, selects, setSelects} = props;
  const [optSelect, setOptSelect] = useState(() => option.options.map((opt, idx) => option.default === idx));

  const handleCheckboxChange = (e, index, item) => {
    const input = e.target;

    if (input.checked) {
      const selectCnt = optSelect.reduce((prev, cur) => prev + cur);

      if (selectCnt >= option.max) {
        optSelect[optSelect.findIndex((val) => val)] = false;
      }
      
      let newArr = [...optSelect];
      newArr[index] = true;
      setOptSelect(newArr);

      setSelects([...selects, {
        title: option.title,
        name: item.name,
        price: item.price
      }]);
    }
    else {
      let newArr = [...optSelect];
      newArr[index] = false;
      setOptSelect(newArr);

      let newSelects = [...selects];
      newSelects.splice(newSelects.findIndex((select) => select.title === option.title && select.name === item.name), 1);
      setSelects(newSelects);
    }
  }

  const handleRadioChange = (e, index, item) => {
    let newArr = option.options.map(() => false);
    newArr[index] = true;
    setOptSelect(newArr);

    let newSelects = [...selects];
    const idx = newSelects.findIndex((select) => select.title === option.title);
    newSelects.splice(idx, 1, {
      title: option.title,
      name: item.name,
      price: item.price
    });
    setSelects(newSelects);
  }

  return (
    <div className="option">
      <p style={{padding: "26px 3px"}}>
        {option.title}
        {option.type==="checkbox" ? " (최대 "+option.max+"개)" : " (필수)"}
      </p>
      <ul>
        {
          option.options.map((item, idx) => 
            <OptionItem 
              key={idx} 
              option={option} 
              item={item} 
              index={idx}
              handleInputChange={option.type==="radio" ? handleRadioChange : handleCheckboxChange} 
              check={optSelect[idx]}
            />
          )
        }
      </ul>
    </div>
  )
}

function OptionItem(props) {
  const {option, item, index, handleInputChange, check} = props;

  return (
    <li>
      <input 
        name={option.id} 
        type={option.type} 
        id={option.id + "-" + index}
        onChange={(e) => {
          handleInputChange(e, index, item);
        }} 
        checked={check}
      />

      <label 
        className="option-item" 
        for={option.id + "-" + index}  
        style={{height: item.icon 
          ? "calc(25px * 3 + 95px)" 
          : "calc((70px * 3 + 15px) / 2)"
        }} 
      >
        {
          item.icon &&
            <div className="option-icon">
            <img src={process.env.PUBLIC_URL + "/img/options/" + item.icon} alt={item.name + " 아이콘"} />
          </div>
        }
        <p style={{fontWeight: 550}}>{item.name}</p>
        <p>{"+ " + numToPriceStr(item.price) + "원"}</p>
      </label>
    </li>
  )
}
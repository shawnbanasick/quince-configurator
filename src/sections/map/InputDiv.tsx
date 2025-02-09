import React from "react";
import { ColorPicker } from "../config/ColorPicker";

const InputDiv = (props) => {
  const saveInputValueToState = (event) => {
    props.onChangeCallback(event);
  };

  let backgroundCol = props.backgroundCol;
  if (isNaN(props.value) || +props.value < 0) {
    backgroundCol = "bg-yellow-500";
  }

  return (
    // <InputColumn backgroundCol={backgroundCol}>
    <div
      className={`w-[50px] ${backgroundCol} outline outline-2 outline-red-300 bg-gray-300`}
      data-backgroundcol={backgroundCol}
    >
      {/* <StyledLabel>{props.label}</StyledLabel> */}
      <label className="w-[26px] text-center, ml-3 mb-5" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type="text"
        className="pl-4 outline outline-1 outline-black-300 active:outline-2 active:outline-orange-300"
        name={props.name}
        onChange={saveInputValueToState}
        value={props.value}
      />
      <div className="bg-slate-300 outline outline-2 outline-black-300">
        <ColorPicker onChange={props.onColorChange} baseColor={props.default} />
      </div>
    </div>
  );
};

export { InputDiv };

// const InputColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-size: 18px;
//   width: 40px;
//   height: 85px;
//   border: 1px solid darkgray;
//   background-color: ${(props) => props.backgroundCol};
//   padding-right: 2px;
//   justify-content: center;
//   align-items: center;
// `;

// const StyledInput = styled.input`
//   width: 26px;
//   text-align: center;
//   margin-left: 3px;
//   margin-bottom: 5px;
// `;

// const StyledLabel = styled.label`
//   margin-left: 4px;
//   text-align: center;
//   padding-right: 1px;
// `;

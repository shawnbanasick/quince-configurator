import React from "react";
import { MapColorPicker } from "./MapColorPicker";

const InputDiv = (props) => {
  const saveInputValueToState = (event) => {
    props.onChangeCallback(event);
  };

  let backgroundCol = props.backgroundCol;
  if (isNaN(props.value) || +props.value < 0) {
    backgroundCol = "bg-yellow-500";
  }

  return (
    <div
      className={`flex flex-col justify-center items-center h-[100px] w-[50px] bg-gray-300`}
    >
      <label
        className="flex justify-center w-[40px] h-[20px] text-center, mb-1 "
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        type="text"
        className="flex text-center w-[45px]  outline outline-1 bg-yellow-100 outline-gray-600 focus:outline-2 rounded-sm focus:outline-red-300"
        name={props.name}
        onChange={saveInputValueToState}
        value={props.value}
      />
      <div className="flex justify-center mt-2">
        <MapColorPicker
          onChange={props.onChangeCallback}
          default={props.default}
          stateDesig={props.stateDesig}
        />
      </div>
    </div>
  );
};

export { InputDiv };

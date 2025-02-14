import React from "react";
import { MapColorPicker } from "./MapColorPicker";
import { useStore } from "../../GlobalState/useStore";

const getSetMapColorPalette = (state) => state.setMapColorPalette;

const InputDiv = (props) => {
  const setMapColorPalette = useStore(getSetMapColorPalette);

  const saveInputValueToState = (event) => {
    let value = +event.target.value;
    let name = event.target.name;
    if (isNaN(value) || +value < 0) {
      value = 0;
    }
    props.onChangeCallback(value, name);
    setMapColorPalette("custom");
  };

  let backgroundCol = props.backgroundCol;

  if (isNaN(props.value) || +props.value < 0) {
    backgroundCol = "bg-yellow-500";
  }

  return (
    <div
      className={`flex flex-col justify-center items-center h-[100px] w-auto bg-gray-300 p-1 rounded-md`}
    >
      <label
        className="flex justify-center w-[40px] h-[20px] text-center, mb-1 "
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        type="text"
        className="flex text-center w-[45px]  outline outline-1 bg-yellow-100 outline-gray-600 focus:outline-2 rounded-sm focus:outline-orange-600"
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

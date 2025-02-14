import { useCallback, useRef, useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useClickOutside } from "./useClickOutside";

const PopoverPicker = (props) => {
  const color = props.color;
  const onChange = props.onChange;
  const popover = useRef(null);
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="relative">
      <div
        className={`flex w-8 h-8 cursor-pointer rounded-lg outline ${
          isOpen ? `outline-4` : `outline-1`
        } outline-gray-600`}
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div
          ref={popover}
          className={`flex flex-col justify-center items-center absolute overflow-auto top-[calc(100%+10px)] right-1 left-0 rounded-lg shadow-lg z-50 p-4 w-60 bg-slate-300  mt-1 mb-5 outline outline-1  outline-gray-600`}
        >
          <HexColorPicker
            className="focus:outline-2 focus:outline-orange-600"
            color={color}
            onChange={onChange}
          />
          <HexColorInput
            className="pl-3 mt-3 rounded-md p-1 w-full"
            color={color}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};

export default PopoverPicker;

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
        className="flex  w-8 h-8 cursor-pointer rounded-lg"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div
          ref={popover}
          className="absolute overflow-auto top-[calc(100%+10px)] right-1 left-0 rounded-lg shadow-lg z-50 p-2 w-80"
        >
          <HexColorPicker color={color} onChange={onChange} />
          <HexColorInput color={color} onChange={onChange} className="" />
        </div>
      )}
    </div>
  );
};

export default PopoverPicker;

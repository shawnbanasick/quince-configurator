import React, { useState, useEffect, useRef } from "react";
import { CompactPicker, ColorResult } from "react-color";

interface ColorPickerProps {
  baseColor: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const [color, setColor] = useState(props.baseColor);
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleColorChange = (color: ColorResult) => {
    setColor(color.hex);
    props.onChange(color.hex);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    }

    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);

  return (
    <div
      className="w-10 h-5 rounded-md outline outline-1 outline-zinc-600"
      onClick={() => setShowPicker(!showPicker)}
    >
      {showPicker && (
        <div
          className="ml-20"
          ref={pickerRef}
          onClick={() => setShowPicker(!showPicker)}
        >
          <CompactPicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export { ColorPicker };

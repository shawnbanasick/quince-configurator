import React, { useState, useEffect, useRef } from "react";
import { BlockPicker as Picker, ColorResult } from "react-color";

interface ColorPickerProps {
  baseColor: string;
  onChange: (color: string) => void;
  disabled?: boolean;
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
    setColor(props.baseColor);
  }, [props.baseColor]);

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

  if (props.disabled) {
    return (
      <div className="w-10 h-5 rounded-md disabled:opacity-50">
        {showPicker && (
          <div className="mt-8" ref={pickerRef}>
            <Picker
              className="border border-1 border-slate-400"
              color={color}
              onChangeComplete={handleColorChange}
            />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="w-10 h-5 rounded-md" onClick={() => setShowPicker(true)}>
        {showPicker && (
          <div className="mt-8" ref={pickerRef}>
            <Picker
              className="border border-1 border-slate-400 "
              color={color}
              onChangeComplete={handleColorChange}
            />
          </div>
        )}
      </div>
    );
  }
};

export { ColorPicker };

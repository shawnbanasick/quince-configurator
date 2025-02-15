import { useState, useEffect } from "react";
import { useStore } from "../../GlobalState/useStore";
import PopoverPicker from "./PopoverPicker";
import { useDebouncyFn } from "use-debouncy";

const MapColorPicker = (props) => {
  const [color, setColor] = useState(props.default);

  const setMapColorPalette = useStore((state) => state.setMapColorPalette);
  const setColorInStore = useStore((state) => state.setColor);
  const mapColorPalette = useStore((state) => state.mapColorPalette);

  const handleOnChange = useDebouncyFn((e) => {
    console.log(props.stateDesig);
    setColorInStore(props.stateDesig, e);
    localStorage.setItem(props.stateDesig, e);
    setColor(e);
    setMapColorPalette("custom");
  }, 200);

  useEffect(() => {
    let savedColor = localStorage.getItem(props.stateDesig);
    if (savedColor === null || savedColor === undefined) {
      savedColor = useStore.getState()[props.stateDesig];
      setColor(props.default);
    } else {
      setColor(savedColor);
    }
  }, [props, mapColorPalette]);

  return (
    <PopoverPicker color={color} onChange={handleOnChange} left={props.left} />
  );
};

export { MapColorPicker };

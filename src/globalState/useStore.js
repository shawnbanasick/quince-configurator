import { create } from "zustand";
import createStartSlice from "./createStartSlice";
import createConfigSlice from "./createConfigSlice";
import createConfigXmlSlice from "./createConfigXmlSlice";

const useStore = create((set, get) => ({
  ...createStartSlice(set, get),
  ...createConfigSlice(set, get),
  ...createConfigXmlSlice(set, get),
  // Add more slices here
}));

export { useStore };

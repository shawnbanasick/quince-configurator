import { create } from "zustand";
import createStartSlice from "./createStartSlice";
import createConfigSlice from "./createConfigSlice";
import createConfigXmlSlice from "./createConfigXmlSlice";
import createStatementsXmlSlice from "./createStatementsXmlSlice";

const useStore = create((set, get) => ({
  ...createStartSlice(set, get),
  ...createConfigSlice(set, get),
  ...createConfigXmlSlice(set, get),
  ...createStatementsXmlSlice(set, get),
  // Add more slices here
}));

export { useStore };

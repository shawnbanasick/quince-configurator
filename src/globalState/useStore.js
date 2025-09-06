import { create } from "zustand";
import createStartSlice from "./createStartSlice";
import createConfigSlice from "./createConfigSlice";
import createConfigXmlSlice from "./createConfigXmlSlice";
import createStatementsXmlSlice from "./createStatementsXmlSlice";
import createMapSlice from "./createMapSlice";
import createLanguageSlice from "./createLanguageSlice";
import createResultsSlice from "./createResultsSlice";
import createLanguageXmlSlice from "./createLanguageXmlSlice";

const useStore = create((set, get) => ({
  ...createStartSlice(set, get),
  ...createConfigSlice(set, get),
  ...createConfigXmlSlice(set, get),
  ...createStatementsXmlSlice(set, get),
  ...createMapSlice(set, get),
  ...createLanguageSlice(set, get),
  ...createLanguageXmlSlice(set, get),
  ...createResultsSlice(set, get),
  // Add more slices here
}));

export { useStore };

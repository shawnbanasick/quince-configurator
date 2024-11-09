import { create } from "zustand";
import createStartSlice from "./createStartSlice";

const useStore = create((set, get) => ({
  ...createStartSlice(set, get),
  // Add more slices here
}));

export { useStore };

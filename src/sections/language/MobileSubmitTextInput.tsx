import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const MobileSubmitTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const mobileSortTitleBar = useStore((state) => state.mobileSortTitleBar);

  const handleRefImage = (e) => {
    // showRefImage(e.target.id);
  };
  const handleShowDefaults = (e) => {
    showSectionDefaults(e.target.id);
  };

  const handleTextChange = (e) => {
    setText(e.target.name, e.target.value);
  };

  const handleClearAll = (e) => {
    clearSection(e.target.id);
  };

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }
  return (
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[78vw] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>17. Mobile Submit Screen</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="mobileSubmitDef"
            className="bg-slate-300 p-2 rounded-md"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="mobileSubmitClear"
            className="bg-slate-300 p-2 rounded-md"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          {/* <RefImageButton */}
          <button
            className="bg-slate-300 p-2 rounded-md"
            id="mobileSubmitImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            Reference Image
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="17-1. Mobile Sort Title Bar"
          name="mobileSortTitleBar"
          value={mobileSortTitleBar}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
      </div>
    </div>
  );
};

export { MobileSubmitTextInput };

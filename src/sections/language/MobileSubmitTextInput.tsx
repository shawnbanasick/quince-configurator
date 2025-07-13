import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useTranslation } from "react-i18next";
import mobileSubmit1 from "../../assets/images/mobile-submit-1.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const MobileSubmitTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const mobileSortTitleBar = useStore((state) => state.mobileSortTitleBar);
  const { t } = useTranslation();

  const handleRefImage1 = () => {
    window.open(mobileSubmit1, "Mobile Presort Main Image", "width=800, height=600");
    return false;
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
        <h2>17. {t("mobileSubmitResultsScreen")}</h2>
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
          <div className="flex items-center h-[50px] p-2 justify-center ">
            <p>Images:</p>
          </div>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage1"
            name="mobilePresortImage1"
            // marginRight="35px"
            onClick={handleRefImage1}
          >
            1
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`17-1. ${t("mobileSortTitleBar")}`}
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

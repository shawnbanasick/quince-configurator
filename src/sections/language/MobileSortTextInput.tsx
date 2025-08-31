import React from "react";
import { useStore } from "../../globalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useTranslation } from "react-i18next";
import mobileSort1 from "../../assets/images/mobile-sort-1.png";
import mobileSort2 from "../../assets/images/mobile-sort-2.png";
import mobileSort3 from "../../assets/images/mobile-sort-3.png";
import mobileSort4 from "../../assets/images/mobile-sort-4.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const MobileSortTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const { t } = useTranslation();

  const mobileSortSwapModalHead = useStore((state) => state.mobileSortSwapModalHead);
  const mobileSortSwapModalText = useStore((state) => state.mobileSortSwapModalText);
  const mobileSortSwapModalConfirmButton = useStore(
    (state) => state.mobileSortSwapModalConfirmButton
  );
  const mobileSortConditionsOfInstruction = useStore(
    (state) => state.mobileSortConditionsOfInstruction
  );
  const mobileSortHelpModalHead = useStore((state) => state.mobileSortHelpModalHead);
  const mobileSortHelpModalText = useStore((state) => state.mobileSortHelpModalText);
  const mobileSortScrollBottomModalHead = useStore(
    (state) => state.mobileSortScrollBottomModalHead
  );
  const mobileSortScrollBottomModalText = useStore(
    (state) => state.mobileSortScrollBottomModalText
  );

  const handleRefImage1 = () => {
    window.open(mobileSort1, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleRefImage2 = () => {
    window.open(mobileSort2, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleRefImage3 = () => {
    window.open(mobileSort3, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage4 = () => {
    window.open(mobileSort4, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleShowDefaults = (e) => {
    showSectionDefaults(e.target.id);
  };

  const handleTextChange = (e) => {
    // console.log("handleTextChange", e.target.value);
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>{`11. ${t("mobileSortScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="mobileSortDef"
            className="bg-slate-300 p-2 rounded-md w-[170px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="mobileSortClear"
            className="bg-slate-300 p-2 rounded-md w-[170px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            {t("clearSection")}
          </button>
          <div className="flex items-center h-[50px] p-2 justify-center ">{t("images")}</div>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage1"
            name="mobilePresortImage1"
            // marginRight="35px"
            onClick={handleRefImage1}
          >
            1
          </button>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage2"
            // marginRight="35px"
            onClick={handleRefImage2}
          >
            2
          </button>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage3"
            // marginRight="35px"
            onClick={handleRefImage3}
          >
            3
          </button>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage3"
            // marginRight="35px"
            onClick={handleRefImage4}
          >
            4
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`11-1. ${t("mobileSortHelpModalHead")}`}
          name="mobileSortHelpModalHead"
          value={mobileSortHelpModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`11-2. ${t("mobileSortHelpModalText")}`}
          name="mobileSortHelpModalText"
          height={150}
          value={mobileSortHelpModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`11-3. ${t("mobileSortConditionsOfInstruction")}`}
          name="mobileSortConditionsOfInstruction"
          height={150}
          value={mobileSortConditionsOfInstruction}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`11-4. ${t("mobileSortScrollBottomModalHead")}`}
          name="mobileSortScrollBottomModalHead"
          value={mobileSortScrollBottomModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`11-5. ${t("mobileSortScrollBottomModalText")}`}
          name="mobileSortScrollBottomModalText"
          height={150}
          value={mobileSortScrollBottomModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`11-6. ${t("mobileSortSwapModalHead")}`}
          name="mobileSortSwapModalHead"
          value={mobileSortSwapModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        {/* <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`11-7. ${t("mobileSortSwapModalText")}`}
          name="mobileSortSwapModalText"
          height={150}
          value={mobileSortSwapModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        /> */}
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`11-7. ${t("mobileSortSwapModalConfirmButton")}`}
          name="mobileSortSwapModalConfirmButton"
          value={mobileSortSwapModalConfirmButton}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
      </div>
    </div>
  );
};

export { MobileSortTextInput };

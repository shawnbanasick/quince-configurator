import React from "react";
import { useStore } from "../../globalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const MobileSortTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);

  const mobileSortSwapModalHead = useStore((state) => state.mobileSortSwapModalHead);
  // const setMobileSortSwapModalHead = useStore((state) => state.setMobileSortSwapModalHead);

  const mobileSortSwapModalText = useStore((state) => state.mobileSortSwapModalText);
  // const setMobileSortSwapModalText = useStore((state) => state.setMobileSortSwapModalText);

  const mobileSortSwapModalConfirmButton = useStore(
    (state) => state.mobileSortSwapModalConfirmButton
  );
  // const setMobileSortSwapModalConfirmButton = useStore(
  //   (state) => state.setMobileSortSwapModalConfirmButton
  // );

  const mobileSortConditionsOfInstruction = useStore(
    (state) => state.mobileSortConditionsOfInstruction
  );
  // const setMobileSortConditionsOfInstruction = useStore(
  //   (state) => state.setMobileSortConditionsOfInstruction
  // );

  const mobileSortHelpModalHead = useStore((state) => state.mobileSortHelpModalHead);
  // const setMobileSortHelpModalHead = useStore((state) => state.setMobileSortHelpModalHead);

  const mobileSortHelpModalText = useStore((state) => state.mobileSortHelpModalText);
  // const setMobileSortHelpModalText = useStore((state) => state.setMobileSortHelpModalText);

  const mobileSortScrollBottomModalHead = useStore(
    (state) => state.mobileSortScrollBottomModalHead
  );
  // const setMobileSortScrollBottomModalHead = useStore(
  //   (state) => state.setMobileSortScrollBottomModalHead
  // );

  const mobileSortScrollBottomModalText = useStore(
    (state) => state.mobileSortScrollBottomModalText
  );

  // const setMobileSortScrollBottomModalText = useStore(
  //   (state) => state.setMobileSortScrollBottomModalText
  // );

  const handleRefImage = (e) => {
    // showRefImage(e.target.id);
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[78vw] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>11. Mobile Sort Screen</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="mobileSortDef"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="mobileSortClear"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          {/* <RefImageButton */}
          <button
            className="bg-slate-300 p-2 rounded-md w-[160px] hover:bg-slate-400 hover:font-semibold"
            id="mobileSortImage"
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
          label="11-1. Sort Position Swap Modal Title"
          name="mobileSortSwapModalHead"
          value={mobileSortSwapModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="11-2. Sort Position Swap Modal Text"
          name="mobileSortSwapModalText"
          height={150}
          value={mobileSortSwapModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="11-3. Sort Swap Modal Confirm Button"
          name="mobileSortSwapModalConfirmButton"
          value={mobileSortSwapModalConfirmButton}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="11-4. Sort Conditions Of Instruction"
          name="mobileSortConditionsOfInstruction"
          height={150}
          value={mobileSortConditionsOfInstruction}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="11-5. Sort Help Modal Title"
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
          label="11-6. Sort Help Modal Text"
          name="mobileSortHelpModalText"
          height={150}
          value={mobileSortHelpModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="11-7. Sort Must Scroll Bottom Modal Title"
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
          label="11-8. Sort Must Scroll Bottom Modal Text"
          name="mobileSortScrollBottomModalText"
          height={150}
          value={mobileSortScrollBottomModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
      </div>
    </div>
  );
};

export { MobileSortTextInput };

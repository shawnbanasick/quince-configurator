import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const MobilePostsortTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);

  const mobilePostsortPreventNavModalHead = useStore(
    (state) => state.mobilePostsortPreventNavModalHead
  );
  const setMobilePostsortPreventNavModalHead = useStore(
    (state) => state.setMobilePostsortPreventNavModalHead
  );

  const mobilePostsortPreventNavModalText = useStore(
    (state) => state.mobilePostsortPreventNavModalText
  );
  const setMobilePostsortPreventNavModalText = useStore(
    (state) => state.setMobilePostsortPreventNavModalText
  );

  const mobilePostsortSortbarText = useStore(
    (state) => state.mobilePostsortSortbarText
  );
  const setMobilePostsortSortbarText = useStore(
    (state) => state.setMobilePostsortSortbarText
  );

  const mobilePostsortHelpModalHead = useStore(
    (state) => state.mobilePostsortHelpModalHead
  );
  const setMobilePostsortHelpModalHead = useStore(
    (state) => state.setMobilePostsortHelpModalHead
  );

  const mobilePostsortHelpModalText = useStore(
    (state) => state.mobilePostsortHelpModalText
  );
  const setMobilePostsortHelpModalText = useStore(
    (state) => state.setMobilePostsortHelpModalText
  );

  const handleRefImage = (e) => {
    // showRefImage(e.target.id);
  };
  const handleShowDefaults = (e) => {
    showSectionDefaults(e.target.id);
  };

  const handleTextChange = (e) => {
    console.log("handleTextChange", e.target.value);
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[1200px] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>12. Mobile Post-Sort Screen</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="footerDef"
            className="bg-slate-300 p-2 rounded-md"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="footerClear"
            className="bg-slate-300 p-2 rounded-md"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          {/* <RefImageButton */}
          <button
            className="bg-slate-300 p-2 rounded-md"
            id="footerImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            Reference Image
          </button>
        </div>
      </div>

      <div className="pl-10">
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="Post-Sort Prevent Navigation Modal Head"
          name="mobilePostsortPreventNavModalHead"
          value={mobilePostsortPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="Post-Sort Prevent Navigation Modal Text"
          name="mobilePostsortPreventNavModalText"
          height={150}
          value={mobilePostsortPreventNavModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="Post-Sort Sortbar Text"
          name="mobilePostsortSortbarText"
          value={mobilePostsortSortbarText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="Post-Sort Help Modal Head"
          name="mobilePostsortHelpModalHead"
          value={mobilePostsortHelpModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="12-5. Post-Sort Help Modal Text"
          name="mobilePostsortHelpModalText"
          height={150}
          value={mobilePostsortHelpModalText}
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

export { MobilePostsortTextInput };

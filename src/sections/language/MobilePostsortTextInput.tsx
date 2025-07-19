import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useTranslation } from "react-i18next";
import mobilePostsort1 from "../../assets/images/mobile-postsort-1.png";
import mobilePostsort2 from "../../assets/images/mobile-postsort-2.png";
import mobilePostsort3 from "../../assets/images/mobile-postsort-3.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const MobilePostsortTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const { t } = useTranslation();

  const mobilePostsortPreventNavModalHead = useStore(
    (state) => state.mobilePostsortPreventNavModalHead
  );
  const mobilePostsortPreventNavModalText = useStore(
    (state) => state.mobilePostsortPreventNavModalText
  );
  const mobilePostsortSortbarText = useStore((state) => state.mobilePostsortSortbarText);
  const mobilePostsortHelpModalHead = useStore((state) => state.mobilePostsortHelpModalHead);
  const mobilePostsortHelpModalText = useStore((state) => state.mobilePostsortHelpModalText);
  const mobilePostsortPlaceholder = useStore((state) => state.mobilePostsortPlaceholder);

  const handleRefImage1 = () => {
    window.open(mobilePostsort1, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleRefImage2 = () => {
    window.open(mobilePostsort2, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleRefImage3 = () => {
    window.open(mobilePostsort3, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleShowDefaults = (e: any) => {
    showSectionDefaults(e.target.id);
  };

  const handleTextChange = (e: any) => {
    console.log("handleTextChange", e.target.value);
    setText(e.target.name, e.target.value);
  };

  const handleClearAll = (e: any) => {
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
        <h2>{`13. ${t("mobilePostsortCommentsScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="mobilePostsortDef"
            className="bg-slate-300 p-2 rounded-md  w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="mobilePostsortClear"
            className="bg-slate-300 p-2 rounded-md  w-[130px] hover:bg-slate-400 hover:font-semibold"
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
        </div>
      </div>

      <div className="pl-10">
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`13-1. ${t("mobilePostsortHelpModalHead")}`}
          name="mobilePostsortHelpModalHead"
          value={mobilePostsortHelpModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`13-2. ${t("mobilePostsortHelpModalText")}`}
          name="mobilePostsortHelpModalText"
          height={150}
          value={mobilePostsortHelpModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`13-3. ${t("mobilePostsortSortbarText")}`}
          name="mobilePostsortSortbarText"
          value={mobilePostsortSortbarText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`13-4. ${t("mobilePostsortPlaceholder")}`}
          name="mobilePostsortPlaceholder"
          value={mobilePostsortPlaceholder}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`13-5. ${t("mobilePostsortPreventNavModalHead")}`}
          name="mobilePostsortPreventNavModalHead"
          value={mobilePostsortPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`13-6. ${t("mobilePostsortPreventNavModalText")}`}
          name="mobilePostsortPreventNavModalText"
          height={150}
          value={mobilePostsortPreventNavModalText}
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

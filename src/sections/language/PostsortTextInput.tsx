import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useTranslation } from "react-i18next";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const PostsortTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const { t } = useTranslation();

  const postsortHeader = useStore((state) => state.postsortHeader);
  // const setPostsortHeader = useStore((state) => state.setPostsortHeader);

  const postsortInstructions = useStore((state) => state.postsortInstructions);
  // const setPostsortInstructions = useStore((state) => state.setPostsortInstructions);

  const placeholder = useStore((state) => state.placeholder);
  // const setPlaceholder = useStore((state) => state.setPlaceholder);

  const postsortAgreement = useStore((state) => state.postsortAgreement);
  // const setPostsortAgreement = useStore((state) => state.setPostsortAgreement);

  const postsortDisagreement = useStore((state) => state.postsortDisagreement);
  // const setPostsortDisagreement = useStore((state) => state.setPostsortDisagreement);

  const postsortModalHead = useStore((state) => state.postsortModalHead);
  // const setPostsortModalHead = useStore((state) => state.setPostsortModalHead);

  const postsortModalText = useStore((state) => state.postsortModalText);
  // const setPostsortModalText = useStore((state) => state.setPostsortModalText);

  const postsortPreventNavModalHead = useStore((state) => state.postsortPreventNavModalHead);
  // const setPostsortPreventNavModalHead = useStore((state) => state.setPostsortPreventNavModalHead);

  const postsortPreventNavModalText = useStore((state) => state.postsortPreventNavModalText);
  // const setPostsortPreventNavModalText = useStore((state) => state.setPostsortPreventNavModalText);

  const postsortBackButton = useStore((state) => state.postsortBackButton);
  // const setPostsortBackButton = useStore((state) => state.setPostsortBackButton);

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
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[78vw] rounded-sm bg-gray-100">
      <div className="flex flex-row justify-between mb-4">
        <h2>{`12. ${t("postsortCommentsScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="postsortDef"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="postsortClear"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          {/* <RefImageButton */}
          <button
            className="bg-slate-300 p-2 rounded-md w-[160px] hover:bg-slate-400 hover:font-semibold"
            id="postsortImage"
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
          label={`12-1. ${t("postsortHeader")}`}
          name="postsortHeader"
          value={postsortHeader}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-2. ${t("postsortInstructions")}`}
          name="postsortInstructions"
          height={150}
          value={postsortInstructions}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-3. ${t("placeholder")}`}
          name="placeholder"
          value={placeholder}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-4. ${t("postsortAgreement")}`}
          name="postsortAgreement"
          value={postsortAgreement}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-5. ${t("postsortDisagreement")}`}
          name="postsortDisagreement"
          value={postsortDisagreement}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-6. ${t("postsortModalHead")}`}
          name="postsortModalHead"
          value={postsortModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-7. ${t("postsortModalText")}`}
          name="postsortModalText"
          height={150}
          value={postsortModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-8. ${t("postsortPreventNavModalHead")}`}
          name="postsortPreventNavModalHead"
          value={postsortPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-9. ${t("postsortPreventNavModalText")}`}
          name="postsortPreventNavModalText"
          height={150}
          value={postsortPreventNavModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-10. ${t("postsortBackButton")}`}
          name="postsortBackButton"
          value={postsortBackButton}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
      </div>
    </div>
  );
};

export { PostsortTextInput };

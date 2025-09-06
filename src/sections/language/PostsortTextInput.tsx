import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useTranslation } from "react-i18next";
import postSort1 from "../../assets/images/postsort-1.png";
import postSort2 from "../../assets/images/postsort-2.png";
import postSort3 from "../../assets/images/postsort-3.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const PostsortTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const { t } = useTranslation();

  const postsortHeader = useStore((state) => state.postsortHeader);
  const postsortInstructions = useStore((state) => state.postsortInstructions);
  const placeholder = useStore((state) => state.placeholder);
  const postsortPlacedOn = useStore((state) => state.postsortPlacedOn);
  const postsortAgreement = useStore((state) => state.postsortAgreement);
  const postsortDisagreement = useStore((state) => state.postsortDisagreement);
  const postsortModalHead = useStore((state) => state.postsortModalHead);
  const postsortModalText = useStore((state) => state.postsortModalText);
  const postsortPreventNavModalHead = useStore((state) => state.postsortPreventNavModalHead);
  const postsortPreventNavModalText = useStore((state) => state.postsortPreventNavModalText);
  const postsortBackButtonText = useStore((state) => state.postsortBackButtonText);

  const handleRefImage1 = () => {
    window.open(postSort1, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };
  const handleRefImage2 = () => {
    window.open(postSort2, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };
  const handleRefImage3 = () => {
    window.open(postSort3, "Mobile Presort Main Image", "width=800, height=600");
    return false;
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm bg-gray-100">
      <div className="flex flex-row justify-between mb-4">
        <h2>{`12. ${t("postsortCommentsScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="postsortDef"
            className="bg-slate-300 p-2 rounded-md w-[170px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="postsortClear"
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
            name="mobilePresortImage2"
            // marginRight="35px"
            onClick={handleRefImage2}
          >
            2
          </button>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage3"
            name="mobilePresortImage3"
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
          label={`12-1. ${t("postsortModalHead")}`}
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
          label={`12-2. ${t("postsortModalText")}`}
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
          label={`12-3. ${t("postsortHeader")}`}
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
          label={`12-4. ${t("postsortInstructions")}`}
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
          label={`12-5. ${t("placeholder")}`}
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
          label={`12-6. ${t("postsortPlacedOn")}`}
          name="postsortPlacedOn"
          value={postsortPlacedOn}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-7. ${t("postsortAgreement")}`}
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
          label={`12-8. ${t("postsortDisagreement")}`}
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
          label={`12-9. ${t("postsortBackButtonText")}`}
          name="postsortBackButtonText"
          value={postsortBackButtonText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`12-10. ${t("postsortPreventNavModalHead")}`}
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
          label={`12-11. ${t("postsortPreventNavModalText")}`}
          name="postsortPreventNavModalText"
          height={150}
          value={postsortPreventNavModalText}
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

export { PostsortTextInput };

import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useTranslation } from "react-i18next";
import failure1 from "../../assets/images/failure-1.png";
import failure2 from "../../assets/images/failure-2.png";
import failure3 from "../../assets/images/failure-3.png";
import failure4 from "../../assets/images/failure-4.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const FailureTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const emailSubmitBtn = useStore((state) => state.emailSubmitBtn);
  const emailCopyResultsBtn = useStore((state) => state.emailCopyResultsBtn);
  const emailCopyAddressBtn = useStore((state) => state.emailCopyAddressBtn);
  const copySuccessMessage = useStore((state) => state.copySuccessMessage);
  const copyFailMessage = useStore((state) => state.copyFailMessage);
  const defaultEmailFailModalText = useStore((state) => state.defaultEmailFailModalText);
  const emailBodyMessage = useStore((state) => state.emailBodyMessage);
  const { t } = useTranslation();

  const handleRefImage1 = () => {
    window.open(failure1, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };
  const handleRefImage2 = () => {
    window.open(failure2, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };
  const handleRefImage3 = () => {
    window.open(failure3, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };
  const handleRefImage4 = () => {
    window.open(failure4, "Mobile Presort Main Image", "width=800, height=600");
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[78vw] rounded-sm bg-gray-100">
      <div className="flex flex-row justify-between mb-4">
        <h2>18. {t("emailScreen")}</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="emailDef"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="emailClear"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
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
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage4"
            name="mobilePresortImage4"
            // marginRight="35px"
            onClick={handleRefImage4}
          >
            4
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`18-6. ${t("defaultEmailFailModalText")}`}
          name="defaultEmailFailModalText"
          height={150}
          value={defaultEmailFailModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`18-1. ${t("emailSubmitBtn")}`}
          name="emailSubmitBtn"
          value={emailSubmitBtn}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`18-2. ${t("emailCopyResultsBtn")}`}
          name="emailCopyResultsBtn"
          value={emailCopyResultsBtn}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`18-3. ${t("emailCopyAddressBtn")}`}
          name="emailCopyAddressBtn"
          value={emailCopyAddressBtn}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`18-4. ${t("copySuccessMessage")}`}
          name="copySuccessMessage"
          value={copySuccessMessage}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`18-5. ${t("copyFailMessage")}`}
          name="copyFailMessage"
          value={copyFailMessage}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`18-6. ${t("defaultEmailFailModalText")}`}
          name="defaultEmailFailModalText"
          height={150}
          value={defaultEmailFailModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`18-7. ${t("emailBodyMessage")}`}
          name="emailBodyMessage"
          height={150}
          value={emailBodyMessage}
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

export { FailureTextInput };

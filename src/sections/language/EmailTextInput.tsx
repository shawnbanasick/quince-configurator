import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useTranslation } from "react-i18next";
import failure1 from "../../assets/images/failure-1.png";
import failure5 from "../../assets/images/failure-5.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const FailureTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);

  const checkInternetMessage = useStore((state) => state.checkInternetMessage);
  const btnTransferEmail = useStore((state) => state.btnTransferEmail);
  const submitFailMessage = useStore((state) => state.submitFailMessage);
  const submitFailMessage2 = useStore((state) => state.submitFailMessage2);
  const submitFailMessage3 = useStore((state) => state.submitFailMessage3);
  const unableToConnect = useStore((state) => state.unableToConnect);
  const clipboardResults = useStore((state) => state.clipboardResults);
  const copiedText = useStore((state) => state.copiedText);
  const downloadResultsButtonText = useStore(
    (state) => state.downloadResultsButtonText,
  );
  const emailSubjectText = useStore((state) => state.emailSubjectText);

  const { t } = useTranslation();

  const handleRefImage1 = () => {
    window.open(failure1, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };
  const handleRefImage5 = () => {
    window.open(failure5, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleShowDefaults = (e: any) => {
    showSectionDefaults(e.target.id);
  };

  const handleTextChange = (e: any) => {
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm bg-gray-100">
      <div className="flex flex-row justify-between mb-4">
        <h2>19. {t("emailScreen")}</h2>
        <div className="flex flex-row gap-4">
          <button
            id="emailDef"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          <button
            id="emailClear"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            {t("clearSection")}
          </button>
          <div className="flex items-center h-[50px] p-2 justify-center ">
            {t("images")}
          </div>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage1"
            name="mobilePresortImage1"
            onClick={handleRefImage1}
          >
            1
          </button>

          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage5"
            name="mobilePresortImage5"
            onClick={handleRefImage5}
          >
            2
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`19-1. ${t("checkInternetMessage")}`}
          name="checkInternetMessage"
          height={150}
          value={checkInternetMessage}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`19-2. ${t("unableToConnect")}`}
          name="unableToConnect"
          value={unableToConnect}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />{" "}
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`19-3. ${t("submitFailMessage2")}`}
          name="submitFailMessage2"
          value={submitFailMessage2}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />{" "}
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`19-4. ${t("clipboardResults")}`}
          name="clipboardResults"
          value={clipboardResults}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`19-5. ${t("copiedText")}`}
          name="copiedText"
          value={copiedText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`19-6. ${t("submitFailMessage")}`}
          name="submitFailMessage"
          value={submitFailMessage}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`19-7. ${t("btnTransferEmail")}`}
          name="btnTransferEmail"
          value={btnTransferEmail}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`19-8. ${t("submitFailMessage3")}`}
          name="submitFailMessage3"
          value={submitFailMessage3}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`19-9. ${t("downloadResultsButtonText")}`}
          name="downloadResultsButtonText"
          value={downloadResultsButtonText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`19-10. ${t("emailSubjectText")}`}
          name="emailSubjectText"
          value={emailSubjectText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
      </div>
    </div>
  );
};

export { FailureTextInput };

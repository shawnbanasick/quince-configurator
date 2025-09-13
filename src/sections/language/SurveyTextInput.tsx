import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useTranslation } from "react-i18next";
import survey1 from "../../assets/images/survey-1.png";
import survey2 from "../../assets/images/survey-2.png";
import survey3 from "../../assets/images/survey-3.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const SurveyTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const surveyHeader = useStore((state) => state.surveyHeader);
  const surveyModalHead = useStore((state) => state.surveyModalHead);
  const surveyModalText = useStore((state) => state.surveyModalText);
  const surveyPreventNavModalHead = useStore((state) => state.surveyPreventNavModalHead);
  const surveyPreventNavModalText = useStore((state) => state.surveyPreventNavModalText);
  const { t } = useTranslation();

  const handleRefImage1 = () => {
    window.open(survey1, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };
  const handleRefImage2 = () => {
    window.open(survey2, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };
  const handleRefImage3 = () => {
    window.open(survey3, "Mobile Presort Main Image", "width=800, height=600");
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm bg-gray-100">
      <div className="flex flex-row justify-between mb-4">
        <h2>14. {t("questionnaireScreen")}</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="surveyDef"
            className="bg-slate-300 p-2 rounded-md w-[200px]  h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="surveyClear"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
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
          label={`14-1. ${t("surveyModalHead")}`}
          name="surveyModalHead"
          value={surveyModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`14-2. ${t("surveyModalText")}`}
          name="surveyModalText"
          height={150}
          value={surveyModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`14-3. ${t("surveyHeader")}`}
          name="surveyHeader"
          value={surveyHeader}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`14-4. ${t("surveyPreventNavModalHead")}`}
          name="surveyPreventNavModalHead"
          value={surveyPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`14-5. ${t("surveyPreventNavModalText")}`}
          name="surveyPreventNavModalText"
          height={150}
          value={surveyPreventNavModalText}
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

export { SurveyTextInput };

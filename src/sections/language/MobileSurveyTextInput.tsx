import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useTranslation } from "react-i18next";
import mobileSurvey1 from "../../assets/images/mobile-survey-1.png";

const getSetText = (state) => state.setText;

const MobileSurveyTextInput: React.FC = () => {
  const setText = useStore(getSetText);
  const mobileSurveyHelpModalHead = useStore((state) => state.mobileSurveyHelpModalHead);
  const mobileSurveyHelpModalText = useStore((state) => state.mobileSurveyHelpModalText);
  const { t } = useTranslation();

  const handleRefImage1 = () => {
    window.open(mobileSurvey1, "Mobile Presort Main Image", "width=800, height=600");
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

  return (
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>15. {t("mobileQuestionnaireScreen")}</h2>

        <div className="flex flex-row gap-4">
          <button
            id="mobileSurveyDef"
            className="bg-slate-300 p-2 rounded-md w-[200px]  h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          <button
            id="mobileSurveyClear"
            className="bg-slate-300 p-2 rounded-md w-[200px]  h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            {t("clearSection")}
          </button>
          <div className="flex items-center h-[50px] p-2 justify-center ">{t("images")}</div>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage1"
            name="mobilePresortImage1"
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
          label={`15-1. ${t("mobileSurveyHelpModalHead")}`}
          name="mobileSurveyHelpModalHead"
          value={mobileSurveyHelpModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label={`15-2. ${t("mobileSurveyHelpModalText")}`}
          name="mobileSurveyHelpModalText"
          height={150}
          value={mobileSurveyHelpModalText}
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

export { MobileSurveyTextInput };

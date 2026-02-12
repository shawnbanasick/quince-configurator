import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import consent1 from "../../assets/images/consent-1.png";
import consent2 from "../../assets/images/consent-2.png";
import { useTranslation } from "react-i18next";

import { useStore } from "../../globalState/useStore";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getLangPreventMobileTitle = (state) => state.preventMobileTitle;
const getLangPreventMobileMessage = (state) => state.preventMobileMessage;

const PreventMobileAccess = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const langPreventMobileTitle = useStore(getLangPreventMobileTitle);
  const langPreventMobileMessage = useStore(getLangPreventMobileMessage);
  const { t } = useTranslation();

  const handleRefImage = () => {
    window.open(consent1, "Consent Image 1", "width=800, height=600");
    return false;
  };

  const handleRefImage2 = () => {
    window.open(consent2, "Consent Image 2", "width=800, height=300");
    return false;
  };

  const handleShowDefaults = (e: any) => {
    showSectionDefaults(e.target.id);
  };

  const handleClearAll = (e: any) => {
    clearSection(e.target.id);
  };

  const handleTextChange = (e: any) => {
    setText(e.target.name, e.target.value);
  };

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm bg-gray-100">
      <div className="flex flex-row justify-between align-middle mb-4">
        <h2>2. {t("preventMobileAccess")}</h2>
        <div className="flex flex-row gap-4">
          <button
            id="mobilePreventDef"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          <button
            id="mobilePreventClear"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            {t("clearSection")}
          </button>
          <div className="flex items-center p-2 justify-center  h-[50px] ">
            <p>{t("images")}:</p>
          </div>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="consentImage"
            onClick={handleRefImage}
          >
            1
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="consentImage"
            onClick={handleRefImage2}
          >
            2
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`2-1. ${t("preventMobileTitle")}`}
          name="preventMobileTitle"
          value={langPreventMobileTitle}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[250px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`2-2. ${t("preventMobileMessage")}`}
          name="consentText"
          height={150}
          value={langPreventMobileMessage}
          highlight={true}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
      </div>
    </div>
  );
};

export { PreventMobileAccess };

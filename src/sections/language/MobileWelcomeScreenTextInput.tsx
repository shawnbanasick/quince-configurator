import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useStore } from "../../GlobalState/useStore";
import mobileWelcome1 from "../../assets/images/mobile_welcome-1.png";
import { useTranslation } from "react-i18next";

const getSetText = (state) => state.setText;
const getMobileWelcomeText = (state) => state.mobileWelcomeText;

const MobileWelcomeScreenTextInput = () => {
  const setText = useStore(getSetText);
  const mobileWelcomeText = useStore(getMobileWelcomeText);
  const { t } = useTranslation();

  const handleRefImage = () => {
    window.open(mobileWelcome1, "Welcome Image 1", "width=800, height=600");
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

  return (
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>{`6. ${t("mobileWelcomeScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          <button
            id="mobileWelcomeDef"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          <button
            id="mobileWelcomeClear"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            {t("clearSection")}
          </button>
          <div className="flex items-center p-2 justify-center  h-[50px]">{t("images")}</div>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px]  h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="consentImage"
            onClick={handleRefImage}
          >
            1
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`6-1. ${t("mobileWelcomeText")}`}
          name="mobileWelcomeText"
          value={mobileWelcomeText}
          height={150}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
      </div>
    </div>
  );
};

export { MobileWelcomeScreenTextInput };

import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useStore } from "../../GlobalState/useStore";
import { useTranslation } from "react-i18next";
import access1 from "../../assets/images/access-1.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getLangLoginWelcomeText = (state) => state.loginWelcomeText;
const getLangLoginHeaderText = (state) => state.loginHeaderText;
const getLangLoginPartIdText = (state) => state.loginPartIdText;
const getLangAccessInputText = (state) => state.accessInputText;
const getLangPartIdWarning = (state) => state.partIdWarning;
const getLangAccessCodeWarning = (state) => state.accessCodeWarning;
const getLoginSubmitButtonText = (state) => state.loginSubmitButtonText;
const getAccessCodeText = (state) => state.accessCodeText;

const AccessControlTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const langLoginWelcomeText = useStore(getLangLoginWelcomeText);
  const langLoginHeaderText = useStore(getLangLoginHeaderText);
  const langLoginPartIdText = useStore(getLangLoginPartIdText);
  const langAccessInputText = useStore(getLangAccessInputText);
  const langPartIdWarning = useStore(getLangPartIdWarning);
  const langAccessCodeWarning = useStore(getLangAccessCodeWarning);
  const loginSubmitButtonText = useStore(getLoginSubmitButtonText);
  const accessCodeText = useStore(getAccessCodeText);
  const { t } = useTranslation();

  const handleRefImage = () => {
    window.open(access1, "Access Image 1", "width=800, height=600");
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>{`4. ${t("accessControlScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          <button
            id="accessDef"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          <button
            id="accessClear"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            {t("clearSection")}
          </button>
          {/* <RefImageButton */}
          <div className="flex items-center p-2 justify-center h-[50px]">
            <p>{t("images")}:</p>
          </div>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
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
          label={`4-1. ${t("loginWelcomeText")}`}
          name="loginWelcomeText"
          height={150}
          value={langLoginWelcomeText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-2. ${t("loginHeaderText")}`}
          name="loginHeaderText"
          value={langLoginHeaderText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-3. ${t("loginPartIdText")}`}
          name="loginPartIdText"
          value={langLoginPartIdText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-4. ${t("accessCodeText")}`}
          name="accessCodeText"
          value={accessCodeText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-5. ${t("accessInputText")}`}
          name="accessInputText"
          value={langAccessInputText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-6. ${t("partIdWarning")}`}
          name="partIdWarning"
          value={langPartIdWarning}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-7. ${t("accessCodeWarning")}`}
          name="accessCodeWarning"
          value={langAccessCodeWarning}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-8. ${t("loginSubmitButtonText")}`}
          name="loginSubmitButtonText"
          value={loginSubmitButtonText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
      </div>
    </div>
  );
};

export { AccessControlTextInput };

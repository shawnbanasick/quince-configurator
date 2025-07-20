import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useStore } from "../../GlobalState/useStore";
import welcome1 from "../../assets/images/welcome-1.png";
import welcome2 from "../../assets/images/welcome-2.png";
import { useTranslation } from "react-i18next";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getLangLandingHead = (state) => state.landingHead;
const getLangWelcomeMessage = (state) => state.welcomeMessage;
const getLangLandingHelpModalHead = (state) => state.landingHelpModalHead;
const getLangLandingHelpModalText = (state) => state.landingHelpModalText;
const getLangBtnNextLanding = (state) => state.btnNextLanding;
const getLangBtnHelpLanding = (state) => state.btnHelpLanding;

const WelcomeScreenTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const langLandingHead = useStore(getLangLandingHead);
  const langWelcomeMessage = useStore(getLangWelcomeMessage);
  const langLandingHelpModalHead = useStore(getLangLandingHelpModalHead);
  const langLandingHelpModalText = useStore(getLangLandingHelpModalText);
  const langBtnNextLanding = useStore(getLangBtnNextLanding);
  const langBtnHelpLanding = useStore(getLangBtnHelpLanding);
  const { t } = useTranslation();

  const handleRefImage = () => {
    window.open(welcome1, "Welcome Image 1", "width=800, height=600");
    return false;
  };

  const handleRefImage2 = () => {
    window.open(welcome2, "Welcome Image 1", "width=800, height=300");
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[78vw] rounded-sm bg-gray-100">
      <div className="flex flex-row justify-between mb-4">
        <h2>{`4. ${t("welcomeScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="welcomeDef"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="welcomeClear"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          {/* <RefImageButton */}
          <div className="flex items-center p-2 justify-center  h-[50px] ">
            <p>Images:</p>
          </div>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="consentImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            1
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="consentImage"
            // marginRight="35px"
            onClick={handleRefImage2}
          >
            2
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-1. ${t("landingHead")}`}
          name="landingHead"
          value={langLandingHead}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`4-2. ${t("welcomeMessage")}`}
          name="welcomeMessage"
          height={150}
          value={langWelcomeMessage}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-3. ${t("landingHelpModalHead")}`}
          name="landingHelpModalHead"
          value={langLandingHelpModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`4-4. ${t("landingHelpModalText")}`}
          name="landingHelpModalText"
          height={150}
          value={langLandingHelpModalText}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-5. ${t("btnNextLanding")}`}
          name="btnNextLanding"
          value={langBtnNextLanding}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`4-6. ${t("btnHelpLanding")}`}
          name="btnHelpLanding"
          value={langBtnHelpLanding}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
      </div>
    </div>
  );
};

export { WelcomeScreenTextInput };

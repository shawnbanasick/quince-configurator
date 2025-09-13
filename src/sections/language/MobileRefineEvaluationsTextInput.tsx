import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import mobileThin1 from "../../assets/images/mobile-thin-1.png";
import mobileThin2 from "../../assets/images/mobile-thin-2.png";
import mobileThin3 from "../../assets/images/mobile-thin-3.png";
import mobileThin4 from "../../assets/images/mobile-thin-4.png";
import mobileThin5 from "../../assets/images/mobile-thin-5.png";
import mobileThin6 from "../../assets/images/mobile-thin-6.png";
import mobileThin7 from "../../assets/images/mobile-thin-7.png";
import mobileThin8 from "../../assets/images/mobile-thin-8.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getMoveTopMobileHead = (state) => state.moveTopMobileHead;
const getMoveTopMobileText = (state) => state.moveTopMobileText;
const getMoveAllTopMobileText = (state) => state.moveAllTopMobileText;
const getMoveTopMobileButtonOK = (state) => state.moveTopMobileButtonOK;
const getMobileThinConditionsOfInstruction = (state) => state.mobileThinConditionsOfInstruction;
const getMobileThinSubmitButtonText = (state) => state.mobileThinSubmitButtonText;
const getMobileThinHelpModalHead = (state) => state.mobileThinHelpModalHead;
const getMobileThinHelpModalText = (state) => state.mobileThinHelpModalText;
const getMobileThinPreventNavModalHead = (state) => state.mobileThinPreventNavModalHead;
const getMobileThinPreventNavModalText = (state) => state.mobileThinPreventNavModalText;
const getMobileThinProcessCompleteMessage = (state) => state.mobileThinProcessCompleteMessage;
const getMobileGuidanceModalRight1Header = (state) => state.mobileGuidanceModalRight1Header;
const getMobileGuidanceModalRight1Text = (state) => state.mobileGuidanceModalRight1Text;
const getMobileGuidanceModalRight2Header = (state) => state.mobileGuidanceModalRight2Header;
const getMobileGuidanceModalRight2Text = (state) => state.mobileGuidanceModalRight2Text;
const getMobileGuidanceModalLeft1Header = (state) => state.mobileGuidanceModalLeft1Header;
const getMobileGuidanceModalLeft1Text = (state) => state.mobileGuidanceModalLeft1Text;
const getMobileGuidanceModalLeft2Header = (state) => state.mobileGuidanceModalLeft2Header;
const getMobileGuidanceModalLeft2Text = (state) => state.mobileGuidanceModalLeft2Text;
const getMobileThinScrollBottomModalHead = (state) => state.mobileThinScrollBottomModalHead;
const getMobileThinScrollBottomModalText = (state) => state.mobileThinScrollBottomModalText;
const getMobileThinSelectedText = (state) => state.mobileThinSelectedText;

const MobileRefineEvaluationsTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const moveTopMobileHead = useStore(getMoveTopMobileHead);
  const moveTopMobileText = useStore(getMoveTopMobileText);
  const moveAllTopMobileText = useStore(getMoveAllTopMobileText);
  const moveTopMobileButtonOK = useStore(getMoveTopMobileButtonOK);
  const mobileThinConditionsOfInstruction = useStore(getMobileThinConditionsOfInstruction);
  const mobileThinSubmitButtonText = useStore(getMobileThinSubmitButtonText);
  const mobileThinHelpModalHead = useStore(getMobileThinHelpModalHead);
  const mobileThinHelpModalText = useStore(getMobileThinHelpModalText);
  const mobileThinPreventNavModalHead = useStore(getMobileThinPreventNavModalHead);
  const mobileThinPreventNavModalText = useStore(getMobileThinPreventNavModalText);
  const mobileThinProcessCompleteMessage = useStore(getMobileThinProcessCompleteMessage);
  const mobileGuidanceModalRight1Header = useStore(getMobileGuidanceModalRight1Header);
  const mobileGuidanceModalRight1Text = useStore(getMobileGuidanceModalRight1Text);
  const mobileGuidanceModalRight2Header = useStore(getMobileGuidanceModalRight2Header);
  const mobileGuidanceModalRight2Text = useStore(getMobileGuidanceModalRight2Text);
  const mobileGuidanceModalLeft1Header = useStore(getMobileGuidanceModalLeft1Header);
  const mobileGuidanceModalLeft1Text = useStore(getMobileGuidanceModalLeft1Text);
  const mobileGuidanceModalLeft2Header = useStore(getMobileGuidanceModalLeft2Header);
  const mobileGuidanceModalLeft2Text = useStore(getMobileGuidanceModalLeft2Text);
  const mobileThinScrollBottomModalHead = useStore(getMobileThinScrollBottomModalHead);
  const mobileThinScrollBottomModalText = useStore(getMobileThinScrollBottomModalText);
  const mobileThinSelectedText = useStore(getMobileThinSelectedText);
  const { t } = useTranslation();

  const handleRefImage1 = () => {
    window.open(mobileThin1, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleRefImage2 = () => {
    window.open(mobileThin2, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleRefImage3 = () => {
    window.open(mobileThin3, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage4 = () => {
    window.open(mobileThin4, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage5 = () => {
    window.open(mobileThin5, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage6 = () => {
    window.open(mobileThin6, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage7 = () => {
    window.open(mobileThin7, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage8 = () => {
    window.open(mobileThin8, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>{`9. ${t("mobileRefineEvaluationsScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="mobileRefineDef"
            className="bg-slate-300 p-2 rounded-md h-[50px] w-[190px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="mobileRefineClear"
            className="bg-slate-300 p-2 rounded-md h-[50px] w-[210px] hover:bg-slate-400 hover:font-semibold"
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
            // marginRight="35px"
            onClick={handleRefImage2}
          >
            2
          </button>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage3"
            // marginRight="35px"
            onClick={handleRefImage3}
          >
            3
          </button>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage4"
            // marginRight="35px"
            onClick={handleRefImage4}
          >
            4
          </button>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage5"
            // marginRight="35px"
            onClick={handleRefImage5}
          >
            5
          </button>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage6"
            // marginRight="35px"
            onClick={handleRefImage6}
          >
            6
          </button>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage6"
            // marginRight="35px"
            onClick={handleRefImage7}
          >
            7
          </button>
          <button
            className="bg-slate-300 p-2 h-[50px] rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage6"
            // marginRight="35px"
            onClick={handleRefImage8}
          >
            8
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-1. ${t("mobileThinHelpModalHead")}`}
          name="mobileThinHelpModalHead"
          value={mobileThinHelpModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`9-2. ${t("mobileThinHelpModalText")}`}
          name="mobileThinHelpModalText"
          height={150}
          value={mobileThinHelpModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-3. ${t("mobileThinConditionsOfInstruction")}`}
          name="mobileThinConditionsOfInstruction"
          value={mobileThinConditionsOfInstruction}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-4. ${t("mobileThinSelectedText")}`}
          name="mobileThinSelectedText"
          value={mobileThinSelectedText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-5. ${t("mobileThinSubmitButtonText")}`}
          name="mobileThinSubmitButtonText"
          value={mobileThinSubmitButtonText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-6. ${t("mobileGuidanceModalLeft1Header")}`}
          name="mobileGuidanceModalLeft1Header"
          value={mobileGuidanceModalLeft1Header}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`9-7. ${t("mobileGuidanceModalLeft1Text")}`}
          name="mobileGuidanceModalLeft1Text"
          height={150}
          value={mobileGuidanceModalLeft1Text}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextAreaInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-8. ${t("mobileGuidanceModalRight1Header")}`}
          name="mobileGuidanceModalRight1Header"
          height={150}
          value={mobileGuidanceModalRight1Header}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 h-[130px] py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-9. ${t("mobileGuidanceModalRight1Text")}`}
          name="mobileGuidanceModalRight1Text"
          height={250}
          value={mobileGuidanceModalRight1Text}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-10. ${t("mobileGuidanceModalLeft2Header")}`}
          name="mobileGuidanceModalLeft2Header"
          value={mobileGuidanceModalLeft2Header}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[90px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`9-11. ${t("mobileGuidanceModalLeft2Text")}`}
          name="mobileGuidanceModalLeft2Text"
          height={150}
          value={mobileGuidanceModalLeft2Text}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-12. ${t("mobileGuidanceModalRight2Header")}`}
          name="mobileGuidanceModalRight2Header"
          value={mobileGuidanceModalRight2Header}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`9-13. ${t("mobileGuidanceModalRight2Text")}`}
          name="mobileGuidanceModalRight2Text"
          height={150}
          value={mobileGuidanceModalRight2Text}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-14. ${t("mobileThinScrollBottomModalHead")}`}
          name="mobileThinScrollBottomModalHead"
          value={mobileThinScrollBottomModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`9-15. ${t("mobileThinScrollBottomModalText")}`}
          name="mobileThinScrollBottomModalText"
          height={150}
          value={mobileThinScrollBottomModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-16. ${t("moveTopMobileHead")}`}
          name="moveTopMobileHead"
          value={moveTopMobileHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-17. ${t("moveAllTopMobileText")}`}
          name="moveAllTopMobileText"
          height={150}
          value={moveAllTopMobileText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-18. ${t("moveAllTopMobileText")}`}
          name="moveAllTopMobileText"
          value={moveAllTopMobileText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-19. ${t("moveTopMobileButtonOK")}`}
          name="moveTopMobileButtonOK"
          value={moveTopMobileButtonOK}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-20. ${t("mobileThinPreventNavModalHead")}`}
          name="mobileThinPreventNavModalHead"
          value={mobileThinPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`9-21. ${t("mobileThinPreventNavModalText")}`}
          name="mobileThinPreventNavModalText"
          height={150}
          value={mobileThinPreventNavModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextAreaInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`9-22. ${t("mobileThinProcessCompleteMessage")}`}
          name="mobileThinProcessCompleteMessage"
          height={150}
          value={mobileThinProcessCompleteMessage}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
      </div>
    </div>
  );
};

export { MobileRefineEvaluationsTextInput };

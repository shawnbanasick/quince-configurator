import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
// import showRefImage from "./showRefImage";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getLangBtnHelp = (state) => state.btnHelp;
const getLangFooterTextSize = (state) => state.footerTextSize;
const getLangFooterCardHeight = (state) => state.footerCardHeight;
const getLangBtnNext = (state) => state.btnNext;
const getLangStepCompleted = (state) => state.stepCompleted;
const getScreenOrientationText = (state) => state.screenOrientationText;
const getMobileTextSize = (state) => state.mobileTextSize;
const getMobileViewSize = (state) => state.mobileViewSize;

const MultipleScreenTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const langBtnHelp = useStore(getLangBtnHelp);
  const langFooterTextSize = useStore(getLangFooterTextSize);
  const langFooterCardHeight = useStore(getLangFooterCardHeight);
  const langBtnNext = useStore(getLangBtnNext);
  const langStepCompleted = useStore(getLangStepCompleted);
  const screenOrientationText = useStore(getScreenOrientationText);
  const mobileTextSize = useStore(getMobileTextSize);
  const mobileViewSize = useStore(getMobileViewSize);
  const { t } = useTranslation();

  const handleShowDefaults = (e) => {
    console.log("handleShowDefaults", e.target.id);
    showSectionDefaults(e.target.id);
  };

  const handleClearAll = (e) => {
    clearSection(e.target.id);
  };

  const handleTextChange = (e) => {
    console.log("handleTextChange", e.target.value);
    setText(e.target.name, e.target.value);
  };

  const handleRefImage = (e) => {
    // showRefImage(e.target.id);
  };

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <div className="outline outline-2 outline-slate-500  p-2 w-[78vw] max-w-[78vw] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>1. {t("multipleScreens")}</h2>

        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="multipleScreens"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="multipleClear"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            {t("clearSection")}
          </button>
          {/* <RefImageButton */}
          {/* <button
            className="bg-slate-300 p-2 rounded-md w-[160px] hover:bg-slate-400 hover:font-semibold"
            id="footerImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            Reference Image
          </button> */}
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`1-1. ${t("help")}`}
          name="btnHelp"
          value={langBtnHelp}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`1-2. ${t("textSize")}`}
          name="footerTextSize"
          value={langFooterTextSize}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`1-3. ${t("cardHeight")}`}
          name="footerCardHeight"
          value={langFooterCardHeight}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`1-4. ${t("continueButtonText")}`}
          name="btnNext"
          value={langBtnNext}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`1-5. ${t("stepCompletedMessage")}`}
          name="stepCompleted"
          height={150}
          value={langStepCompleted}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`1-6. ${t("mobileScreenOrientationText")}`}
          name="screenOrientationText"
          value={screenOrientationText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`1-7. ${t("mobileTextSizeAdjustmentButtonText")}`}
          name="mobileTextSize"
          value={mobileTextSize}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`1-8. ${t("mobileViewAreaSizeButtonText")}`}
          name="mobileViewSize"
          value={mobileViewSize}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
      </div>
    </div>
  );
};

export { MultipleScreenTextInput };

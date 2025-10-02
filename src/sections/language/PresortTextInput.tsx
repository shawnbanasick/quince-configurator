import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import presort1 from "../../assets/images/presort-main-1.png";
import presort2 from "../../assets/images/presort-welcome-modal-1.png";
import presort3 from "../../assets/images/presort-nav-disabled.png";
import presort4 from "../../assets/images/presort-complete-1.png";

const getSetText = (state) => state.setText;
const getTitleBarText = (state) => state.titleBarText;
const getPresortAgreement = (state) => state.presortAgreement;
const getPresortNeutral = (state) => state.presortNeutral;
const getPresortDisagreement = (state) => state.presortDisagreement;
const getPresortOnPageInstructions = (state) => state.presortOnPageInstructions;
// const getPresortImageSortInstructions = (state) => state.presortImageSortInstructions;
const getPresortModalHead = (state) => state.presortModalHead;
const getPresortModalText = (state) => state.presortModalText;
const getPresortPreventNavModalHead = (state) => state.presortPreventNavModalHead;
const getPresortPreventNavModalText = (state) => state.presortPreventNavModalText;
const getPresortFinishedModalHead = (state) => state.presortFinishedModalHead;
const getPresortFinishedModalText = (state) => state.presortFinishedModalText;
const getLangLogInFirst = (state) => state.logInFirst;
const getPresortStatements = (state) => state.presortStatements;
const getPress1 = (state) => state.press1;
const getPress2 = (state) => state.press2;
const getPress3 = (state) => state.press3;

const PresortTextInput = () => {
  const setText = useStore(getSetText);
  const titleBarText = useStore(getTitleBarText);
  const presortAgreement = useStore(getPresortAgreement);
  const presortNeutral = useStore(getPresortNeutral);
  const presortDisagreement = useStore(getPresortDisagreement);
  const presortOnPageInstructions = useStore(getPresortOnPageInstructions);
  // const presortImageSortInstructions = useStore(getPresortImageSortInstructions);
  const presortModalHead = useStore(getPresortModalHead);
  const presortModalText = useStore(getPresortModalText);
  const presortPreventNavModalHead = useStore(getPresortPreventNavModalHead);
  const presortPreventNavModalText = useStore(getPresortPreventNavModalText);
  const presortFinishedModalHead = useStore(getPresortFinishedModalHead);
  const presortFinishedModalText = useStore(getPresortFinishedModalText);
  const logInFirst = useStore(getLangLogInFirst);
  const presortStatements = useStore(getPresortStatements);
  const press1 = useStore(getPress1);
  const press2 = useStore(getPress2);
  const press3 = useStore(getPress3);
  const { t } = useTranslation();

  const handleRefImage = () => {
    window.open(presort1, "Presort Main Image 1", "width=800, height=600");
    return false;
  };

  const handleRefImage2 = () => {
    window.open(presort2, "Presort Welcome Image 1", "width=800, height=600");
    return false;
  };

  const handleRefImage3 = () => {
    window.open(presort3, "Presort Prevent Navigation Image", "width=800, height=600");
    return false;
  };

  const handleRefImage4 = () => {
    window.open(presort4, "Presort Prevent Navigation Image", "width=800, height=600");
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

  return (
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm bg-gray-100">
      <div className="flex flex-row justify-between mb-4">
        <h2>{`6. ${t("presortScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="presortDef"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="presortClear"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            {t("clearSection")}
          </button>
          <div className="flex items-center p-2 justify-center h-[50px] ">{t("images")}</div>
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
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="consentImage"
            // marginRight="35px"
            onClick={handleRefImage3}
          >
            3
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="consentImage"
            // marginRight="35px"
            onClick={handleRefImage4}
          >
            4
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextAreaInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] h-[40px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`min-w-[180px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-1. ${t("logInFirst")}`}
          name="logInFirst"
          height={150}
          value={logInFirst}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-2. ${t("titleBarText")}`}
          name="titleBarText"
          value={titleBarText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-3. ${t("presortAgreement")}`}
          name="presortAgreement"
          value={presortAgreement}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-3b. ${t("press3")}`}
          name="press3"
          value={press3}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-4. ${t("presortNeutral")}`}
          name="presortNeutral"
          value={presortNeutral}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-4b. ${t("press2")}`}
          name="press2"
          value={press2}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-5. ${t("presortDisagreement")}`}
          name="presortDisagreement"
          value={presortDisagreement}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-5b. ${t("press1")}`}
          name="press1"
          value={press1}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-6. ${t("presortStatements")}`}
          name="presortStatements"
          value={presortStatements}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[90px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`6-7. ${t("presortOnPageInstructions")}`}
          name="presortOnPageInstructions"
          height={150}
          value={presortOnPageInstructions}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        {/* <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[100px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="5-8. Presort Instructions (for image sorts)"
          name="presortImageSortInstructions"
          height={150}
          value={presortImageSortInstructions}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        /> */}

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-8. ${t("presortModalHead")}`}
          name="presortModalHead"
          value={presortModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[180px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`6-9. ${t("presortModalText")}`}
          name="presortModalText"
          height={150}
          value={presortModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-10. ${t("presortPreventNavModalHead")}`}
          name="presortPreventNavModalHead"
          value={presortPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`6-11. ${t("presortPreventNavModalText")}`}
          name="presortPreventNavModalText"
          height={150}
          value={presortPreventNavModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`6-12. ${t("presortFinishedModalHead")}`}
          name="presortFinishedModalHead"
          value={presortFinishedModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`6-13. ${t("presortFinishedModalText")}`}
          name="presortFinishedModalText"
          height={150}
          value={presortFinishedModalText}
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

export { PresortTextInput };

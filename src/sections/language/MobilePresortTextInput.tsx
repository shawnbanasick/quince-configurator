import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import mobilePresort1 from "../../assets/images/mobile_presort-welcome.png";
import mobilePresort2 from "../../assets/images/mobile_main.png";
import mobilePresort3 from "../../assets/images/mobile_presort-re-evaluate-modal.png";
import mobilePresort4 from "../../assets/images/mobile_presort-finished.png";
import mobilePresort5 from "../../assets/images/mobile_presort-complete-modal.png";
import mobilePresort6 from "../../assets/images/mobile_presort_prevent_nav.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getMobilePresortConditionsOfInstruction = (state) =>
  state.mobilePresortConditionsOfInstruction;
const getMobilePresortCompletedLabel = (state) => state.mobilePresortCompletedLabel;
const getMobilePresortAssignLeft = (state) => state.mobilePresortAssignLeft;
const getMobilePresortAssignRight = (state) => state.mobilePresortAssignRight;
const getMobilePresortRedoModalHead = (state) => state.mobilePresortRedoModalHead;
const getMobilePresortRedoModalConfirmButton = (state) => state.mobilePresortRedoModalConfirmButton;
const getMobilePresortEvaluationsComplete = (state) => state.mobilePresortEvaluationsComplete;
const getMobilePresortHelpModalHead = (state) => state.mobilePresortHelpModalHead;
const getMobilePresortHelpModalText = (state) => state.mobilePresortHelpModalText;
const getMobilePresortFinishedModalHead = (state) => state.mobilePresortFinishedModalHead;
const getMobilePresortFinishedModalText = (state) => state.mobilePresortFinishedModalText;
const getMobilePresortPreventNavModalHead = (state) => state.mobilePresortPreventNavModalHead;
const getMobilePresortPreventNavModalText = (state) => state.mobilePresortPreventNavModalText;
const getMobilePresortProcessCompleteMessage = (state) => state.mobilePresortProcessCompleteMessage;

const MobilePresortTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const mobilePresortConditionsOfInstruction = useStore(getMobilePresortConditionsOfInstruction);
  const mobilePresortCompletedLabel = useStore(getMobilePresortCompletedLabel);
  const mobilePresortAssignLeft = useStore(getMobilePresortAssignLeft);
  const mobilePresortAssignRight = useStore(getMobilePresortAssignRight);
  const mobilePresortRedoModalHead = useStore(getMobilePresortRedoModalHead);
  const mobilePresortRedoModalConfirmButton = useStore(getMobilePresortRedoModalConfirmButton);
  const mobilePresortEvaluationsComplete = useStore(getMobilePresortEvaluationsComplete);
  const mobilePresortHelpModalHead = useStore(getMobilePresortHelpModalHead);
  const mobilePresortHelpModalText = useStore(getMobilePresortHelpModalText);
  const mobilePresortFinishedModalHead = useStore(getMobilePresortFinishedModalHead);
  const mobilePresortFinishedModalText = useStore(getMobilePresortFinishedModalText);
  const mobilePresortPreventNavModalHead = useStore(getMobilePresortPreventNavModalHead);
  const mobilePresortPreventNavModalText = useStore(getMobilePresortPreventNavModalText);
  const mobilePresortProcessCompleteMessage = useStore(getMobilePresortProcessCompleteMessage);
  const { t } = useTranslation();

  const handleRefImage1 = () => {
    window.open(mobilePresort1, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleRefImage2 = () => {
    window.open(mobilePresort2, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleRefImage3 = () => {
    window.open(mobilePresort3, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage4 = () => {
    window.open(mobilePresort4, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage5 = () => {
    window.open(mobilePresort5, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage6 = () => {
    window.open(mobilePresort6, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[100%] rounded-sm ">
      <div className="flex flex-row justify-between mb-4">
        <h2>{`7. ${t("mobilePresortScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          <button
            id="mobilePresortDef"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            {t("useDefaults")}
          </button>
          <button
            id="mobilePresortClear"
            className="bg-slate-300 p-2 rounded-md w-[200px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            {t("clearSection")}
          </button>
          <div className="flex items-center p-2 justify-center h-[50px] ">{t("images")}</div>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage1"
            name="mobilePresortImage1"
            onClick={handleRefImage1}
          >
            1
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage2"
            onClick={handleRefImage2}
          >
            2
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage3"
            onClick={handleRefImage3}
          >
            3
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage4"
            onClick={handleRefImage4}
          >
            4
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage5"
            onClick={handleRefImage5}
          >
            5
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage6"
            onClick={handleRefImage6}
          >
            6
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-1. ${t("mobilePresortHelpModalHead")}`}
          name="mobilePresortHelpModalHead"
          value={mobilePresortHelpModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`7-2. ${t("mobilePresortHelpModalText")}`}
          name="mobilePresortHelpModalText"
          height={150}
          value={mobilePresortHelpModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-3. ${t("mobilePresortConditionsOfInstruction")}`}
          name="mobilePresortConditionsOfInstruction"
          value={mobilePresortConditionsOfInstruction}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-4. ${t("mobilePresortCompletedLabel")}`}
          name="mobilePresortCompletedLabel"
          value={mobilePresortCompletedLabel}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-5. ${t("mobilePresortAssignLeft")}`}
          name="mobilePresortAssignLeft"
          value={mobilePresortAssignLeft}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-6. ${t("mobilePresortAssignRight")}`}
          name="mobilePresortAssignRight"
          value={mobilePresortAssignRight}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-7. ${t("mobilePresortRedoModalHead")}`}
          name="mobilePresortRedoModalHead"
          value={mobilePresortRedoModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-8. ${t("mobilePresortRedoModalConfirmButton")}`}
          name="mobilePresortRedoModalConfirmButton"
          value={mobilePresortRedoModalConfirmButton}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`7-9. ${t("mobilePresortEvaluationsComplete")}`}
          name="mobilePresortEvaluationsComplete"
          height={150}
          value={mobilePresortEvaluationsComplete}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-10. ${t("mobilePresortFinishedModalHead")}`}
          name="mobilePresortFinishedModalHead"
          value={mobilePresortFinishedModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[120px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`7-11. ${t("mobilePresortFinishedModalText")}`}
          name="mobilePresortFinishedModalText"
          height={150}
          value={mobilePresortFinishedModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-12. ${t("mobilePresortPreventNavModalHead")}`}
          name="mobilePresortPreventNavModalHead"
          value={mobilePresortPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center has-[:focus]:font-bold`}
          label={`7-13. ${t("mobilePresortPreventNavModalText")}`}
          name="mobilePresortPreventNavModalText"
          height={150}
          value={mobilePresortPreventNavModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center has-[:focus]:font-bold`}
          label={`7-14. ${t("mobilePresortProcessCompleteMessage")}`}
          name="mobilePresortProcessCompleteMessage"
          height={150}
          value={mobilePresortProcessCompleteMessage}
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

export { MobilePresortTextInput };

import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import thin1 from "../../assets/images/thin-help-modal-1.png";
import thin2 from "../../assets/images/thin-main-2.png";
import thin3 from "../../assets/images/thin-agreement-3.png";
import thin4 from "../../assets/images/thin-disagreement-4.png";
import thin5 from "../../assets/images/thin-disagreement-5.png";
import thin6 from "../../assets/images/thin-finished-6.png";
import thin7 from "../../assets/images/thin-nav-disabled-7.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getThinningPreventNavModalHead = (state) => state.thinningPreventNavModalHead;
const getThinningPreventNavModalText = (state) => state.thinningPreventNavModalText;
// const getThinningConfirmModalHead = (state) => state.thinningConfirmModalHead;
// const getThinningConfirmModalText = (state) => state.thinningConfirmModalText;
// const getAgreeMostText = (state) => state.agreeMostText;
// const getAgreeLeastText = (state) => state.agreeLeastText;
const getInitialInstructionPart1 = (state) => state.initialInstructionPart1;
const getInitialInstructionPart2 = (state) => state.initialInstructionPart2;
const getInitialInstructionPart3 = (state) => state.initialInstructionPart3;
const getFinalInstructions = (state) => state.finalInstructions;
const getThinningPageTitle = (state) => state.thinningPageTitle;
const getRefinePageSubmitButton = (state) => state.thinningPageSubmitButtonText;
const getThinningPageNumStatesToSelect = (state) => state.thinningPageNumStatesToSelect;
const getThinningPageCurrentNumStatesSelected = (state) =>
  state.thinningPageCurrentNumStatesSelected;
const getInitialInstructionNegPart1 = (state) => state.initialInstructionNegPart1;
const getInitialInstructionNegPart2 = (state) => state.initialInstructionNegPart2;
const getThinningHelpModalHead = (state) => state.thinningHelpModalHead;
const getThinningHelpModalText = (state) => state.thinningHelpModalText;

const RefineEvaluationsTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const thinningPreventNavModalHead = useStore(getThinningPreventNavModalHead);
  const thinningPreventNavModalText = useStore(getThinningPreventNavModalText);
  // const thinningConfirmModalHead = useStore(getThinningConfirmModalHead);
  // const thinningConfirmModalText = useStore(getThinningConfirmModalText);
  // const agreeMostText = useStore(getAgreeMostText);
  // const agreeLeastText = useStore(getAgreeLeastText);
  const initialInstructionPart1 = useStore(getInitialInstructionPart1);
  const initialInstructionPart2 = useStore(getInitialInstructionPart2);
  const initialInstructionPart3 = useStore(getInitialInstructionPart3);
  const finalInstructions = useStore(getFinalInstructions);
  const thinningPageTitle = useStore(getThinningPageTitle);
  const thinPageSubmitButtonText = useStore(getRefinePageSubmitButton);
  const thinningPageNumStatesToSelect = useStore(getThinningPageNumStatesToSelect);
  const thinningPageCurrentNumStatesSelected = useStore(getThinningPageCurrentNumStatesSelected);
  const initialInstructionNegPart1 = useStore(getInitialInstructionNegPart1);
  const initialInstructionNegPart2 = useStore(getInitialInstructionNegPart2);
  const thinningHelpModalHead = useStore(getThinningHelpModalHead);
  const thinningHelpModalText = useStore(getThinningHelpModalText);
  const { t } = useTranslation();

  const handleRefImage1 = () => {
    window.open(thin1, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleRefImage2 = () => {
    window.open(thin2, "Mobile Presort Main Image", "width=800, height=600");
    return false;
  };

  const handleRefImage3 = () => {
    window.open(thin3, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage4 = () => {
    window.open(thin4, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage5 = () => {
    window.open(thin5, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage6 = () => {
    window.open(thin6, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
    return false;
  };

  const handleRefImage7 = () => {
    window.open(thin7, "Mobile Presort Re-Evaluate Modal", "width=800, height=600");
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
        <h2>{`8. ${t("refineEvaluationsScreen")}`} </h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="refineDef"
            className="bg-slate-300 p-2 rounded-md w-[130px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="refineClear"
            className="bg-slate-300 p-2 rounded-md w-[130px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          <div className="flex items-center p-2 justify-center h-[50px] ">
            <p>Images:</p>
          </div>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage1"
            name="mobilePresortImage1"
            // marginRight="35px"
            onClick={handleRefImage1}
          >
            1
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage2"
            // marginRight="35px"
            onClick={handleRefImage2}
          >
            2
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage3"
            // marginRight="35px"
            onClick={handleRefImage3}
          >
            3
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage4"
            // marginRight="35px"
            onClick={handleRefImage4}
          >
            4
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage5"
            // marginRight="35px"
            onClick={handleRefImage5}
          >
            5
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage6"
            // marginRight="35px"
            onClick={handleRefImage6}
          >
            6
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] h-[50px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage6"
            // marginRight="35px"
            onClick={handleRefImage7}
          >
            7
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`8-11. ${t("thinningHelpModalHead")}`}
          name="thinningHelpModalHead"
          value={thinningHelpModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`8-2. ${t("thinningHelpModalText")}`}
          name="thinningHelpModalText"
          height={150}
          value={thinningHelpModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`8-3. ${t("thinningPageTitle")}`}
          name="thinningPageTitle"
          value={thinningPageTitle}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`8-4. ${t("thinningPageSubmitButtonText")}`}
          name="thinningPageSubmitButtonText"
          value={thinPageSubmitButtonText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`8-5. ${t("thinningPageNumStatesToSelect")}`}
          name="thinPageNumStatesToSelect"
          value={thinningPageNumStatesToSelect}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`8-6. ${t("thinningPageCurrentNumStatesSelected")}`}
          name="thinPageCurrentNumStatesSelected"
          value={thinningPageCurrentNumStatesSelected}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`8-7. ${t("initialInstructionPart1")}`}
          name="initialInstructionPart1"
          height={150}
          value={initialInstructionPart1}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        {/* <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[100px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="8-12. Select Statements of Agreement Message 2"
          name="agreeMostText"
          // height={150}
          value={agreeMostText}
          height={150}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
          /> */}

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`8-8. ${t("initialInstructionPart2")}`}
          name="initialInstructionPart2"
          height={150}
          value={initialInstructionPart2}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`8-9. ${t("initialInstructionPart3")}`}
          name="initialInstructionPart3"
          height={150}
          value={initialInstructionPart3}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`8-10. ${t("initialInstructionNegPart1")}`}
          name="initialInstructionNegPart1"
          height={150}
          value={initialInstructionNegPart1}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`8-11. ${t("initialInstructionNegPart2")}`}
          name="initialInstructionNegPart2"
          height={150}
          value={initialInstructionNegPart2}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`8-12. ${t("finalInstructions")}`}
          name="finalInstructions"
          height={150}
          value={finalInstructions}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`8-13. ${t("thinningPreventNavModalHead")}`}
          name="thinningPreventNavModalHead"
          value={thinningPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] min-h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`8-14. ${t("thinningPreventNavModalText")}`}
          name="thinningPreventNavModalText"
          height={150}
          value={thinningPreventNavModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        {/* <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`8-15. ${t("thinningConfirmModalHead")}`}
          name="thinningConfirmModalHead"
          value={thinningConfirmModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label={`8-16. ${t("thinningConfirmModalText")}`}
          name="thinningConfirmModalText"
          height={150}
          value={thinningConfirmModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        /> */}
      </div>
    </div>
  );
};

export { RefineEvaluationsTextInput };

import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
// import showRefImage from "./showRefImage";
import { useStore } from "../../globalState/useStore";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getThinningPreventNavModalHead = (state) => state.thinningPreventNavModalHead;
const getThinningPreventNavModalText = (state) => state.thinningPreventNavModalText;
const getThinningConfirmModalHead = (state) => state.thinningConfirmModalHead;
const getThinningConfirmModalText = (state) => state.thinningConfirmModalText;
const getAgreeMostText = (state) => state.agreeMostText;
const getAgreeLeastText = (state) => state.agreeLeastText;
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

const RefineEvaluationsTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const thinningPreventNavModalHead = useStore(getThinningPreventNavModalHead);
  const thinningPreventNavModalText = useStore(getThinningPreventNavModalText);
  const thinningConfirmModalHead = useStore(getThinningConfirmModalHead);
  const thinningConfirmModalText = useStore(getThinningConfirmModalText);
  const agreeMostText = useStore(getAgreeMostText);
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

  const handleRefImage = (e) => {
    // showRefImage(e.target.id);
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[78vw] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>7. Refine Evaluations Screen</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="refineDef"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="refineClear"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          {/* <RefImageButton */}
          <button
            className="bg-slate-300 p-2 rounded-md w-[160px] hover:bg-slate-400 hover:font-semibold"
            id="refineImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            Reference Image
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="7-1. Title Bar Text"
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
          label="7-2. Submit Button Text"
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
          label="7-3. Number Statements to Select Text"
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
          label="7-4. Number Statements Currently Selected Text"
          name="thinPageCurrentNumStatesSelected"
          value={thinningPageCurrentNumStatesSelected}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="7-5. Refine Evaluations Prevent Navigation Modal Title"
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
          label="7-6. Refine Evaluations Prevent Navigation Modal Text"
          name="thinningPreventNavModalText"
          height={150}
          value={thinningPreventNavModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-7. Incomplete Selection Modal Title`}
          name="thinningConfirmModalHead"
          value={thinningConfirmModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[40px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="7-8. Incomplete Selection Modal Text"
          name="thinningConfirmModalText"
          height={150}
          value={thinningConfirmModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="7-9. Select Statements of Agreement Message 1"
          name="initialInstructionPart1"
          height={150}
          value={initialInstructionPart1}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[100px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="7-10. Select Statements of Agreement Message 2"
          name="agreeMostText"
          // height={150}
          value={agreeMostText}
          height={150}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="7-11. Select Statements of Agreement Message 3"
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
          label="7-12. Another Set of Statements is Displayed"
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
          label="7-13. Select Statements of Disagreement Message 1"
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
          label="7-14. Select Statements of Disagreement Message 2"
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
          label="7-15. Final Instructions"
          name="finalInstructions"
          height={150}
          value={finalInstructions}
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

export { RefineEvaluationsTextInput };

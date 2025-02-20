import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
// import showRefImage from "./showRefImage";
import { useStore } from "../../globalState/useStore";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getTitleBarText = (state) => state.titleBarText;
const getPresortAgreement = (state) => state.presortAgreement;
const getPresortNeutral = (state) => state.presortNeutral;
const getPresortDisagreement = (state) => state.presortDisagreement;
const getPresortOnPageInstructions = (state) => state.presortOnPageInstructions;
const getPresortImageSortInstructions = (state) => state.presortImageSortInstructions;
const getPresortModalHead = (state) => state.presortModalHead;
const getPresortModalText = (state) => state.presortModalText;
const getPresortPreventNavModalHead = (state) => state.presortPreventNavModalHead;
const getPresortPreventNavModalText = (state) => state.presortPreventNavModalText;
const getPresortFinishedModalHead = (state) => state.presortFinishedModalHead;
const getPresortFinishedModalText = (state) => state.presortFinishedModalText;
const getLangLoginFirst = (state) => state.loginFirst;

const PresortTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const langTitleBarText = useStore(getTitleBarText);
  const langPresortAgreement = useStore(getPresortAgreement);
  const langPresortNeutral = useStore(getPresortNeutral);
  const langPresortDisagreement = useStore(getPresortDisagreement);
  const langPresortOnPageInstructions = useStore(getPresortOnPageInstructions);
  const langPresortImageSortInstructions = useStore(getPresortImageSortInstructions);
  const langPresortModalHead = useStore(getPresortModalHead);
  const langPresortModalText = useStore(getPresortModalText);
  const langPresortPreventNavModalHead = useStore(getPresortPreventNavModalHead);
  const langPresortPreventNavModalText = useStore(getPresortPreventNavModalText);
  const langPresortFinishedModalHead = useStore(getPresortFinishedModalHead);
  const langPresortFinishedModalText = useStore(getPresortFinishedModalText);
  const langLoginFirst = useStore(getLangLoginFirst);

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
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[1200px] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>5. Presort Screen</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="footerDef"
            className="bg-slate-300 p-2 rounded-md"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button id="footerClear" className="bg-slate-300 p-2 rounded-md" onClick={handleClearAll}>
            Clear Section
          </button>
          {/* <RefImageButton */}
          <button
            className="bg-slate-300 p-2 rounded-md"
            id="footerImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            Reference Image
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextAreaInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`min-w-[180px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="5-1. Log In First Message"
          name="langLoginFirst"
          height={150}
          value={langLoginFirst}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="5-2. Title Bar Text"
          name="langTitleBarText"
          value={langTitleBarText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`5-3. "Agree"`}
          name="langPresortAgreement"
          value={langPresortAgreement}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`5-4. "Neutral"`}
          name="langPresortNeutral"
          value={langPresortNeutral}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`5-5. "Disagree"`}
          name="langPresortDisagreement"
          value={langPresortDisagreement}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="5-6. Presort Instructions (for statement sorts)"
          name="langPresortOnPageInstructions"
          height={150}
          value={langPresortOnPageInstructions}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="5-7. Presort Instructions (for image sorts)"
          name="langPresortImageSortInstructions"
          height={150}
          value={langPresortImageSortInstructions}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="5-8. Presort Greeting Modal Title"
          name="langPresortModalHead"
          value={langPresortModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="5-9. Presort Greeting Modal Text"
          name="langPresortModalText"
          height={150}
          value={langPresortModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="5-10. Prevent Navigation Modal Title"
          name="langPresortPreventNavModalHead"
          value={langPresortPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="5-11. Prevent Navigation Modal Text"
          name="langPresortPreventNavModalText"
          height={150}
          value={langPresortPreventNavModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="5-12. Presort Complete Modal Title"
          name="langPresortFinishedModalHead"
          value={langPresortFinishedModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="5-13. Presort Complete Modal Text"
          name="langPresortFinishedModalText"
          height={150}
          value={langPresortFinishedModalText}
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

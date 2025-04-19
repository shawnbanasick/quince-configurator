import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
// import showRefImage from "./showRefImage";
import { useStore } from "../../globalState/useStore";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getLangConsentTitleBarText = (state) => state.consentTitleBarText;
const getLangConsentText = (state) => state.consentText;
const getLangConsentHelpModalHead = (state) => state.consentHelpModalHead;
const getLangConsentHelpModalText = (state) => state.consentHelpModalText;
const getLangBtnNextConsent = (state) => state.btnNextConsent;
const getLangBtnHelpConsent = (state) => state.btnHelpConsent;

const ConsentPageTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const langConsentTitleBarText = useStore(getLangConsentTitleBarText);
  const langConsentText = useStore(getLangConsentText);
  const langConsentHelpModalHead = useStore(getLangConsentHelpModalHead);
  const langConsentHelpModalText = useStore(getLangConsentHelpModalText);
  const langBtnNextConsent = useStore(getLangBtnNextConsent);
  const langBtnHelpConsent = useStore(getLangBtnHelpConsent);

  const handleRefImage = (e) => {
    // showRefImage(e.target.id);
  };
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

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    // <SectionContainer>
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[78vw] rounded-sm bg-gray-100">
      {/* <HeaderButtonBar> */}
      <div className="flex flex-row justify-between mb-4">
        <h2>2. Consent Screen (optional)</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="consentDef"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="consentClear"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          {/* <RefImageButton */}
          <button
            className="bg-slate-300 p-2 rounded-md w-[160px] hover:bg-slate-400 hover:font-semibold"
            id="consentImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            Reference Image
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="2-1. Consent Page Title Bar"
          name="consentTitleBarText"
          value={langConsentTitleBarText}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="2-2. Consent Message"
          name="consentText"
          height={150}
          value={langConsentText}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="2-3. Help Modal Title"
          name="consentHelpModalHead"
          value={langConsentHelpModalHead}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="2-4. Help Modal Text"
          name="consentHelpModalText"
          height={150}
          value={langConsentHelpModalText}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="2-5. Help Button Text"
          name="btnHelpConsent"
          value={langBtnHelpConsent}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="2-6. Accept Button Text"
          name="btnNextConsent"
          value={langBtnNextConsent}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
      </div>
    </div>
  );
};

export { ConsentPageTextInput };

// const SectionContainer = styled.div`
//   * {
//     // outline: 1px solid red;
//   }
// `;

// const HeaderButtonBar = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: baseline;
//   justify-content: space-between;
//   width: 100%;
// `;

// const DefaultsButton = styled.button`
//   box-sizing: border-box;
//   align-self: flex-end;
//   margin-bottom: 10px;
//   color: var(--font-color);
//   transition: 0.3s ease all;
//   user-select: none;

//   &:hover {
//     opacity: 1;
//     box-shadow: inset 0 0 0 1px #666, 0 0 1px transparent;
//   }

//   &:active {
//     transform: translateY(1px);
//     filter: brightness(80%);
//   }
// `;

// const ClearAllButton = styled.button`
//   box-sizing: border-box;
//   align-self: flex-end;
//   margin-bottom: 10px;
//   margin-left: 10px;
//   color: var(--font-color);
//   transition: 0.3s ease all;
//   user-select: none;

//   &:hover {
//     opacity: 1;
//     box-shadow: inset 0 0 0 1px #666, 0 0 1px transparent;
//   }

//   &:active {
//     transform: translateY(1px);
//     filter: brightness(80%);
//   }
// `;

// const RefImageButton = styled.button`
//   box-sizing: border-box;
//   align-self: flex-end;
//   margin-bottom: 10px;
//   margin-left: 10px;
//   margin-right: ${(props) => props.marginRight};
//   justify-self: flex-end;
//   color: var(--font-color);
//   user-select: none;

//   &:hover {
//     opacity: 1;
//     box-shadow: inset 0 0 0 1px #666, 0 0 1px transparent;
//   }

//   &:active {
//     transform: translateY(1px);
//     filter: brightness(80%);
//   }
// `;

// const SectionTitle = styled.h3`
//   margin-top: 20px;
// `;

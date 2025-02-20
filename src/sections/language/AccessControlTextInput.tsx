import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
// import showRefImage from "./showRefImage";
import { useStore } from "../../GlobalState/useStore";

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

  const handleRefImage = (e) => {
    // showRefImage(e.target.id);
  };

  const handleShowDefaults = (e) => {
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
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[1200px] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>3. Access Control Screen</h2>
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
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="3-1. Login Welcome Text"
          name="langLoginWelcomeText"
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
          label="3-2. Login Box Title"
          name="langLoginHeaderText"
          value={langLoginHeaderText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="3-3. Participant Name Input Label"
          name="langLoginPartIdText"
          value={langLoginPartIdText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="3-4. Access Code Title"
          name="langLoginPartIdText"
          value={accessCodeText}
          onChange={accessCodeText}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="3-5. Access Code Label"
          name="langAccessInputText"
          value={langAccessInputText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="3-6. Invalid Name Warning"
          name="langPartIdWarning"
          value={langPartIdWarning}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="3-7. Invalid Access Code Warning"
          name="langAccessCodeWarning"
          value={langAccessCodeWarning}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 block min-w-[200px] ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="3-8. Login Submit Button"
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

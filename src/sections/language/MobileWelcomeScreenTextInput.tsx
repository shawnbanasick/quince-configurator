import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import { useStore } from "../../GlobalState/useStore";
import welcome1 from "../../assets/images/welcome-1.png";
import welcome2 from "../../assets/images/welcome-2.png";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getMobileWelcomeText = (state) => state.mobileWelcomeText;

const MobileWelcomeScreenTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const mobileWelcomeText = useStore(getMobileWelcomeText);

  const handleRefImage = () => {
    window.open(welcome1, "Welcome Image 1", "width=800, height=600");
    return false;
  };

  const handleRefImage2 = () => {
    window.open(welcome2, "Welcome Image 1", "width=800, height=300");
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

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[78vw] rounded-sm">
      <div className="flex flex-row justify-between mb-4">
        <h2>5. Mobile Welcome Screen</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="welcomeDef"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="welcomeClear"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          {/* <RefImageButton */}
          <div className="flex items-center p-2 justify-center h-auto ">
            <p>Images:</p>
          </div>
          {/* <button
            className="bg-slate-300 p-2 rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="consentImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            1
          </button>
          <button
            className="bg-slate-300 p-2 rounded-md w-[30px] hover:bg-slate-400 hover:font-semibold"
            id="consentImage"
            // marginRight="35px"
            onClick={handleRefImage2}
          >
            2
          </button> */}
        </div>
      </div>
      <div className="pl-10">
        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="5-1. Mobile Welcome Message"
          name="mobileWelcomeText"
          value={mobileWelcomeText}
          height={150}
          onChange={handleTextChange}
          highlight={true}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
      </div>
    </div>
  );
};

export { MobileWelcomeScreenTextInput };

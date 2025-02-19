// import Image from "../../assets/images/qq-brand-image.png";
// import Button from "../utils/Button.jsx";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { LanguageIntroText } from "./LanguageIntroText";
import { MultipleScreenTextInput } from "./MultipleScreenTextInput";
import { ConsentPageTextInput } from "./ConsentPageTextInput.js";
import { AccessControlTextInput } from "./AccessControlTextInput.js";
import { WelcomeScreenTextInput } from "./WelcomeScreenTextInput.js";
import { PresortTextInput } from "./PresortTextInput.js";
import { MobilePresortTextInput } from "./MobilePresortTextInput.js";
import { RefineEvaluationsTextInput } from "./RefineEvaluationsTextInput.js";
import { MobileRefineEvaluationsTextInput } from "./MobileRefineEvaluationsTextInput.js";
import { SortTextInput } from "./SortTextInput.js";
import { MobileSortTextInput } from "./MoibleSortTextInput.js";
import { PostsortTextInput } from "./PostsortTextInput.js";
import { MobilePostsortTextInput } from "./MobilePostsortTextInput.js";
import { SurveyTextInput } from "./SurveyTextInput.js";
import { MobileSurveyTextInput } from "./MobileSurveyTextInput.js";
import { SubmitTextInput } from "./SubmitTextInput.js";

const getShowDescriptionPro = (state) => state.showDescriptionPro;
const getShowDescriptionBeginner = (state) => state.showDescriptionBeginner;
const getSetShowDescriptionPro = (state) => state.setShowDescriptionPro;
const getSetShowDescriptionBeginner = (state) =>
  state.setShowDescriptionBeginner;
const getDisplayMode = (state) => state.displayMode;

const Language = () => {
  const { t } = useTranslation();
  // const showDescriptionPro = useStore(getShowDescriptionPro);
  // const showDescriptionBeginner = useStore(getShowDescriptionBeginner);
  // const setShowDescriptionPro = useStore(getSetShowDescriptionPro);
  // const setShowDescriptionBeginner = useStore(getSetShowDescriptionBeginner);
  const displayMode = useStore(getDisplayMode);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  const handleClick = () => {
    console.log("Language button clicked");
  };

  return (
    <div className="flex flex-col items-center justify-center pb-[100px]">
      <h1 className="text-center">Language.xml</h1>
      <h2>User Interface Language Settings</h2>

      <div className="flex flex-row w-10/12 justify-between gap-[] mt-4 mb-6">
        {/* <DownloadMapButton onClick={() => handleClick()}> */}
        {/* <UploadAndReadXmlMap /> */}
        <button
          className="bg-[orange] text-[black] w-[350px] p-[10px] rounded-[5px] mt-[20px]"
          onClick={() => handleClick()}
        >
          Click here to save file to <b>SETTINGS</b> folder and replace the
          "map.xml" file
        </button>
      </div>
      {displayMode && <LanguageIntroText />}
      <MultipleScreenTextInput />
      <ConsentPageTextInput />
      <AccessControlTextInput />
      <WelcomeScreenTextInput />
      <PresortTextInput />
      <MobilePresortTextInput />
      <RefineEvaluationsTextInput />
      <MobileRefineEvaluationsTextInput />
      <SortTextInput />
      <MobileSortTextInput />
      <PostsortTextInput />
      <MobilePostsortTextInput />
      <SurveyTextInput />
      <MobileSurveyTextInput />
      <SubmitTextInput />
    </div>
  );
};

export { Language };

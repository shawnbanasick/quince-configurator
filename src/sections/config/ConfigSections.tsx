import React from "react";
import { useStore } from "../../globalState/useStore";
import { Config1StudyTitle } from "./Config1StudyTitle";
import { Config2SetupTarget } from "./Config2SetupTarget";
import { Config4LinkProject } from "./Config4LinkProject";
import { Config5SortImages } from "./Config5SortImages";
import { Config6ConsentPageOptions } from "./Config6ConsentPageOptions";
import { Config7LandingPageOptions } from "./Config7LandingPageOptions";
import { Config8ColorSelection } from "./Config8ColorSelection";
import { Config9PresortOptions } from "./Config9PresortOptions";
import { Config10SortOptions } from "./Config10SortOptions";
import { Config11PostsortOptions } from "./Config11PostsortOptions";
import { Config12SurveyOptions } from "./Config12SurveyOptions";
import { SurveyQuestionInput } from "./SurveyQuestionInput";
import { Config3DesktopOnly } from "./Config3DesktopOnly";

// const getDisplayMode = (state) => state.displayMode;
const getShowSurvey = (state) => state.showSurvey;

const ConfigSections: React.FC = () => {
  // const { t } = useTranslation();
  // const displayMode = useStore(getDisplayMode);
  const showSurvey = useStore(getShowSurvey);

  // let display;
  // if (displayMode === "beginner") {
  //   display = true;
  // } else {
  //   display = false;
  // }

  return (
    <>
      <div className="flex flex-col align-center w-10/12 pl-10 pr-20 pt-2 pb-8 min-h-fit mb-40">
        <Config1StudyTitle />
        <Config2SetupTarget />
        <Config3DesktopOnly />
        <Config4LinkProject />
        <Config5SortImages />
        <Config6ConsentPageOptions />
        <Config7LandingPageOptions />
        <Config8ColorSelection />
        <Config9PresortOptions />
        <Config10SortOptions />
        <Config11PostsortOptions />
        <Config12SurveyOptions />
        <div
          className={`transition-all duration-300 ease-in-out transform ${
            showSurvey ? "opacity-100 scale-100" : "opacity-0 scale-100"
          }`}
        >
          <SurveyQuestionInput />
        </div>
      </div>
    </>
  );
};

export { ConfigSections };

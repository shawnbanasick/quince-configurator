import React from "react";
import { useStore } from "../../globalState/useStore";
import { Config1StudyTitle } from "./Config1StudyTitle";
import { Config2SetupTarget } from "./Config2SetupTarget";
import { Config3LinkProject } from "./Config3LinkProject";
import { Config4SortImages } from "./Config4SortImages";
import { Config5ConsentPageOptions } from "./Config5ConsentPageOptions";
import { Config6LandingPageOptions } from "./Config6LandingPageOptions";
import { Config7ColorSelection } from "./Config7ColorSelection";
import { Config8PresortOptions } from "./Config8PresortOptions";
import { Config9SortOptions } from "./Config9SortOptions";
import { Config10PostsortOptions } from "./Config10PostsortOptions";
import { Config11SurveyOptions } from "./Config11SurveyOptions";
import { SurveyQuestionInput } from "./SurveyQuestionInput";

const getDisplayMode = (state) => state.displayMode;
const getShowSurvey = (state) => state.showSurvey;

const ConfigSections: React.FC = () => {
  // const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  const showSurvey = useStore(getShowSurvey);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  return (
    <>
      <div className="flex flex-col align-center w-10/12 pl-10 pr-20 pt-2 pb-8 min-h-fit mb-40">
        <Config1StudyTitle />
        <Config2SetupTarget />
        <Config3LinkProject />
        <Config4SortImages />
        <Config5ConsentPageOptions />
        <Config6LandingPageOptions />
        <Config7ColorSelection />
        <Config8PresortOptions />
        <Config9SortOptions />
        <Config10PostsortOptions />
        <Config11SurveyOptions />
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

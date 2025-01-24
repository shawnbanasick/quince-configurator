import React from "react";
import { useStore } from "../../globalState/useStore";
import { Config1StudyTitle } from "./Config1StudyTitle";
import { Config2SetupTarget } from "./Config2SetupTarget";
import { Config3LinkProject } from "./Config3LinkProject";
import { Config4SortImages } from "./Config4SortImages";
import { Config5ConsentPageOptions } from "./Config5ConsentPageOptions";
import { Config6LandingPageOptions } from "./Config6LandingPageOptions";
import { Config7ColorSelection } from "./Config7ColorSelection";
// import { useTranslation } from "react-i18next";

const getDisplayMode = (state) => state.displayMode;

const ConfigSections: React.FC = () => {
  // const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  return (
    <>
      <div className="flex flex-col align-center w-2/3 pl-10 pr-20 pt-2 pb-8 min-h-[300px] outline outline-2 outline-red-300 mb-40">
        <Config1StudyTitle />
        <Config2SetupTarget />
        <Config3LinkProject />
        <Config4SortImages />
        <Config5ConsentPageOptions />
        <Config6LandingPageOptions />
        <Config7ColorSelection />
      </div>
    </>
  );
};

export { ConfigSections };

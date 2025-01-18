// @ts-ignore
import React, { useState } from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import UploadAndReadXML from "./UploadAndReadXml.js";
import { UserTextInput } from "../utils/UserTextInput.js";
import { Radio } from "../utils/RadioButtons.js";
import { ConfigSection1 } from "./ConfigSection1";

const getStudyTitle = (state) => state.studyTitle;
const getSetStudyTitle = (state) => state.setStudyTitle;
const getDisplayMode = (state) => state.displayMode;
const getSetupTarget = (state) => state.setupTarget;
const getSetSetupTarget = (state) => state.setSetupTarget;

const Config: React.FC = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  const studyTitle = useStore(getStudyTitle);
  const setStudyTitle = useStore(getSetStudyTitle);
  const setupTarget = useStore(getSetupTarget);
  const setSetupTarget = useStore(getSetSetupTarget);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  const handleStudyTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setStudyTitle(event.target.value);
  };

  /*
  highlight,   label,   placeholder,   width,   left,   name,  value, onChange
  */
  // const [selectedInput, setSelectedInput] = useState("");

  const handleSetupTargetChange = (inputValue: any) => {
    setSetupTarget(inputValue);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center">Config.xml</h1>

      <UploadAndReadXML />

      {display && (
        <div className="flex, flex-col, justify-center pl-20 pr-20 pt-2 pb-8">
          <div className="justify-self-center">
            {t("configPara1")}
            <br />
            <br />
            {t("configPara2")}
            <br />
            <br />
            {t("configPara3")}
          </div>
        </div>
      )}

      <ConfigSection1 />
    </div>
  );
};

export { Config };

// @ts-ignore
import React, { useState } from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import UploadAndReadXML from "./UploadAndReadXml.js";
import { UserTextInput } from "../utils/UserTextInput.js";
import { Radio } from "../utils/RadioButtons.js";

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
    <>
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
      <div className="flex flex-col justify-self-center w-2/3 pl-20 pr-20 pt-2 pb-8 h-[300px] outline outline-2 outline-red-300 ">
        <UserTextInput
          classNameText={`mt-1 block w-[800px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          classNameLabel={`min-w-[100px] content-center pt-1 mr-1`}
          highlight={true}
          label={`1. ${t("studyTitle")}:`}
          placeholder={t("enterStudyTitle")}
          name="studyNameInput"
          value={studyTitle}
          onChange={handleStudyTitleChange}
        />
        <div>
          <div className="flex flex-row h-[75px] content-center gap-5 mt-8">
            <span className="content-center">2. Setup Target:</span>
            <Radio
              name="option"
              value="baserow"
              label="Baserow + Email backup"
              align="left"
              isChecked={setupTarget === "baserow"}
              handleChange={handleSetupTargetChange}
            />
            <Radio
              name="option"
              value="email"
              label="Email only"
              align="center"
              isChecked={setupTarget === "email"}
              handleChange={handleSetupTargetChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Config };

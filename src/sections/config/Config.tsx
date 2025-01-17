import Image from "../../assets/images/qq-brand-image.png";
// @ts-ignore
import Button from "../utils/Button.jsx";
// @ts-ignore
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import UploadAndReadXML from "./UploadAndReadXml.js";
import UserTextInput from "../utils/UserTextInput.js";

const getStudyTitle = (state) => state.studyTitle;

const getDisplayMode = (state) => state.displayMode;

const Config = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  const studyTitle = useStore(getStudyTitle);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  /*
  highlight,   label,   placeholder,   width,   left,   name,  value, onChange
  */

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
      <UserTextInput
        highlight="true"
        label="1. Study Title:"
        placeholder="Enter Study Title"
        width="50"
        left="0"
        name="configPara4"
        value={studyTitle}
        onChange=""
    </>
  );
};

export { Config };

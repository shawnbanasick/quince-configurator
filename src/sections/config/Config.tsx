// @ts-ignore
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import UploadAndReadXML from "./UploadAndReadXml.js";
import { UserTextInput } from "../utils/UserTextInput.js";

const getStudyTitle = (state) => state.studyTitle;
const getSetStudyTitle = (state) => state.setStudyTitle;
const getDisplayMode = (state) => state.displayMode;

const Config: React.FC = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  const studyTitle = useStore(getStudyTitle);
  const setStudyTitle = useStore(getSetStudyTitle);

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
      <div className="flex, flex-col, justify-self-center w-2/3 pl-20 pr-20 pt-2 pb-8 outline outline-red-300">
        <UserTextInput
          classNameText={`mt-1 block w-[800px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          highlight={true}
          label={`1. ${t("studyTitle")}:`}
          placeholder={t("enterStudyTitle")}
          name="studyNameInput"
          value={studyTitle}
          onChange={handleStudyTitleChange}
        />
      </div>
    </>
  );
};

export { Config };

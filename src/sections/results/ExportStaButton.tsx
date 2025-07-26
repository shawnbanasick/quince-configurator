import React from "react";
import * as FileSaver from "file-saver";
import { useTranslation } from "react-i18next";
import { useStore } from "../../GlobalState/useStore";
// import StaIcon from "../images/STA_Icon.svg";

// Define types for state values if not already defined
// type CoreState = {
//   projectName: string;
//   statements: string[];
// };

const getCurrentStatements = (state) => state.currentStatements;
const getProjectName = (state) => state.studyTitle;

const ExportStaButton: React.FC = () => {
  const { t } = useTranslation();
  const currentStatements = useStore(getCurrentStatements);
  const projectName = useStore(getProjectName);

  const handleOnClick = () => {
    if (!currentStatements) {
      alert("Please load your statements.xml file first");
      return;
    }
    if (!projectName) {
      alert("Please load your config.xml file first");
    }

    const blob = new Blob([currentStatements], {
      type: "text/plain;charset=ascii",
    });
    FileSaver.saveAs(blob, `${projectName.substring(0, 8)}.STA`);
  };

  return (
    <button
      onClick={handleOnClick}
      className="min-w-[180px] mr-5 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
    >
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="flex justify-center items-center mx-2">
          {/* <img src={StaIcon} height="50px" alt="CSV Icon" /> */}
        </div>
        <p>{t("downloadStaFile")}</p>
      </div>
    </button>
  );
};

export { ExportStaButton };

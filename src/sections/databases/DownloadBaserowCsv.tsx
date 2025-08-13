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

const DownloadBaserowCsv: React.FC = () => {
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
      className="border border-gray-900 min-w-[180px]  bg-orange-300 hover:opacity-50 text-white mt-6 py-2 px-4 rounded"
    >
      <div className="flex flex-row justify-center items-cente h-[30px] w-[300px] gap-2 ">
        <div className="flex justify-center items-center">
          {/* <img src={StaIcon} height="50px" alt="CSV Icon" /> */}
          <svg
            className="w-10 h-10 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div className="text-black">{t("downloadBaserowCsvFile")}</div>
      </div>
    </button>
  );
};

export { DownloadBaserowCsv };

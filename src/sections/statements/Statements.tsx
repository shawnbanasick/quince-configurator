import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { StatementTextArea } from "./StatementTextArea";
import { UploadAndReadXmlStatements } from "./UploadAndReadXmlStatements";
import { generateStatementsXml } from "./generateStatementsXml.ts";

// const getDisplayMode = (state) => state.displayMode;
const getCurrentStatements = (state) => state.currentStatements;
const getVersion = (state) => state.version;

const Statements: React.FC = () => {
  const { t } = useTranslation();
  // const displayMode = useStore(getDisplayMode);
  const currentStatements = useStore(getCurrentStatements);
  const version = useStore(getVersion);

  // let display;
  // if (displayMode === "beginner") {
  //   display = true;
  // } else {
  //   display = false;
  // }

  const handleClick = () => {
    const xmlContent = generateStatementsXml(currentStatements, version);
    const blob = new Blob([xmlContent], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "statements.xml";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center">Statements.xml</h1>

      <div className="flex flex-row w-10/12 justify-between gap-[] mt-4 mb-6">
        <UploadAndReadXmlStatements />
        <div
          onClick={() => handleClick()}
          className="w-80 px-6 p-2 bg-orange-300 text-black font-semibold rounded-md hover:opacity-50 focus:outline-none focus:ring-2 border-2 border-gray-600 focus:ring-orange-400 focus:ring-opacity-75 text-center min-h-[70px] select-none"
        >
          {t("saveStatements")}
        </div>
      </div>
      {/* 

      {/* <MainContent> */}
      <div className="flex flex-col items-center justify-center">
        <StatementTextArea />
      </div>
    </div>
  );
};

export { Statements };

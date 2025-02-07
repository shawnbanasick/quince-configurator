import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { StatementTextArea } from "./StatementTextArea";

// import StatementTextArea from "./StatementTextArea";
// import exportToXml from "../../Utils/exportToXml";
// import generateStatementsXml from "./generateStatementXml";
// import ImagesBypass from "./ImagesBypass";
// import GlobalStyle from "../../Utils/GlobalStyle";

// import UploadAndReadXML from "./UploadAndReadXml.js";
// import { ConfigSections } from "./ConfigSections.js";
// import { DownloadConfigXml } from "./DownloadConfigXml.js";

const getDisplayMode = (state) => state.displayMode;

const Statements: React.FC = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  const handleClick = () => {
    console.log("clicked");
    // const data = generateStatementsXml();
    // exportToXml("statements.xml", data, "xml");
  };

  //   if (
  //     appState.configUseImages === "true" ||
  //     appState.configUseImages === true
  //   ) {
  //     return (
  //       <MainContent>
  //         <GlobalStyle />
  //         <Title>Statements Settings</Title>
  //         <ImagesBypass />
  //       </MainContent>
  //     );
  //   }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center">Statements.xml</h1>

      <div className="flex flex-row w-2/3 justify-between  gap-[] mt-4 mb-6">
        {/* <UploadAndReadXML /> */}
        {/* <DownloadConfigXml /> */}
      </div>
      {/* 

      {/* <MainContent> */}
      <div className="flex flex-col items-center justify-center">
        {/* <GlobalStyle /> */}
        {/* <Title>Statements Settings</Title> */}
        <h2>Statements Settings</h2>
        <StatementTextArea />
        {/* <DownloadButton onClick={() => handleClick()}> */}
        <button
          onClick={() => handleClick()}
          className="mt-4 mb-8 w-80 px-6 py-2 bg-orange-500 text-black font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
        >
          Click here to save file to <b>SETTINGS</b> folder and replace the
          "statements.xml" file
        </button>
      </div>
    </div>
  );
};

export { Statements };

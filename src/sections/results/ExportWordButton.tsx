import { Paragraph, TextRun, HeadingLevel } from "docx";
import React from "react";
import { useTranslation } from "react-i18next";
import { wordId } from "./wordId";
import { wordTime } from "./wordTime";
import { Document, Packer } from "docx";
import { wordPresort } from "./wordPresort";
import { wordPostsort } from "./wordPostsort";
import { wordSurvey } from "./wordSurvey";
import { wordSurveySummary } from "./wordSurveySummary";

// import * as FileSaver from "file-saver";
// import { useStore } from "../../GlobalState/useStore";

// define types in global state
interface GlobalState {
  currentStatements: string[];
  studyTitle: string;
}

// Define prop types
interface ExportWordButtonProps {
  userData?: any; // Replace `any` with a concrete type if available
}

// const getCurrentStatements = (state: GlobalState) => state.currentStatements;
// const getProjectName = (state: GlobalState) => state.studyTitle;

const ExportWordButton: React.FC<ExportWordButtonProps> = (props) => {
  const { t } = useTranslation();
  //   const currentStatements = useStore(getCurrentStatements);
  //   const projectName = useStore(getProjectName);

  const handleOnClick = () => {
    // if (!currentStatements) {
    //   alert("Please load your statements.xml file first");
    //   return;
    // }
    // if (!projectName) {
    //   alert("Please load your config.xml file first");
    // }

    let data = props.userData;
    console.log(JSON.stringify(data[0], null, 2));
    let childArray5 = wordSurvey(data);
    let childArray4 = wordPostsort(data);
    let childArray3 = wordPresort(data);
    // console.log(JSON.stringify(childArray3, null, 2));
    let childArray2 = wordTime(data);
    let childArray1 = wordId(data, childArray2, childArray3, childArray4, childArray5);

    let summaryArray = wordSurveySummary(data);
    // childArray1.forEach((item, index) => {
    //     item = [...item, ...childArray2[index]]
    // })

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [...childArray1],
        },
        {
          properties: {},
          children: [...summaryArray],
        },
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      const url = URL.createObjectURL(blob);
      // Create a temporary <a> tag to trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = "example.docx";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
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
        <p>{t("downloadWordFile")}</p>
      </div>
    </button>
  );
};

export { ExportWordButton };

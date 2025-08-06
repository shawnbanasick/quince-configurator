// import { Paragraph, TextRun, HeadingLevel } from "docx";
import React from "react";
import { useTranslation } from "react-i18next";
import { wordId } from "./wordId";
import { wordTime } from "./wordTime";
import { Document, Packer } from "docx";
import { wordPresort } from "./wordPresort";
import { wordPostsort } from "./wordPostsort";
import { wordSurvey } from "./wordSurvey";
import { wordSorts } from "./wordSorts";
import { wordSurveySummary } from "./wordSurveySummary";
import { useStore } from "../../GlobalState/useStore";
import { getDocParagraphStyles } from "./getDocParagraphStyles";
import { getDocNumberingStyles } from "./getDocNumberingStyles";
import { getSection1Headers } from "./getSection1Headers";
import { getSection1Footers } from "./getSectionFooters";
import { getSection1Properties } from "./getSection1Properties";
import { createStatementNumArray } from "./createStatementNumArray";
import { createRespondentArray } from "./createRespondentArray";

interface GlobalState {
  currentStatements: string[];
  studyTitle: string;
}
interface ExportWordButtonProps {
  userData?: any; // Replace `any` with a concrete type
  participantIdent?: string;
  partNames: string[];
}

const getCurrentStatements = (state: GlobalState) => state.currentStatements;

const ExportWordButton: React.FC<ExportWordButtonProps> = (props) => {
  const { t } = useTranslation();

  let data = props.userData;
  const currentStatements = useStore(getCurrentStatements);
  let array = currentStatements.split("\n");
  array = array.filter((element) => element);
  const numStatements = array.length;
  let statementNumArray = createStatementNumArray(numStatements);
  let respondentArray = createRespondentArray(data);
  // let headerArray

  const handleOnClick = () => {
    // if (!currentStatements) {
    //   alert("Please load your statements.xml file first");
    //   return;
    // }
    // if (!projectName) {
    //   alert("Please load your config.xml file first");
    // }

    let projectName = "temp1";
    let version = "1.0.0";
    let dateTime = "August 2, 2025";

    let displayPartId = props.participantIdent;
    console.log("bbb", JSON.stringify(displayPartId));

    console.log(JSON.stringify(data[0], null, 2));

    let childArray5 = wordSurvey(data);
    let childArray4 = wordPostsort(data, currentStatements);
    let childArray3b = wordSorts(data, props.partNames, statementNumArray, respondentArray);
    let childArray3 = wordPresort(data);
    let childArray2 = wordTime(data);
    let childArray1 = wordId(
      data,
      childArray2,
      childArray3,
      childArray3b,
      childArray4,
      childArray5,
      displayPartId,
      numStatements
    );

    let summaryArray = wordSurveySummary(data);
    // childArray1.forEach((item, index) => {
    //     item = [...item, ...childArray2[index]]
    // })

    const doc = new Document({
      compatibility: {
        growAutofit: false,
        doNotAutofitConstrainedTables: true,
      },
      styles: getDocParagraphStyles(),
      numbering: getDocNumberingStyles(),
      sections: [
        {
          properties: getSection1Properties(),
          headers: getSection1Headers(projectName),
          footers: getSection1Footers(dateTime, version),
          // properties: {},
          children: [...childArray1, ...summaryArray],
        },
        // {
        //   properties: getSection1Properties(),
        //   headers: getSection1Headers(projectName),
        //   footers: getSection1Footers(dateTime, version),
        //   // properties: {},
        //   children: [],
        // },
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

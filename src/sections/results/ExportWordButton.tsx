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
import { wordPartStatements } from "./wordPartStatements";
import { wordSurveySummary } from "./wordSurveySummary";
import { useStore } from "../../GlobalState/useStore";
import { getDocParagraphStyles } from "./getDocParagraphStyles";
import { getDocNumberingStyles } from "./getDocNumberingStyles";
import { getSection1Headers } from "./getSection1Headers";
import { getSection1Footers } from "./getSectionFooters";
import { getSection1Properties } from "./getSection1Properties";
import { createStatementNumArray } from "./createStatementNumArray";
import { createRespondentArray } from "./createRespondentArray";
import { calcNewHeaderArray } from "./calcNewHeaderArray";
import { formatRawStatements } from "./formatRawStatements";
import { getCurrentDateTime } from "./getCurrentDateTime";

interface GlobalState {
  currentStatements: string[];
  studyTitle: string;
  mapInputQsortPattern: number[];
  surveyQuestionsArray: any[];
}
interface ExportWordButtonProps {
  userData?: any; // Replace `any` with a concrete type
  participantIdent?: string;
  partNames: string[] | undefined;
}

const getCurrentStatements = (state: GlobalState) => state.currentStatements;
const getMapInputQsortPattern = (state: GlobalState) => state.mapInputQsortPattern;
const getSurveyQuestionsArray = (state: GlobalState) => state.surveyQuestionsArray;

const ExportWordButton: React.FC<ExportWordButtonProps> = (props) => {
  const currentStatements = useStore(getCurrentStatements);
  const mapInputQsortPattern = useStore(getMapInputQsortPattern);
  const surveyQuestionsArray = useStore(getSurveyQuestionsArray);
  const { t } = useTranslation();

  const data = props.userData;
  if (!data) {
    return;
  }

  const projectName2 = data[0]["r1"].split("-");
  const projectName = projectName2[0].slice(15).trim();

  const newHeaderArray = calcNewHeaderArray(mapInputQsortPattern);
  const statementsArray = formatRawStatements(currentStatements);
  const numStatements = statementsArray.length;
  const statementNumArray = createStatementNumArray(numStatements);
  const respondentArray = createRespondentArray(data);
  const dateTime = getCurrentDateTime();
  let version = "1.0.0";

  const handleOnClick = () => {
    // if (!currentStatements) {
    //   alert("Please load your statements.xml file first");
    //   return;
    // }
    // if (!projectName) {
    //   alert("Please load your config.xml file first");
    // }

    // let projectName = "temp1";

    let displayPartId = props.participantIdent;
    let childArray5 = wordSurvey(data, surveyQuestionsArray);
    let childArray4 = wordPostsort(data, currentStatements);
    let childArray3b = wordSorts(
      data,
      props.partNames,
      statementNumArray,
      respondentArray,
      newHeaderArray,
      mapInputQsortPattern
    );
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
    let statementsArray = wordPartStatements(data, newHeaderArray, currentStatements, [
      ...props.partNames,
    ]);
    let summaryArray = wordSurveySummary(data, surveyQuestionsArray, [...props.partNames]);

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
          children: [...childArray1, ...statementsArray, ...summaryArray],
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
      className="min-w-[180px] bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
    >
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="flex justify-center items-center">
          {/* <img src={StaIcon} height="50px" alt="CSV Icon" /> */}
        </div>
        <p>{t("downloadWordButton")}</p>
      </div>
    </button>
  );
};

export { ExportWordButton };

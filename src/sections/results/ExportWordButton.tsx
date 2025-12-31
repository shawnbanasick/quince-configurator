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
import { wordStatementAnalysis } from "./wordStatementAnalysis";
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
import { getCurrentDate } from "./getCurrentDate";
import { getCurrentTime } from "./getCurrentTime";
import { Paragraph, TextRun, ImageRun, AlignmentType } from "docx";
import { logoBase64 } from "./logoBase64";

interface GlobalState {
  currentStatements: string[];
  studyTitle: string;
  mapInputQsortPattern: number[];
  surveyQuestionsArray: any[];
  showSurvey: boolean;
  showPostsort: boolean;
  qSortHeaderNumbers: number[];
  qSortPatternObject: {};
}
interface ExportWordButtonProps {
  userData?: any; // Replace `any` with a concrete type
  participantIdent?: string;
  partNames: string[] | undefined;
}

const getCurrentStatements = (state: GlobalState) => state.currentStatements;
const getMapInputQsortPattern = (state: GlobalState) => state.mapInputQsortPattern;
const getSurveyQuestionsArray = (state: GlobalState) => state.surveyQuestionsArray;
const getShowSurvey = (state: GlobalState) => state.showSurvey;
const getShowPostsort = (state: GlobalState) => state.showPostsort;
const getQSortPatternObject = (state: GlobalState) => state.qSortPatternObject;

const ExportWordButton: React.FC<ExportWordButtonProps> = (props) => {
  const currentStatements = useStore(getCurrentStatements);
  const mapInputQsortPattern = useStore(getMapInputQsortPattern);
  const surveyQuestionsArray = useStore(getSurveyQuestionsArray);
  const showSurvey = useStore(getShowSurvey);
  const showPostsort = useStore(getShowPostsort);
  const qSortPatternObject = useStore(getQSortPatternObject);
  const qSortHeaderNumbers = Object.keys(qSortPatternObject);
  const { t } = useTranslation();

  let shouldIncludeTimestamp = true;

  // create file name timeStamp
  const newDate = new Date();
  const timeStamp = `${getCurrentDate(newDate)}_${getCurrentTime(newDate)}`;
  let nameFile = "";

  const data = props.userData;
  if (!data) {
    return;
  }

  const projectName2: string[] = data?.[0]?.r1?.split("-") ?? [];
  const projectName: string = (projectName2?.[0] ?? "").slice(15).trim();

  const newHeaderArray = calcNewHeaderArray(mapInputQsortPattern);
  const statementsArray = formatRawStatements(currentStatements);
  const numStatements = statementsArray.length;
  const statementNumArray = createStatementNumArray(numStatements);
  const respondentArray = createRespondentArray(data);
  const dateTime = getCurrentDateTime();
  let version = "1.0.6";

  //**
  //  LANGUAGE OBJECTS
  //** 
  const idLangObj = {
    "projectCreationDate": t("projectCreationDate"),
    "qSortData": t("qSortData"),
    "sessionMetadata": t("sessionMetadata"),
    "projectName": t("projectName"),
    "randomId": t("randomId"),
    "urlUsercode": t("urlUsercode"),
    "dateAndTime": t("dateAndTime"),
    "desktopOrMobile": t("desktopOrMobile"),
    "statements": t("statements"),
    "participants": t("participants"),
    "participant": t("participant"),
    "participantId": t("participantId"),
    "noPartId": t("noPartId"),
    "noUrlUsercode": t("noUrlUsercode"),
    "desktop": t("desktop"),
    "mobile": t("mobile"),
  };
  const timeLangObj = {
    "timeOnPage": t("timeOnPage"),
    "consentPage": t("consentPage"),
    "welcomePage": t("welcomePage"),
    "presortPage": t("presortPage"),
    "refinePage": t("refinePage"),
    "sortPage": t("sortPage"),
    "postsortPage": t("postsortPage"),
    "surveyPage": t("surveyPage"),
  };
  const presortLangObj = {
    "presortValues": t("presortValues"),
    "numberOfStatementsViewedPositively": t("numberOfStatementsViewedPositively"),
    "numberOfStatementsViewedNegatively": t("numberOfStatementsViewedNegatively"),
    "numberOfStatementsViewedNeutral": t("numberOfStatementsViewedNeutral"),
    "statementsViewedPositively": t("statementsViewedPositively"),
    "statementsViewedNegatively": t("statementsViewedNegatively"),
    "statementsViewedNeutral": t("statementsViewedNeutral"),
  };
  const qSortLangObj = {
    "qSortGrid": t("qSortGrid"),
  };
  const postsortLangObj = {
    "positivePostsortComments": t("positivePostsortComments"),
    "negativePostsortComments": t("negativePostsortComments"),
    "columnAbr": t("columnAbr"),
  };
  const surveyLangObj = {
    "questionnaireResults": t("questionnaireResults"),
    "item": t("item"),
    "response": t("response"),
    "noResponse": t("noResponse"),
    "question": t("question"),
    "information": t("information"),
    "shortText": t("shortText"),
    "longText": t("longText"),
    "radio": t("radio"),
    "select": t("select"),
    "checkbox": t("checkbox"),
    "rating2": t("rating2"),
    "rating5": t("rating5"),
    "rating10": t("rating10"),
  };
  const surveySummaryLangObj = {
    "questionnaireSummaryResults": t("questionnaireSummaryResults"),
    "multipleResponsesPossible": t("multipleResponsesPossible"),
    "item": t("item"),
    "information": t("information"),
    "shortText": t("shortText"),
    "longText": t("longText"),
    "radio": t("radio"),
    "select": t("select"),
    "checkbox": t("checkbox"),
    "rating2": t("rating2"),
    "rating5": t("rating5"),
    "rating10": t("rating10"),
  };
  const partStatementsLangObj = {
    "participant": t("participant"),
    "partStatements": t("partStatements"),
    "sortValue": t("sortValue"),
    "statementQsortValues": t("statementQsortValues"),
  };
  const statementAnalysisLangObj = {
    "statementStatistics": t("statementStatistics"),
    "qSortValue": t("qSortValue"),
    "highestToLowestAverage": t("highestToLowestAverage"),
    "qSortValueStability": t("qSortValueStability"),
    "statementsWithAHighCountOfMax": t("statementsWithAHighCountOfMax"),
    "statementsWithAHighCountOfMin": t("statementsWithAHighCountOfMin"),
    "statementsWithAHighCountOfZero": t("statementsWithAHighCountOfZero"),
    "countPercent": t("countPercent"),
  };

  // set name for ZIP file
  if (shouldIncludeTimestamp === true) {
    nameFile = `Quince_Results_${projectName}_${timeStamp}`;
  } else {
    nameFile = `Quince_Results_${projectName}`;
  }

  const handleOnClick = () => {
    let displayPartId: string = props.participantIdent ?? "";
    let postsortText: any[] = [];
    let surveyText: any[] = [];
    if (showSurvey) {
      surveyText = wordSurvey(data, surveyQuestionsArray, surveyLangObj);
    }
    if (showPostsort) {
      postsortText = wordPostsort(data, currentStatements, postsortLangObj);
    }

    let sortsText = wordSorts(
      data,
      props.partNames,
      statementNumArray,
      respondentArray,
      newHeaderArray,
      mapInputQsortPattern,
      qSortLangObj
    );
    let presortText = wordPresort(data, presortLangObj);
    let timeText: any[] = wordTime(data, timeLangObj);
    let childArray1 = wordId(
      data,
      timeText,
      presortText,
      sortsText,
      postsortText,
      surveyText,
      displayPartId,
      numStatements,
      showSurvey,
      showPostsort,
      idLangObj,
    );

    let statementsArray = wordPartStatements(data, newHeaderArray, currentStatements, [
      ...(props.partNames ?? []),
    ], partStatementsLangObj);

    let statementsAnalysisArray = wordStatementAnalysis(
      data,
      currentStatements,
      qSortHeaderNumbers,
      statementAnalysisLangObj,
    );

    let summaryArray = wordSurveySummary(
      data,
      surveyQuestionsArray,
      [...(props.partNames ?? [])],
      showSurvey,
      surveySummaryLangObj,
    );

    let closingMessage = [
      new Paragraph({
        children: [
          new TextRun({
            text: `*** ${t("endOfReport")} ***`,
            bold: false,
            size: 28,
          }),
        ],
        spacing: {
          before: 300,
        },
      }),
    ];

    let openingImage = [
      new Paragraph({
        children: [
          new ImageRun({
            // Convert Base64 to Buffer
            data: logoBase64(),
            transformation: {
              width: 30,
              height: 43,
            },
            type: "png",
          }),
          new TextRun({
            text: ` Quince - ${t("qSortResults")}`,
            bold: true,
            size: 72,
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
          after: 300,
        },
      }),
    ];

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
          children: [
            ...openingImage,
            ...childArray1,
            ...statementsArray,
            ...statementsAnalysisArray,
            ...summaryArray,
            ...closingMessage,
          ],
        },
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      const url = URL.createObjectURL(blob);
      // Create a temporary <a> tag to trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = `${nameFile}.docx`;
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

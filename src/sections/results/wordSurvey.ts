import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { useStore } from "../../GlobalState/useStore";
// import { stripHtml } from "./stripHtml";
import { processInformationQuestion } from "./processInformationQuestion";
import { processTextQuestion } from "./processTextQuestion";
import { processTextAreaQuestion } from "./processTextAreaQuestion";
import { processRadioQuestion } from "./processRadioQuestion";
import { processSelectQuestion } from "./processSelectQuestion";

type RecordMap = Record<string, any>;

interface GlobalState {
  currentStatements: string[];
  surveyQuestionsArray: any;
}

// const getCurrentStatements = (state: GlobalState) => state.currentStatements;
// const getSurvey = (state: GlobalState) => state.surveyQuestionsArray;

const wordSurvey = (data: RecordMap): Paragraph[] => {
  const workingData = cloneDeep(data);
  const survey = useStore.getState().surveyQuestionsArray;
  const indentValue = 300;
  const items = Array.isArray(workingData) ? workingData : [workingData];

  const itemParagraphs: any = [];
  items.forEach((item: RecordMap) => {
    // for each participant
    const paragraphs: Paragraph[] = [];
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Questionnaire Results",
            bold: true,
          }),
        ],
        indent: {
          start: 200,
        },
        spacing: {
          before: 150,
        },
      })
    );
    // Filter for values starting with "(itemNum"
    const timeEntries = Object.values(item).filter(
      (value: any) => typeof value === "string" && value.trim().startsWith("itemNum")
    );

    // console.log(timeEntries);

    // Clean and map to Paragraphs
    timeEntries.forEach((entry: string, index: number) => {
      // for each survey question

      let questionInfo = survey[index];
      let questionType = questionInfo.surveyQuestionType;
      console.log(questionType);

      if (questionType === "information") {
        let infoParagraph = processInformationQuestion(questionInfo, index, indentValue);
        paragraphs.push(...infoParagraph);
      }

      if (questionType === "text") {
        let textParagraph = processTextQuestion(entry, questionInfo, index, indentValue);
        paragraphs.push(...textParagraph);
      }

      if (questionType === "textarea") {
        let textAreaParagraph = processTextAreaQuestion(entry, questionInfo, index, indentValue);
        paragraphs.push(...textAreaParagraph);
      }

      if (questionType === "radio") {
        let radioParagraph = processRadioQuestion(entry, questionInfo, index, indentValue);
        paragraphs.push(...radioParagraph);
      }

      if (questionType === "select") {
        let selectParagraph = processSelectQuestion(entry, questionInfo, index, indentValue);
        paragraphs.push(...selectParagraph);
      }

      //   paragraphs.push(
      //     new Paragraph({
      //       children: [
      //         // new TextRun({
      //         //   text: statementNumber2,
      //         //   bold: true,
      //         // }),
      //         new TextRun({
      //           text: "Question",
      //           bold: true,
      //         }),
      //       ],
      //       indent: {
      //         start: indentValue,
      //       },
      //       spacing: {
      //         before: 100,
      //       },
      //     }),
      //     new Paragraph({
      //       children: [
      //         new TextRun({
      //           text: entry,
      //         }),
      //       ],
      //       indent: {
      //         start: indentValue,
      //       },
      //     })
      //   );
    });
    itemParagraphs.push(paragraphs);
  });
  return itemParagraphs;
};

export { wordSurvey };

import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { processInformationQuestion } from "./processInformationQuestion";
import { processTextQuestion } from "./processTextQuestion";
import { processTextAreaQuestion } from "./processTextAreaQuestion";
import { processRadioQuestion } from "./processRadioQuestion";
import { processSelectQuestion } from "./processSelectQuestion";
import { processCheckboxQuestion } from "./processCheckboxQuestion";
import { processRating2Question } from "./processRating2Question";
import { processRating5Question } from "./processRating5Question";
import { processRating10Question } from "./processRating10Question";

type RecordMap = Record<string, any>;

const wordSurvey = (data: RecordMap, surveyQuestionsArray, surveyLangObj): Paragraph[] => {
  const workingData = cloneDeep(data);
  let survey = [...surveyQuestionsArray];

  const indentValue = 400;
  const items = Array.isArray(workingData) ? workingData : [workingData];

  const itemParagraphs: any = [];
  items.forEach((item: RecordMap) => {
    // for each participant
    const paragraphs: Paragraph[] = [];
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: surveyLangObj.questionnaireResults,
            bold: true,
          }),
        ],
        indent: {
          start: 200,
        },
        // heading: HeadingLevel.HEADING_4,
        spacing: {
          before: 200,
        },
      })
    );
    // Filter for values starting with "(itemNum"
    const timeEntries = Object.values(item).filter(
      (value: any) => typeof value === "string" && value.trim().startsWith("itemNum")
    );


    // Clean and map to Paragraphs
    timeEntries.forEach((entry: string, index: number) => {
      // for each survey question

      let questionInfo = survey[index];
      let questionType = questionInfo.surveyQuestionType;

      if (questionType === "information") {
        let infoParagraph = processInformationQuestion(questionInfo, index, indentValue, surveyLangObj);
        paragraphs.push(...infoParagraph);
      }

      if (questionType === "text") {
        let textParagraph = processTextQuestion(entry, questionInfo, index, indentValue, surveyLangObj);
        paragraphs.push(...textParagraph);
      }

      if (questionType === "textarea") {
        let textAreaParagraph = processTextAreaQuestion(entry, questionInfo, index, indentValue, surveyLangObj);
        paragraphs.push(...textAreaParagraph);
      }

      if (questionType === "radio") {
        let radioParagraph = processRadioQuestion(entry, questionInfo, index, indentValue, surveyLangObj);
        paragraphs.push(...radioParagraph);
      }

      if (questionType === "select") {
        let selectParagraph = processSelectQuestion(entry, questionInfo, index, indentValue, surveyLangObj);
        paragraphs.push(...selectParagraph);
      }

      if (questionType === "checkbox") {
        let checkboxParagraph = processCheckboxQuestion(entry, questionInfo, index, indentValue, surveyLangObj);
        paragraphs.push(...checkboxParagraph);
      }

      if (questionType === "rating2") {
        let rating2Paragraph = processRating2Question(entry, questionInfo, index, indentValue, surveyLangObj);
        paragraphs.push(...rating2Paragraph);
      }

      if (questionType === "rating5") {
        let rating5Paragraph = processRating5Question(entry, questionInfo, index, indentValue, surveyLangObj);
        paragraphs.push(...rating5Paragraph);
      }

      if (questionType === "rating10") {
        let rating10Paragraph = processRating10Question(entry, questionInfo, index, indentValue, surveyLangObj);
        paragraphs.push(...rating10Paragraph);
      }
    });
    itemParagraphs.push(paragraphs);
  });
  return itemParagraphs;
};

export { wordSurvey };

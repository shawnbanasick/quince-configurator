import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { useStore } from "../../GlobalState/useStore";
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
      // console.log(questionType);

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

      if (questionType === "checkbox") {
        let checkboxParagraph = processCheckboxQuestion(entry, questionInfo, index, indentValue);
        paragraphs.push(...checkboxParagraph);
      }

      if (questionType === "rating2") {
        let rating2Paragraph = processRating2Question(entry, questionInfo, index, indentValue);
        paragraphs.push(...rating2Paragraph);
      }

      if (questionType === "rating5") {
        let rating5Paragraph = processRating5Question(entry, questionInfo, index, indentValue);
        paragraphs.push(...rating5Paragraph);
      }

      if (questionType === "rating10") {
        let rating10Paragraph = processRating10Question(entry, questionInfo, index, indentValue);
        paragraphs.push(...rating10Paragraph);
      }
    });
    itemParagraphs.push(paragraphs);
  });
  return itemParagraphs;
};

export { wordSurvey };

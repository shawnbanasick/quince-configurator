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

// Runs the correct processor for a single survey question/answer pair and
// pushes the resulting paragraphs onto the shared paragraphs array.
const processQuestion = (
  entry: string,
  questionInfo: RecordMap,
  index: number,
  indentValue: number,
  surveyLangObj: RecordMap,
  paragraphs: Paragraph[],
) => {
  const questionType = questionInfo.surveyQuestionType;

  if (questionType === "information") {
    const infoParagraph = processInformationQuestion(
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
    );
    paragraphs.push(...infoParagraph);
  }

  if (questionType === "text") {
    const textParagraph = processTextQuestion(
      entry,
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
    );
    paragraphs.push(...textParagraph);
  }

  if (questionType === "textarea") {
    const textAreaParagraph = processTextAreaQuestion(
      entry,
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
    );
    paragraphs.push(...textAreaParagraph);
  }

  if (questionType === "radio") {
    const radioParagraph = processRadioQuestion(
      entry,
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
    );
    paragraphs.push(...radioParagraph);
  }

  if (questionType === "select") {
    const selectParagraph = processSelectQuestion(
      entry,
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
    );
    paragraphs.push(...selectParagraph);
  }

  if (questionType === "checkbox") {
    const checkboxParagraph = processCheckboxQuestion(
      entry,
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
    );
    paragraphs.push(...checkboxParagraph);
  }

  if (questionType === "rating2") {
    const rating2Paragraph = processRating2Question(
      entry,
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
    );
    paragraphs.push(...rating2Paragraph);
  }

  if (questionType === "rating5") {
    const rating5Paragraph = processRating5Question(
      entry,
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
    );
    paragraphs.push(...rating5Paragraph);
  }

  if (questionType === "rating10") {
    const rating10Paragraph = processRating10Question(
      entry,
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
    );
    paragraphs.push(...rating10Paragraph);
  }
};

// New format: item.itemNums = { itemNum1: "info - n.a.", itemNum4: 4, itemNum7: [1,2,1,1], ... }
// Keys explicitly encode the question number, so we align to `survey` by
// question number instead of by the position of filtered entries. This also
// fixes the old implicit assumption that every survey question (including
// "information" questions) produces an entry at the same array index.
const processStructuredItemNums = (
  itemNums: RecordMap,
  survey: RecordMap[],
  indentValue: number,
  surveyLangObj: RecordMap,
  paragraphs: Paragraph[],
) => {
  const sortedKeys = Object.keys(itemNums).sort((a, b) => {
    const numA = parseInt(a.replace("itemNum", ""), 10);
    const numB = parseInt(b.replace("itemNum", ""), 10);
    return numA - numB;
  });

  sortedKeys.forEach((key) => {
    const questionNumber = parseInt(key.replace("itemNum", ""), 10);
    const index = questionNumber - 1;
    const questionInfo = survey[index];

    // No matching question definition for this itemNum - skip rather than error.
    if (!questionInfo) return;

    const rawValue = itemNums[key];
    // Downstream processors expect a string entry. Checkbox answers now arrive
    // as arrays (e.g. [1,2,1,1]) and rating/radio/select answers as numbers,
    // so normalize everything to a string before handing it off.
    const entry = Array.isArray(rawValue)
      ? rawValue.join(",")
      : String(rawValue);

    processQuestion(
      entry,
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
      paragraphs,
    );
  });
};

// Legacy fallback: item values were flat strings like "itemNum4: some text",
// filtered by value prefix and matched to `survey` purely by array position.
const processLegacyFlatItemNums = (
  item: RecordMap,
  survey: RecordMap[],
  indentValue: number,
  surveyLangObj: RecordMap,
  paragraphs: Paragraph[],
) => {
  const timeEntries = Object.values(item).filter(
    (value: any) =>
      typeof value === "string" && value.trim().startsWith("itemNum"),
  ) as string[];

  timeEntries.forEach((entry: string, index: number) => {
    const questionInfo = survey[index];
    if (!questionInfo) return;

    processQuestion(
      entry,
      questionInfo,
      index,
      indentValue,
      surveyLangObj,
      paragraphs,
    );
  });
};

const wordSurvey = (
  data: RecordMap,
  surveyQuestionsArray,
  surveyLangObj,
): Paragraph[] => {
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
      }),
    );

    if (
      item.itemNums &&
      typeof item.itemNums === "object" &&
      !Array.isArray(item.itemNums)
    ) {
      processStructuredItemNums(
        item.itemNums,
        survey,
        indentValue,
        surveyLangObj,
        paragraphs,
      );
    } else {
      processLegacyFlatItemNums(
        item,
        survey,
        indentValue,
        surveyLangObj,
        paragraphs,
      );
    }

    itemParagraphs.push(paragraphs);
  });
  return itemParagraphs;
};

export { wordSurvey };

import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { processInformationSummary } from "./surveySummary/processInformationSummary";
import { processTextSummary } from "./surveySummary/processTextSummary";
import { processTextareaSummary } from "./surveySummary/processTextareaSummary";
import { processRadioSummary } from "./surveySummary/processRadioSummary";
import { processSelectSummary } from "./surveySummary/processSelectSummary";
import { processCheckboxSummary } from "./surveySummary/processCheckboxSummary";
import { processRating2Summary } from "./surveySummary/processRating2Summary";
import { processRating5Summary } from "./surveySummary/processRating5Summary";
import { processRating10Summary } from "./surveySummary/processRating10Summary";

type RecordMap = Record<string, any>;

const wordSurveySummary = (
  data: RecordMap,
  surveyQuestionsArray,
  partNames,
  showSurvey
): Paragraph[] => {
  const workingData = cloneDeep(data);

  function filterByItemNum1(obj: RecordMap): Record<string, string> {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([_, value]) => typeof value === "string" && value.startsWith("itemNum")
      )
    );
  }

  // const indentValue = 300;
  // const items = Array.isArray(workingData) ? workingData : [workingData];
  // const itemParagraphs: any = [];

  const filteredData: any[] = [];
  workingData.forEach((item) => {
    let surveyItems = filterByItemNum1(item);
    let keys = Object.keys(surveyItems);
    let tempObj = {};
    keys.forEach((key) => {
      let temp1 = surveyItems[key].split(":");
      let newKey = temp1[0];
      let newValue = temp1[1];
      tempObj[newKey] = newValue;
    });
    filteredData.push(tempObj);
  });

  // for each participant
  const paragraphs: Paragraph[] = [];

  if (showSurvey === true || showSurvey === "true") {
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Questionnaire Summary Results",
            bold: true,
            size: 40,
          }),
        ],
        pageBreakBefore: true,
        heading: HeadingLevel.HEADING_1,
        thematicBreak: true,
      })
    );
  }

  type RecordMap = Record<string, string>;
  // let newArray: Record<string, string>[] = [];

  if (showSurvey === true || showSurvey === "true") {
    surveyQuestionsArray.forEach((item, index) => {
      if (item.surveyQuestionType === "information") {
        let text = "Information";
        try {
          paragraphs.push(...processInformationSummary(item, index, text));
        } catch (error) {
          console.error("Error processing Information item:", error);
        }
      }

      if (item.surveyQuestionType === "text") {
        let text = "Short Text Question";
        try {
          paragraphs.push(...processTextSummary(filteredData, partNames, item, index, text));
        } catch (error) {
          console.error("Error processing Short Text item:", error);
        }
      }

      if (item.surveyQuestionType === "textarea") {
        let text = "Long Text Question";
        try {
          paragraphs.push(...processTextareaSummary(filteredData, partNames, item, index, text));
        } catch (error) {
          console.error("Error processing Long Text item:", error);
        }
      }

      if (item.surveyQuestionType === "radio") {
        let text = "Radio Button Input";
        try {
          paragraphs.push(...processRadioSummary(filteredData, partNames, item, index, text));
        } catch (error) {
          console.error("Error processing Radio Button item:", error);
        }
      }

      if (item.surveyQuestionType === "select") {
        let text = "Selection Input (multiple responses possible)";
        try {
          paragraphs.push(...processSelectSummary(filteredData, partNames, item, index, text));
        } catch (error) {
          console.error("Error processing Selection item:", error);
        }
      }

      if (item.surveyQuestionType === "checkbox") {
        let text = "Checkbox Input (multiple responses possible)";
        try {
          paragraphs.push(...processCheckboxSummary(filteredData, partNames, item, index, text));
        } catch (error) {
          console.error("Error processing Checkbox item:", error);
        }
      }

      if (item.surveyQuestionType === "rating2") {
        let text = "Rating 2 Input";
        try {
          paragraphs.push(...processRating2Summary(filteredData, partNames, item, index, text));
        } catch (error) {
          console.error("Error processing Rating 2 item:", error);
        }
      }

      if (item.surveyQuestionType === "rating5") {
        let text = "Rating 5 Input";
        try {
          paragraphs.push(...processRating5Summary(filteredData, partNames, item, index, text));
        } catch (error) {
          console.error("Error processing Rating 5 item:", error);
        }
      }

      if (item.surveyQuestionType === "rating10") {
        let text = "Rating 10 Input";
        try {
          paragraphs.push(...processRating10Summary(filteredData, partNames, item, index, text));
        } catch (error) {
          console.error("Error processing Rating 10 item:", error);
        }
      }
    });
  }

  return paragraphs;
};

export { wordSurveySummary };

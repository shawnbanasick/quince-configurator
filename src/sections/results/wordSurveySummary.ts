import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { processInformationSummary } from "./surveySummary/processInformationSummary";
import { processTextSummary } from "./surveySummary/processTextSummary";
import { processTextareaSummary } from "./surveySummary/processTextareaSummary";
import { processRadioSummary } from "./surveySummary/processRadioSummary";
import { processSelectSummary } from "./surveySummary/processSelectSummary";

type RecordMap = Record<string, any>;

const wordSurveySummary = (data: RecordMap, surveyQuestionsArray, partNames): Paragraph[] => {
  const workingData = cloneDeep(data);

  function filterByItemNum1(obj: RecordMap): Record<string, string> {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([_, value]) => typeof value === "string" && value.startsWith("itemNum")
      )
    );
  }

  const indentValue = 300;
  const items = Array.isArray(workingData) ? workingData : [workingData];
  const itemParagraphs: any = [];

  const filteredData: any[] = [];
  data.forEach((item) => {
    let surveyItems = filterByItemNum1(item);
    let keys = Object.keys(surveyItems);
    console.log(keys);
    let tempObj = {};
    keys.forEach((key) => {
      let temp1 = surveyItems[key].split(":");
      console.log(temp1[0], temp1[1]);
      let newKey = temp1[0];
      let newValue = temp1[1];
      tempObj[newKey] = newValue;
    });
    filteredData.push(tempObj);
  });

  console.log("ccc", JSON.stringify(surveyQuestionsArray, null, 2));
  console.log("ccc", JSON.stringify(filteredData, null, 2));

  // for each participant
  const paragraphs: Paragraph[] = [];
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

  type RecordMap = Record<string, string>;
  // let newArray: Record<string, string>[] = [];

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
      let text = "Selection Input";
      try {
        paragraphs.push(...processSelectSummary(filteredData, partNames, item, index, text));
      } catch (error) {
        console.error("Error processing Selection item:", error);
      }
    }
  });
  // console.log(JSON.stringify(newArray, null, 2));
  // console.log(JSON.stringify(survey, null, 2));

  return paragraphs;
};

export { wordSurveySummary };

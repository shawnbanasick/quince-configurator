import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { useStore } from "../../GlobalState/useStore";

type RecordMap = Record<string, any>;

const wordSurveySummary = (data: RecordMap): Paragraph[] => {
  const workingData = cloneDeep(data);
  const survey = useStore.getState().surveyQuestionsArray;

  const indentValue = 300;
  const items = Array.isArray(workingData) ? workingData : [workingData];
  const itemParagraphs: any = [];

  // console.log(JSON.stringify(workingData, null, 2));

  // for each participant
  const paragraphs: Paragraph[] = [];
  paragraphs.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "Questionnaire Results Summary",
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
  let newArray: Record<string, string>[] = [];

  function filterByItemNum1(obj: RecordMap): Record<string, string> {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([_, value]) => typeof value === "string" && value.startsWith("itemNum")
      )
    );
  }

  items.forEach((item: RecordMap) => {
    const newObject2 = filterByItemNum1(item);
    const newObject: Record<string, string> = {};

    const keys = Object.keys(newObject2);

    keys.forEach((entry) => {
      const string = newObject2[entry];
      const stringArray = string.split(":");

      if (stringArray.length >= 2) {
        const newKey = stringArray[0].trim();
        const newValue = stringArray[1].trim();
        newObject[newKey] = newValue;
      }
    });

    newArray.push(newObject);

    itemParagraphs.push(paragraphs);
  });
  // console.log(JSON.stringify(newArray, null, 2));
  // console.log(JSON.stringify(survey, null, 2));

  return paragraphs;
};

export { wordSurveySummary };

import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";
import { safeSplit } from "./safeSplit";

const processSelectQuestion = (
  entry,
  question,
  index,
  indentValue,
  surveyLangObj,
) => {
  let addIndentValue = +indentValue + 200;

  let options = question.options;
  options = options.split(";;;");

  let cleanOptions = options.map((element) => {
    return stripHtml(stripTags(element));
  });

  let response1 = stripHtml(stripTags(String(entry ?? "")));

  // Legacy format: "itemNum7:1,2,1,1" or "itemNum2:no response"
  // New format: entry is already the clean value itself - a comma list like
  // "1,2,1,1" (joined from the itemNums array) or the string "no response".
  const isLegacyPrefixed = /^itemNum\d+\s*:/.test(response1);

  let indicator: boolean;
  let rawListText: string;
  let respondentResponse2: any[] = [];

  if (isLegacyPrefixed) {
    let entry2 = safeSplit(response1, ":", { maxParts: 2 });
    if (entry2?.[1]?.trim() === "no response") {
      entry2[1] = surveyLangObj.noResponse;
    }
    rawListText = entry2?.[1] ?? "";

    let response3 = response1.split(":");
    let response2 = (response3[1] ?? "").split(",");
    response2.forEach((value) => {
      let value2 = +value.trim();
      let value3 = cleanOptions[value2 - 1];
      respondentResponse2.push(value3);
    });

    let entry1 = response1.split(":");
    indicator = entry1[1]?.trim() !== surveyLangObj.noResponse;
  } else {
    let tail = response1.trim();
    indicator = tail !== "no response";
    rawListText = tail;

    if (indicator) {
      tail.split(",").forEach((value) => {
        let value2 = +value.trim();
        let value3 = cleanOptions[value2 - 1];
        respondentResponse2.push(value3);
      });
    }
  }

  let respondentResponse = respondentResponse2.join(", ");

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `${surveyLangObj.item} ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `${surveyLangObj.select}: `,
          bold: false,
        }),
        new TextRun({
          text: `${stripHtml(stripTags(question.label))}`,
          bold: false,
          underline: { type: UnderlineType.SINGLE },
        }),
      ],
      indent: {
        start: indentValue,
      },
      spacing: {
        before: 100,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: question.note
            ? `Note: ${stripHtml(stripTags(question.note))}`
            : `Note: n/a`,
          bold: false,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Options: ${stripHtml(stripTags(question?.options))}`,
          bold: false,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: indicator
            ? `${surveyLangObj.response}: ${stripHtml(stripTags(rawListText))} - `
            : `${surveyLangObj.response}: - `,
          bold: false,
        }),
        new TextRun({
          text: indicator ? `${respondentResponse}` : surveyLangObj.noResponse,
          bold: false,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
  ];
  return response;
};

export { processSelectQuestion };

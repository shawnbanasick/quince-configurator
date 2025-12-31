import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";
import { safeSplit } from "./safeSplit";

const processSelectQuestion = (entry, question, index, indentValue, surveyLangObj) => {
  let addIndentValue = +indentValue + 200;

  let options = question.options;
  options = options.split(";;;");
  let entry2 = safeSplit(entry, ":", { maxParts: 2 });

  if (entry2?.[1]?.trim() === "no response") {
    entry2[1] = surveyLangObj.noResponse;
  }

  let cleanOptions = options.map((element) => {
    return stripHtml(stripTags(element));
  });

  // "entry" is the numerical list of responses like "1,4,5"
  let respondentResponse2: any = [];
  let response1 = stripHtml(stripTags(entry));
  let response3 = response1.split(":");
  let response2 = response3[1].split(",");

  response2.forEach((value) => {
    let value2 = +value.trim();
    let value3 = cleanOptions[value2 - 1];
    respondentResponse2.push(value3);
  });

  let entry1 = entry.split(":");
  let indicator = true;
  if (entry1[1].trim() === surveyLangObj.noResponse) {
    indicator = false;
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
          text: question.note ? `Note: ${stripHtml(stripTags(question.note))}` : `Note: n/a`,
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
          text: indicator ? `${surveyLangObj.response}: ${stripHtml(stripTags(entry2[1]))} - ` : `${surveyLangObj.response}: - `,
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

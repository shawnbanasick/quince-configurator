import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";
import { safeSplit } from "./safeSplit";

const processCheckboxQuestion = (entry, question, index, indentValue, surveyLangObj) => {
  let addIndentValue = +indentValue + 200;
  let options = stripHtml(stripTags(question.options));
  options = options.split(",");

  let entry2 = safeSplit(entry, ":", { maxParts: 2 });

  if (entry2?.[1]?.trim() === "no response") {
    entry2[1] = surveyLangObj.noResponse;
  }

  let respondentResponse2: any = [];
  let response1 = stripHtml(stripTags(entry));
  let response3 = response1.split(":");
  let response2;
  let response4;
  let response5;
  let response6: any = [];
  if (response3[1].includes("-")) {
    let dashIndex = response3[1].indexOf("-");
    response2 = response3[1].slice(0, dashIndex);

    response4 = response3[1].slice(dashIndex + 1);
    response5 = response2.split(",");
    response5 = response5.map((str) => str.trim());
    if (response5.length > 1) {
      response6 = response5.map((item) => {
        return parseInt(item);
      });
    } else {
      response6.push(response5[0]);
    }
  } else {
    response6.push(response3[1].trim());
  }

  let value1;
  response6.forEach((value) => {
    value1 = options[value - 1];
    respondentResponse2.push(value1);
  });

  let respondentResponse = respondentResponse2.join(", ");

  if (response3[1].includes("-")) {
    respondentResponse = respondentResponse + " - " + response4;
  } else {
    respondentResponse = respondentResponse;
  }

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `${surveyLangObj.item} ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `${surveyLangObj.checkbox}: `,
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
          text: `${surveyLangObj.response}: ${stripHtml(stripTags(entry2[1]))} - `,
          bold: false,
        }),
        new TextRun({
          text: entry ? `${stripHtml(stripTags(respondentResponse))}` : surveyLangObj.noResponse,
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

export { processCheckboxQuestion };

import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";
import { safeSplit } from "./safeSplit";

const processCheckboxQuestion = (
  entry,
  question,
  index,
  indentValue,
  surveyLangObj,
) => {
  let addIndentValue = +indentValue + 200;
  let options = stripHtml(stripTags(question.options));
  options = options.split(",");

  let response1 = stripHtml(stripTags(String(entry ?? "")));

  // Legacy format: "itemNum7:1,2,3-Other typed text" or "itemNum2:no response"
  // New format: entry is already the clean value itself - a comma list like
  // "1,2,1,1" (joined from the itemNums array) or the string "no response".
  const isLegacyPrefixed = /^itemNum\d+\s*:/.test(response1);

  let tail: string;
  if (isLegacyPrefixed) {
    let response3 = response1.split(":");
    tail = response3[1] ?? "";
  } else {
    tail = response1;
  }

  // Mirrors the old entry2[1] "no response" translation, used for the label
  // shown before the dash in the non-"other" case.
  let displayTail =
    tail.trim() === "no response" ? surveyLangObj.noResponse : tail;

  let respondentResponse2Array: any = [];
  let response4;
  let response6: any = [];

  let addOtherText = false;
  if (tail.includes("-")) {
    addOtherText = true;
    let dashIndex = tail.indexOf("-");
    let response2 = tail.slice(0, dashIndex);

    response4 = tail.slice(dashIndex + 1);
    let response5 = response2.split(",").map((str) => str.trim());
    if (response5.length > 1) {
      response6 = response5.map((item) => {
        return parseInt(item);
      }); // [3,4]
    } else {
      response6.push(response5[0]);
    }
  } else {
    response6.push(parseInt(tail.trim()));
  }

  let value1;
  // convert numbers to options strings
  response6.forEach((value) => {
    value1 = options[value - 1];
    respondentResponse2Array.push(value1);
  });

  let respondentResponse = respondentResponse2Array.join(", "); // [active learning, other]

  if (tail.includes("-")) {
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
          text: addOtherText
            ? `${surveyLangObj.response}: `
            : `${surveyLangObj.response}: ${stripHtml(stripTags(displayTail))} - `,
          bold: false,
        }),
        new TextRun({
          text: entry
            ? `${stripHtml(stripTags(respondentResponse))}`
            : surveyLangObj.noResponse,
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

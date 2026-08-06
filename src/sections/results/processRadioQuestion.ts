import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";
import { safeSplit } from "./safeSplit";
import { safeShiftToNumber } from "./safeShiftToNumber";

const processRadioQuestion = (
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

  let cleanedNote = stripTags(question.note);

  let response1 = stripHtml(stripTags(String(entry ?? "")));

  // Legacy format: "itemNum6:2", "itemNum6:no response", "itemNum6:3 - typed text"
  // New format: entry is already the clean value itself - a number, a numeric
  // string, "no response", or possibly "3 - typed text" for a write-in option.
  const isLegacyPrefixed = /^itemNum\d+\s*:/.test(response1);

  let cleanOptionNumber: number;
  let tail: string;

  if (isLegacyPrefixed) {
    let entry2 = safeSplit(response1, ":", { maxParts: 2 });
    let entry3 = [...entry2];
    cleanOptionNumber = safeShiftToNumber(entry2) ?? 999;
    tail = entry3[1] ?? "";
  } else {
    tail = response1;
    const trimmed = response1.trim();
    const parsed = parseInt(trimmed, 10);
    cleanOptionNumber =
      !Number.isNaN(parsed) && String(parsed) === trimmed ? parsed : 999;
  }

  let respondentResponse;

  // no response case
  if (cleanOptionNumber === 999) {
    if (tail && tail.includes("-")) {
      let tempArray = safeSplit(tail, "-", { maxParts: 2 });
      let responseNumber: number = +tempArray[0].trim();
      let responseText = cleanOptions[responseNumber - 1];
      respondentResponse = `${responseNumber} - ${responseText}: ${tempArray[1]}`;
    } else {
      respondentResponse = surveyLangObj.noResponse;
    }
  } else {
    // normal response
    respondentResponse = cleanOptions[cleanOptionNumber - 1];
  }

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `${surveyLangObj.item} ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `${surveyLangObj.radio}: `,
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
          text: `Note: ${stripHtml(stripTags(cleanedNote))}`,
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
          text: `Options: ${stripHtml(stripTags(question.options))}`,
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
          text: `${surveyLangObj.response}: ${cleanOptionNumber} - `,
          bold: false,
        }),
        new TextRun({
          text: `${stripHtml(stripTags(respondentResponse))}`,
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

export { processRadioQuestion };

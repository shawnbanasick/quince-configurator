import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";
import { safeSplit } from "./safeSplit";
import { safeShiftToNumber } from "./safeShiftToNumber";

const processRadioQuestion = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;
  let options = question.options;
  options = options.split(";;;");

  let cleanOptions = options.map((element) => {
    return stripHtml(stripTags(element));
  });

  let cleanedNote = stripTags(question.note);

  let response1 = stripHtml(stripTags(entry));
  let entry2 = safeSplit(response1, ":", { maxParts: 2 });
  let entry3 = [...entry2];
  let respondentResponse;
  let cleanOptionNumber: number = safeShiftToNumber(entry2) ?? 999;

  // no response case
  if (cleanOptionNumber === 999) {
    if (entry3[1].includes("-")) {
      let tempArray = safeSplit(entry3[1], "-", { maxParts: 2 });
      let responseNumber: number = +tempArray[0].trim();
      let responseText = cleanOptions[responseNumber - 1];
      respondentResponse = `${responseNumber} - ${responseText}: ${tempArray[1]}`;
    } else {
      respondentResponse = "no response";
    }
  } else {
    // normal response
    respondentResponse = cleanOptions[cleanOptionNumber - 1];
  }

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `Item ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `Radio Buttons: `,
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
          text: `Response: ${cleanOptionNumber} - `,
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

import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";
import { safeSplit } from "./safeSplit";

const processTextQuestion = (entry, question, index, indentValue, surveyLangObj) => {
  let addIndentValue = +indentValue + 100;

  let cleanedNote = stripTags(question.note);
  let entry2 = safeSplit(entry, ":", { maxParts: 2 });

  if (entry2?.[1]?.trim() === "no response") {
    entry2[1] = surveyLangObj.noResponse;
  }

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `${surveyLangObj.item} ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `${surveyLangObj.shortText}: `,
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
          text: question.note ? `Note: ${stripHtml(stripTags(cleanedNote))}` : `Note: n/a`,
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
          text: `${surveyLangObj.response}: `,
          bold: false,
        }),
        new TextRun({
          text: `${stripHtml(stripTags(entry2[1]))}`,
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

export { processTextQuestion };

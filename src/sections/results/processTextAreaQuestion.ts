import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";
import { safeSplit } from "./safeSplit";

const processTextAreaQuestion = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;
  let cleanedNote = stripTags(question.note);
  let entry2 = safeSplit(entry, ":", { maxParts: 2 });

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `Item ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `Long Text: `,
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
          text: question.note ? `Note: ${stripHtml(cleanedNote)}` : `Note: n/a`,
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
          text: `Response: `,
          bold: true,
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

export { processTextAreaQuestion };

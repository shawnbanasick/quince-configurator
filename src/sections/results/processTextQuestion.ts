import { Paragraph, TextRun } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";

const processTextQuestion = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;

  let cleanedNote = stripTags(question.note);

  let response = [
    new Paragraph({
      children: [
        // new TextRun({
        //   text: statementNumber2,
        //   bold: true,
        // }),
        new TextRun({
          text: `(Item ${index + 1})  ${stripHtml(stripTags(question.label))}`,
          bold: true,
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
          text: `Type: Short Text Input`,
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
          text: `${stripHtml(entry)}`,
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

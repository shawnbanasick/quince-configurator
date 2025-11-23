import { Paragraph, TextRun } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";

const processInformationQuestion = (question, index, indentValue) => {
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
          text: `(Item ${index + 1})  ${stripHtml(cleanedNote)}`,
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
          text: `Type: Information Message`,
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

export { processInformationQuestion };

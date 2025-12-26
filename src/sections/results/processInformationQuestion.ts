import { Paragraph, TextRun, UnderlineType } from "docx";
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
          text: `Item ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `Information: `,
          bold: false,
        }),
        new TextRun({
          text: `${stripHtml(cleanedNote)}`,
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
    // new Paragraph({
    //   children: [
    //     new TextRun({
    //       text: `Type: Information Message`,
    //       bold: false,
    //     }),
    //   ],
    //   indent: {
    //     start: addIndentValue,
    //   },
    // }),
  ];
  return response;
};

export { processInformationQuestion };

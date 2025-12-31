import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";

const processInformationQuestion = (question, index, indentValue, surveyLangObj) => {
  // let addIndentValue = +indentValue + 100;

  let cleanedNote = stripTags(question.note);

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `${surveyLangObj.item} ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `${surveyLangObj.information}: `,
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
  ];
  return response;
};

export { processInformationQuestion };

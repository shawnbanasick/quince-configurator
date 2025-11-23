import { Paragraph, TextRun } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";

const processRadioQuestion = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;
  let options = question.options;
  options = options.split(";;;");

  let cleanOptions = options.map((element) => {
    return stripHtml(element);
  });

  let cleanedNote = stripTags(question.note);

  let response1 = stripHtml(entry);
  let response2 = response1.split(":");
  let response3 = +response2[1].trim();
  let respondentResponse = cleanOptions[response3 - 1];

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
          text: `Type: Radio Button Input`,
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
          text: `Note: ${stripHtml(cleanedNote)}`,
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
          text: `Response: ${stripHtml(entry)} - `,
          bold: false,
        }),
        new TextRun({
          text: `${respondentResponse}`,
          bold: true,
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

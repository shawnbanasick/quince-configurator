import { Paragraph, TextRun } from "docx";
import { stripHtml } from "./stripHtml";

const processCheckboxQuestion = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;
  let options = stripHtml(question.options);
  options = options.split(",");
  console.log(options);

  let respondentResponse2: any = [];
  let response1 = stripHtml(entry);
  let response3 = response1.split(":");
  let response2 = response3[1].split(",");
  console.log(response2);

  response2.forEach((value) => {
    let value2 = +value.trim();
    let value3 = options[value2 - 1];
    respondentResponse2.push(value3);
  });

  let respondentResponse = respondentResponse2.join(", ");

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `(Item ${index + 1})  ${stripHtml(question.label)}`,
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
          text: `Type: Checkbox Input`,
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
          text: question.note ? `Note: ${stripHtml(question.note)}` : `Note: n/a`,
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
          text: `Options: ${stripHtml(question?.options)}`,
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
          text: entry ? `${respondentResponse}` : `no response`,
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

export { processCheckboxQuestion };

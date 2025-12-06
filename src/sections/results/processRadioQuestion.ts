import { Paragraph, TextRun } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";

const processRadioQuestion = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;
  let options = question.options;
  options = options.split(";;;");

  let cleanOptions = options.map((element) => {
    return stripHtml(stripTags(element));
  });

  let cleanedNote = stripTags(question.note);

  let response1 = stripHtml(stripTags(entry));
  let response2 = response1.split(":");
  let response3;
  let respondentResponse;
  let response3b = "";
  if (response2[1].includes("-")) {
    let tempArray = response2[1].split("-");
    // mutate array
    response3 = +tempArray.shift().trim();
    response3b = tempArray.join("-").trim();
    respondentResponse = `${cleanOptions[response3 - 1]} - ${response3b}`;
  } else {
    response3 = +response2[1].trim();
    respondentResponse = cleanOptions[response3 - 1];
  }

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
          text: `Response: ${stripHtml(stripTags(entry))} - `,
          bold: false,
        }),
        new TextRun({
          text: `${stripHtml(stripTags(respondentResponse))}`,
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

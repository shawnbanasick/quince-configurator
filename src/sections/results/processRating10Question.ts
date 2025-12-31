import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";

const processRating10Question = (entry, question, index, indentValue, surveyLangObj) => {
  let addIndentValue = +indentValue + 200;
  let options = stripHtml(stripTags(question.options));
  options = options.split(",");
  options = options.filter(Boolean);

  let entry4 = entry.split(":").map((str) => str.trim());
  let entry5;
  if (entry4[1] === "no response") {
    entry5 = Array.from({ length: options.length }, () => "nr");
  } else {
    entry5 = entry4[1].split(",").map((str) => str.trim());
  }

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `${surveyLangObj.item} ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `${surveyLangObj.rating10}: `,
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
          text: question.note ? `Note: ${stripHtml(stripTags(question.note))}` : `Note: n/a`,
          bold: false,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
  ];

  options.forEach((item, index) => {
   
      let newText = entry5?.[index].trim();
    if (newText === "nr") {
      newText = surveyLangObj.noResponse;
    }

    response.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${surveyLangObj.question}: ${item.trim()}  - `,
            bold: false,
          }),
          new TextRun({
            text: `${surveyLangObj.response}: `,
            bold: false,
          }),
          new TextRun({
            text:  `${newText}`,
            bold: false,
          }),
        ],
        indent: {
          start: addIndentValue,
        },
      })
    );
  });

  return response;
};

export { processRating10Question };

import { Paragraph, TextRun } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";

const processRating5Question = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;
  let options = stripHtml(stripTags(question.options));
  options = options.split(",");
  options = options.filter(Boolean);

  let entry4 = entry.split(":");
  let entry5 = entry4[1].split(",");

  let response = [
    new Paragraph({
      children: [
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
          text: `Type: Rating 5 Choice Input`,
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
          text: question.note ? `Note: ${stripHtml(stripTags(question.note))}` : `Note: n/a`,
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
          text: `Scale: 1 - 5`,
          bold: false,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
  ];

  options.forEach((item, index) => {
    let text = "";
    if (entry5[0].trim() === "no response") {
      text = "no response";
    }

    response.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `Question: ${item.trim()}  - `,
            bold: false,
          }),
          new TextRun({
            text: `Response: `,
            bold: false,
          }),
          new TextRun({
            text: text === "no response" ? `no response` : `${entry5[index].trim()}`,
            bold: true,
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

export { processRating5Question };

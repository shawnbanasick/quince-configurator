import { Paragraph, TextRun } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";

const processRating2Question = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;
  let options = stripHtml(stripTags(question.options));
  options = options.split(",");
  options = options.filter(Boolean);

  let scale2 = stripHtml(question.scale);
  const scale3 = scale2.split(",").map((str) => str.trim());

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
          text: `Type: Rating 2 Choice Input`,
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
          text: question.scale ? `Scale: ${scale2}` : `Scale: n/a`,
          bold: false,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
  ];

  options.forEach((item, index) => {
    let text;
    let newIndex;
    if (entry5[0].trim() === "no response") {
      text = "no response";
    } else {
      let newIndex2 = entry5[index];
      let newIndex3 = newIndex2.trim();
      newIndex = +newIndex3 - 1;
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
            text: text === "no response" ? `no response` : `${scale3[newIndex]}`,
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

export { processRating2Question };

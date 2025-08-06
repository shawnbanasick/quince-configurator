import { Paragraph, TextRun } from "docx";
import { stripHtml } from "./stripHtml";

const processRating5Question = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;
  let options = stripHtml(question.options);
  options = options.split(",");
  options = options.filter(Boolean);

  let scale2 = stripHtml(question.scale);
  const scale3 = scale2.split(",").map((str) => str.trim());
  //   let scale4 = scale2.join(",");
  //   let scale4 = scale2.split(",");

  let entry4 = entry.split(":");
  let entry5 = entry4[1].split(",");

  //   let entry3 = entry4[1].split(",");
  //   let respondentResponse2: any = [];
  //   let response1 = stripHtml(entry);
  //   let response3 = response1.split(":");
  //   let response2 = response3[1].split(",");

  //   response2.forEach((value) => {
  //     let value2 = +value.trim();
  //     let value3 = options[value2 - 1];
  //     respondentResponse2.push(value3);
  //   });

  //   let respondentResponse = respondentResponse2.join(", ");

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

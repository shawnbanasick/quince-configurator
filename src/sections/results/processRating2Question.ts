import { Paragraph, TextRun } from "docx";
import { stripHtml } from "./stripHtml";

const processRating2Question = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;
  let options = stripHtml(question.options);
  options = options.split(",");
  options = options.filter(Boolean);
  // console.log(options);

  let scale2 = stripHtml(question.scale);
  // console.log(scale2);
  const scale3 = scale2.split(",").map((str) => str.trim());
  //   let scale4 = scale2.join(",");
  // console.log(scale3);
  //   console.log(scale4);
  //   let scale4 = scale2.split(",");

  // console.log("question", question);

  // console.log("entry: ", entry);
  let entry4 = entry.split(":");
  // console.log("entry1: ", entry4[1]);
  let entry5 = entry4[1].split(",");
  // console.log("entry5: ", entry5);

  //   let entry3 = entry4[1].split(",");

  //   let respondentResponse2: any = [];
  //   let response1 = stripHtml(entry);
  //   let response3 = response1.split(":");
  //   let response2 = response3[1].split(",");
  //   console.log(response2);

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

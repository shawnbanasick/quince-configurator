import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";

const processRating2Question = (
  entry,
  question,
  index,
  indentValue,
  surveyLangObj,
) => {
  let addIndentValue = +indentValue + 200;
  let options = stripHtml(stripTags(question.options));
  options = options.split(",");
  options = options.filter(Boolean);

  let scale2 = stripHtml(question.scale);
  const scale3 = scale2.split(",").map((str) => str.trim());
  scale3.push(surveyLangObj.noResponse);

  // Legacy format: "itemNumX:1,2,nr" or "itemNumX:no response"
  // New format: entry is already the clean value - a comma list like
  // "1,2,1,1" (joined from the itemNums array) or the string "no response".
  let response1 = String(entry ?? "").trim();
  const isLegacyPrefixed = /^itemNum\d+\s*:/.test(response1);

  let tail: string;
  if (isLegacyPrefixed) {
    let entry4 = response1.split(":").map((str) => str.trim());
    tail = entry4[1] ?? "";
  } else {
    tail = response1;
  }

  // deal with no response case and nr case
  let entry5;
  if (tail === "no response" || tail === "No Response") {
    entry5 = Array.from({ length: options.length }, () => "nr");
  } else {
    entry5 = tail.split(",").map((str) => str.trim());
  }

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `${surveyLangObj.item} ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `${surveyLangObj.rating2}: `,
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
          text: question.note
            ? `Note: ${stripHtml(stripTags(question.note))}`
            : `Note: n/a`,
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
    // let text;
    let newIndex;
    if (entry5[0].trim() === "no response") {
      // text = surveyLangObj.noResponse;
      console.log("check no response");
    } else {
      let newIndex2 = entry5[index]; // 1,2,nr
      let newIndex3 = newIndex2.trim();
      if (newIndex3 === "nr") {
        newIndex = 2;
      } else {
        newIndex = +newIndex3 - 1; // adjust to array position
      }
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
            text: `${scale3[newIndex]}`,
            bold: false,
          }),
        ],
        indent: {
          start: addIndentValue,
        },
      }),
    );
  });

  return response;
};

export { processRating2Question };

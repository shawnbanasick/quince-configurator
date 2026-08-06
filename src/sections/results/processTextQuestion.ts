import { Paragraph, TextRun, UnderlineType } from "docx";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";
import { safeSplit } from "./safeSplit";

// New itemNums format passes a clean value directly (e.g. "no response").
// Legacy format passed a raw string like "itemNum2: some response text" that
// needed the "itemNumX:" prefix split off first. Detect which shape we got
// so both keep working.
const extractResponseText = (entry: any): string => {
  if (typeof entry === "string" && /^itemNum\d+\s*:/.test(entry)) {
    const split = safeSplit(entry, ":", { maxParts: 2 });
    return split?.[1]?.trim() ?? "";
  }
  if (typeof entry === "string") {
    return entry.trim();
  }
  return entry === undefined || entry === null ? "" : String(entry);
};

const processTextQuestion = (
  entry,
  question,
  index,
  indentValue,
  surveyLangObj,
) => {
  let addIndentValue = +indentValue + 100;

  let cleanedNote = stripTags(question.note);
  let responseText = extractResponseText(entry);

  if (responseText === "no response") {
    responseText = surveyLangObj.noResponse;
  }

  let response = [
    new Paragraph({
      children: [
        new TextRun({
          text: `${surveyLangObj.item} ${index + 1} - `,
          bold: true,
        }),
        new TextRun({
          text: `${surveyLangObj.shortText}: `,
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
            ? `Note: ${stripHtml(stripTags(cleanedNote))}`
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
          text: `${surveyLangObj.response}: `,
          bold: false,
        }),
        new TextRun({
          text: `${stripHtml(stripTags(responseText))}`,
          bold: false,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
  ];
  return response;
};

export { processTextQuestion };

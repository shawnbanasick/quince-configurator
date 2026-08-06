import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

type RecordMap = Record<string, any>;

const wordPresort = (data: RecordMap, presortLangObj: any): Paragraph[] => {
  const workingData = cloneDeep(data);
  const indentValue = 400;
  const items = Array.isArray(workingData) ? workingData : [workingData];

  const itemParagraphs: any = [];
  items.forEach((item: RecordMap) => {
    const paragraphs: Paragraph[] = [];
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: presortLangObj.presortValues,
            bold: true,
          }),
        ],
        // heading: HeadingLevel.HEADING_4,
        indent: {
          start: 200,
        },
        spacing: {
          before: 100,
        },
      }),
    );

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${presortLangObj.numberOfStatementsViewedPositively}: ${item.counts?.pos ?? 0}`,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
    );

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${presortLangObj.numberOfStatementsViewedNeutral}: ${item.counts?.neu ?? 0}`,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
    );

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${presortLangObj.numberOfStatementsViewedNegatively}: ${item.counts?.neg ?? 0}`,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
    );

    let posItems = item.items?.pos ?? [];
    posItems = posItems.filter((num: number) => !isNaN(num)); // Filter out NaN values
    let neuItems = item.items?.neu ?? [];
    neuItems = neuItems.filter((num: number) => !isNaN(num)); // Filter out NaN values
    let negItems = item.items?.neg ?? [];
    negItems = negItems.filter((num: number) => !isNaN(num)); // Filter out NaN values

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${presortLangObj.statementsViewedPositively}: ${posItems.join(", ") ?? 0}`,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
    );

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${presortLangObj.statementsViewedNeutral}: ${neuItems.join(", ") ?? 0}`,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
    );

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${presortLangObj.statementsViewedNegatively}: ${negItems.join(", ") ?? 0}`,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
    );

    itemParagraphs.push(paragraphs);
  });
  return itemParagraphs;
};

export { wordPresort };

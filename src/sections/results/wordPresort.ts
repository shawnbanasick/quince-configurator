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
      })
    );
    // Filter for values starting with "(timeOn"
    const timeEntries = Object.values(item).filter(
      (value: any) =>
        (typeof value === "string" && value.trim().startsWith("(num")) ||
        value.trim().startsWith("(pos") ||
        value.trim().startsWith("(neu") ||
        value.trim().startsWith("(neg")
    );

    // Clean and map to Paragraphs
    timeEntries.forEach((entry: string) => {
      if (entry.startsWith("(numPos)")) {
        entry = `${presortLangObj.numberOfStatementsViewedPositively}: ${entry.slice(9).trim()}`;
      }
      if (entry.startsWith("(numNeu)")) {
        entry = `${presortLangObj.numberOfStatementsViewedNeutral}: ${entry.slice(9).trim()}`;
      }
      if (entry.startsWith("(numNeg)")) {
        entry = `${presortLangObj.numberOfStatementsViewedNegatively}: ${entry.slice(9).trim()}`;
      }
      if (entry.startsWith("(pos)")) {
        entry = `${presortLangObj.statementsViewedPositively}: ${entry.slice(6).trim()}`;
      }
      if (entry.startsWith("(neu)")) {
        entry = `${presortLangObj.statementsViewedNeutral}: ${entry.slice(6).trim()}`;
      }
      if (entry.startsWith("(neg)")) {
        entry = `${presortLangObj.statementsViewedNegatively}: ${entry.slice(6).trim()}`;
      }
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: entry,
            }),
          ],
          indent: {
            start: indentValue,
          },
        })
      );
    });
    itemParagraphs.push(paragraphs);
  });
  return itemParagraphs;
};

export { wordPresort };

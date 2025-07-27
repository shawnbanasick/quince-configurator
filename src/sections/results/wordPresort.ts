import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

type RecordMap = Record<string, any>;

const wordPresort = (data: RecordMap): Paragraph[] => {
  const workingData = cloneDeep(data);
  const indentValue = 300;
  const items = Array.isArray(workingData) ? workingData : [workingData];

  const itemParagraphs: any = [];
  items.forEach((item: RecordMap) => {
    const paragraphs: Paragraph[] = [];
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Pre-Sort Values",
            bold: true,
          }),
        ],
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
        entry = `Number of statements viewed positively: ${entry.slice(9).trim()}`;
      }
      if (entry.startsWith("(numNeu)")) {
        entry = `Number of statements viewed as neutral: ${entry.slice(9).trim()}`;
      }
      if (entry.startsWith("(numNeg)")) {
        entry = `Number of statements viewed negatively: ${entry.slice(9).trim()}`;
      }
      if (entry.startsWith("(pos)")) {
        entry = `Statements viewed positively: ${entry.slice(6).trim()}`;
      }
      if (entry.startsWith("(neu)")) {
        entry = `Statements viewed as neutral: ${entry.slice(6).trim()}`;
      }
      if (entry.startsWith("(neg)")) {
        entry = `Statements viewed negatively: ${entry.slice(6).trim()}`;
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

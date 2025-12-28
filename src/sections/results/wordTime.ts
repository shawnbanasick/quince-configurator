import { Paragraph, TextRun, HeadingLevel } from "docx";
import { cloneDeep } from "es-toolkit";

type RecordMap = Record<string, any>;

interface TimeEntry {
  name: string;
  page: string;
}

const parseTimeEntry = (entry: string): TimeEntry | null => {
  try {
    // Remove parentheses and validate format
    const cleaned = entry.replace(/^\(|\)$/g, "").trim();

    if (!cleaned.startsWith("timeOn")) {
      return null;
    }

    // Remove "timeOn" prefix
    const withoutPrefix = cleaned.slice(6);

    // Split by colon
    const parts = withoutPrefix.split(":");

    if (parts.length < 2) {
      return null;
    }

    // Extract name (remove last 4 chars from first part)
    const namePart = parts[0];
    if (namePart.length < 4) {
      return null;
    }
    const name = namePart.slice(0, -5);

    // Build page reference
    const pageParts = parts
      .slice(1)
      .map((p) => p.trim())
      .filter(Boolean);
    const page = pageParts.join(":");

    return { name, page };
  } catch (error) {
    console.error("Error parsing time entry:", error);
    return null;
  }
};

const wordTime = (data: RecordMap | RecordMap[]): Paragraph[][] => {
  // Input validation
  if (!data || (typeof data !== "object" && !Array.isArray(data))) {
    console.warn("Invalid input data provided to wordTime");
    return [];
  }

  const workingData = cloneDeep(data);
  const indentValue1 = 200;
  const indentValue2 = 400;
  const items = Array.isArray(workingData) ? workingData : [workingData];

  const itemParagraphs: Paragraph[][] = [];

  items.forEach((item: RecordMap) => {
    // Validate item is an object
    if (!item || typeof item !== "object") {
      itemParagraphs.push([]);
      return;
    }

    const paragraphs: Paragraph[] = [];

    paragraphs.push(
      new Paragraph({
        children: [new TextRun({ text: "Time On Page", bold: true, size: 20 })],
        indent: { start: indentValue1 },
        // heading: HeadingLevel.HEADING_4,
        spacing: { before: 100 },
      })
    );
    // Safely filter for values starting with "(timeOn"
    const timeEntries = Object.values(item).filter(
      (value: any): value is string =>
        typeof value === "string" && value.trim().startsWith("(timeOn")
    );

    // Process each entry
    timeEntries.forEach((entry: string) => {
      const parsed = parseTimeEntry(entry);

      if (!parsed) {
        console.warn(`Failed to parse time entry: ${entry}`);
        return;
      }

      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${parsed.name} Page: ${parsed.page}`,
            }),
          ],
          indent: {
            start: indentValue2,
          },
        })
      );
    });

    itemParagraphs.push(paragraphs);
  });

  return itemParagraphs;
};

export { wordTime };
export type { RecordMap, TimeEntry };

/*
import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

type RecordMap = Record<string, any>;

const wordTime = (data: RecordMap): Paragraph[] => {
  const workingData = cloneDeep(data);
  const indentValue = 200;
  const items = Array.isArray(workingData) ? workingData : [workingData];

  const itemParagraphs: any = [];
  items.forEach((item: RecordMap) => {
    const paragraphs: Paragraph[] = [];
    // Filter for values starting with "(timeOn"
    const timeEntries = Object.values(item).filter(
      (value: any) => typeof value === "string" && value.trim().startsWith("(timeOn")
    );

    // Clean and map to Paragraphs
    timeEntries.forEach((entry: string) => {
      const cleaned = entry.replace("(", "").replace(")", "");
      const cleaned2 = cleaned.slice(6); // remove timeOn
      const cleaned3 = cleaned2.split(":");
      const cleaned4 = cleaned3[0].slice(0, -4);

      if (cleaned3.length > 2) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${cleaned4} Page: ${cleaned3[1].trim()}:${cleaned3[2].trim()}:${cleaned3[3].trim()}`,
              }),
            ],
            indent: {
              start: indentValue,
            },
          })
        );
      } else {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${cleaned4} Page: ${cleaned3[1].trim()}`,
              }),
            ],
            indent: {
              start: indentValue,
            },
          })
        );
      }
    });
    itemParagraphs.push(paragraphs);
  });
  return itemParagraphs;
};

export { wordTime };
*/

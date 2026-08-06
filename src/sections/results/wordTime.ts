import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

type RecordMap = Record<string, any>;

interface TimeEntry {
  name: string;
  page: string;
}

const parseTimeEntry = (entry: string, langObj: any): TimeEntry | null => {
  try {
    // Remove parentheses and validate format

    // Extract name (remove last 4 chars from first part)

    let name = entry;

    if (name === "consent") {
      name = langObj.consentPage;
    }
    if (name === "welcome") {
      name = langObj.welcomePage;
    }
    if (name === "presort") {
      name = langObj.presortPage;
    }
    if (name === "refine") {
      name = langObj.refinePage;
    }
    if (name === "sort") {
      name = langObj.sortPage;
    }
    if (name === "postsort") {
      name = langObj.postsortPage;
    }
    if (name === "survey") {
      name = langObj.surveyPage;
    }

    return { name, page: "" };
  } catch (error) {
    console.error("Error parsing time entry:", error);
    return null;
  }
};

const wordTime = (
  data: RecordMap | RecordMap[],
  langObj: any,
): Paragraph[][] => {
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
        children: [
          new TextRun({ text: langObj.timeOnPage, bold: true, size: 20 }),
        ],
        indent: { start: indentValue1 },
        // heading: HeadingLevel.HEADING_4,
        spacing: { before: 100 },
      }),
    );
    // Safely filter for values starting with "(timeOn"
    const timeEntries = Object.keys(item.timing);

    // Process each entry
    timeEntries.forEach((entry: string) => {
      const parsed = parseTimeEntry(entry, langObj);

      if (!parsed) {
        console.warn(`Failed to parse time entry: ${entry}`);
        return;
      }

      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${parsed.name}: ${item.timing[entry]}`,
            }),
          ],
          indent: {
            start: indentValue2,
          },
        }),
      );
    });

    itemParagraphs.push(paragraphs);
  });

  return itemParagraphs;
};

export { wordTime };
export type { RecordMap, TimeEntry };

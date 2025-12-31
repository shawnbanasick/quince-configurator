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
    let name = namePart.slice(0, -5);

    if (name === "Consent") {
      name = langObj.consentPage;
    }
    if (name === "Welcome") {
      name = langObj.welcomePage;
    }
    if (name === "Presort") {
      name = langObj.presortPage;
    }
    if (name === "Refine") {
      name = langObj.refinePage;
    }
    if (name === "Sort") {
      name = langObj.sortPage;
    }
    if (name === "Postsort") {
      name = langObj.postsortPage;
    }
    if (name === "Survey") {
      name = langObj.surveyPage;
    }


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

const wordTime = (data: RecordMap | RecordMap[], langObj: any): Paragraph[][] => {
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
        children: [new TextRun({ text: langObj.timeOnPage, bold: true, size: 20 })],
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
      const parsed = parseTimeEntry(entry, langObj);

      if (!parsed) {
        console.warn(`Failed to parse time entry: ${entry}`);
        return;
      }

      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${parsed.name}: ${parsed.page}`,
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
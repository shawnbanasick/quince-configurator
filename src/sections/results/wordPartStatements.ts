import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

// Type definitions for better type safety
interface ParticipantData {
  r20: string;
  [key: string]: any;
}

interface SortValueItem {
  value: number;
  statement: string;
}

interface WordPartStatementsParams {
  data: ParticipantData[];
  sortHeaders: number[];
  statements: string;
  participantIds: string[];
}

/**
 * Parses sort data from participant record
 */
const parseSortData = (r20Value: string): number[] => {
  if (!r20Value || typeof r20Value !== "string") {
    throw new Error("Invalid r20 value provided");
  }

  const parts = r20Value.split(":");
  if (parts.length < 2) {
    throw new Error("Invalid r20 format - expected colon separator");
  }

  const sortValues = parts[1].split("|");
  return sortValues.map((str: string) => {
    const parsed = parseInt(str.trim(), 10);
    if (isNaN(parsed)) {
      throw new Error(`Invalid sort value: ${str}`);
    }
    return parsed;
  });
};

/**
 * Creates sort value items by combining values with statements
 */
const createSortValueItems = (sortValues: number[], statements: string[]): SortValueItem[] => {
  if (sortValues.length !== statements.length) {
    console.warn(`Mismatch: ${sortValues.length} sort values vs ${statements.length} statements`);
  }

  return sortValues.map((value, index) => ({
    value,
    statement: statements[index] || `Statement ${index + 1} (missing)`,
  }));
};

/**
 * Groups sort value items by their sort value
 */
const groupBySortValue = (items: SortValueItem[]): Map<number, SortValueItem[]> => {
  const grouped = new Map<number, SortValueItem[]>();

  items.forEach((item) => {
    if (!grouped.has(item.value)) {
      grouped.set(item.value, []);
    }
    grouped.get(item.value)!.push(item);
  });

  return grouped;
};

/**
 * Creates paragraphs for a single participant's data
 */
const createParticipantParagraphs = (
  participantIndex: number,
  participantId: string,
  sortValueItems: SortValueItem[],
  sortHeaders: number[]
): Paragraph[] => {
  const paragraphs: Paragraph[] = [];
  const groupedItems = groupBySortValue(sortValueItems);

  // Participant header
  paragraphs.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `Participant ${participantIndex + 1}. ${participantId}`,
          bold: true,
        }),
      ],
      spacing: { before: 400 },
    })
  );

  // Process each sort value in descending order (as in original code with reverse)
  const sortedHeaders = [...sortHeaders].sort((a, b) => b - a);

  sortedHeaders.forEach((sortValue) => {
    const itemsForValue = groupedItems.get(sortValue) || [];

    if (itemsForValue.length > 0) {
      // Sort value header
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `Sort Value ${sortValue}`,
              bold: false,
              underline: {},
            }),
          ],
          indent: { start: 200 },
        })
      );

      // Add statements for this sort value
      itemsForValue.forEach((item) => {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: item.statement,
                bold: false,
              }),
            ],
            indent: { start: 400 },
          })
        );
      });
    }
  });

  return paragraphs;
};

/**
 * Creates document header paragraph
 */
const createHeaderParagraph = (): Paragraph => {
  return new Paragraph({
    children: [
      new TextRun({
        text: "Participant Statement Q Sort Values",
        bold: true,
        size: 40,
      }),
    ],
    pageBreakBefore: true,
    heading: HeadingLevel.HEADING_1,
    thematicBreak: true,
  });
};

/**
 * Validates input parameters
 */

const validateInputs = (params: WordPartStatementsParams): void => {
  const { data, sortHeaders, statements, participantIds } = params;

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("Data must be a non-empty array");
  }

  if (!Array.isArray(sortHeaders) || sortHeaders.length === 0) {
    throw new Error("Sort headers must be a non-empty array");
  }

  if (typeof statements !== "string" || !statements.trim()) {
    throw new Error("Statements must be a non-empty string");
  }

  if (!Array.isArray(participantIds) || participantIds.length !== data.length) {
    throw new Error("Participant IDs array length must match data array length");
  }
};

/**
 * Generates Word document paragraphs for participant Q-sort statements
 *
 * @param data - Array of participant data containing r20 sort values
 * @param sortHeaders - Array of possible sort values to display
 * @param statements - Newline-separated string of statements
 * @param participantIds - Array of participant identifiers
 * @returns Array of Paragraph objects for Word document
 */
const wordPartStatements = (
  data: ParticipantData[],
  sortHeaders: number[],
  statements: string,
  participantIds: string[]
): Paragraph[] => {
  console.log(sortHeaders);

  try {
    console.log("sort Headers", sortHeaders);

    // Validate inputs
    validateInputs({ data, sortHeaders, statements, participantIds });

    // Parse statements
    const statementsArray = statements
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    // Create working copy of data
    const workingData = cloneDeep(data);

    // Initialize result with header
    const allParagraphs: Paragraph[] = [createHeaderParagraph()];

    // console.log(
    //   `Processing ${workingData.length} participants with ${statementsArray.length} statements`
    // );

    // Process each participant
    workingData.forEach((participant, index) => {
      try {
        // Parse sort data
        const sortValues = parseSortData(participant.r20);

        // Create sort value items
        const sortValueItems = createSortValueItems(sortValues, statementsArray);

        // Create paragraphs for this participant
        const participantParagraphs = createParticipantParagraphs(
          index,
          participantIds[index],
          sortValueItems,
          sortHeaders
        );

        // Add to result
        allParagraphs.push(...participantParagraphs);

        // console.log(`Processed participant ${index + 1}: ${participantIds[index]}`);
      } catch (error) {
        console.error(`Error processing participant ${index + 1}:`, error);

        // Add error paragraph
        allParagraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `Error processing Participant ${index + 1}: ${
                  error instanceof Error ? error.message : "Unknown error"
                }`,
                bold: true,
                color: "FF0000", // Red color for errors
              }),
            ],
            spacing: { before: 400 },
          })
        );
      }
    });

    return allParagraphs;
  } catch (error) {
    console.error("Error in wordPartStatements:", error);

    // Return error paragraph
    return [
      new Paragraph({
        children: [
          new TextRun({
            text: `Critical Error: ${
              error instanceof Error ? error.message : "Unknown error occurred"
            }`,
            bold: true,
            color: "FF0000",
          }),
        ],
      }),
    ];
  }
};

export { wordPartStatements, type ParticipantData, type SortValueItem };

import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { extractStatementAnalysisData } from "./extractStatementAnalysisData";
// Type definitions for better type safety
interface ParticipantData {
  r20: string;
  [key: string]: any;
}

interface SortValueItem {
  value: number;
  statement: string;
  stateNum: number;
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
    stateNum: index + 1,
  }));
};

//   const rows = matrix.length;
//   const cols = matrix[0].length;

//   return Array.from({ length: cols }, (_, colIndex) =>
//     Array.from({ length: rows }, (_, rowIndex) =>
//       matrix[rowIndex][colIndex]
//     )
//   );
// };

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
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 100 },
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
                text: `(s${item.stateNum}) `,
                bold: false,
              }),
              new TextRun({
                text: item.statement,
                bold: false,
              }),
            ],
            indent: { left: 600, hanging: 200 },
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
const wordStatementAnalysis = (
  data: ParticipantData[],
  sortHeaders: number[],
  statements: string,
  participantIds: string[]
): Paragraph[] => {
  try {
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

    // console.log(JSON.stringify(workingData, null, 2));

    const statementSortValues = extractStatementAnalysisData([...workingData]);
    console.log(statementSortValues);

    // Process each participant
    workingData.forEach((participant, index) => {
      try {
        // Parse sort data - returns arrays of sort values by participant
        const sortValues: number[] = parseSortData(participant.r20);

        // const invertedArray: any[] = invertArray(sortValues);

        // Returns array of objects with properties "stateNum, Statement, and sort value"
        const sortValueItems = createSortValueItems(sortValues, statementsArray);

        // console.log(sortValueItems);

        // Create paragraphs for this participant
        const participantParagraphs = createParticipantParagraphs(
          index,
          participantIds[index],
          sortValueItems,
          sortHeaders
        );

        // Add to result
        allParagraphs.push(...participantParagraphs);
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

export { wordStatementAnalysis, type ParticipantData, type SortValueItem };

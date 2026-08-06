import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

// Type definitions for better type safety
interface ParticipantData {
  r20?: string;
  sort?: number[];
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
 * Resolves a display ID for a participant.
 *
 * Prefers the externally-provided ID (e.g. from props.partNames) when
 * available, since that's still the source of truth when it lines up.
 * Falls back to identity fields carried directly on the new data format
 * (randomId, partId, id), and finally to a numbered placeholder, so a
 * length mismatch between `data` and `participantIds` no longer crashes
 * the export - it just degrades gracefully for the unmatched entries.
 */
const resolveParticipantId = (
  participant: ParticipantData,
  index: number,
  providedId?: string,
): string => {
  if (providedId) return providedId;

  return (
    participant.randomId ??
    participant.partId ??
    participant.id ??
    `Participant ${index + 1}`
  );
};

/**
 * Parses sort data from a participant record.
 *
 * New format: participant.sort is already an array of numbers, one entry
 * per statement, in statement order (e.g. [-2,-2,0,-2,1,3,4,...]).
 *
 * Legacy format: participant.r20 is a string like "prefix:2|-1|3|..." that
 * needs the prefix stripped and the pipe-separated values parsed.
 */
const parseSortData = (participant: ParticipantData): number[] => {
  if (Array.isArray(participant.sort)) {
    return participant.sort.map((value) => {
      const num = Number(value);
      if (Number.isNaN(num)) {
        throw new Error(`Invalid sort value: ${value}`);
      }
      return num;
    });
  }

  const r20Value = participant.r20;
  if (!r20Value || typeof r20Value !== "string") {
    throw new Error(
      "Invalid sort data provided - expected a 'sort' array or 'r20' string",
    );
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
const createSortValueItems = (
  sortValues: number[],
  statements: string[],
): SortValueItem[] => {
  if (sortValues.length !== statements.length) {
    console.warn(
      `Mismatch: ${sortValues.length} sort values vs ${statements.length} statements`,
    );
  }

  return sortValues.map((value, index) => ({
    value,
    statement: statements[index] || `Statement ${index + 1} (missing)`,
    stateNum: index + 1,
  }));
};

/**
 * Groups sort value items by their sort value
 */
const groupBySortValue = (
  items: SortValueItem[],
): Map<number, SortValueItem[]> => {
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
  sortHeaders: number[],
  partStatementsLangObj: any,
): Paragraph[] => {
  const paragraphs: Paragraph[] = [];
  const groupedItems = groupBySortValue(sortValueItems);

  // Participant header
  paragraphs.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `${partStatementsLangObj.participant} ${participantIndex + 1}. ${participantId}`,
          bold: true,
        }),
      ],
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 100 },
    }),
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
              text: `${partStatementsLangObj.sortValue} ${sortValue}`,
              bold: false,
              underline: {},
            }),
          ],
          indent: { start: 200 },
        }),
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
          }),
        );
      });
    }
  });

  return paragraphs;
};

/**
 * Creates document header paragraph
 */
const createHeaderParagraph = (partStatementsLangObj: any): Paragraph => {
  return new Paragraph({
    children: [
      new TextRun({
        text: partStatementsLangObj.statementQsortValues,
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

  if (!Array.isArray(participantIds)) {
    throw new Error("Participant IDs must be an array");
  }

  if (participantIds.length !== data.length) {
    // Don't hard-fail: the new data format carries its own identity fields
    // (randomId, partId, id) per participant, so resolveParticipantId() can
    // fill the gap for any entries the provided participantIds array is
    // missing or has extra of.
    console.warn(
      `Participant IDs array length (${participantIds.length}) does not match data array length (${data.length}). Falling back to participant identity fields where needed.`,
    );
  }
};

/**
 * Generates Word document paragraphs for participant Q-sort statements
 *
 * @param data - Array of participant data containing sort values (new "sort"
 *   array format, or legacy "r20" string format)
 * @param sortHeaders - Array of possible sort values to display
 * @param statements - Newline-separated string of statements
 * @param participantIds - Array of participant identifiers
 * @returns Array of Paragraph objects for Word document
 */
const wordPartStatements = (
  data: ParticipantData[],
  sortHeaders: number[],
  statements: string,
  participantIds: string[],
  partStatementsLangObj: any,
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
    const allParagraphs: Paragraph[] = [
      createHeaderParagraph(partStatementsLangObj),
    ];

    // Process each participant
    workingData.forEach((participant, index) => {
      try {
        // Parse sort data (handles both new "sort" array and legacy "r20" string)
        const sortValues = parseSortData(participant);

        // Create sort value items
        const sortValueItems = createSortValueItems(
          sortValues,
          statementsArray,
        );

        // Resolve this participant's display ID, falling back to identity
        // fields on the record itself if participantIds doesn't cover this index
        const resolvedId = resolveParticipantId(
          participant,
          index,
          participantIds[index],
        );

        // Create paragraphs for this participant
        const participantParagraphs = createParticipantParagraphs(
          index,
          resolvedId,
          sortValueItems,
          sortHeaders,
          partStatementsLangObj,
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
          }),
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

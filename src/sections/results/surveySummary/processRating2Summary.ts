import { Paragraph, TextRun, HeadingLevel } from "docx";
import { stripHtml } from "../stripHtml";
import { stripTags } from "../../utils/stripTags";

// Type definitions for better type safety
interface SurveyItem {
  options: string;
  label?: string;
  note?: string;
  scale?: string;
}

interface DataEntry {
  [key: string]: string;
}

interface ResponseStats {
  question: string;
  scaleOption1: {
    label: string;
    count: number;
    percentage: number;
  };
  scaleOption2: {
    label: string;
    count: number;
    percentage: number;
  };
  noResponse: {
    count: number;
    percentage: number;
  };
}

interface PositionCounts {
  [key: string]: number;
}

/**
 * Counts occurrences by position in 2D array
 */
const countByPosition = (arr2D: any[][]): Map<string, number>[] => {
  if (!arr2D.length) return [];

  const limitLength = Math.max(...arr2D.map((row) => row.length));
  const positionCounts: Map<string, number>[] = [];

  // Initialize a Map for each position
  for (let pos = 0; pos < limitLength; pos++) {
    positionCounts[pos] = new Map<string, number>();
  }

  // Count occurrences at each position
  arr2D.forEach((row) => {
    row.forEach((value, position) => {
      if (position < positionCounts.length) {
        const map = positionCounts[position];
        map.set(value, (map.get(value) || 0) + 1);
      }
    });
  });

  return positionCounts;
};

/**
 * Rounds a number to specified decimal places
 */
const roundToDecimals = (num: number, decimals: number): number => {
  const multiplier = Math.pow(10, decimals);
  return Math.round(num * multiplier) / multiplier;
};

/**
 * Safely strips HTML and returns fallback if empty
 */
const safeStripHtml = (text: string | undefined, fallback = "n/a"): string => {
  if (!text) return fallback;
  const stripped = stripHtml(stripTags(text));
  return stripped || fallback;
};

/**
 * Calculates percentage with proper rounding
 */
const calculatePercentage = (count: number, total: number): number => {
  return total > 0 ? roundToDecimals((count / total) * 100, 1) : 0;
};

/**
 * Parses and validates survey options
 */
const parseQuestions = (optionsString: string): string[] => {
  const questions = optionsString.split(";;;").filter(Boolean);
  if (questions.length === 0) {
    throw new Error("No valid questions found in options");
  }
  return questions;
};

/**
 * Parses scale labels
 */
const parseScaleLabels = (scaleString?: string): string[] => {
  if (!scaleString) return ["Option 1", "Option 2"]; // Default labels
  return scaleString.split(";;;").filter(Boolean);
};

/**
 * Extracts and processes response data for rating questions
 */
const extractRatingResponses = (
  filteredData: DataEntry[],
  itemIndex: number,
  numQuestions: number,
  delimiter: string = ","
): PositionCounts[] => {
  const key = `itemNum${itemIndex + 1}`;
  const allResponses: string[][] = [];

  filteredData.forEach((entry) => {
    const value = entry[key]?.trim();

    if (!value || value === "no response") {
      // Create array of "nr" for all questions if no response
      allResponses.push(Array(numQuestions).fill("nr"));
    } else {
      // Split responses and clean them
      const responses = value
        .split(delimiter)
        .map((response) => response.trim())
        .filter((response) => response.length > 0);

      // Pad with "nr" if not enough responses
      while (responses.length < numQuestions) {
        responses.push("nr");
      }

      allResponses.push(responses.slice(0, numQuestions));
    }
  });

  // Count occurrences by position
  const counts = countByPosition(allResponses);

  // Convert Maps to objects for easier handling
  return counts.map((countMap) => Object.fromEntries(countMap));
};

/**
 * Creates statistics for each question
 */
const createQuestionStats = (
  questions: string[],
  responseCounts: PositionCounts[],
  scaleLabels: string[],
  totalResponses: number
): ResponseStats[] => {
  return questions.map((question, index) => {
    const counts = responseCounts[index] || {};

    const option1Count = counts["1"] || 0;
    const option2Count = counts["2"] || 0;
    const noResponseCount = counts["nr"] || 0;

    return {
      question: stripHtml(question),
      scaleOption1: {
        label: scaleLabels[0] || "Option 1",
        count: option1Count,
        percentage: calculatePercentage(option1Count, totalResponses),
      },
      scaleOption2: {
        label: scaleLabels[1] || "Option 2",
        count: option2Count,
        percentage: calculatePercentage(option2Count, totalResponses),
      },
      noResponse: {
        count: noResponseCount,
        percentage: calculatePercentage(noResponseCount, totalResponses),
      },
    };
  });
};

/**
 * Creates header paragraphs for the summary
 */
const createHeaderParagraphs = (item: SurveyItem, index: number, text: string): Paragraph[] => {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: `Item ${index + 1}. ${text}`,
          bold: false,
          size: 28,
        }),
      ],
      spacing: { before: 300 },
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: safeStripHtml(item.label),
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: safeStripHtml(item.note),
          bold: true,
        }),
      ],
      indent: {
        left: 200,
      },
    }),
  ];
};

/**
 * Creates result paragraphs for each question with responses listed below
 */
const createQuestionParagraphs = (questionStats: ResponseStats[]): Paragraph[] => {
  const paragraphs: Paragraph[] = [];

  questionStats.forEach((stats, index) => {
    // Question statement paragraph
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${index + 1}. ${stats.question}`,
            bold: false,
          }),
        ],
        indent: { start: 200 },
        spacing: { after: 100 }, // Small space after question
      })
    );

    // Scale Option 1 response
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${stats.scaleOption1.label}: `,
            bold: false,
          }),
          new TextRun({
            text: `${stats.scaleOption1.percentage.toFixed(1)}% (${stats.scaleOption1.count})`,
            bold: false,
          }),
        ],
        indent: { start: 400 }, // Double indent for responses
      })
    );

    // Scale Option 2 response
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${stats.scaleOption2.label}: `,
            bold: false,
          }),
          new TextRun({
            text: `${stats.scaleOption2.percentage.toFixed(1)}% (${stats.scaleOption2.count})`,
            bold: false,
          }),
        ],
        indent: { start: 400 },
      })
    );

    // No Response
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `No Response: `,
            bold: false,
          }),
          new TextRun({
            text: `${stats.noResponse.percentage.toFixed(1)}% (${stats.noResponse.count})`,
            bold: false,
          }),
        ],
        indent: { start: 400 },
        spacing: { after: 200 }, // Space after each question group
      })
    );
  });

  return paragraphs;
};

/**
 * Processes rating survey data and generates summary paragraphs
 * Handles multiple rating questions with binary scale responses
 */
const processRating2Summary = (
  filteredData: DataEntry[],
  partNames: string[],
  item: SurveyItem,
  index: number,
  text: string,
  responseDelimiter: string = ","
): Paragraph[] => {
  try {
    // Validate inputs
    if (!filteredData?.length) {
      throw new Error("No filtered data provided");
    }
    if (!item?.options) {
      throw new Error("No options found in survey item");
    }
    if (!partNames?.length) {
      throw new Error("No participants provided");
    }

    // Parse questions and scale labels
    const questions = parseQuestions(item.options);
    const scaleLabels = parseScaleLabels(item.scale);
    const totalResponses = partNames.length;

    // Extract and process responses
    const responseCounts = extractRatingResponses(
      filteredData,
      index,
      questions.length,
      responseDelimiter
    );

    // Create statistics for each question
    const questionStats = createQuestionStats(
      questions,
      responseCounts,
      scaleLabels,
      totalResponses
    );

    // Log for debugging
    console.log(`Item ${index + 1} Rating Summary:`, {
      totalParticipants: totalResponses,
      questionsCount: questions.length,
      scaleLabels,
      questionStats,
    });

    // Generate document paragraphs
    const headerParagraphs = createHeaderParagraphs(item, index, text);
    const questionParagraphs = createQuestionParagraphs(questionStats);

    return [...headerParagraphs, ...questionParagraphs];
  } catch (error: any) {
    console.error(`Error processing rating summary for item ${index + 1}:`, error);

    // Return error paragraph instead of throwing
    return [
      new Paragraph({
        children: [
          new TextRun({
            text: `Error processing Item ${index + 1}: ${error.message}`,
            bold: true,
            color: "FF0000", // Red color for errors
          }),
        ],
        spacing: { before: 300 },
      }),
    ];
  }
};

export { processRating2Summary, type ResponseStats };

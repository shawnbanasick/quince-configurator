import { Paragraph, TextRun } from "docx";
import { stripHtml } from "../stripHtml";

// Type definitions for better type safety
interface SurveyItem {
  options: string;
  label?: string;
  note?: string;
}

interface DataEntry {
  [key: string]: string;
}

interface OptionStats {
  option: string;
  count: number;
  percentage: number;
}

/**
 * Counts occurrences of values in an array
 */
const countOccurrences = <T>(arr: T[]): Map<T, number> => {
  return arr.reduce((acc, value) => {
    acc.set(value, (acc.get(value) || 0) + 1);
    return acc;
  }, new Map<T, number>());
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
  const stripped = stripHtml(text);
  return stripped || fallback;
};

/**
 * Extracts response values for a specific item from filtered data
 * Handles multiple responses separated by semicolons
 */
const extractResponseValues = (
  filteredData: DataEntry[],
  itemIndex: number,
  delimiter: string = ";"
): string[] => {
  const key = `itemNum${itemIndex + 1}`;
  const allResponses: string[] = [];

  filteredData.forEach((entry) => {
    const value = entry[key]?.trim();

    if (!value) {
      allResponses.push("no response");
    } else {
      // Split by delimiter and clean up each response
      const responses = value
        .split(delimiter)
        .map((response) => response.trim())
        .filter((response) => response.length > 0);

      if (responses.length === 0) {
        allResponses.push("no response");
      } else {
        allResponses.push(...responses);
      }
    }
  });

  return allResponses;
};

/**
 * Calculates statistics for each answer option
 */
const calculateOptionStats = (
  answerOptions: string[],
  responseCounts: Map<string, number>,
  totalResponses: number
): OptionStats[] => {
  const allOptions = [...answerOptions, "no response"];

  return allOptions.map((option, index) => {
    let count = 0;

    if (index < answerOptions.length) {
      // For regular options, look for the option index (1-based)
      count = responseCounts.get((index + 1).toString()) || 0;
    } else {
      // For "no response", look for the actual "no response" key
      count = responseCounts.get("no response") || 0;
    }

    const percentage = totalResponses > 0 ? roundToDecimals((count / totalResponses) * 100, 1) : 0;

    return {
      option,
      count,
      percentage,
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
 * Creates option result paragraphs
 * Shows both count and percentage, with total response info for multiple responses
 */
const createOptionParagraphs = (
  optionStats: OptionStats[],
  totalResponseCount?: number
): Paragraph[] => {
  return optionStats.map((stat, index) => {
    let countText = `${stat.percentage.toFixed(1)}% (${stat.count})`;

    // If we have multiple responses, show additional context
    if (
      totalResponseCount &&
      totalResponseCount > optionStats.reduce((sum, s) => sum + s.count, 0)
    ) {
      const responsePercentage =
        totalResponseCount > 0 ? ((stat.count / totalResponseCount) * 100).toFixed(1) : "0.0";
      countText += ` [${responsePercentage}% of responses]`;
    }

    return new Paragraph({
      children: [
        new TextRun({
          text: `${index + 1}. ${stat.option}: `,
          bold: false,
        }),
        new TextRun({
          text: countText,
          bold: false,
        }),
      ],
      indent: { start: 200 },
    });
  });
};

/**
 * Processes radio button survey data and generates summary paragraphs
 * Supports multiple responses per entry
 */
const processSelectSummary = (
  filteredData: DataEntry[],
  partNames: string[],
  item: SurveyItem,
  index: number,
  text: string,
  responseDelimiter: string = "," // Allow customization of delimiter
): Paragraph[] => {
  // Validate inputs
  if (!filteredData?.length || !item?.options) {
    throw new Error("Invalid input data provided");
  }

  // Parse answer options
  const answerOptions = item.options.split(";;;").filter((option) => option.trim());

  if (answerOptions.length === 0) {
    throw new Error("No valid answer options found");
  }

  const totalResponses = partNames.length;

  // Extract and count responses (now handles multiple responses per entry)
  const responseValues = extractResponseValues(filteredData, index, responseDelimiter);
  const responseCounts = countOccurrences(responseValues);

  // Calculate total response count (may be higher than participant count due to multiple responses)
  const totalResponseCount = responseValues.length;

  // Calculate statistics
  const optionStats = calculateOptionStats(
    answerOptions,
    responseCounts,
    totalResponses // Still use participant count for percentage calculation
  );

  // Log for debugging (consider using proper logging in production)
  console.log(`Item ${index + 1} statistics:`, {
    totalParticipants: totalResponses,
    totalResponseCount,
    responseCounts: Object.fromEntries(responseCounts),
    optionStats,
  });

  // Generate paragraphs
  const headerParagraphs = createHeaderParagraphs(item, index, text);
  const optionParagraphs = createOptionParagraphs(optionStats, totalResponseCount);

  return [...headerParagraphs, ...optionParagraphs];
};

export { processSelectSummary };

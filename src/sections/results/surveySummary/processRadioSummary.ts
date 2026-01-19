import { Paragraph, TextRun, HeadingLevel } from "docx";
import { stripHtml } from "../stripHtml";
import { stripTags } from "../../utils/stripTags";

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
  const stripped = stripHtml(stripTags(text));
  return stripped || fallback;
};

/**
 * Extracts response values for a specific item from filtered data
 */
let otherValuesObject: any = {};
let otherValuesObjectKeys: any = [];
const extractResponseValues = (filteredData: DataEntry[], itemIndex: number): string[] => {
  const key = `itemNum${itemIndex + 1}`;
  const allResponses: string[] = [];

  filteredData.map((entry, index) => {
    let num = "";
    let value = entry[key]?.trim();

    if (!value) {
      allResponses.push("no response");
    } else {
      // Split by delimiter and clean up each response

      if (value.includes("-")) {
        let dashIndex = value.indexOf("-");
        num = value.slice(0, dashIndex);
        let otherValue = value.slice(dashIndex + 1);
        value = num;
        otherValuesObject[`p${index + 1}`] = otherValue;
      }
      const responses: any[] = value.split(",");

      if (responses.length === 0) {
        allResponses.push("no response");
      } else {
        allResponses.push(...responses);
      }
    }
  });
  otherValuesObjectKeys = Object.keys(otherValuesObject);
  console.log("otherValuesObject", otherValuesObject);
  console.log("otherValuesObjectKeys", otherValuesObjectKeys);
  return allResponses;
};

/**
 * Calculates statistics for each answer option
 */
const calculateOptionStats = (
  answerOptions: string[],
  responseCounts: Map<string, number>,
  totalResponses: number,
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
const createHeaderParagraphs = (
  item: SurveyItem,
  index: number,
  text: string,
  itemText: string,
): Paragraph[] => {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: `${itemText} ${index + 1}. ${text}`,
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
 * Creates option result paragraphs
 */
const createOptionParagraphs = (optionStats: OptionStats[]): Paragraph[] => {
  return optionStats.map(
    (stat, index) =>
      new Paragraph({
        children: [
          new TextRun({
            text: `${index + 1}. ${stat.option}: `,
            bold: false,
          }),
          new TextRun({
            text: `${stat.percentage.toFixed(1)}% (${stat.count})`,
            bold: false,
          }),
        ],
        indent: { start: 200 },
      }),
  );
};
/**
 * Creates other values paragraphs
 */
const createOtherValuesParagraphs = (
  optionParagraphs: Paragraph[],
  otherValuesObject: any,
  otherValuesObjectKeys: any,
): Paragraph[] => {
  if (otherValuesObjectKeys.length === 0) {
    return optionParagraphs;
  }

  let otherValuesParagraphs = otherValuesObjectKeys.map((key: string) => {
    return new Paragraph({
      children: [
        new TextRun({
          text: `${key}: ${otherValuesObject[key]}`,
          bold: false,
        }),
      ],
      indent: { start: 600 },
    });
  });

  optionParagraphs.splice(optionParagraphs.length - 1, 0, ...otherValuesParagraphs);

  return optionParagraphs;
};

/**
 * Processes radio button survey data and generates summary paragraphs
 */
const processRadioSummary = (
  filteredData: DataEntry[],
  partNames: string[],
  item: SurveyItem,
  index: number,
  text: string,
  itemText: string,
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

  // Extract and count responses
  const responseValues = extractResponseValues(filteredData, index);
  const responseCounts = countOccurrences(responseValues);

  // Calculate statistics
  const optionStats = calculateOptionStats(answerOptions, responseCounts, totalResponses);

  // Log for debugging (consider using proper logging in production)
  console.log(`Item ${index + 1} statistics:`, {
    totalResponses,
    responseCounts: Object.fromEntries(responseCounts),
    optionStats,
  });

  // Generate paragraphs
  const headerParagraphs = createHeaderParagraphs(item, index, text, itemText);
  let optionParagraphs = createOptionParagraphs(optionStats);

  if (otherValuesObjectKeys.length > 0) {
    optionParagraphs = createOtherValuesParagraphs(
      optionParagraphs,
      otherValuesObject,
      otherValuesObjectKeys,
    );
  }

  return [...headerParagraphs, ...optionParagraphs];
};

export { processRadioSummary };

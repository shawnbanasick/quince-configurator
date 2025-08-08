import { Paragraph, TextRun } from "docx";
import { stripHtml } from "../stripHtml";

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

interface OptionStats {
  option: string;
  count: number;
  percentage: number;
}

/**
 * Counts occurrences by position in subArray
 */
function countByPosition(arr2D) {
  if (!arr2D.length) return [];

  const maxLength = Math.max(...arr2D.map((row) => row.length));
  const positionCounts: any[] = [];

  // Initialize a Map for each position
  for (let pos = 0; pos < maxLength; pos++) {
    positionCounts[pos] = new Map();
  }

  // Count occurrences at each position
  arr2D.forEach((row) => {
    row.forEach((value, position) => {
      const map = positionCounts[position];
      map.set(value, (map.get(value) || 0) + 1);
    });
  });

  return positionCounts;
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
  delimiter: string = ";",
  numResponses: number
): string[] => {
  const key = `itemNum${itemIndex + 1}`;
  const allResponses: any[] = [];
  const invertResponses: any[] = [];

  filteredData.forEach((entry) => {
    const value = entry[key]?.trim();

    if (value === "no response") {
      allResponses.push(Array.from({ length: numResponses }, (_) => "nr"));
    } else {
      // Split by delimiter and clean up each response
      const responses = value
        .split(delimiter)
        .map((response) => response.trim())
        .filter((response) => response.length > 0);

      allResponses.push(responses);
    }
  });

  const counts = countByPosition(allResponses);
  for (let j = 0; j < numResponses; j++) {
    invertResponses.push(Object.fromEntries(counts[j]));
  }
  console.log(JSON.stringify(invertResponses));
  return invertResponses;
};

/**
 * Calculates statistics for each answer option
 */
const calculateOptionStats = (
  answerOptions: string[],
  responseCounts: any[],
  totalResponses: number
): OptionStats[] => {
  const allOptions = [...answerOptions, "no response"];

  return allOptions.map((option, index) => {
    let count = 0;

    if (index < answerOptions.length) {
      // For regular options, look for the option index (1-based)
      //   count = responseCounts.get((index + 1).toString()) || 0;
    } else {
      // For "no response", look for the actual "no response" key
      //   count = responseCounts.get("no response") || 0;
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
    }),
  ];
};

/**
 * Creates option result paragraphs
 * Shows both count and percentage, with total response info for multiple responses
 */
const createOptionParagraphs = (
  optionStats: OptionStats[],
  responseValues: any[],
  scaleArray: any[],
  questionsArray: any[],
  totalResponses?: number
): Paragraph[] => {
  return responseValues.map((response, index) => {
    let valueOne = +response["1"];
    let valueTwo = +response["2"];
    let valueNr = +response["nr"];
    let responseOnePercentage;
    let responseTwoPercentage;
    let responseNrPercentage;

    if (totalResponses) {
      responseOnePercentage =
        totalResponses > 0 ? ((valueOne / totalResponses) * 100).toFixed(1) : "0.0";

      responseTwoPercentage =
        totalResponses > 0 ? ((valueTwo / totalResponses) * 100).toFixed(1) : "0.0";

      responseNrPercentage =
        totalResponses > 0 ? ((valueNr / totalResponses) * 100).toFixed(1) : "0.0";

      //   let valueOneText = `${stat.percentage.toFixed(1)}% (${stat.count})`;
    }

    // // If we have multiple responses, show additional context
    // if (
    //   totalResponseCount &&
    //   totalResponseCount > optionStats.reduce((sum, s) => sum + s.count, 0)
    // ) {
    //   countText += ` [${responsePercentage}% of responses]`;
    // }

    return new Paragraph({
      children: [
        new TextRun({
          text: `${index + 1}. ${stripHtml(questionsArray[index])}:  `,
          bold: false,
        }),
        new TextRun({
          text: `${scaleArray[0]}  `,
          bold: false,
        }),
        new TextRun({
          text: `${responseOnePercentage}%  `,
          bold: false,
        }),
        new TextRun({
          text: `${scaleArray[1]}  `,
          bold: false,
        }),
        new TextRun({
          text: `${responseTwoPercentage}%  `,
          bold: false,
        }),
        new TextRun({
          text: `no response  `,
          bold: false,
        }),
        new TextRun({
          text: `${responseNrPercentage}%`,
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
const processRating2Summary = (
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

  const numResponsesPrep2 = item.options;
  let questionsArray = numResponsesPrep2.split(";;;");
  questionsArray = questionsArray.filter(Boolean);
  const numResponses = questionsArray.length;

  // Parse answer options
  const answerOptions = item.options.split(";;;").filter((option) => option.trim());

  if (answerOptions.length === 0) {
    throw new Error("No valid answer options found");
  }

  let scaleArray: any[] = [];
  if (item.scale) {
    let scale = item.scale;
    scaleArray = scale.split(";;;");
  }

  const totalResponses = partNames.length;

  // Extract and count responses (now handles multiple responses per entry)
  const responseValues = extractResponseValues(
    filteredData,
    index,
    responseDelimiter,
    numResponses
  );
  //   const responseCounts = countOccurrences(responseValues);

  // Calculate total response count (may be higher than participant count due to multiple responses)
  const totalResponseCount = responseValues.length;

  // Calculate statistics
  const optionStats = calculateOptionStats(
    answerOptions,
    responseValues,
    totalResponses // Still use participant count for percentage calculation
  );

  // Log for debugging (consider using proper logging in production)
  console.log(`Item ${index + 1} statistics:`, {
    totalParticipants: totalResponses,
    totalResponseCount,
    responseCounts: responseValues,
    optionStats,
  });

  // Generate paragraphs
  const headerParagraphs = createHeaderParagraphs(item, index, text);
  const optionParagraphs = createOptionParagraphs(
    optionStats,
    responseValues,
    scaleArray,
    questionsArray,
    totalResponses
  );

  return [...headerParagraphs, ...optionParagraphs];
};

export { processRating2Summary };

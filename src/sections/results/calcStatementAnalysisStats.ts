interface ArrayStatistics {
  order: number;
  average: number;
  standardDeviation: number;
  positiveCount: number;
  negativeCount: number;
  zeroCount: number;
  allPositive: boolean;
  allNegative: boolean;
  allWithinOne: boolean;
  minCount: number;
  maxCount: number;
  sum: number;
  count: number;
}

/**
 * Calculates comprehensive statistics for a single array of numbers
 * @param array - Array of numbers to analyze
 * @param index - Index of the array in the parent collection
 * @param maxValue - Maximum value to count occurrences
 * @param minValue - Minimum value to count occurrences
 * @returns Statistics object with all calculated metrics
 */
const calculateArrayStatistics = (
  array: number[],
  index: number,
  maxValue: number,
  minValue: number
): ArrayStatistics | null => {
  // Validate input
  if (!Array.isArray(array) || array.length === 0) {
    console.warn("Invalid or empty array");
    return null;
  }

  // Filter out non-numeric values
  const validNumbers = array.filter(
    (value): value is number => typeof value === "number" && isFinite(value) && !isNaN(value)
  );

  if (validNumbers.length === 0 || validNumbers.length !== array.length) {
    console.warn("Invalid numbers in array");
    return null;
  }

  const count = validNumbers.length;

  // Calculate sum and average
  const sum = validNumbers.reduce((acc, val) => acc + val, 0);
  const average = sum / count;

  // Calculate standard deviation
  const squaredDifferences = validNumbers.map((val) => Math.pow(val - average, 2));
  const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / count;
  const standardDeviation = Math.sqrt(variance);

  // Count positive, negative, and zero values
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  let maxCount = 0;
  let minCount = 0;

  validNumbers.forEach((value) => {
    if (value > 0) {
      positiveCount++;
    } else if (value < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
    if (value === maxValue) {
      maxCount++;
    }
    if (value === minValue) {
      minCount++;
    }
  });

  // Boolean checks
  const allPositive = validNumbers.every((val) => val > 0);
  const allNegative = validNumbers.every((val) => val < 0);
  const allWithinOne = validNumbers.every((val) => val > -1 && val < 1);

  const order = index + 1;

  return {
    order,
    average,
    standardDeviation,
    positiveCount,
    negativeCount,
    zeroCount,
    allPositive,
    allNegative,
    allWithinOne,
    minCount,
    maxCount,
    sum,
    count,
  };
};

/**
 * Calculates statistics for each array in a 2D array
 * @param arrays - 2D array of numbers
 * @param maxValue - Maximum value across all arrays
 * @param minValue - Minimum value across all arrays
 * @returns Array of statistics objects, one per inner array
 */
const calcStatementAnalysisStats = (
  arrays: number[][],
  maxValue: number,
  minValue: number
): ArrayStatistics[] => {
  // Validate input
  if (!Array.isArray(arrays) || arrays.length === 0) {
    console.warn("Invalid or empty 2D array");
    return [];
  }

  const results: ArrayStatistics[] = [];

  arrays.forEach((array, index) => {
    const stats = calculateArrayStatistics(array, index, maxValue, minValue);

    if (stats === null) {
      console.warn(`Failed to calculate statistics for array at index ${index}`);
    } else {
      results.push(stats);
    }
  });

  return results;
};

export { calcStatementAnalysisStats };
export type { ArrayStatistics };

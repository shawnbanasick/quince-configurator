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
  min: number;
  max: number;
  sum: number;
  count: number;
}

interface TopStatistics {
  highestAverage: ArrayStatistics[];
  lowestAverage: ArrayStatistics[];
  closestToZero: ArrayStatistics[];
  lowestStdDev: ArrayStatistics[];
  highestStdDev: ArrayStatistics[];
}

/**
 * Extracts top N items from statistics array based on various criteria
 * @param statistics - Array of statistics objects
 * @param topN - Number of items to extract for each category (default: 10)
 * @returns Object containing arrays for each category
 */
const extractTopStatistics = (statistics: ArrayStatistics[], topN: number = 10): TopStatistics => {
  // Validate input
  if (!Array.isArray(statistics) || statistics.length === 0) {
    console.warn("Invalid or empty statistics array");
    return {
      highestAverage: [],
      lowestAverage: [],
      closestToZero: [],
      lowestStdDev: [],
      highestStdDev: [],
    };
  }

  // Ensure topN doesn't exceed array length
  const actualTopN = Math.min(topN, statistics.length);

  // Create copies to avoid mutating original array
  const statsCopy = [...statistics];

  // 1. Highest Average (descending order)
  const highestAverage = [...statsCopy].sort((a, b) => b.average - a.average).slice(0, actualTopN);

  // 2. Lowest Average (ascending order)
  const lowestAverage = [...statsCopy].sort((a, b) => a.average - b.average).slice(0, actualTopN);

  // 3. Closest to Zero (by absolute value of average)
  const closestToZero = [...statsCopy]
    .sort((a, b) => Math.abs(a.average) - Math.abs(b.average))
    .slice(0, actualTopN);

  // 4. Lowest Standard Deviation (ascending order)
  const lowestStdDev = [...statsCopy]
    .sort((a, b) => a.standardDeviation - b.standardDeviation)
    .slice(0, actualTopN);

  // 5. Highest Standard Deviation (descending order)
  const highestStdDev = [...statsCopy]
    .sort((a, b) => b.standardDeviation - a.standardDeviation)
    .slice(0, actualTopN);

  return {
    highestAverage,
    lowestAverage,
    closestToZero,
    lowestStdDev,
    highestStdDev,
  };
};

/**
 * Safely extracts top statistics with validation
 * @param statistics - Array of statistics objects
 * @param topN - Number of items to extract for each category
 * @returns Object containing arrays for each category or null if invalid
 */
const calcTopStatementStats = (statistics: unknown, topN: number = 10): TopStatistics | null => {
  // Validate statistics is an array
  if (!Array.isArray(statistics)) {
    console.error("Statistics must be an array");
    return null;
  }

  // Validate topN is a positive integer
  if (typeof topN !== "number" || !isFinite(topN) || topN < 1 || !Number.isInteger(topN)) {
    console.error("topN must be a positive integer");
    return null;
  }

  // Filter valid statistics objects
  const validStats = statistics.filter(
    (item): item is ArrayStatistics =>
      item !== null &&
      typeof item === "object" &&
      typeof (item as any).average === "number" &&
      typeof (item as any).standardDeviation === "number" &&
      isFinite((item as any).average) &&
      isFinite((item as any).standardDeviation)
  );

  if (validStats.length === 0) {
    console.warn("No valid statistics objects found");
    return null;
  }

  return extractTopStatistics(validStats, topN);
};

export { calcTopStatementStats };

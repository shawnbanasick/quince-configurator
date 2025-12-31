interface DataObject {
  r20?: string;
  [key: string]: any;
}

interface ExtractR20Options {
  filterInvalid?: boolean;
  defaultValue?: number;
}

/**
 * Extracts r20 values from an array of objects and converts to array of arrays
 * Each inner array contains values at the same position across all objects
 * @param data - Array of objects containing r20 key
 * @param options - Configuration options
 * @returns Array of arrays with values organized by position
 */
const extractStatementAnalysisData = (
  data: DataObject[],
  options: ExtractR20Options = {}
): number[][] => {
  const { defaultValue = 0 } = options; // Added default value of 0
  // filterInvalid = false,

  // Validate input
  if (!Array.isArray(data) || data.length === 0) {
    console.warn("Invalid or empty data array");
    return [];
  }

  // Extract and parse r20 values from all objects
  const allValues: number[][] = [];
  let maxLength = 0;

  data.forEach((obj, index) => {
    if (!obj || typeof obj !== "object") {
      console.warn(`Invalid object at index ${index}`);
      allValues.push([]);
      return;
    }

    const r20Value = obj.r20;

    if (!r20Value || typeof r20Value !== "string") {
      console.warn(`Missing or invalid r20 at index ${index}`);
      allValues.push([]);
      return;
    }

    // Parse the r20 string
    // Format: "sort: 0|-2|-1|-3|..."
    const sortPrefix = "sort: ";
    let dataString = r20Value.trim();

    if (dataString.startsWith(sortPrefix)) {
      dataString = dataString.slice(sortPrefix.length);
    }

    // Split by pipe and convert to numbers
    const values: number[] = dataString
      .split("|")
      .map((value) => {
        const trimmed = value.trim();

        if (trimmed.length === 0) {
          return defaultValue;
        }

        const num = Number(trimmed);

        if (isNaN(num) || !isFinite(num)) {
          console.warn(`Invalid number "${trimmed}" at index ${index}`);
          return defaultValue;
        }

        return num;
      })
      .filter((val): val is number => typeof val === "number"); // Type guard to ensure only numbers

    // Track maximum length
    maxLength = Math.max(maxLength, values.length);
    allValues.push(values);
  });

  // If no valid data found
  if (maxLength === 0) {
    console.warn("No valid r20 data found");
    return [];
  }

  // Transpose: convert rows to columns
  const result: number[][] = [];

  for (let position = 0; position < maxLength; position++) {
    const column: number[] = [];

    allValues.forEach((values) => {
      const value: number = position < values.length ? values[position] : defaultValue;
      column.push(value);
    });

    // Filter out columns with all null values if requested
    // if (filterInvalid && column.every((v) => v === null)) {
    //   return;
    // }

    result.push(column);
  }
  return result;
};

export { extractStatementAnalysisData };
export type { DataObject, ExtractR20Options };


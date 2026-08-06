interface DataObject {
  r20?: string;
  sort?: number[];
  [key: string]: any;
}

interface ExtractR20Options {
  filterInvalid?: boolean;
  defaultValue?: number;
}

/**
 * Extracts a single participant's per-statement sort values.
 *
 * New format: obj.sort is already an array of numbers, one entry per
 * statement, in statement order (e.g. [-2,-2,0,-2,1,3,4,...]).
 *
 * Legacy format: obj.r20 is a string like "sort: 0|-2|-1|-3|..." that needs
 * the "sort: " prefix stripped and the pipe-separated values parsed.
 *
 * Returns null if neither shape is present/valid, so the caller can warn
 * and fall back to an empty row.
 */
const extractParticipantSortValues = (
  obj: DataObject,
  index: number,
  defaultValue: number,
): number[] | null => {
  if (Array.isArray(obj.sort)) {
    return obj.sort.map((value) => {
      const num = Number(value);
      if (isNaN(num) || !isFinite(num)) {
        console.warn(`Invalid number "${value}" at index ${index}`);
        return defaultValue;
      }
      return num;
    });
  }

  const r20Value = obj.r20;

  if (!r20Value || typeof r20Value !== "string") {
    return null;
  }

  // Parse the r20 string
  // Format: "sort: 0|-2|-1|-3|..."
  const sortPrefix = "sort: ";
  let dataString = r20Value.trim();

  if (dataString.startsWith(sortPrefix)) {
    dataString = dataString.slice(sortPrefix.length);
  }

  // Split by pipe and convert to numbers
  return dataString
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
};

/**
 * Extracts per-statement sort values from an array of participant objects
 * and converts to array of arrays. Each inner array contains values at the
 * same position (statement) across all participants.
 * @param data - Array of objects containing sort data (new "sort" array or legacy "r20" string)
 * @param options - Configuration options
 * @returns Array of arrays with values organized by position
 */
const extractStatementAnalysisData = (
  data: DataObject[],
  options: ExtractR20Options = {},
): number[][] => {
  const { defaultValue = 0 } = options; // Added default value of 0
  // filterInvalid = false,

  // Validate input
  if (!Array.isArray(data) || data.length === 0) {
    console.warn("Invalid or empty data array");
    return [];
  }

  // Extract and parse sort values from all objects
  const allValues: number[][] = [];
  let maxLength = 0;

  data.forEach((obj, index) => {
    if (!obj || typeof obj !== "object") {
      console.warn(`Invalid object at index ${index}`);
      allValues.push([]);
      return;
    }

    const values = extractParticipantSortValues(obj, index, defaultValue);

    if (values === null) {
      console.warn(`Missing or invalid sort data at index ${index}`);
      allValues.push([]);
      return;
    }

    // Track maximum length
    maxLength = Math.max(maxLength, values.length);
    allValues.push(values);
  });

  // If no valid data found
  if (maxLength === 0) {
    console.warn("No valid sort data found");
    return [];
  }

  // Transpose: convert rows to columns
  const result: number[][] = [];

  for (let position = 0; position < maxLength; position++) {
    const column: number[] = [];

    allValues.forEach((values) => {
      const value: number =
        position < values.length ? values[position] : defaultValue;
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

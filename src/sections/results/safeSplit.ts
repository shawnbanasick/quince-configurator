interface SplitOptions {
  maxParts?: number;
  trim?: boolean;
  filterEmpty?: boolean;
  defaultValue?: string[];
}

/**
 * Safely splits a string by a specified delimiter with validation and options
 * @param input - The string to split
 * @param delimiter - The character or string to split on (defaults to ":")
 * @param options - Configuration options for splitting behavior
 * @returns Array of string parts, or defaultValue if input is invalid
 */
const safeSplit = (
  input: unknown,
  delimiter: string = ":",
  options: SplitOptions = {},
): string[] => {
  const {
    maxParts,
    trim = false,
    filterEmpty = false,
    defaultValue = [],
  } = options;

  // Input validation
  if (input === null || input === undefined) {
    return defaultValue;
  }

  // Validate delimiter
  if (typeof delimiter !== "string") {
    console.error("Delimiter must be a string");
    return defaultValue;
  }

  if (delimiter.length === 0) {
    console.error("Delimiter cannot be an empty string");
    return defaultValue;
  }

  // Convert to string safely
  let str: string;
  try {
    str = String(input);
  } catch (error) {
    console.error("Failed to convert input to string:", error);
    return defaultValue;
  }

  // Handle empty string
  if (str.length === 0) {
    return filterEmpty ? [] : [""];
  }

  // Perform the split
  let parts: string[];

  if (maxParts !== undefined && maxParts > 0) {
    // Split with limit
    parts = [];
    let remaining = str;

    for (let i = 0; i < maxParts - 1; i++) {
      const delimiterIndex = remaining.indexOf(delimiter);

      if (delimiterIndex === -1) {
        parts.push(remaining);
        remaining = "";
        break;
      }

      parts.push(remaining.slice(0, delimiterIndex));
      remaining = remaining.slice(delimiterIndex + delimiter.length);
    }

    // Add the remaining string as the last part
    if (remaining.length > 0 || !filterEmpty) {
      parts.push(remaining);
    }
  } else {
    // Standard split
    parts = str.split(delimiter);
  }

  // Apply trim if requested
  if (trim) {
    parts = parts.map((part) => part.trim());
  }

  // Filter empty strings if requested
  if (filterEmpty) {
    parts = parts.filter((part) => part.length > 0);
  }

  return parts;
};

export { safeSplit };
export type { SplitOptions };

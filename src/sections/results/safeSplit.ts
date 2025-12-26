interface SplitOptions {
  /** Maximum number of parts to return (splits from left) */
  maxParts?: number;
  /** Whether to trim whitespace from each part */
  trim?: boolean;
  /** Whether to filter out empty strings */
  filterEmpty?: boolean;
  /** Default value to return if input is invalid */
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
  options: SplitOptions = {}
): string[] => {
  const { maxParts, trim = false, filterEmpty = false, defaultValue = [] } = options;

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

// Example usage:
/*
const examples = () => {
  // Split on colon
  console.log(safeSplit("a:b:c", ":")); 
  // ["a", "b", "c"]

  // Split on comma
  console.log(safeSplit("apple,banana,cherry", ",")); 
  // ["apple", "banana", "cherry"]

  // Split on pipe with trim
  console.log(safeSplit(" a | b | c ", "|", { trim: true })); 
  // ["a", "b", "c"]

  // Split on space
  console.log(safeSplit("hello world test", " ")); 
  // ["hello", "world", "test"]

  // Split on multi-character delimiter
  console.log(safeSplit("one::two::three", "::")); 
  // ["one", "two", "three"]

  // With maxParts
  console.log(safeSplit("a-b-c-d-e", "-", { maxParts: 3 })); 
  // ["a", "b", "c-d-e"]

  // Filter empty parts
  console.log(safeSplit("a,,b,,,c", ",", { filterEmpty: true })); 
  // ["a", "b", "c"]

  // Handle invalid input
  console.log(safeSplit(null, ",", { defaultValue: ["default"] })); 
  // ["default"]

  // Split on newline
  console.log(safeSplit("line1\nline2\nline3", "\n")); 
  // ["line1", "line2", "line3"]

  // Split on tab
  console.log(safeSplit("col1\tcol2\tcol3", "\t")); 
  // ["col1", "col2", "col3"]

  // Handle edge cases
  console.log(safeSplit("", ",")); 
  // [""]
  
  console.log(safeSplit("no-delimiters", ",")); 
  // ["no-delimiters"]

  // Combined options
  console.log(safeSplit(" a ; ; b ; c ", ";", { 
    trim: true, 
    filterEmpty: true 
  })); 
  // ["a", "b", "c"]

  // Split on dot (useful for file extensions)
  console.log(safeSplit("file.name.txt", ".", { maxParts: 2 })); 
  // ["file", "name.txt"]
};
*/

export { safeSplit };
export type { SplitOptions };

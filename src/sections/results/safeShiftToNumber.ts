/**
 * Safely extracts and converts the first element of an array to a number
 * @param array - The array to extract from
 * @returns The numeric value or null if conversion fails
 */
const safeShiftToNumber = (array: unknown[]): number | null => {
  // Validate array exists and has elements
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }

  // Safely shift the first element
  const firstElement = array.pop();
  console.log("kkk", firstElement);
  // Validate the element exists
  if (firstElement === null || firstElement === undefined) {
    return null;
  }

  // Convert to string and trim
  let trimmedValue: string;
  try {
    trimmedValue = String(firstElement).trim();
  } catch (error) {
    console.error("Failed to convert to string:", error);
    return null;
  }

  // Check if empty after trimming
  if (trimmedValue.length === 0) {
    return null;
  }

  // Convert to number
  const numericValue = Number(trimmedValue);

  // Validate the conversion produced a valid number
  if (isNaN(numericValue) || !isFinite(numericValue)) {
    console.warn(`Invalid numeric conversion: "${trimmedValue}"`);
    return null;
  }

  return numericValue;
};

export { safeShiftToNumber };

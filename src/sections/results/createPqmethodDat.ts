// Type definitions for better type safety

interface MainDataItem {
  rawSort: number[];
  [key: string]: any;
}

interface PQMethodDATParams {
  projectName: string;
  sorts: number[];
  numStatements: number;
  multiplierArray: any[];
  respondentNames: string[];
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Validates input parameters for PQMethod DAT file creation
 */
const validateInputs = (params: PQMethodDATParams): ValidationResult => {
  const { projectName, sorts, numStatements, multiplierArray, respondentNames } = params;
  const errors: string[] = [];

  // Validate project name
  if (!projectName || typeof projectName !== "string") {
    errors.push("Project name must be a non-empty string");
  }

  // Validate sorts
  if (!Array.isArray(sorts) || sorts.length === 0) {
    errors.push("Main data object must be a non-empty array");
  }

  // Validate multiplier array
  if (!Array.isArray(multiplierArray) || multiplierArray.length === 0) {
    errors.push("Multiplier array must be a non-empty array");
  } else if (multiplierArray.some((val) => typeof val !== "number" || isNaN(val))) {
    errors.push("Multiplier array must contain only valid numbers");
  }

  // Validate number of statements
  if (typeof numStatements !== "number" || numStatements <= 0 || !Number.isInteger(numStatements)) {
    errors.push("Number of statements must be a positive integer");
  }

  // Validate respondent names
  if (!Array.isArray(respondentNames) || respondentNames.length === 0) {
    errors.push("Respondent names must be a non-empty array");
  } else if (respondentNames.length !== sorts.length) {
    errors.push("Respondent names array length must match sorts length");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Ensures participant names are unique by appending numbers if needed
 * This is a placeholder - the actual implementation should be imported
 */
const ensureUniqueParticipantNames = (names: string[]): string[] => {
  const uniqueNames: string[] = [];
  const nameCount = new Map<string, number>();

  names.forEach((name) => {
    const baseName = name.substring(0, 8).trim();

    if (!nameCount.has(baseName)) {
      nameCount.set(baseName, 1);
      uniqueNames.push(baseName);
    } else {
      const count = nameCount.get(baseName)! + 1;
      nameCount.set(baseName, count);

      // Create unique name by appending number, ensuring it fits in 8 characters
      const suffix = count.toString();
      const maxBaseLength = 8 - suffix.length;
      const truncatedBase = baseName.substring(0, maxBaseLength);
      uniqueNames.push(truncatedBase + suffix);
    }
  });

  return uniqueNames;
};

/**
 * Calculates min and max values from multiplier array
 */
const calculateMinMaxValues = (multiplierArray: any[]): { min: number; max: number } => {
  // Reference array for mapping indices to values
  const refArray = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const activeValues: number[] = [];

  multiplierArray.forEach((value, index) => {
    if (value !== 0 && index < refArray.length) {
      activeValues.push(refArray[index]);
    }
  });

  if (activeValues.length === 0) {
    throw new Error("No active values found in multiplier array");
  }

  return {
    min: Math.min(...activeValues),
    max: Math.max(...activeValues),
  };
};

/**
 * Formats sort data for each participant
 */
const formatSortData = (sorts): any[] => {
  return sorts.map((item, index) => {
    if (!item || !Array.isArray(item)) {
      throw new Error(`Invalid rawSort data for participant ${index + 1}`);
    }

    return item
      .map((value) => {
        if (typeof value !== "number" || isNaN(value)) {
          throw new Error(`Invalid sort value '${value}' for participant ${index + 1}`);
        }
        return value.toString().padStart(2, " ");
      })
      .join("");
  });
};

/**
 * Formats multiplier array for output
 */
const formatMultiplierArray = (multiplierArray: any[]): string => {
  return multiplierArray.map((value) => value.toString().padStart(3, " ")).join("");
};

/**
 * Creates participant name and sort data lines
 */
const createParticipantLines = (uniqueNames: string[], sortDataArray: string[]): string[] => {
  if (uniqueNames.length !== sortDataArray.length) {
    throw new Error("Mismatch between participant names and sort data arrays");
  }

  return uniqueNames.map((name, index) => {
    const paddedName = name.padEnd(10, " ");
    return `${paddedName}${sortDataArray[index]}\n`;
  });
};

/**
 * Creates a PQMethod DAT file content string
 *
 * @param projectName - Name of the project (max 60 characters)
 * @param mainDataObject - Array of participant data with rawSort arrays
 * @param multiplierArray - Array defining the Q-sort distribution
 * @param numStatements - Total number of statements
 * @param respondentNames - Array of participant names
 * @returns Formatted DAT file content as string
 */
const createPQMethodDAT = (
  projectName: string,
  sorts: number[],
  numStatements: number,
  multiplierArray: any[],
  respondentNames: string[]
): string => {
  try {
    // Validate all inputs
    const validation = validateInputs({
      projectName,
      sorts,
      numStatements,
      multiplierArray,
      respondentNames,
    });

    if (!validation.isValid) {
      throw new Error(`Input validation failed: ${validation.errors.join(", ")}`);
    }

    // Process project name (max 60 characters)
    const projectNameText = projectName.substring(0, 60);

    // Format basic numeric values
    const numSortsText = sorts.length.toString().padStart(3, " ");
    const numStatementsText = numStatements.toString().padStart(3, " ");

    // Calculate min/max values
    const { min, max } = calculateMinMaxValues(multiplierArray);
    const minValueText = min.toString().padStart(3, " ");
    const maxValueText = max.toString().padStart(3, " ");

    // Format multiplier array
    const multiplierArrayText = formatMultiplierArray(multiplierArray);

    // Process participant names to ensure uniqueness
    const truncatedNames = respondentNames.map((name) => name.substring(0, 8));
    const uniqueNames = ensureUniqueParticipantNames(truncatedNames);

    // Format sort data
    const sortDataArray = formatSortData(sorts);

    // Create participant lines
    const participantLines = createParticipantLines(uniqueNames, sortDataArray);

    // Assemble the final DAT file content
    let datContent = "";

    // Header line
    datContent += `  0${numSortsText}${numStatementsText} ${projectNameText}\n`;

    // Min/max and multiplier line
    datContent += `${minValueText}${maxValueText}${multiplierArrayText}\n`;

    // Participant data lines
    participantLines.forEach((line) => {
      datContent += line;
    });

    console.log(`Successfully created PQMethod DAT file for project: ${projectNameText}`);
    console.log(`Participants: ${sorts.length}, Statements: ${numStatements}`);
    console.log(`Value range: ${min} to ${max}`);

    return datContent;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error creating PQMethod DAT file:", errorMessage);
    throw new Error(`Failed to create PQMethod DAT file: ${errorMessage}`);
  }
};

// Export types for external use
export type { MainDataItem, PQMethodDATParams };
export default createPQMethodDAT;

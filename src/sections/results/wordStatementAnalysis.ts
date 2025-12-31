import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { extractStatementAnalysisData } from "./extractStatementAnalysisData";
import { calcStatementAnalysisStats } from "./calcStatementAnalysisStats";

// Type definitions for better type safety
interface ParticipantData {
  r20: string;
  [key: string]: any;
}

interface SortValueItem {
  value: number;
  statement: string;
  stateNum: number;
}

// interface WordPartStatementsParams {
//   data: ParticipantData[];
//   sortHeaders: number[];
//   statements: string;
//   participantIds: string[];
// }

/**
 * Creates document header paragraph
 */
const createHeaderParagraph = (statementAnalysisLangObj: any): Paragraph => {
  return new Paragraph({
    children: [
      new TextRun({
        text: statementAnalysisLangObj.statementStatistics,
        bold: true,
        size: 40,
      }),
    ],
    pageBreakBefore: true,
    heading: HeadingLevel.HEADING_1,
    thematicBreak: true,
  });
};

/**
 * Validates input parameters

const validateInputs = (params: WordPartStatementsParams): void => {
  const { data, sortHeaders, statements, participantIds } = params;
  
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("Data must be a non-empty array");
  }
  
  if (!Array.isArray(sortHeaders) || sortHeaders.length === 0) {
    throw new Error("Sort headers must be a non-empty array");
  }
  
  if (typeof statements !== "string" || !statements.trim()) {
    throw new Error("Statements must be a non-empty string");
  }
  
  if (!Array.isArray(participantIds) || participantIds.length !== data.length) {
    throw new Error("Participant IDs array length must match data array length");
  }
};
*/

/**
 * Generates Word document paragraphs for participant Q-sort statements
 *
 * @param data - Array of participant data containing r20 sort values
 * @param sortHeaders - Array of possible sort values to display
 * @param statements - Newline-separated string of statements
 * @param participantIds - Array of participant identifiers
 * @returns Array of Paragraph objects for Word document
 */
const wordStatementAnalysis = (
  data: ParticipantData[],
  statements: string,
  qSortHeaderNumbers: string[],
  statementAnalysisLangObj: any
): Paragraph[] => {
  try {
    // Validate inputs
    // validateInputs({ data, sortHeaders, statements, participantIds });

    // Parse statements
    const statementsArray = statements
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    // Create working copy of data
    const workingData = cloneDeep(data);
    let min = Infinity;
    let max = -Infinity;
    for (const str of qSortHeaderNumbers) {
      const num = Number(str);
      if (!isNaN(num) && isFinite(num)) {
        if (num < min) min = num;
        if (num > max) max = num;
      }
    }

    // Initialize result with header
    const allParagraphs: Paragraph[] = [createHeaderParagraph(statementAnalysisLangObj)];
    const statementSortValues: number[][] = extractStatementAnalysisData([...workingData]);
    const stats = calcStatementAnalysisStats(statementSortValues, max, min);

    const sortStatsByAveragePrep = [...stats];
    const sortStatsByAverage = sortStatsByAveragePrep.sort((a, b) => b.average - a.average);
    const sortStatsByStDvPrep = [...stats];
    const sortStatsByMaxPrep = [...stats];
    const sortStatsByMinPrep = [...stats];
    const sortStatsByStDv = sortStatsByStDvPrep.sort(
      (a, b) => a.standardDeviation - b.standardDeviation
    );
    const sortStatsByZeroPrep = [...stats];
    const sortStatsByZero = sortStatsByZeroPrep.sort((a, b) => b.zeroCount - a.zeroCount);
    const sortStatsByMax = sortStatsByMaxPrep.sort((a, b) => b.maxCount - a.maxCount);
    const sortStatsByMin = sortStatsByMinPrep.sort((a, b) => b.minCount - a.minCount);

    try {
      allParagraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${statementAnalysisLangObj.qSortValue} - ${statementAnalysisLangObj.highestToLowestAverage}`,
              bold: true,
            }),
          ],
          spacing: { before: 400 },
          heading: HeadingLevel.HEADING_2,
          //   indent: { left: 200 },
        })
      );

      sortStatsByAverage?.forEach((object, index) => {
        allParagraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${index + 1}.  s${String(object.order).padStart(
                  2,
                  "0"
                )}   (${object.average.toFixed(2)}):  ${statementsArray[object.order - 1]}`,
                bold: false,
              }),
            ],
            spacing: { before: 0 },
            indent: { left: 1800, hanging: 1600 },
          })
        );
      });

      allParagraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${statementAnalysisLangObj.qSortValueStability}`,
              bold: true,
            }),
          ],
          spacing: { before: 400 },
          heading: HeadingLevel.HEADING_2,
          //   indent: { left: 200 },
        })
      );

      sortStatsByStDv?.forEach((object, index) => {
        allParagraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${index + 1}. s${String(object.order).padStart(
                  2,
                  "0"
                )} (${object.standardDeviation.toFixed(2)}, ${object.average.toFixed(2)}): ${
                  statementsArray[object.order - 1]
                }`,
                bold: false,
              }),
            ],
            spacing: { before: 0 },
            indent: { left: 2200, hanging: 2000 },
          })
        );
      });

      // MAX COUNT
      allParagraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${statementAnalysisLangObj.statementsWithAHighCountOfMax} "${max}" (${statementAnalysisLangObj.countPercent})`,
              bold: true,
            }),
          ],
          spacing: { before: 400 },
          heading: HeadingLevel.HEADING_2,
        })
      );

      let previousValueMax = "";
      let testValueMax = "";
      let objectMax;
      for (let i = 0; i < sortStatsByMax.length; i++) {
        objectMax = sortStatsByMax[i];
        testValueMax = (objectMax.maxCount / objectMax.count).toFixed(2);
        if (i > 9 && previousValueMax !== testValueMax) {
          break;
        }

        // skip cases when count is ZERO
        if (objectMax.maxCount > 0) {
          allParagraphs.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `${i + 1}. s${String(objectMax.order).padStart(2, "0")} (${
                    objectMax.maxCount
                  }, ${(objectMax.maxCount / objectMax.count).toFixed(2)}): ${
                    statementsArray[objectMax.order - 1]
                  }`,
                  bold: false,
                }),
              ],
              spacing: { before: 0 },
              indent: { left: 2000, hanging: 1800 },
            })
          );
        }
        previousValueMax = testValueMax;
      }

      // MIN COUNT
      allParagraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${statementAnalysisLangObj.statementsWithAHighCountOfMin} "${min}" (${statementAnalysisLangObj.countPercent})`,
              bold: true,
            }),
          ],
          spacing: { before: 400 },
          heading: HeadingLevel.HEADING_2,
        })
      );

      let previousValueMin = "";
      let testValueMin = "";
      let objectMin;
      for (let i = 0; i < sortStatsByMin.length; i++) {
        objectMin = sortStatsByMin[i];
        testValueMin = (objectMin.minCount / objectMin.count).toFixed(2);
        if (i > 9 && previousValueMin !== testValueMin) {
          break;
        }
        // skip cases when count is ZERO
        if (objectMin.minCount > 0) {
          allParagraphs.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `${i + 1}. s${String(objectMin.order).padStart(2, "0")} (${
                    objectMin.minCount
                  }, ${(objectMin.minCount / objectMin.count).toFixed(2)}): ${
                    statementsArray[objectMin.order - 1]
                  }`,
                  bold: false,
                }),
              ],
              spacing: { before: 0 },
              indent: { left: 2000, hanging: 1800 },
            })
          );
        }
        previousValueMin = testValueMin;
      }

      // ZERO COUNT
      if (+sortStatsByZero[0].zeroCount > 0) {
        allParagraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${statementAnalysisLangObj.statementsWithAHighCountOfZero} (${statementAnalysisLangObj.countPercent})`,
                bold: true,
              }),
            ],
            spacing: { before: 400 },
            heading: HeadingLevel.HEADING_2,
          })
        );

        let previousValue = "";
        let testValue = "";
        let object;
        for (let i = 0; i < sortStatsByZero.length; i++) {
          object = sortStatsByZero[i];
          testValue = (object.zeroCount / object.count).toFixed(2);
          if (i > 9 && previousValue !== testValue) {
            break;
          }
          // skip cases when count is ZERO
          if (object.zeroCount > 0) {
            allParagraphs.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${i + 1}. s${String(object.order).padStart(2, "0")} (${
                      object.zeroCount
                    }, ${(object.zeroCount / object.count).toFixed(2)}): ${
                      statementsArray[object.order - 1]
                    }`,
                    bold: false,
                  }),
                ],
                spacing: { before: 0 },
                indent: { left: 2000, hanging: 1800 },
              })
            );
          }
          previousValue = testValue;
        }
      }
    } catch (error) {
      console.error(`Error processing participant statements`, error);

      // Add error paragraph
      allParagraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `Error processing Participant Statements}: ${
                error instanceof Error ? error.message : "Unknown error"
              }`,
              bold: true,
              color: "FF0000", // Red color for errors
            }),
          ],
          spacing: { before: 400 },
        })
      );
    }

    return allParagraphs;
  } catch (error) {
    console.error("Error in wordPartStatements:", error);

    // Return error paragraph
    return [
      new Paragraph({
        children: [
          new TextRun({
            text: `Critical Error: ${
              error instanceof Error ? error.message : "Unknown error occurred"
            }`,
            bold: true,
            color: "FF0000",
          }),
        ],
      }),
    ];
  }
};

export { wordStatementAnalysis, type ParticipantData, type SortValueItem };

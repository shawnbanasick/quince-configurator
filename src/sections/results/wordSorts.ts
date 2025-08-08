import uniq from "lodash/uniq";
import zip from "lodash/zip";
import { Paragraph, UnderlineType, TextRun } from "docx";
// import calcMultiplierArrayT2 from "../../Input/Excel/excelLogic/calcMultiplierArrayT2";
import isEqual from "lodash/isEqual";
import i18n from "i18next";
import { useStore } from "../../GlobalState/useStore";

const compareSecondColumn = (a, b) => {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return a[1] < b[1] ? -1 : 1;
  }
};

const reorderByFirstColumn = (a, b) => {
  if (a[1] === b[1]) {
    if (a[0] < [0]) {
      return 1;
    } else {
      return -1;
    }
  }
};

// const translationObject = { partQsorts: "Participant Q-sorts" };

const wordSorts = (
  data,
  partNames,
  statementNumArray,
  respondentArray2,
  newHeaderArray,
  mapInputQsortPattern
) => {
  //   thisMultiplierArray === mapInputQsortPattern;
  let indentValue = 200;

  // new Paragraph({
  //   children: [
  //     new TextRun({
  //       text: `${translationObject.partQsorts}`,
  //       bold: true,
  //     }),
  //   ],
  //   heading: HeadingLevel.HEADING_1,
  //   thematicBreak: true,
  //   spacing: {
  //     before: 400,
  //     after: 400,
  //   },
  // }),
  //   ];

  let newString = "";
  const newHeaderArray2 = [...newHeaderArray];
  for (let r = 0; r < newHeaderArray2.length; r++) {
    if (newHeaderArray2[r] < 0) {
      newString = newString + "| " + newHeaderArray2[r] + " ";
    } else {
      newString = newString + "|  " + newHeaderArray2[r] + " ";
    }
  }
  newString = newString + "|";

  let unforcedParticipantNamesArray: string[] = [];
  let displayStringsArray: any[] = [];

  for (let m = 0; m < data.length; m++) {
    const generatedString: any[] = [];
    let respondentArray = respondentArray2[m];

    // let thisMultiplierArray2 = [...respondentArray].sort((a, b) => a - b);
    // to deal with unforced Q sorts - triangle shape may vary
    //   let thisMultiplierArray = calcMultiplierArrayT2([...thisMultiplierArray2]);

    // let unforcedTest = isEqual(multiplierArray, thisMultiplierArray);
    let nameString = partNames[m];
    // if (!unforcedTest) {
    //   nameString = `${nameString}     ** ${i18n.t("Unforced Q sort")} **`;
    //   unforcedParticipantNamesArray.push(nameString);
    // } else {
    unforcedParticipantNamesArray.push(nameString);
    // }

    let maxValue = Math.max(...mapInputQsortPattern);
    let zippedArray2 = zip(statementNumArray, respondentArray);
    zippedArray2.sort(compareSecondColumn);
    let zippedArray = JSON.parse(JSON.stringify(zippedArray2));
    zippedArray.sort(reorderByFirstColumn);

    let paragraphStrings: string[] = [];
    // for all possible pyramid rows
    for (let i = 0; i < maxValue; i++) {
      // iterate pyramid height
      let textString = ``;
      let isMidRow = false;
      for (let j = 0; j < newHeaderArray.length; j++) {
        // iterate through cols
        let columnCheck = false;
        for (let k = 0; k < zippedArray.length; k++) {
          // get comparison arrays
          let currentArray = zippedArray[k];
          let comparisonArray = zippedArray[k + 1];
          // if the sort value equals the col value
          if (currentArray[1] === newHeaderArray[j]) {
            // the comparison array is not undefined
            if (comparisonArray !== undefined) {
              // if the array is the last one
              if (currentArray[1] !== comparisonArray[1]) {
                if (currentArray[1] > 99) {
                  let string1 = `${currentArray[0]} `;
                  let string2 = string1.padStart(4, " ");
                  textString = textString + string2;
                  currentArray[1] = 999;
                  isMidRow = true;
                  columnCheck = true;
                } else {
                  let string1 = `${currentArray[0]} `;
                  let string2 = string1.padStart(5, " ");
                  textString = textString + string2;
                  currentArray[1] = 999;
                  isMidRow = true;
                  columnCheck = true;
                }
              }
            } else {
              // if it is undefined (end of line)
              if (currentArray[1] > 99) {
                let string1 = `${currentArray[0]} `;
                let string2 = string1.padStart(4, " ");
                textString = textString + string2;
                currentArray[1] = 999;
                isMidRow = true;
                columnCheck = true;
              } else {
                let string1 = `${currentArray[0]} `;
                let string2 = string1.padStart(5, " ");
                textString = textString + string2;
                currentArray[1] = 999;
                isMidRow = true;
                columnCheck = true;
              }
            }
          }
        }
        if (columnCheck === false) {
          if (isMidRow === true) {
            textString = textString + `     `;
          } else {
            textString = `     ` + textString;
          }
        }
      }
      paragraphStrings.push(textString);
    }

    // Q sort Paragraphs Participant Names
    let p1 = new Paragraph({
      children: [
        new TextRun({
          text: `Q Sort`,
          bold: true,
        }),
      ],
      spacing: {
        after: 100,
        before: 500,
      },
      indent: {
        start: indentValue,
      },
    });

    // Q sort Paragraphs Header values with underline
    let p2 = new Paragraph({
      children: [
        new TextRun({
          text: newString,
          underline: { type: UnderlineType.SINGLE },
          font: "Courier New",
        }),
      ],
      indent: {
        start: indentValue + 200,
      },
    });
    generatedString.push(p1, p2);

    // Q sort Paragraphs - Sort Values
    for (let jj = 0; jj < paragraphStrings.length; jj++) {
      let text;
      if (jj === paragraphStrings.length - 1) {
        text = new Paragraph({
          children: [
            new TextRun({
              text: paragraphStrings[jj],
              font: "Courier New",
            }),
          ],
          indent: {
            start: indentValue + 200,
          },
          spacing: {
            after: 400,
          },
        });
      } else {
        text = new Paragraph({
          children: [
            new TextRun({
              text: paragraphStrings[jj],
              font: "Courier New",
            }),
          ],
          indent: {
            start: indentValue + 200,
          },
        });
      }
      generatedString.push(text);
    }

    /*
    // // End of Doc - Q Sorts as flat arrays
    let text = new Paragraph({
      //   //   text: `${partNames[m]}: ${respondentArray[m].join(",")}`,
      text: `${partNames[m]}`,
      indent: {
        start: 600,
        hanging: 500,
      },
      spacing: {
        after: 100,
        before: 500,
      },
    });
    displayStringsArray.push(text);
    */
    displayStringsArray.push(generatedString);
  }
  //   }  // end check for main data object
  //   generatedString.push(...displayStringsArray);
  console.log(displayStringsArray[0].length);
  return displayStringsArray;
};

export { wordSorts };

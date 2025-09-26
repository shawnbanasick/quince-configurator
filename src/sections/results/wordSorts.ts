import zip from "lodash/zip";
import { Paragraph, UnderlineType, TextRun } from "docx";

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

const wordSorts = (
  data,
  partNames,
  statementNumArray,
  respondentArray2,
  newHeaderArray,
  mapInputQsortPattern
) => {
  let indentValue = 200;

  console.log("header array", JSON.stringify(newHeaderArray, null, 2));
  console.log("header array", JSON.stringify(mapInputQsortPattern, null, 2));

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
    let nameString = partNames[m];
    unforcedParticipantNamesArray.push(nameString);

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
    displayStringsArray.push(generatedString);
  }
  return displayStringsArray;
};

export { wordSorts };

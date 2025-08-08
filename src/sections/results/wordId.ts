import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

const wordId = (
  data,
  childArray2,
  childArray3,
  childArray3b,
  childArray4,
  childArray5,
  displayPartId,
  numStatements
) => {
  const workingData = cloneDeep(data);
  let projectNameTitleString2 = workingData[0]["r1"].slice(15);
  let projectNameTitleString = projectNameTitleString2.split(" - ");
  let projectDate = projectNameTitleString[1].split("@");

  let childArray = [
    new Paragraph({
      children: [
        new TextRun({
          text: projectNameTitleString[0],
          bold: true,
          size: 64,
        }),
      ],
      spacing: {
        after: 20,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Creation Date: ${projectDate[0]} at ${projectDate[1]}`,
          bold: true,
          size: 24,
        }),
      ],
      spacing: {
        after: 20,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `${numStatements} Statements  /  `,
          bold: true,
          size: 24,
        }),
        new TextRun({
          text: `${workingData.length} Participants`,
          bold: true,
          size: 24,
        }),
      ],
      spacing: {
        after: 600,
      },
    }),

    new Paragraph({
      children: [
        new TextRun({
          text: "Individual Participant Data",
          bold: true,
          size: 40,
        }),
      ],
      heading: HeadingLevel.HEADING_1,
      thematicBreak: true,
    }),
  ];

  let previousId = "";
  let counter = 1;
  let indentValue = 200;

  workingData.forEach((item, index) => {
    // create random ID text
    let id = item["r2"];
    if (id === previousId) {
      id = `${id}_${counter}`;
      counter++; // Increment counter
    } else {
      counter = 1; // Reset counter for new ID
    }
    previousId = item["r2"];

    let identCode;
    if (displayPartId === "randomId") identCode = id.slice(11);
    if (displayPartId === "partId") identCode = item["r3"].slice(9);
    if (displayPartId === "urlUsercode") identCode = item["r4"].slice(14);

    childArray.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `Participant: ${index + 1}  -  ${identCode}`,
            bold: true,
            size: 34,
          }),
        ],
        spacing: {
          before: 200,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `Project Name: ${item["r1"].slice(15)}  `,
            bold: false,
          }),
        ],
        indent: {
          start: 200,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `random ID: ${id.slice(11)}`,
            bold: false,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `participant ID: ${item["r3"].slice(9)}`,
            bold: false,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `URL user code: ${item["r4"].slice(14)}`,
            bold: false,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `Date and time: ${item["r5"].slice(11)}`,
            bold: false,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `Desktop or Mobile: ${item["r6"].slice(17)}`,
            bold: false,
          }),
        ],
        indent: {
          start: indentValue,
        },
      })
    );
    childArray.push(...childArray2[index]);
    childArray.push(...childArray3[index]);
    childArray.push(...childArray3b[index]);
    childArray.push(...childArray4[index]);
    childArray.push(...childArray5[index]);
  });
  return childArray;
};

export { wordId };

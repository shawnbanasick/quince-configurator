import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

const wordId = (data, childArray2, childArray3, childArray4, childArray5) => {
  const workingData = cloneDeep(data);

  let childArray = [
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
    let id = item["r1"];
    if (id === previousId) {
      id = `${id}_${counter}`;
      counter++; // Increment counter
    } else {
      counter = 1; // Reset counter for new ID
    }
    previousId = item["r1"];

    childArray.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `Participant ${index + 1}  `,
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
            text: `random ID: ${id}`,
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
      })
    );
    childArray.push(...childArray2[index]);
    childArray.push(...childArray3[index]);
    childArray.push(...childArray4[index]);
    childArray.push(...childArray5[index]);
  });
  return childArray;
};

export { wordId };

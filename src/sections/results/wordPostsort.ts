import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

type RecordMap = Record<string, any>;

// const getCurrentStatements = (state: GlobalState) => state.currentStatements;

const wordPostsort = (data: RecordMap, currentStatements): Paragraph[] => {
  const workingData = cloneDeep(data);

  const indentValue = 300;
  const items = Array.isArray(workingData) ? workingData : [workingData];
  const array = currentStatements.split("\n");
  // const currentStatements = useStore.getState().currentStatements;

  const itemParagraphs: any = [];
  items.forEach((item: RecordMap) => {
    const paragraphs: Paragraph[] = [];

    // Filter for values starting with "(colu"
    const timeEntries = Object.values(item).filter(
      (value: any) => typeof value === "string" && value.trim().startsWith("colu")
    );

    let posComments: string[] = [];
    let negComments: string[] = [];
    timeEntries.forEach((item) => {
      if (item.startsWith("columnN")) {
        negComments.push(item);
      } else {
        posComments.push(item);
      }
    });

    let sortedPosCommentsPrepArray: any[] = [];
    posComments.forEach((item) => {
      let copy = item;
      let id = copy.slice(6, 9);
      id = id.replace(":", "");
      id = id.replace("(", "");
      sortedPosCommentsPrepArray.push([+id, item]);
    });
    let sortedPosCommentsArray = sortedPosCommentsPrepArray.sort((a, b) => b[0] - a[0]);

    let sortedNegCommentsPrepArray: any[] = [];
    negComments.forEach((item) => {
      let copy = item;
      let id = copy.slice(6, 9);
      id = id.replace("N", "-");
      id = id.replace(":", "");
      id = id.replace("(", "");
      sortedNegCommentsPrepArray.push([+id, item]);
    });
    let sortedNegCommentsArray = sortedNegCommentsPrepArray.sort((a, b) => a[0] - b[0]);

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Positive Post-Sort Comments",
            bold: true,
          }),
        ],
        indent: {
          start: 200,
        },
        spacing: {
          before: 100,
        },
      })
    );

    // Clean and map to Paragraphs
    sortedPosCommentsArray.forEach((entry: string) => {
      let entry1 = entry[1].split(":").slice(1).join(":").trim();

      let statementNumber2 = entry1.slice(0, 5).trim();
      let statementNumber = statementNumber2
        .replace("(", "")
        .replace(")", "")
        .replace("s", "")
        .replace(":", "")
        .trim();

      // use statementNumber as index to find statement
      let statement = array[+statementNumber - 1];

      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `(Col. +${entry[0]})  `,
              bold: true,
            }),
            new TextRun({
              text: statement,
              bold: true,
            }),
          ],
          indent: {
            start: indentValue,
          },
          spacing: {
            before: 100,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: entry[1],
            }),
          ],
          indent: {
            start: indentValue,
          },
        })
      );
    });

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Negative Post-Sort Comments",
            bold: true,
          }),
        ],
        indent: {
          start: 200,
        },
        spacing: {
          before: 100,
        },
      })
    );

    // Clean and map to Paragraphs
    sortedNegCommentsArray.forEach((entry: string) => {
      let entry1 = entry[1].split(":").slice(1).join(":").trim();

      let statementNumber2 = entry1.slice(0, 5).trim();
      let statementNumber = statementNumber2
        .replace("(", "")
        .replace(")", "")
        .replace("s", "")
        .replace(":", "")
        .trim();

      // use statementNumber as index to find statement
      let statement = array[+statementNumber - 1];

      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `(Col. ${entry[0]})  `,
              bold: true,
            }),
            new TextRun({
              text: statement,
              bold: true,
            }),
          ],
          indent: {
            start: indentValue,
          },
          spacing: {
            before: 100,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: entry[1],
            }),
          ],
          indent: {
            start: indentValue,
          },
        })
      );
    });

    itemParagraphs.push(paragraphs);
  });
  return itemParagraphs;
};

export { wordPostsort };

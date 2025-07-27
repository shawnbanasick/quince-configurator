import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { useStore } from "../../GlobalState/useStore";

type RecordMap = Record<string, any>;

interface GlobalState {
  currentStatements: string[];
}

// const getCurrentStatements = (state: GlobalState) => state.currentStatements;

const wordPostsort = (data: RecordMap): Paragraph[] => {
  const workingData = cloneDeep(data);
  const indentValue = 300;
  const items = Array.isArray(workingData) ? workingData : [workingData];
  const currentStatements = useStore.getState().currentStatements;
  const array = currentStatements.split("\n");

  const itemParagraphs: any = [];
  items.forEach((item: RecordMap) => {
    const paragraphs: Paragraph[] = [];
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Post-Sort Comments",
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
    // Filter for values starting with "(timeOn"
    const timeEntries = Object.values(item).filter(
      (value: any) => typeof value === "string" && value.trim().startsWith("colu")
    );

    // console.log(timeEntries[0]);

    // Clean and map to Paragraphs
    timeEntries.forEach((entry: string) => {
      entry = entry.split(":").slice(1).join(":").trim();
      let statementNumber2 = entry.slice(0, 5).trim();
      let statementNumber = statementNumber2
        .replace("(", "")
        .replace(")", "")
        .replace("s", "")
        .trim();

      let statement = array[+statementNumber - 1];

      //   if (entry.startsWith("(numPos)")) {
      //     entry = `Number of statements viewed positively: ${entry.slice(9).trim()}`;
      //   }
      //   if (entry.startsWith("(numNeu)")) {
      //     entry = `Number of statements viewed as neutral: ${entry.slice(9).trim()}`;
      //   }
      //   if (entry.startsWith("(numNeg)")) {
      //     entry = `Number of statements viewed negatively: ${entry.slice(9).trim()}`;
      //   }
      //   if (entry.startsWith("(pos)")) {
      //     entry = `Statements viewed positively: ${entry.slice(6).trim()}`;
      //   }
      //   if (entry.startsWith("(neu)")) {
      //     entry = `Statements viewed as neutral: ${entry.slice(6).trim()}`;
      //   }
      //   if (entry.startsWith("(neg)")) {
      //     entry = `Statements viewed negatively: ${entry.slice(6).trim()}`;
      //   }
      paragraphs.push(
        new Paragraph({
          children: [
            // new TextRun({
            //   text: statementNumber2,
            //   bold: true,
            // }),
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
              text: entry,
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

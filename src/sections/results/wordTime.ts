import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

type RecordMap = Record<string, any>; // Incoming data can be loosely typed

const wordTime = (data: RecordMap): Paragraph[] => {
  const workingData = cloneDeep(data);
  const indentValue = 200;
  //   const itemParagraphs: ItemParagraph[] =[];

  // If the input is an array of objects (as your original logic suggests)
  const items = Array.isArray(workingData) ? workingData : [workingData];

  const itemParagraphs: any = [];
  items.forEach((item: RecordMap) => {
    const paragraphs: Paragraph[] = [];
    // Filter for values starting with "(timeOn"
    const timeEntries = Object.values(item).filter(
      (value: any) => typeof value === "string" && value.trim().startsWith("(timeOn")
    );

    // Clean and map to Paragraphs
    timeEntries.forEach((entry: string) => {
      const cleaned = entry.replace("(", "").replace(")", ":");
      const cleaned2 = cleaned.slice(6); // remove timeOn
      const cleaned3 = cleaned2.split(":");
      const cleaned4 = cleaned3[0].slice(0, -4);
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${cleaned4} Page: ${cleaned3[1]}:${cleaned3[2]}:${cleaned3[3]}`,
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

  //   console.log(JSON.stringify(itemParagraphs[1], null, 2));
  //   console.log(itemParagraphs[0].length);
  return itemParagraphs;
};

export { wordTime };

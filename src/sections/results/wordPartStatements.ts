import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { useStore } from "../../GlobalState/useStore";

type RecordMap = Record<string, any>;

const wordPartStatements = (
  data: RecordMap,
  newHeaderArray2,
  mapInputQsortPattern2,
  currentStatements,
  displayPartId
): Paragraph[] => {
  console.log(JSON.stringify(displayPartId));

  const workingData = cloneDeep(data);
  //   const survey = useStore.getState().surveyQuestionsArray;
  const indentValue = 300;
  const dataItems = Array.isArray(workingData) ? workingData : [workingData];
  const itemParagraphs: any[] = [];
  const mapInputQsortPattern = mapInputQsortPattern2.filter((num) => num !== 0);

  const statementsArray = currentStatements.split("\n");

  //   const partSort3 = data[1]["r20"].split(":");
  //   const partSort2 = partSort3[1].split("|");
  //   const partSort: number[] = partSort2.map((str: string) => parseInt(str, 10));
  //   const sortValueArray: any[] = [];
  //   partSort.forEach((item, index) => {
  //     let tempArray = [item, statementsArray[index]];
  //     sortValueArray.push(tempArray);
  //   });
  //   const sortedSortValueArray = sortValueArray.sort(([a], [b]) => b - a);

  const newHeaderArray = [...newHeaderArray2].reverse();

  console.log("333", JSON.stringify(mapInputQsortPattern));
  console.log("333", JSON.stringify(newHeaderArray));
  //   console.log("333", JSON.stringify(statementsArray));
  //   console.log("333", JSON.stringify(sortedSortValueArray));

  // for each participant
  const paragraphs: Paragraph[] = [];
  itemParagraphs.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "Participant Statement Q Sort Values",
          bold: true,
          size: 40,
        }),
      ],
      pageBreakBefore: true,
      heading: HeadingLevel.HEADING_1,
      thematicBreak: true,
    })
  );

  //   let newArray: Record<string, string>[] = [];

  dataItems.forEach((item: RecordMap, index) => {
    let partSort3 = data[index]["r20"].split(":");
    const partSort2 = partSort3[1].split("|");
    const partSort: number[] = partSort2.map((str: string) => parseInt(str, 10));
    const sortValueArray: any[] = [];
    partSort.forEach((item, index) => {
      let tempArray = [item, statementsArray[index]];
      sortValueArray.push(tempArray);
    });
    // const sortedSortValueArray = sortValueArray.sort(([a], [b]) => b - a);

    itemParagraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `Participant ${index + 1}. ${displayPartId[index]}`,
            bold: true,
          }),
        ],
        spacing: {
          before: 400,
        },
      })
    );

    newHeaderArray.forEach((entry, index) => {
      const filtered = sortValueArray.filter(
        ([firstValue]) => firstValue === newHeaderArray[index]
      );
      itemParagraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `Sort Value ${newHeaderArray[index]}`,
              bold: false,
              underline: {},
            }),
          ],
          indent: {
            start: 200,
          },
        })
      );
      filtered.forEach((filteredItem) => {
        itemParagraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: filteredItem[1],
                bold: false,
              }),
            ],
            indent: {
              start: 400,
            },
          })
        );
      });
    });

    // item.forEach(element, (index2) => {});

    itemParagraphs.push(paragraphs);
  }); // end dataItems for each

  return itemParagraphs;
};

export { wordPartStatements };

import { Paragraph, TextRun, HeadingLevel } from "docx";
import { stripHtml } from "../stripHtml";
import { stripTags } from "../../utils/stripTags";

const processTextSummary = (
  filteredData: any,
  partNames: string[],
  item: any,
  index: number,
  text: string,
  itemText: string
) => {
  let returnArray = [
    new Paragraph({
      children: [
        new TextRun({
          text: `${itemText} ${index + 1}.  ${text}`,
          bold: false,
          size: 28,
        }),
      ],
      heading: HeadingLevel.HEADING_2,
      spacing: {
        before: 300,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: item.label ? `${stripHtml(stripTags(item.label))}` : `n/a`,
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: item.note ? `${stripHtml(stripTags(item.note))}` : `n/a`,
          bold: true,
        }),
      ],
      indent: {
        left: 200,
      },
    }),
  ];

  filteredData.forEach((entry, iterator) => {
    let key = `itemNum${index + 1}`;
    let value = entry[key];
    returnArray.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${iterator + 1}.  ${partNames[iterator]}:  `,
            bold: false,
          }),
          new TextRun({
            text: `${stripHtml(stripTags(value))}`,
            bold: false,
          }),
        ],
        indent: {
          start: 200,
        },
      })
    );
  });

  return returnArray;
};

export { processTextSummary };

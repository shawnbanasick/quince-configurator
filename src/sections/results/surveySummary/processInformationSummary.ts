import { Paragraph, TextRun } from "docx";
import { stripHtml } from "../stripHtml";
import { stripTags } from "../../utils/stripTags";

const processInformationSummary = (item: any, index: number, text: string) => {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: `Item ${index + 1}.  ${text}`,
          bold: false,
          size: 28,
        }),
      ],
      spacing: {
        before: 300,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `${stripHtml(stripTags(item.note))}`,
          bold: true,
        }),
      ],
    }),
  ];
};

export { processInformationSummary };

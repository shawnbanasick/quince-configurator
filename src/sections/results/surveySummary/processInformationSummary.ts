import { Paragraph, TextRun } from "docx";
import { stripHtml } from "../stripHtml";

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
          text: `${stripHtml(item.note)}`,
          bold: true,
        }),
      ],
    }),
  ];
};

export { processInformationSummary };

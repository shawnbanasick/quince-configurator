import { AlignmentType, TextRun, Footer, Paragraph } from "docx";

const getSection1Footers = (dateTime, version) => {
  const section1Footers = {
    default: new Footer({
      children: [
        new Paragraph({
          alignment: AlignmentType.DISTRIBUTE,
          style: "bodyStyle1",
          children: [
            new TextRun(`Quincy Configurator v${version}`.padEnd(45, " ")),
            new TextRun(`${dateTime}`),
          ],
        }),
      ],
    }),
  };

  return section1Footers;
};

export { getSection1Footers };

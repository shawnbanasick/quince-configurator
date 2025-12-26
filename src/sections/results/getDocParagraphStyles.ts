const getDocParagraphStyles = () => {
  const styles = {
    paragraphStyles: [
      {
        id: "Heading3", // Use the exact ID of the built-in style
        name: "My Custom Heading 3", // Custom name (optional)
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
          // Customize text properties
          font: "Times New Roman",
          size: 20, // Size in half-points (28pt)
          bold: true,
          color: "2E74B5", // Hex color (Red)
        },
        paragraph: {
          // Customize paragraph properties (spacing, alignment, etc.)
          // spacing: {
          //     before: 200, // Space before the paragraph (in TWIPs)
          //     after: 200,  // Space after the paragraph (in TWIPs)
          // },
        },
      },
      {
        id: "myCustomStyle",
        name: "My custom red style",
        basedOn: "Normal",
        run: {
          color: "000000",
          bold: true,
          size: 26,
          font: "Courier New",
        },
        paragraph: {
          spacing: { line: 276, before: 150, after: 150 },
        },
      },
      {
        id: "bodyStyle1",
        name: "body text",
        basedOn: "Normal",
        run: {
          color: "000000",
          size: 20,
          font: "Courier New",
        },
        paragraph: {
          spacing: { line: 276, before: 100, after: 100 },
        },
      },
      {
        id: "dist8",
        name: "dist text8",
        basedOn: "Normal",
        run: {
          color: "000000",
          size: 16,
          font: "Courier New",
        },
        paragraph: {
          spacing: { line: 260, before: 10, after: 10 },
        },
      },
      {
        id: "dist6",
        name: "dist text6",
        basedOn: "Normal",
        run: {
          color: "000000",
          size: 18,
          font: "Courier New",
        },
        paragraph: {
          spacing: { line: 260, before: 10, after: 10 },
        },
      },
      {
        id: "dist4",
        name: "dist text4",
        basedOn: "Normal",
        run: {
          color: "000000",
          size: 20,
          font: "Courier New",
        },
        paragraph: {
          spacing: { line: 260, before: 10, after: 10 },
        },
      },

      {
        id: "correlationsStyle",
        name: "body text",
        basedOn: "Normal",
        run: {
          color: "000000",
          size: 21,
          font: "Courier New",
        },
        paragraph: {
          spacing: { line: 285, before: 100, after: 110 },
        },
      },
      {
        id: "ptQsorts",
        name: "plain text Q sorts",
        basedOn: "Normal",
        run: {
          color: "000000",
          size: 19,
          font: "Courier New",
        },
        paragraph: {
          spacing: { line: 276, before: 100, after: 100 },
        },
      },
      {
        id: "tableStyle1",
        name: "table very small text",
        basedOn: "Normal",
        run: {
          color: "000000",
          size: 16,
          font: "Arial",
        },
        paragraph: {
          spacing: { line: 260, before: 10, after: 10 },
        },
      },
      {
        id: "tableStyle2",
        name: "table small text",
        basedOn: "Normal",
        run: {
          color: "000000",
          size: 20,
          font: "Arial",
        },
        paragraph: {
          spacing: { line: 260, before: 10, after: 10 },
        },
      },
      {
        id: "tableStyle8",
        name: "table tiny text",
        basedOn: "Normal",
        run: {
          color: "000000",
          size: 16,
          font: "Arial",
        },
        paragraph: {
          spacing: { line: 220, before: 10, after: 10 },
        },
      },
    ],
  };

  return styles;
};

export { getDocParagraphStyles };

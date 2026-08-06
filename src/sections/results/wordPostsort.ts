import { Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";
import { stripHtml } from "./stripHtml";
import { stripTags } from "../utils/stripTags";

type RecordMap = Record<string, any>;

interface ColumnSlotEntry {
  slot: string;
  value: string;
}

// New format: item.columns = { column4: [{slot:"s20", value:"..."}], columnN4: [...] }
// Old format: item = { someKey: "column4(s20): text", ... } (flat strings starting with "colu")

const getStatementNumberFromSlot = (slot: string): number => {
  // "s20" -> 20
  const digits = slot.replace(/[^\d]/g, "");
  return +digits;
};

const buildEntryParagraphs = (
  id: number,
  entries: ColumnSlotEntry[],
  isNegative: boolean,
  array: string[],
  postsortLangObj: RecordMap,
  indentValue: number,
): Paragraph[] => {
  const paragraphs: Paragraph[] = [];

  entries.forEach((entry) => {
    const statementNumber = getStatementNumberFromSlot(entry.slot);
    const statement = array[statementNumber - 1];
    const commentText = stripHtml(stripTags(entry.value || ""));
    const sign = isNegative ? "" : "+"; // negative ids already carry their own "-" sign

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `(${postsortLangObj.columnAbr} ${sign}${id})  `,
            bold: true,
          }),
          new TextRun({
            text: statement,
            bold: false,
          }),
        ],
        indent: {
          start: indentValue,
        },
        spacing: {
          before: 50,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: commentText,
          }),
        ],
        indent: {
          start: indentValue,
        },
      }),
    );
  });

  return paragraphs;
};

// Parses the new structured `columns` object into sorted pos/neg column groups.
const parseStructuredColumns = (
  columns: RecordMap,
): {
  posColumns: [number, ColumnSlotEntry[]][];
  negColumns: [number, ColumnSlotEntry[]][];
} => {
  const posColumns: [number, ColumnSlotEntry[]][] = [];
  const negColumns: [number, ColumnSlotEntry[]][] = [];

  Object.entries(columns).forEach(([key, entries]) => {
    const slotEntries = (entries as ColumnSlotEntry[]) || [];
    if (key.startsWith("columnN")) {
      const id = Math.abs(parseInt(key.replace("columnN", ""), 10));
      negColumns.push([id, slotEntries]);
    } else if (key.startsWith("column")) {
      const id = parseInt(key.replace("column", ""), 10);
      posColumns.push([id, slotEntries]);
    }
  });

  posColumns.sort((a, b) => b[0] - a[0]);
  negColumns.sort((a, b) => b[0] - a[0]); // sort by magnitude desc, so -4 (most negative) still comes first

  return { posColumns, negColumns };
};

// Legacy fallback: parses the old flat-string format where each value on the
// item itself was a string like "columnN4(s28):no response".
const parseLegacyFlatColumns = (
  item: RecordMap,
): { posComments: string[]; negComments: string[] } => {
  const timeEntries = Object.values(item).filter(
    (value: any) =>
      typeof value === "string" && value.trim().startsWith("colu"),
  ) as string[];

  const posComments: string[] = [];
  const negComments: string[] = [];
  timeEntries.forEach((entry) => {
    if (entry.startsWith("columnN")) {
      negComments.push(entry);
    } else {
      posComments.push(entry);
    }
  });

  return { posComments, negComments };
};

const buildLegacyParagraphs = (
  entries: string[],
  isNegative: boolean,
  array: string[],
  postsortLangObj: RecordMap,
  indentValue: number,
): Paragraph[] => {
  const prepArray: any[] = [];
  entries.forEach((entry) => {
    const copy = stripHtml(stripTags(entry));
    let id = copy.slice(6, 9);
    if (isNegative) {
      id = id.replace("N", "-");
    }
    id = id.replace(":", "").replace("(", "");
    prepArray.push([+id, entry]);
  });

  const sortedArray = isNegative
    ? prepArray.sort((a, b) => a[0] - b[0])
    : prepArray.sort((a, b) => b[0] - a[0]);

  const paragraphs: Paragraph[] = [];
  sortedArray.forEach((pair: [number, string]) => {
    const [id, raw] = pair;
    const entry1 = raw.split(":").slice(1).join(":").trim();
    const statementNumber2 = entry1.slice(0, 5).trim();
    const statementNumber = statementNumber2
      .replace("(", "")
      .replace(")", "")
      .replace("s", "")
      .replace(":", "")
      .trim();
    const statement = array[+statementNumber - 1];
    const sign = isNegative ? "" : "+";

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `(${postsortLangObj.columnAbr} ${sign}${id})  `,
            bold: true,
          }),
          new TextRun({
            text: statement,
            bold: false,
          }),
        ],
        indent: { start: indentValue },
        spacing: { before: 50 },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: stripHtml(stripTags(raw)),
          }),
        ],
        indent: { start: indentValue },
      }),
    );
  });

  return paragraphs;
};

const wordPostsort = (
  data: RecordMap,
  currentStatements,
  postsortLangObj,
): Paragraph[] => {
  const workingData = cloneDeep(data);

  const indentValue = 400;
  const items = Array.isArray(workingData) ? workingData : [workingData];
  const array = currentStatements.split("\n");

  const itemParagraphs: any = [];
  items.forEach((item: RecordMap) => {
    const paragraphs: Paragraph[] = [];

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: postsortLangObj.positivePostsortComments,
            bold: true,
          }),
        ],
        indent: {
          start: 200,
        },
        spacing: {
          before: 50,
        },
      }),
    );

    if (item.columns && typeof item.columns === "object") {
      // New structured format
      const { posColumns, negColumns } = parseStructuredColumns(item.columns);

      posColumns.forEach(([id, entries]) => {
        paragraphs.push(
          ...buildEntryParagraphs(
            id,
            entries,
            false,
            array,
            postsortLangObj,
            indentValue,
          ),
        );
      });

      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: postsortLangObj.negativePostsortComments,
              bold: true,
            }),
          ],
          indent: {
            start: 200,
          },
          spacing: {
            before: 100,
          },
        }),
      );

      negColumns.forEach(([id, entries]) => {
        paragraphs.push(
          ...buildEntryParagraphs(
            id,
            entries,
            true,
            array,
            postsortLangObj,
            indentValue,
          ),
        );
      });
    } else {
      // Legacy flat-string format fallback
      const { posComments, negComments } = parseLegacyFlatColumns(item);

      paragraphs.push(
        ...buildLegacyParagraphs(
          posComments,
          false,
          array,
          postsortLangObj,
          indentValue,
        ),
      );

      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: postsortLangObj.negativePostsortComments,
              bold: true,
            }),
          ],
          indent: {
            start: 200,
          },
          spacing: {
            before: 100,
          },
        }),
      );

      paragraphs.push(
        ...buildLegacyParagraphs(
          negComments,
          true,
          array,
          postsortLangObj,
          indentValue,
        ),
      );
    }

    itemParagraphs.push(paragraphs);
  });
  return itemParagraphs;
};

export { wordPostsort };

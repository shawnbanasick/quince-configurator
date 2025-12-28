/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeadingLevel, Paragraph, TextRun } from "docx";
import { cloneDeep } from "es-toolkit";

/* ------------------------------------------------------------------ */
/* 1. Types & constants                                               */
/* ------------------------------------------------------------------ */

type Row = Record<string, string>; // each row is an object with string keys/values

/** Keys that the function expects in every row */
const REQUIRED_KEYS = [
  "r1", // project name
  "r2", // random id
  "r3", // participant id
  "r4", // url user code
  "r5", // date/time
  "r6", // device type
] as const;

/** Slices used to extract the meaningful part of each field */
const SLICE_MAP = {
  r1: { start: 15 }, // Project name
  r2: { start: 11 }, // Random id (from index 11 onward)
  r3: { start: 9 },
  r4: { start: 14 },
  r5: { start: 11 },
  r6: { start: 17 },
} as const;

/** Simple helper to guard string slicing */
function safeSlice(str: string | undefined, key: keyof typeof SLICE_MAP) {
  if (!str) return "";
  const { start } = SLICE_MAP[key];
  return str.slice(start);
}

/* ------------------------------------------------------------------ */
/* 2. Helpers                                                        */
/* ------------------------------------------------------------------ */

/**
 * Normalises a boolean flag that might be passed as string or value.
 */
function isTrue(value: unknown): boolean {
  return value === true || value === "true";
}

/**
 * Builds a paragraph with optional spacing / indent
 */
function paragraph(opts: {
  text: string;
  bold?: boolean;
  size?: number;
  heading?: HeadingLevel;
  thematicBreak?: boolean;
  before?: number;
  after?: number;
  startIndent?: number;
}): Paragraph {
  const { text, bold = false, size = 20, ...rest } = opts;

  return new Paragraph({
    children: [new TextRun({ text, bold, size })],
    indent: { start: opts.startIndent },
    heading: opts.heading,
    spacing: { before: opts.before, after: opts.after },
    ...rest,
  });
}

/**
 * Safely returns an array at a given index or an empty array.
 */
function safeArray<T>(arr: T[] | undefined, idx: number): T[] {
  return arr && Array.isArray(arr[idx]) ? arr[idx] : [];
}

/* ------------------------------------------------------------------ */
/* 3. Main function                                                 */
/* ------------------------------------------------------------------ */

export function wordId(
  data: Row[],
  timeText: Paragraph[],
  presortText: Paragraph[],
  sortsText: Paragraph[],
  postsortText: Paragraph[],
  surveyText: Paragraph[],
  displayPartId: string, // "randomId" | "partId" | "urlUsercode"
  numStatements: number,
  showSurvey: unknown,
  showPostsort: unknown
): Paragraph[] {
  /* ---- validation ------------------------------------------------- */
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("`data` must be a non‑empty array");
  }

  // Ensure every row contains the keys we need – if not, we skip that row.
  const workingData: Row[] = cloneDeep(
    data.filter((row) => REQUIRED_KEYS.every((k) => typeof row[k] === "string"))
  );

  /* ---- header ----------------------------------------------------- */
  const firstRow = workingData[0];
  const projectNameTitleString2 = safeSlice(firstRow.r1, "r1");
  const [projectDatePart, ...restParts] = projectNameTitleString2.split(" - ");
  const projectDate = restParts.pop()?.split("@") ?? ["", ""];
  const projectNameTitleString = restParts.length > 0 ? restParts.join(" - ") : projectDatePart;

  const childArray: Paragraph[] = [
    paragraph({
      text: projectNameTitleString,
      bold: true,
      size: 64,
      after: 20,
    }),
    paragraph({
      text: `Project Creation Date: ${projectDate[0]} at ${projectDate[1]}`,
      bold: true,
      size: 24,
      after: 20,
    }),
    paragraph({
      text: `${numStatements} Statements / ${workingData.length} Participants`,
      bold: true,
      size: 24,
      after: 400,
    }),
    new Paragraph({
      children: [new TextRun({ text: "Q Sort Data", bold: true, size: 40 })],
      heading: HeadingLevel.HEADING_1,
      thematicBreak: true,
    }),
  ];

  /* ---- per‑row processing ---------------------------------------- */
  let previousId = "";
  let counter = 1;
  const INDENT_START1 = 200;
  const INDENT_START2 = 400;

  workingData.forEach((item, index) => {
    // 1️⃣ Create a unique id if needed
    let id = safeSlice(item.r2, "r2");
    if (id === previousId) {
      id = `${id}_${counter++}`;
    } else {
      counter = 1;
      previousId = id;
    }

    // 2️⃣ Resolve display identifier
    const identCode =
      displayPartId === "randomId"
        ? safeSlice(item.r2, "r2")
        : displayPartId === "partId"
        ? safeSlice(item.r3, "r3")
        : displayPartId === "urlUsercode"
        ? safeSlice(item.r4, "r4")
        : "";

    // 3️⃣ Append participant block
    childArray.push(
      paragraph({
        text: `Participant: ${index + 1} - ${identCode}`,
        bold: true,
        heading: HeadingLevel.HEADING_2,
        size: 34,
        before: 200,
      }),
      paragraph({
        text: `Session Metadata`,
        bold: true,
        startIndent: INDENT_START1,
        // heading: HeadingLevel.HEADING_4,
        before: 100,
      }),
      paragraph({
        text: `Project Name: ${safeSlice(item.r1, "r1")}`,
        startIndent: INDENT_START2,
      }),
      paragraph({ text: `random ID: ${id}`, startIndent: INDENT_START2 }),
      paragraph({
        text: `participant ID: ${safeSlice(item.r3, "r3")}`,
        startIndent: INDENT_START2,
      }),
      paragraph({ text: `URL user code: ${safeSlice(item.r4, "r4")}`, startIndent: INDENT_START2 }),
      paragraph({ text: `Date and time: ${safeSlice(item.r5, "r5")}`, startIndent: INDENT_START2 }),
      paragraph({
        text: `Desktop or Mobile: ${safeSlice(item.r6, "r6")}`,
        startIndent: INDENT_START2,
      })
    );

    // 4️⃣ Append optional child arrays safely
    childArray.push(...safeArray(timeText, index));
    childArray.push(...safeArray(presortText, index));
    childArray.push(...safeArray(sortsText, index));

    if (isTrue(showPostsort)) {
      childArray.push(...safeArray(postsortText, index));
    }
    if (isTrue(showSurvey)) {
      childArray.push(...safeArray(surveyText, index));
    }
  });

  return childArray;
}

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
  // heading?: HeadingLevel;
  heading?: (typeof HeadingLevel)[keyof typeof HeadingLevel];
  thematicBreak?: boolean;
  before?: number;
  after?: number;
  startIndent?: number;
}): Paragraph {
  const {
    text,
    bold = false,
    size = 20,
    heading,
    thematicBreak,
    before,
    after,
    startIndent,
  } = opts;

  return new Paragraph({
    children: [new TextRun({ text, bold, size })],
    ...(startIndent !== undefined && { indent: { start: startIndent } }),
    ...(heading !== undefined && { heading }),
    ...(thematicBreak !== undefined && { thematicBreak }),
    ...(before !== undefined || after !== undefined ? { spacing: { before, after } } : {}),
  });
}

/**
 * Safely returns an array at a given index or an empty array.
 */
function safeArray<T>(arr: T[] | undefined, idx: number): T[] {
  if (!arr || !Array.isArray(arr)) {
    return [];
  }

  if (idx < 0 || idx >= arr.length) {
    return [];
  }

  const element = arr[idx];
  return Array.isArray(element) ? element : [];
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
  showPostsort: unknown,
  idLangObj: Record<string, string>,
): Paragraph[] {
  /* ---- validation ------------------------------------------------- */
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("`data` must be a non‑empty array");
  }

  // Ensure every row contains the keys we need – if not, we skip that row.
  const workingData: Row[] = cloneDeep(
    data.filter((row) => REQUIRED_KEYS.every((k) => typeof row[k] === "string")),
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
      text: `${idLangObj.projectCreationDate}: ${projectDate[0]} @ ${projectDate[1]}`,
      bold: true,
      size: 24,
      after: 20,
    }),
    paragraph({
      text: `${numStatements} ${idLangObj.statements} / ${workingData.length} ${idLangObj.participants}`,
      bold: true,
      size: 24,
      after: 300,
    }),

    new Paragraph({
      children: [
        new TextRun({ text: "\u26a0\ufe0f ", size: 40 }),
        new TextRun({ text: idLangObj.navigationInstructions, size: 24 }),
      ],
      spacing: {
        after: 400,
      },
    }),

    new Paragraph({
      children: [new TextRun({ text: idLangObj.qSortData, bold: true, size: 40 })],
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

    // localize text
    let participantId = safeSlice(item.r3, "r3")?.trim();
    let urlUsercode = safeSlice(item.r4, "r4")?.trim();
    let desktopOrMobile = safeSlice(item.r6, "r6")?.trim();

    if (participantId === "no part ID") {
      participantId = idLangObj.noPartId;
    }
    if (urlUsercode === "no usercode set") {
      urlUsercode = idLangObj.noUrlUsercode;
    }
    if (desktopOrMobile === "desktop") {
      desktopOrMobile = idLangObj.desktop;
    }
    if (desktopOrMobile === "mobile") {
      desktopOrMobile = idLangObj.mobile;
    }

    // 3️⃣ Append participant block
    childArray.push(
      paragraph({
        text: `${idLangObj.participant}: ${index + 1} - ${identCode}`,
        bold: true,
        heading: HeadingLevel.HEADING_2,
        size: 34,
        before: 200,
      }),
      paragraph({
        text: `${idLangObj.sessionMetadata}`,
        bold: true,
        startIndent: INDENT_START1,
        before: 100,
      }),
      paragraph({
        text: `${idLangObj.projectName}: ${safeSlice(item.r1, "r1")}`,
        startIndent: INDENT_START2,
      }),
      paragraph({ text: `${idLangObj.randomId}: ${id}`, startIndent: INDENT_START2 }),
      paragraph({
        text: `${idLangObj.participantId}: ${participantId}`,
        startIndent: INDENT_START2,
      }),
      paragraph({ text: `${idLangObj.urlUsercode}: ${urlUsercode}`, startIndent: INDENT_START2 }),
      paragraph({
        text: `${idLangObj.dateAndTime}: ${safeSlice(item.r5, "r5")}`,
        startIndent: INDENT_START2,
      }),
      paragraph({
        text: `${idLangObj.desktopOrMobile}: ${desktopOrMobile}`,
        startIndent: INDENT_START2,
      }),
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

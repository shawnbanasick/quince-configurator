/**
 * Convert an array of objects into an array of number‑arrays.
 *
 * @param data – array of objects that may contain an `"r20"` string field.
 * @returns A new array where each element is an array of numbers extracted from `item.r20`.
 */

function createRespondentArray(
  data: Array<Record<string, unknown>> | null | undefined
): number[][] {
  if (!data) return [];

  const result: number[][] = [];

  for (const item of data) {
    // Grab the r20 field – it might be absent or not a string
    const raw = typeof item["r20"] === "string" ? item["r20"] : "";

    // Split on ':' – keep only the part after the first colon
    const [, secondPart] = raw.split(":");
    if (!secondPart) continue; // nothing to parse

    // Split that piece on '|' and convert each entry to a number
    const numbers: number[] = secondPart.split("|").map((e) => {
      const trimmed = e.trim();
      const n = Number(trimmed);
      return isNaN(n) ? 0 : n;
    });

    result.push(numbers);
  }

  return result;
}

export { createRespondentArray };

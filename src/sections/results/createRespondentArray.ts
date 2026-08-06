/**
 * Convert an array of objects into an array of number‑arrays.
 *
 * @param data – array of objects that may contain an `"r20"` string field.
 * @returns A new array where each element is an array of numbers extracted from `item.r20`.
 */

function createRespondentArray(
  data: Array<Record<string, unknown>> | null | undefined,
): number[][] {
  if (!data) return [];

  const result: number[][] = [];

  for (const item of data) {
    // Grab the r20 field – it might be absent or not a string
    const raw = JSON.parse(JSON.stringify(item.sort));

    result.push(raw);
  }

  return result;
}

export { createRespondentArray };

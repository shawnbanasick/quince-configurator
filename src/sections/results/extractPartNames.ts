interface ParticipantData {
  randomId?: string | null;
  partId?: string | null;
  urlUsercode?: string | null;
  r2?: string;
  r3?: string;
  r4?: string;
  [key: string]: any;
}

type IdentifierField = "randomId" | "partId" | "urlUsercode";

// Legacy format used fixed-width labeled prefixes on flat strings, e.g.
// item.r2 = "Random ID: dade5b1d-293". These lengths strip that prefix.
const LEGACY_PREFIX_LENGTHS: Record<IdentifierField, number> = {
  randomId: 11, // "Random ID: "
  partId: 9, // "Part ID: "
  urlUsercode: 14, // "URL Usercode: "
};

const LEGACY_KEY_MAP: Record<IdentifierField, "r2" | "r3" | "r4"> = {
  randomId: "r2",
  partId: "r3",
  urlUsercode: "r4",
};

const FALLBACK_LABEL = "n/a";

/**
 * Resolves one identifier field for a participant.
 *
 * New format: item.randomId / item.partId / item.urlUsercode are already
 * clean values - but may genuinely be `null` (e.g. a participant who never
 * got a partId or urlUsercode assigned).
 *
 * Legacy format: item.r2 / item.r3 / item.r4 are fixed-prefix strings like
 * "Random ID: dade5b1d-293" that need the label stripped off.
 *
 * Returns null if there's no usable value in either shape, rather than
 * throwing - callers decide how to handle that (fallback label, error log).
 */
const resolveFieldValue = (
  item: ParticipantData,
  field: IdentifierField,
): string | null => {
  if (Object.prototype.hasOwnProperty.call(item, field)) {
    const value = item[field];
    return typeof value === "string" && value.trim() ? value.trim() : null;
  }

  const legacyKey = LEGACY_KEY_MAP[field];
  const legacyValue = item[legacyKey];
  if (typeof legacyValue !== "string") {
    return null;
  }

  const sliced = legacyValue.slice(LEGACY_PREFIX_LENGTHS[field]).trim();
  return sliced || null;
};

const extractPartNames = (data: ParticipantData[]) => {
  const partIdNameArray: string[] = [];
  const randomIdNameArray: string[] = [];
  const urlUsercodeNameArray: string[] = [];
  const resultsImportErrorArray: number[] = [];

  let previousRandomId = "";
  let previousPartId = "";
  let previousUrlUsercode = "";

  let counterRandom = 2;
  let counterPartId = 2;
  let counterUrlUser = 2;

  data.forEach((item, index) => {
    const randomIdRaw = resolveFieldValue(item, "randomId");
    const partIdRaw = resolveFieldValue(item, "partId");
    const urlUsercodeRaw = resolveFieldValue(item, "urlUsercode");

    // Missing randomId is still worth flagging as an import issue, but we no
    // longer skip the participant entirely - doing so used to desync this
    // function's output arrays from `data`'s length, which broke downstream
    // consumers (e.g. wordPartStatements) expecting one entry per participant.
    if (randomIdRaw === null) {
      resultsImportErrorArray.push(index + 1);
    }

    let randomId = randomIdRaw ?? FALLBACK_LABEL;
    let partId = partIdRaw ?? FALLBACK_LABEL;
    let urlUsercode = urlUsercodeRaw ?? FALLBACK_LABEL;

    if (randomIdRaw !== null && randomIdRaw === previousRandomId) {
      randomId = `${randomId}_${counterRandom}`;
      counterRandom++;
    } else {
      counterRandom = 2;
    }

    if (partIdRaw !== null && partIdRaw === previousPartId) {
      partId = `${partId}_${counterPartId}`;
      counterPartId++;
    } else {
      counterPartId = 2;
    }

    if (urlUsercodeRaw !== null && urlUsercodeRaw === previousUrlUsercode) {
      urlUsercode = `${urlUsercode}_${counterUrlUser}`;
      counterUrlUser++;
    } else {
      counterUrlUser = 2;
    }

    randomIdNameArray.push(randomId);
    partIdNameArray.push(partId);
    urlUsercodeNameArray.push(urlUsercode);

    previousRandomId = randomIdRaw ?? "";
    previousPartId = partIdRaw ?? "";
    previousUrlUsercode = urlUsercodeRaw ?? "";
  });

  return [
    randomIdNameArray,
    partIdNameArray,
    urlUsercodeNameArray,
    resultsImportErrorArray,
  ];
};

export { extractPartNames };

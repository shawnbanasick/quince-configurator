const createQSortPattern = (qSortPatternObject) => {
  const columnHeadersArray = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let qSortPatternString = "";

  columnHeadersArray.forEach((item) => {
    if (qSortPatternObject[item]) {
      qSortPatternString = qSortPatternString + `${qSortPatternObject[item]},`;
    } else {
      qSortPatternString = qSortPatternString + `0,`;
    }
  });
  if (qSortPatternString.charAt(qSortPatternString.length - 1) === " ") {
    qSortPatternString = qSortPatternString.slice(0, -1);
  }
  if (qSortPatternString.charAt(qSortPatternString.length - 1) === ",") {
    qSortPatternString = qSortPatternString.slice(0, -1);
  }
  return qSortPatternString;
};

export { createQSortPattern };

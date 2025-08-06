const createStatementNumArray = (numStatements: number): number[] => {
  if (!numStatements) return [];
  let numArray: number[] = [];
  for (let i = 0; i < numStatements; i++) {
    numArray.push(i + 1);
  }
  return numArray;
};

export { createStatementNumArray };

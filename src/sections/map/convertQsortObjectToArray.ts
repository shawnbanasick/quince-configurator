const convertQsortObjectToArray = (data: {
  [key: string]: number;
}): number[] => {
  const objectKeys = Object.keys(data);
  const resultsArray: number[] = [];
  for (let i = 0; i < objectKeys.length; i += 1) {
    const value = +objectKeys[i];
    const multiplier = data[objectKeys[i]];
    for (let k = 0; k < multiplier; k += 1) {
      resultsArray.push(value);
    }
  }
  resultsArray.sort((a, b) => a - b);
  return resultsArray;
};

export { convertQsortObjectToArray };

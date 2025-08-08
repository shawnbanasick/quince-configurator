const calcNewHeaderArray = (mapInputQsortPattern) => {
  let allHeaderNumbersArray = [
    -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ];
  let newHeaderArray: number[] = [];
  mapInputQsortPattern.forEach((item, index) => {
    if (item > 0) {
      newHeaderArray.push(allHeaderNumbersArray[index]);
    }
  });
  return newHeaderArray;
};

export { calcNewHeaderArray };

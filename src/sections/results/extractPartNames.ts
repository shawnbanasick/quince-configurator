const extractPartNames = (data) => {
  // Filter for values starting with "(itemNum"
  // const randomIdEntries = Object.values(data).filter(
  //   (value: any) => typeof value === "string" && value.trim().startsWith("itemNum")
  // );
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
    let randomIdPrep = item["r2"];
    if (randomIdPrep === undefined || randomIdPrep === null) {
      resultsImportErrorArray.push(index + 1);
      return;
    }
    let randomId = randomIdPrep.slice(11).trim();
    let partIdPrep = item["r3"];
    let partId = partIdPrep.slice(9).trim();
    let urlUsercodePrep = item["r4"];
    let urlUsercode = urlUsercodePrep.slice(14).trim();

    if (randomIdPrep === previousRandomId) {
      randomId = `${randomId}_${counterRandom}`;
      counterRandom++;
    } else {
      counterRandom = 2;
    }

    if (partIdPrep === previousPartId) {
      partId = `${partId}_${counterPartId}`;
      counterPartId++;
    } else {
      counterPartId = 2;
    }

    if (urlUsercodePrep === previousUrlUsercode) {
      urlUsercode = `${urlUsercode}_${counterUrlUser}`;
      counterUrlUser++;
    } else {
      counterUrlUser = 2;
    }

    randomIdNameArray.push(randomId);
    partIdNameArray.push(partId);
    urlUsercodeNameArray.push(urlUsercode);

    previousRandomId = randomIdPrep;
    previousPartId = partIdPrep;
    previousUrlUsercode = urlUsercodePrep;
  });
  return [randomIdNameArray, partIdNameArray, urlUsercodeNameArray, resultsImportErrorArray];
};

export { extractPartNames };

const createRespondentArray = (data) => {
  if (!data) return;
  let returnArray: any[] = [];
  data.forEach((item) => {
    let tempArrayPrep = item["r20"];
    let tempArrayPrep2 = tempArrayPrep.split(":");
    let tempArrayPrep3 = tempArrayPrep2[1].split("|");
    let tempArrayPrep4: number[] = [];
    tempArrayPrep3.forEach((entry) => {
      tempArrayPrep4.push(+entry.trim());
    });
    returnArray.push(tempArrayPrep4);
  });
  return returnArray;
};

export { createRespondentArray };

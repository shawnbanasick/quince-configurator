type SortItem = {
  [key: string]: string;
};

const createSortsText = (data: SortItem[] = [], participantIdent: string = ""): string => {
  let returnText = "";
  let value = data[0]["r20"];
  let valueText = value.slice(0, 5);
  let sortsArray: string[][] = [];

  if (valueText === "sort:") {
    // Default sort location at r18
    sortsArray = data.map((item) => {
      let fullString = item["r20"];
      let string = fullString.slice(5);
      string = string.trimStart();
      let stringArray = string.split("|");
      return stringArray;
    });
  } else {
    // when sort isn't at default location "r18", search for it
    sortsArray = data.map((item) => {
      let foundArray: string[] = [];

      for (const [_, val] of Object.entries(item)) {
        const prefix = val.slice(0, 5);
        if (prefix === "sort:") {
          const trimmed = val.slice(5).trimStart();
          foundArray = trimmed.split("|");
          break;
        }
      }

      return foundArray;
    });
  }

  console.log(participantIdent);

  let previousId = "";
  let counter = 1;

  data.forEach((sort, index) => {
    let id;
    if (participantIdent === "randomId") {
      id = sort["r2"];
      id = id.replace("(randomId):", "").trim();
    }
    if (participantIdent === "partId") {
      id = sort["r3"];
      id = id.replace("(partId):", "").trim();
    }
    if (participantIdent === "urlUsercode") {
      id = sort["r4"];
      id = id.replace("(urlUsercode):", "").trim();
    }

    if (id === previousId) {
      id = `${id}_${counter}`;
      counter++; // Increment counter
    } else {
      counter = 1; // Reset counter for new ID
    }
    returnText = returnText + id + "," + sortsArray[index] + "\n";
    previousId = sort["r2"];
  });

  return returnText;
};

export { createSortsText };

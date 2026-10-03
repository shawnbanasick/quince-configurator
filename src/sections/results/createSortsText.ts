type SortItem = {
  [key: string]: string;
};

const createSortsText = (
  data: SortItem[] = [],
  participantIdent: string = "",
): string => {
  let returnText = "";
  let previousId = "";
  let counter = 1;

  data.forEach((item) => {
    let id = item[participantIdent];
    if (id === previousId) {
      id = `${id}_${counter++}`;
    }
    returnText += `${id}, ${item["sort"]}\n`;
    previousId = id;
  });
  return returnText;
};

export { createSortsText };

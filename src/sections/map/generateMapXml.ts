import { useStore } from "../../GlobalState/useStore";

const generateMapXml = () => {
  const columnsArray: string[] = [
    "-6",
    "-5",
    "-4",
    "-3",
    "-2",
    "-1",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];

  const headersLookupArray: string[] = [
    "N6",
    "N5",
    "N4",
    "N3",
    "N2",
    "N1",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];

  let qSortPatternObject = useStore.getState().qSortPatternObject;

  if (qSortPatternObject === null) {
    qSortPatternObject = JSON.parse(localStorage.getItem("qSortPatternObject") || '""');
  }

  const releaseVersion = useStore.getState().version;
  const mapColColorsStyle = useStore.getState().mapColColorsStyle;

  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <map version="${releaseVersion}" htmlParse="false">\n`;

  // CALC COL ARRAYS
  let filteredQSortPatternObject = Object.keys(qSortPatternObject).reduce((property, index) => {
    if (+qSortPatternObject[index] > 0) property[index] = qSortPatternObject[index];
    return property;
  }, {});

  // replace "M" with "-" in keys
  filteredQSortPatternObject = Object.keys(filteredQSortPatternObject).reduce((property, index) => {
    let newKey = index.replace("M", "-");
    property[newKey] = filteredQSortPatternObject[index];
    return property;
  }, {});

  let keys = Object.keys(filteredQSortPatternObject).map((x) => +x);
  keys.sort((a, b) => a - b);
  //   keys = keys.toString();
  // qSortHeaderNumbers for xml - ex -> -4,-3,-2,-1,0,+1,+2,+3,+4
  const qSortHeaderNumbersText = `     <item id="qSortHeaderNumbers">${keys}</item>\n`;
  let qSortHeaders = keys.toString().replace(/-/g, "N");
  // qSortHeaders for xml - ex -> N4,N3,N2,N1,0,1,2,3,4
  const qSortHeadersText = `     <item id="qSortHeaders">${qSortHeaders}</item>\n`;

  // CALC COLS AND COL COLORS ARRAYS
  let qSortPatternArray: number[] = [];
  let columnHeadersColorsArray: string[] = [];
  let columnColorsArray: string[] = [];

  for (let i = 0; i < columnsArray.length; i += 1) {
    let colorString = "";
    let value = parseInt(columnsArray[i], 10);
    let numStates = parseInt(qSortPatternObject[columnsArray[i]], 10) || 0;

    // for Q sort pattern array
    if (numStates !== 0) {
      qSortPatternArray.push(numStates);
      // for colors arrays
      if (mapColColorsStyle === "noColoring") {
        columnHeadersColorsArray.push("whitesmoke");
        columnColorsArray.push("whitesmoke");
      }

      let colorIndex = `colCol${headersLookupArray[i]}`;

      let color = localStorage.getItem(colorIndex) || useStore.getState()[colorIndex];

      if (mapColColorsStyle === "headers") {
        columnHeadersColorsArray.push(color);
        columnColorsArray.push("whitesmoke");
      }
      if (mapColColorsStyle === "headersAndColumns") {
        columnHeadersColorsArray.push(color);
        columnColorsArray.push(color);
      }
    }

    let mapString;
    if (value > 0) {
      colorString = `colour="9FDFBF"`;
    } else if (value < 0) {
      colorString = `colour="FFD5D5"`;
    } else {
      colorString = `colour="E9E9E9"`;
    }
    // format string
    if (numStates > 0) {
      mapString = `     <column id="${value}" ${colorString}>${numStates}</column>\n`;
      data = data.concat(mapString);
    }
  }

  // qSortPattern for xml - ex -> 2,3,4,5,5,5,4,3,2
  let qSortPatternString = qSortPatternArray.toString();
  const qSortPatternArrayText = `     <item id="qSortPattern">${qSortPatternString}</item>\n`;

  let columnHeadersColorsString = columnHeadersColorsArray.toString();
  let columnColorsString = columnColorsArray.toString();
  const columnHeadersColorsText = `     <item id="columnHeadersColorsArray">${columnHeadersColorsString}</item>\n`;
  const columnColorsText = `     <item id="columnColorsArray">${columnColorsString}</item>\n`;

  const mobileHeadersTextValue = useStore.getState().mobileHeadersText;
  const useColLabelNumsDesktopValue = useStore.getState().useColLabelNumsDesktop;
  const useColLabelNumsMobileValue = useStore.getState().useColLabelNumsMobile;
  const useColLabelTextDesktopValue = useStore.getState().useColLabelTextDesktop;
  const useColLabelTextMobileValue = useStore.getState().useColLabelTextMobile;
  const useColLabelEmojiDesktopValue = useStore.getState().useColLabelEmojiDesktop;
  const useColLabelEmojiMobileValue = useStore.getState().useColLabelEmojiMobile;
  const emojiArrayTypeValue = useStore.getState().emojiArrayType;

  const mobileHeadersText = `     <item id="colHeadersText">${mobileHeadersTextValue}</item>\n`;

  const useColLabelNumsDesktop = `     <item id="useColLabelNumsDesktop">${useColLabelNumsDesktopValue}</item>\n`;

  const useColLabelNumsMobile = `     <item id="useColLabelNumsMobile">${useColLabelNumsMobileValue}</item>\n`;

  const useColLabelTextDesktop = `     <item id="useColLabelTextDesktop">${useColLabelTextDesktopValue}</item>\n`;

  const useColLabelTextMobile = `     <item id="useColLabelTextMobile">${useColLabelTextMobileValue}</item>\n`;

  const useColLabelEmojiDesktop = `     <item id="useColLabelEmojiDesktop">${useColLabelEmojiDesktopValue}</item>\n`;

  const useColLabelEmojiMobile = `     <item id="useColLabelEmojiMobile">${useColLabelEmojiMobileValue}</item>\n`;

  const emojiArrayType = `     <item id="emojiArrayType">${emojiArrayTypeValue}</item>\n`;

  // Concat arrays into file
  data = data.concat(
    qSortHeaderNumbersText,
    qSortHeadersText,
    qSortPatternArrayText,
    columnHeadersColorsText,
    columnColorsText,
    mobileHeadersText,
    useColLabelNumsDesktop,
    useColLabelNumsMobile,
    useColLabelTextDesktop,
    useColLabelTextMobile,
    useColLabelEmojiDesktop,
    useColLabelEmojiMobile,
    emojiArrayType
  );

  // end file
  const endingText = `   </map>`;
  data = data.concat(endingText);

  return data;
};

export { generateMapXml };

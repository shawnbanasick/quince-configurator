const createMapXmlSlice = (set) => ({
  mapColorPalette: "steps",
  mapColColorsStyle: "headers",
  activeValueM6: "0",
  activeValueM5: "0",
  activeValueM4: "0",
  activeValueM3: "0",
  activeValueM2: "0",
  activeValueM1: "0",
  activeValue0: "0",
  activeValue1: "0",
  activeValue2: "0",
  activeValue3: "0",
  activeValue4: "0",
  activeValue5: "0",
  activeValue6: "0",
  activeValue7: "0",
  activeValue8: "0",
  activeValue9: "0",
  activeValue10: "0",
  activeValue11: "0",
  activeValue12: "0",
  activeValue13: "0",
  qSortPatternObject: {},
  colColN6: "#E02424",
  colColN5: "#F05252",
  colColN4: "#F98080",
  colColN3: "#F8B4B4",
  colColN2: "#FBD5D5",
  colColN1: "#FDE8E8",
  colCol0: "#F3F4F6",
  colCol1: "#DEF7EC",
  colCol2: "#BCF0DA",
  colCol3: "#84E1BC",
  colCol4: "#31C48D",
  colCol5: "#0E9F6E",
  colCol6: "#057A55",
  colCol7: "#e0e0e0",
  colCol8: "#e0e0e0",
  colCol9: "#e0e0e0",
  colCol10: "#e0e0e0",
  colCol11: "#e0e0e0",
  colCol12: "#e0e0e0",
  colCol13: "#e0e0e0",
  qSortPattern: [],
  mapInputQsortPattern: [],
  mobileHeadersText: "",
  numMapTotalColumns: 0,
  mobileHeadersDefaultLabels: "",
  mobileHeadersDefault5: "Strongly Agree, Agree, Neutral, Disagree, Strongly Disagree",
  mobileHeadersDefault7:
    "Strongly Agree, Agree, Agree Somewhat, Neutral, Disagree Somewhat, Disagree, Strongly Disagree",
  mobileHeadersDefault9:
    "Very Strongly Agree, Strongly Agree, Agree, Agree Somewhat, Neutral, Disagree Somewhat, Disagree, Strongly Disagree, Very Strongly Disagree",
  mobileHeadersDefault11:
    "Very Strongly Agree, Strongly Agree, Agree, Agree Somewhat, Slightly Agree, Neutral, Very Slightly Disagree, Disagree Somewhat, Disagree, Strongly Disagree, Very Strongly Disagree",
  mobileHeadersDefault13:
    "Completely Agree, Very Strongly Agree, Strongly Agree, Agree, Agree Somewhat, Slightly Agree, Neutral, Very Slightly Disagree, Disagree Somewhat, Disagree, Strongly Disagree, Very Strongly Disagree, Completely Disagree",
  allStatementsAllocated: false,
  useColLabelNumsDesktop: true,
  useColLabelNumsMobile: true,
  useColLabelTextDesktop: false,
  useColLabelTextMobile: false,
  useColLabelEmojiDesktop: false,
  useColLabelEmojiMobile: false,
  emojiArray: [],
  emojiArrayType: "",
  colTextLabelsArray: [],

  /*
   ******** GENERIC STATE CHANGE  ****************** */
  setText: (stateDesig, text) => set(() => ({ [stateDesig]: text })),
  setColor: (stateDesig, color) => set(() => ({ [stateDesig]: color })),
  setNumber: (stateDesig, number) => set(() => ({ [stateDesig]: number })),

  setColTextLabelsArray: (array) => {
    set(() => ({ colTextLabelsArray: array }));
  },
  setEmojiArray: (array) => {
    set(() => ({ emojiArray: array }));
  },
  setEmojiArrayType: (string) => {
    set(() => ({ emojiArrayType: string }));
  },
  setUseColLabelNumsDesktop: (Boolean) => {
    set(() => ({ useColLabelNumsDesktop: Boolean }));
  },
  setUseColLabelNumsMobile: (Boolean) => {
    set(() => ({ useColLabelNumsMobile: Boolean }));
  },
  setUseColLabelTextDesktop: (Boolean) => {
    set(() => ({ useColLabelTextDesktop: Boolean }));
  },
  setUseColLabelTextMobile: (Boolean) => {
    set(() => ({ useColLabelTextMobile: Boolean }));
  },
  setUseColLabelEmojiDesktop: (Boolean) => {
    set(() => ({ useColLabelEmojiDesktop: Boolean }));
  },
  setUseColLabelEmojiMobile: (Boolean) => {
    set(() => ({ useColLabelEmojiMobile: Boolean }));
  },
  setAllStatementsAllocated: (value) => {
    set(() => ({ allStatementsAllocated: value }));
  },
  setMobileHeadersDefaultLabels: (text) => {
    set(() => ({ mobileHeadersDefaultLabels: text }));
  },
  setMapNumTotalColumns: (num) => {
    set(() => ({ numMapTotalColumns: num }));
  },
  setMobileHeadersText: (text) => {
    set(() => ({ mobileHeadersText: text }));
  },
  setMapColorPalette: (palette) => {
    set(() => ({ mapColorPalette: palette }));
  },
  setMapInputQsortPattern: (pattern) => {
    set(() => ({ mapInputQsortPattern: pattern }));
  },
  setQSortPattern: (pattern) => {
    set(() => ({ qSortPattern: pattern }));
  },
  setColColN6: (color) => {
    set(() => ({ colColN6: color }));
  },
  setColColN5: (color) => {
    set(() => ({ colColN5: color }));
  },
  setColColN4: (color) => {
    set(() => ({ colColN4: color }));
  },
  setColColN3: (color) => {
    set(() => ({ colColN3: color }));
  },
  setColColN2: (color) => {
    set(() => ({ colColN2: color }));
  },
  setColColN1: (color) => {
    set(() => ({ colColN1: color }));
  },
  setColCol0: (color) => {
    set(() => ({ colCol0: color }));
  },
  setColCol1: (color) => {
    set(() => ({ colCol1: color }));
  },
  setColCol2: (color) => {
    set(() => ({ colCol2: color }));
  },
  setColCol3: (color) => {
    set(() => ({ colCol3: color }));
  },
  setColCol4: (color) => {
    set(() => ({ colCol4: color }));
  },
  setColCol5: (color) => {
    set(() => ({ colCol5: color }));
  },
  setColCol6: (color) => {
    set(() => ({ colCol6: color }));
  },
  setColCol7: (color) => {
    set(() => ({ colCol7: color }));
  },
  setColCol8: (color) => {
    set(() => ({ colCol8: color }));
  },
  setColCol9: (color) => {
    set(() => ({ colCol9: color }));
  },
  setColCol10: (color) => {
    set(() => ({ colCol10: color }));
  },
  setColCol11: (color) => {
    set(() => ({ colCol11: color }));
  },
  setColCol12: (color) => {
    set(() => ({ colCol12: color }));
  },
  setColCol13: (color) => {
    set(() => ({ colCol13: color }));
  },
  setQSortPatternObject: (object) => {
    set(() => ({ qSortPatternObject: object }));
  },
  setMapValueM6: (value) => {
    set(() => ({ activeValueM6: value }));
  },
  setMapValueM5: (value) => {
    set(() => ({ activeValueM5: value }));
  },
  setMapValueM4: (value) => {
    set(() => ({ activeValueM4: value }));
  },
  setMapValueM3: (value) => {
    set(() => ({ activeValueM3: value }));
  },
  setMapValueM2: (value) => {
    set(() => ({ activeValueM2: value }));
  },
  setMapValueM1: (value) => {
    set(() => ({ activeValueM1: value }));
  },
  setMapValue0: (value) => {
    set(() => ({ activeValue0: value }));
  },
  setMapValue1: (value) => {
    set(() => ({ activeValue1: value }));
  },
  setMapValue2: (value) => {
    set(() => ({ activeValue2: value }));
  },
  setMapValue3: (value) => {
    set(() => ({ activeValue3: value }));
  },
  setMapValue4: (value) => {
    set(() => ({ activeValue4: value }));
  },
  setMapValue5: (value) => {
    set(() => ({ activeValue5: value }));
  },
  setMapValue6: (value) => {
    set(() => ({ activeValue6: value }));
  },
  setMapValue7: (value) => {
    set(() => ({ activeValue7: value }));
  },
  setMapValue8: (value) => {
    set(() => ({ activeValue8: value }));
  },
  setMapValue9: (value) => {
    set(() => ({ activeValue9: value }));
  },
  setMapValue10: (value) => {
    set(() => ({ activeValue10: value }));
  },
  setMapValue11: (value) => {
    set(() => ({ activeValue11: value }));
  },
  setMapValue12: (value) => {
    set(() => ({ activeValue12: value }));
  },
  setMapValue13: (value) => {
    set(() => ({ activeValue13: value }));
  },
  setMapColColorsStyle: (value) => {
    set(() => ({ mapColColorsStyle: value }));
  },
});

export default createMapXmlSlice;

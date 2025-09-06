import encodeHTML from "../utils/encodeHTML.ts";
import { useStore } from "../../globalState/useStore";

// fix: logo,

const generateConfigXml = () => {
  const initialScreen = useStore.getState().initialScreen;
  let studyTitle = useStore.getState().studyTitle;
  const version = useStore.getState().version;
  // const setupTarget = useStore.getState().setupTarget;
  const imageFormat = useStore.getState().imageFormat;
  const emailAddress = useStore.getState().emailAddress;
  const emailSubjectLine = useStore.getState().emailSubjectLine;
  const linkToSecondProject = useStore.getState().linkToSecondProject;
  const secondProjectUrl = useStore.getState().secondProjectUrl;
  const useImages = useStore.getState().useImages;
  const numImages = useStore.getState().numImages;
  const imageFileType = useStore.getState().imageFileType;
  const shuffleCards = useStore.getState().shuffleCards;
  const headerBarColor = useStore.getState().headerBarColor;
  const showConsentPage = useStore.getState().showConsentPage;
  const showConsentPageHelpModal = useStore.getState().showConsentPageHelpModal;
  const accessCode = useStore.getState().accessCode;
  const greenCardColor = useStore.getState().greenCardColor;
  const yellowCardColor = useStore.getState().yellowCardColor;
  const pinkCardColor = useStore.getState().pinkCardColor;
  const defaultFontColor = useStore.getState().defaultFontColor;
  const condOfInstFontSize = useStore.getState().condOfInstFontSize;
  const allowUnforcedSorts = useStore.getState().allowUnforcedSorts;
  const warnOverloadedColumn = useStore.getState().warnOverloadedColumn;
  const minCardHeightSort = useStore.getState().minCardHeightSort;
  const defaultFontSizeSort = useStore.getState().defaultFontSizeSort;
  const showPostsort = useStore.getState().showPostsort;
  const showSecondPosColumn = useStore.getState().showSecondPosColumn;
  const showSecondNegColumn = useStore.getState().showSecondNegColumn;
  const showBackButton = useStore.getState().showBackButton;
  const postsortCommentsRequired = useStore.getState().postsortCommentsRequired;
  const defaultFontSizePostsort = useStore.getState().defaultFontSizePostsort;
  const minCardHeightPostsort = useStore.getState().minCardHeightPostsort;
  const showSurvey = useStore.getState().showSurvey;
  const surveyQuestionsArray = useStore.getState().surveyQuestionsArray;
  const defaultFontSizePresort = useStore.getState().defaultFontSizePresort;
  const baserowToken = useStore.getState().baserowToken;
  const baserowDatabaseIdNumber = useStore.getState().baserowDatabaseIdNumber;
  //   const defaultFontSize = useStore.getState().defaultFontSize;
  //   const displayNeutralObjects = useStore.getState().displayNeutralObjects;
  // const presortTrace = useStore.getState().presortTrace;
  //   const presortMinCardHeight = useStore.getState().presortMinCardHeight;
  // const thinGuidanceModalMaxIterations = useStore.getState().thinGuidanceModalMaxIterations;

  //   let defaultLogo = appState.configLogoHtml;
  //   defaultLogo = defaultLogo.replace(/\s/g, "");

  //   if (
  //     defaultLogo === null ||
  //     defaultLogo === undefined ||
  //     defaultLogo.length === 0
  //   ) {
  //     defaultLogo = "EQ_default.svg";
  //     appState.configLogoHtml = "EQ_default.svg";
  //   }

  // SAVE FOR LATER RESTORATION
  //  <item id="allowUnforcedSorts">${allowUnforcedSorts}</item>
  //  <item id="warnOverloadedColumn">${warnOverloadedColumn}</item>

  // STUDY TITLE
  if (studyTitle === null || studyTitle === undefined) {
    studyTitle = "my Q study";
  }

  // SORT IMAGES
  let imageFormatSize = imageFormat;
  if (imageFormatSize === "letterbox") {
    imageFormatSize = "postSortImageModal169";
  } else {
    imageFormatSize = "postSortImageModal43";
  }

  const data1 = `<?xml version="1.0" encoding="UTF-8"?>

   <config version="${version}" htmlParse="false">\n`;

  const data2 = `
   <!-- HIDDEN OPTIONS -->
   <item id="devMode">false</item> 
   <item id="traceSorts">true</item> 
   <item id="thinGuidanceModalMaxIterations">2</item>

   <!-- 0. FILE INFORMATION -->
   <item order="0-1" id="configFileVersion">1.0.0</item>
   <item order="0-2" id="iterationDate">2025-08-31</item>

   <!-- 1. STUDY TITLE -->
   <item id="studyTitle">${studyTitle}</item> 

   <!-- 2. DATABASE SETUP -->
   <!-- "setupTarget" options: baserow or local -->
   <item id="setupTarget">baserow</item>
   <item id="baserowToken">${baserowToken}</item>
   <item id="baserowDatabaseIdNumber">${baserowDatabaseIdNumber}</item>
   <item id="emailAddress">${emailAddress}</item>
   <item id="emailSubjectLine">${emailSubjectLine}</item>

   <!-- 3. SECOND PROJECT LINKING -->
   <item id="linkToSecondProject">${linkToSecondProject}</item> 
   <item id="secondProjectUrl">${secondProjectUrl}</item> 

   <!-- 4. STATEMENT OR IMAGE SORT  (imageFormat: 169 or 43)-->
   <item id="useImages">${useImages}</item>
   <item id="numImages">${numImages}</item>
   <item id="imageFileType">${imageFileType}</item>
   <item id="imageFormat">${imageFormat}</item>

   <!-- 5. CONSENT PAGE OPTIONS -->
   <item id="showConsentPage">${showConsentPage}</item>
   <item id="showConsentPageHelpModal">${showConsentPageHelpModal}</item>
   
   <!-- 6. PROJECT ACCESS OPTIONS -->
   <!-- options: anonymous, partId-access, partId, access -->
   <item id="initialScreen">${initialScreen}</item>
   <item id="accessCode">${accessCode}</item>
   
   <!-- 7. COLOR SETTINGS  -->
   <!-- defaults = #2a2a2a (font), #ccffcc (right), #e0e0e0 (center), #ffe0f0 (left) -->
   <item id="headerBarColor">${headerBarColor}</item>
   <item id="defaultFontColor">${defaultFontColor}</item>
   
   <!-- 8. PRESORT OPTIONS -->
   <item id="shuffleCards">${shuffleCards}</item>
   <item id="greenCardColor">${greenCardColor}</item>
   <item id="yellowCardColor">${yellowCardColor}</item>
   <item id="pinkCardColor">${pinkCardColor}</item>
   <item id="defaultFontSizePresort">${defaultFontSizePresort}</item>

   <!-- 9. SORT OPTIONS -->
   <item id="condOfInstFontSize">${condOfInstFontSize}</item>
   <item id="allowUnforcedSorts">false</item>
   <item id="warnOverloadedColumn">${warnOverloadedColumn}</item>
   <item id="minCardHeightSort">${minCardHeightSort}</item>
   <item id="defaultFontSizeSort">${defaultFontSizeSort}</item>

   <!-- POSTSORT OPTIONS -->
   <item id="showPostsort">${showPostsort}</item>
   <item id="showSecondPosColumn">${showSecondPosColumn}</item>
   <item id="showSecondNegColumn">${showSecondNegColumn}</item>
   <item id="showBackButton">${showBackButton}</item>
   <item id="postsortCommentsRequired">${postsortCommentsRequired}</item>
   <item id="defaultFontSizePostsort">${defaultFontSizePostsort}</item>
   <item id="minCardHeightPostsort">${minCardHeightPostsort}</item>

   <!-- SURVEY - Survey Questions -->
   <item id="showSurvey">${showSurvey}</item>\n\n`;

  let data = data1.concat(data2);

  const open = `   <item id="survey">\n`;
  const close = `   </item>\n\n`;

  for (let i = 0; i < surveyQuestionsArray.length; i += 1) {
    let item;
    let label = "";
    let accumulatorString = "";
    let itemObject = surveyQuestionsArray[i];

    // for TEXT items
    if (itemObject.surveyQuestionType === "text") {
      let restrictedString;
      let limitedString;
      let limitLengthNum;
      if (itemObject.restricted === true || itemObject.restricted === "true") {
        restrictedString = `restricted="true"`;
      } else {
        restrictedString = `restricted="false"`;
      }
      if (itemObject.limited === true || itemObject.limited === "true") {
        limitedString = `true`;
        limitLengthNum = +itemObject.limitLength;
        if (limitLengthNum === undefined || limitLengthNum === null || isNaN(limitLengthNum))
          limitLengthNum = itemObject.limitLength;
      } else {
        limitedString = `false`;
        limitLengthNum = 99999;
      }

      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      const input = `        <input type="text" required="${itemObject.required}" limited="${limitedString}" limitLength="${limitLengthNum}" ${restrictedString}></input>\n`;

      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for TEXT-RESTRICTED items
    if (itemObject.surveyQuestionType === "textRestricted") {
      let restrictedString;
      if (itemObject.restricted === true) {
        restrictedString = `restricted="0-9"`;
      } else {
        restrictedString = ``;
      }
      const input = `        <input type="text" required="${itemObject.required}" limitLength="${itemObject.limitLength}" ${restrictedString}></input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for TEXTAREA items
    if (itemObject.surveyQuestionType === "textarea") {
      const input = `        <input type="textarea" required="${itemObject.required}"></input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for RADIO items
    if (itemObject.surveyQuestionType === "radio") {
      const input = `        <input type="radio" required="${itemObject.required}">${itemObject.options}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for SELECT items
    if (itemObject.surveyQuestionType === "select") {
      const input = `        <input type="select" required="${itemObject.required}">${itemObject.options}</input>\n`;
      label = `        <label>${encodeHTML(encodeHTML(itemObject.label))}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for CHECKBOX items
    if (itemObject.surveyQuestionType === "checkbox") {
      const input = `        <input type="checkbox" required="${itemObject.required}">${itemObject.options}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for LIKERT items
    if (itemObject.surveyQuestionType === "likert") {
      const input = `        <input type="likert" required="${itemObject.required}" scale="${itemObject.scale}">.</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      item = accumulatorString.concat(open, input, label, close);
    }

    // for RATING2 items
    if (itemObject.surveyQuestionType === "rating2") {
      const input = `        <input type="rating2" required="${itemObject.required}" scale="${
        itemObject.scale
      }">${encodeHTML(itemObject.options)}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for RATING 5 items
    if (itemObject.surveyQuestionType === "rating5") {
      const input = `        <input type="rating5" required="${
        itemObject.required
      }" scale="1;;;2;;;3;;;4;;;5">${encodeHTML(itemObject.options)}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for RATING 10 items
    if (itemObject.surveyQuestionType === "rating10") {
      const input = `        <input type="rating10" required="${
        itemObject.required
      }" scale="1;;;2;;;3;;;4;;;5;;;6;;;7;;;8;;;9;;;10">${encodeHTML(
        itemObject.options
      )}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for INFORMATION items
    if (itemObject.surveyQuestionType === "information") {
      const infoText = `       <input type="information"></input>\n`;
      const infoNoteHtml = encodeHTML(itemObject.note);
      const note = `       <note bg="${itemObject.bg}">${infoNoteHtml}</note>\n`;
      item = accumulatorString.concat(open, infoText, note, close);
    }

    data = data.concat(item);
  }

  let finalText = `\n       
  </config>`;

  data = data.concat(finalText);

  return data;
};

export { generateConfigXml };

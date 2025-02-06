import encodeHTML from "../utils/encodeHTML.ts";
import { useStore } from "../../globalState/useStore";

// fix: logo,

const generateConfigXml = () => {
  const initialScreen = useStore.getState().initialScreen;
  let studyTitle = useStore.getState().studyTitle;
  const version = useStore.getState().version;
  const setupTarget = useStore.getState().setupTarget;
  const imageFormat = useStore.getState().imageFormat;
  const emailAddress = useStore.getState().emailAddress;
  const emailSubjectLine = useStore.getState().emailSubjectLine;
  const linkToSecondProject = useStore.getState().linkToSecondProject;
  const secondProjectUrl = useStore.getState().secondProjectUrl;
  const useImages = useStore.getState().useImages;
  const numImages = useStore.getState().numImages;
  const imageFileType = useStore.getState().imageFileType;
  const shuffleCards = useStore.getState().ShuffleCards;
  const headerBarColor = useStore.getState().headerBarColor;
  const showConsentPage = useStore.getState().showConsentPage;
  const showConsentPageHelpModal = useStore.getState().showConsentPageHelpModal;
  const accessCode = useStore.getState().accessCode;
  const greenCardColor = useStore.getState().greenCardColor;
  const yellowCardColor = useStore.getState().yellowCardColor;
  const pinkCardColor = useStore.getState().pinkCardColor;
  const defaultFontColor = useStore.getState().defaultFontColor;
  const defaultFontSize = useStore.getState().defaultFontSize;
  const displayNeutralObjects = useStore.getState().displayNeutralObjects;
  const condOfInstFontSize = useStore.getState().condOfInstFontSize;
  const allowUnforcedSorts = useStore.getState().allowUnforcedSorts;
  const warnOverloadedColumn = useStore.getState().warnOverloadedColumn;
  const minCardHeightSort = useStore.getState().minCardHeightSort;
  const defaultFontSizeSort = useStore.getState().defaultFontSizeSort;
  const sortDirection = useStore.getState().sortDirection;
  const showPostsort = useStore.getState().showPostsort;
  const showSecondPosColumn = useStore.getState().showSecondPosColumn;
  const showSecondNegColumn = useStore.getState().showSecondNegColumn;
  const showBackButton = useStore.getState().showBackButton;
  const postsortCommentsRequired = useStore.getState().postsortCommentsRequired;
  const defaultFontSizePostsort = useStore.getState().defaultFontSizePostsort;
  const minCardHeightPostsort = useStore.getState().minCardHeightPostsort;
  const showSurvey = useStore.getState().showSurvey;
  const surveyQuestionsArray = useStore.getState().surveyQuestionsArray;
  const presortTrace = useStore.getState().presortTrace;
  const defaultFontSizePresort = useStore.getState().defaultFontSizePresort;
  const presortMinCardHeight = useStore.getState().presortMinCardHeight;

  let loginTypeText;
  const loginType = initialScreen;
  if (loginType === "name only") {
    loginTypeText = "partId";
  }
  if (loginType === "anonymous") {
    loginTypeText = "anonymous";
  }
  if (loginType === "name + access code") {
    loginTypeText = "partId-access";
  }
  if (loginType === "access code only") {
    loginTypeText = "access";
  }

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
   <!-- GENERAL SETTINGS -->
   <!-- "setupTarget" options: netlify, firebase, local, email, or sheets -->
   <item id="studyTitle">${studyTitle}</item> 
   <item id="setupTarget">${setupTarget}</item>

   <!-- EMAIL -->
   <item id="emailAddress">${emailAddress}</item>  
   <item id="emailSubject">${emailSubjectLine}</item>  

   <!-- SECOND PROJECT LINKING -->
   <item id="linkToSecondProject">${linkToSecondProject}</item> 
   <item id="secondProjectUrl">${secondProjectUrl}</item> 

   <!-- IMAGE OPTIONS  (imageFormat: 169 or 43)-->
   <item id="useImages">${useImages}</item>
   <item id="numImages">${numImages}</item>
   <item id="imageFileType">${imageFileType}</item>
   <item id="imageFormat">${imageFormat}</item>

   <!-- OTHER GENERAL OPTIONS -->
   <item id="shuffleCards">${shuffleCards}</item>
   <item id="headerBarColor">${headerBarColor}</item>
   <item id="devMode">false</item> 
   <item id="showConsentPage">${showConsentPage}</item>
   <item id="showConsentPageHelpModal">${showConsentPageHelpModal}</item>

   <!-- ACCESS -->
   <!-- options: anonymous, partId-access, partId, access -->
   <item id="initialScreen">${initialScreen}</item>
   <item id="accessCode">${accessCode}</item>
  
   <!-- PRESORT -->
   <!-- default colors #2a2a2a, #ccffcc, #e0e0e0, #ffe0f0 -->
   <item id="greenCardColor">${greenCardColor}</item>
   <item id="yellowCardColor">${yellowCardColor}</item>
   <item id="pinkCardColor">${pinkCardColor}</item>
   <item id="defaultFontColor">${defaultFontColor}</item>

   <item id="setDefaultFontSizePresort">true</item>
   <item id="defaultFontSizePresort">${defaultFontSizePresort}</item>
   <item id="traceSorts">${presortTrace}</item>

   <!-- THINNING -->
   <item id="thinGuidanceModalMaxIterations">${thinGuidanceModalMaxIterations}</item>

   <!-- SORT -->
   <item id="allowUnforcedSorts">${allowUnforcedSorts}</item>
   <item id="warnOverloadedColumn">${warnOverloadedColumn}</item>
   <item id="condOfInstFontSize">${condOfInstFontSize}</item>

   <item id="setMinCardHeightSort">true</item>
   <item id="minCardHeightSort">${minCardHeightSort}</item>
   <item id="setDefaultFontSizeSort">true</item>
   <item id="defaultFontSizeSort">${defaultFontSizeSort}</item>
   
   <item id="sortDirection">${sortDirection}</item> 

   <!-- POSTSORT -->
   <item id="showPostsort">${showPostsort}</item>
   <item id="showSecondPosColumn">${showSecondPosColumn}</item>
   <item id="showSecondNegColumn">${showSecondNegColumn}</item>
   <item id="showBackButton">${showBackButton}</item>
   <item id="postsortCommentsRequired">${postsortCommentsRequired}</item>

   <item id="setDefaultFontSizePostsort">true</item>
   <item id="defaultFontSizePostsort">${defaultFontSizePostsort}</item>
   <item id="setMinCardHeightPostsort">true</item>
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
      let maxLengthNum;
      if (itemObject.restricted === true || itemObject.restricted === "true") {
        restrictedString = `restricted="true"`;
      } else {
        restrictedString = `restricted="false"`;
      }
      if (itemObject.limited === true || itemObject.limited === "true") {
        limitedString = `true`;
        maxLengthNum = +itemObject.limitLength;
        if (
          maxLengthNum === undefined ||
          maxLengthNum === null ||
          isNaN(maxLengthNum)
        )
          maxLengthNum = itemObject.maxlength;
      } else {
        limitedString = `false`;
        maxLengthNum = 99999;
      }

      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      const input = `        <input type="text" required="${itemObject.required}" limited="${limitedString}" limitLength="${maxLengthNum}" ${restrictedString}></input>\n`;
      const placeholder = `        <placeholder>${itemObject.placeholder}</placeholder>\n`;

      item = accumulatorString.concat(
        open,
        input,
        label,
        note,
        placeholder,
        close
      );
    }

    // for TEXT-RESTRICTED items
    if (itemObject.surveyQuestionType === "textRestricted") {
      let restrictedString;
      if (itemObject.restricted === true) {
        restrictedString = `restricted="0-9"`;
      } else {
        restrictedString = ``;
      }
      const input = `        <input type="text" required="${itemObject.required}" maxlength="${itemObject.maxlength}" ${restrictedString}></input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      const placeholder = `        <placeholder>${itemObject.placeholder}</placeholder>\n`;
      item = accumulatorString.concat(
        open,
        input,
        label,
        note,
        placeholder,
        close
      );
    }

    // for TEXTAREA items
    if (itemObject.surveyQuestionType === "textarea") {
      const input = `        <input type="textarea" required="${itemObject.required}"></input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      const placeholder = `        <placeholder>${itemObject.placeholder}</placeholder>\n`;
      item = accumulatorString.concat(
        open,
        input,
        label,
        note,
        placeholder,
        close
      );
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
      label = `        <label>${encodeHTML(
        encodeHTML(itemObject.label)
      )}</label>\n`;
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
      const input = `        <input type="rating2" required="${
        itemObject.required
      }" scale="${itemObject.scale}">${encodeHTML(
        itemObject.options
      )}</input>\n`;
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

export default generateConfigXml;

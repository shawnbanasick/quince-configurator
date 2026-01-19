import encodeHTML from "../utils/encodeHTML.ts";
import { useStore } from "../../globalState/useStore";

const generateConfigXml = () => {
  const initialScreen = useStore.getState().initialScreen;
  let studyTitle = useStore.getState().studyTitle;
  const version = useStore.getState().version;
  const imageFormat = useStore.getState().imageFormat;
  const emailAddress = useStore.getState().emailAddress;
  const linkToSecondProject = useStore.getState().linkToSecondProject;
  const secondProjectUrl = useStore.getState().secondProjectUrl;
  const shuffleCards = useStore.getState().shuffleCards;
  const headerBarColor = useStore.getState().headerBarColor;
  const showConsentPage = useStore.getState().showConsentPage;
  const showConsentPageHelpModal = useStore.getState().showConsentPageHelpModal;
  const accessCode = useStore.getState().accessCode;
  const defaultFontColor = useStore.getState().defaultFontColor;
  const condOfInstFontSize = useStore.getState().condOfInstFontSize;
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
  const requireMinCommentLength = useStore.getState().requireMinCommentLength;
  const minCommentLength = useStore.getState().minCommentLength;

  // SAVE FOR LATER RESTORATION
  //  <item id="allowUnforcedSorts">${allowUnforcedSorts}</item>
  //  <item id="warnOverloadedColumn">${warnOverloadedColumn}</item>

  //  <item order="8-b" id="greenCardColor">${greenCardColor}</item>
  //  <item order="8-c" id="yellowCardColor">${yellowCardColor}</item>
  //  <item order="8-d" id="pinkCardColor">${pinkCardColor}</item>

  //  <item id="useImages">${useImages}</item>
  //  <item id="numImages">${numImages}</item>
  //  <item id="imageFileType">${imageFileType}</item>
  //  <item id="imageFormat">${imageFormat}</item>

  let getCurrentTimestamp = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // getMonth() returns 0-11
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day}@${hours}:${minutes}`;
  };

  const creationDate = getCurrentTimestamp();

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
   <!-- HIDDEN OPTIONS - DO NOT DELETE OR CHANGE -->
   <item id="devMode">false</item> 
   <item id="traceSorts">true</item> 
   <item id="thinGuidanceModalMaxIterations">2</item>
   <item id="setDefaultFontSize">true</item>
   <item id="setDefaultFontSizePresort">true</item>
   <item id="setDefaultFontSizeSort">true</item>
   <item id="setDefaultFontSizePostsort">true</item>
   <item id="setMinCardHeightPostsort">true</item>
   <item id="useThinProcess">true</item> 
   <item id="useMobileMode">true</item> 
   <item id="emailSubjectLine">Quince Sort Results</item>  
   <item id="setupTarget">baserow</item>
   <item id="greenCardColor">#E1E1E1</item>
   <item id="yellowCardColor">#E1E1E1</item>
   <item id="pinkCardColor">#E1E1E1</item>
   <item id="sortDirection">positive</item> 

   <!-- 0. FILE INFORMATION -->
   <info order="0-a" id="configFileVersion">1.0.0</info>
   <info order="0-b" id="iterationDate">2025-08-31</info>
   <info order="1--" id="creationDate">${creationDate}</info> 

   <!-- 1. STUDY TITLE -->
   <item order="1-a" id="studyTitle">${studyTitle}</item> 


   <!-- 2. DATABASE SETUP -->
   <!-- "setupTarget" options: baserow or local -->
   <item order="2-a" id="baserowToken">${baserowToken}</item>
   <item order="2-b" id="baserowDatabaseIdNumber">${baserowDatabaseIdNumber}</item>
   <item order="2-c" id="emailAddress">${emailAddress}</item>

   <!-- 3. SECOND PROJECT LINKING -->
   <item order="3-a" id="linkToSecondProject">${linkToSecondProject}</item> 
   <item order="3-b" id="secondProjectUrl">${secondProjectUrl}</item> 

   <!-- 4. STATEMENT OR IMAGE SORT  (imageFormat: 169 or 43)-->
   <item order="4-a" id="useImages">false</item>
   <item order="4-b" id="numImages">30</item>
   <item order="4-c" id="imageFileType">jpg</item>
   <item order="4-d" id="imageFormat">postSortImageModal169</item>

   <!-- 5. CONSENT PAGE OPTIONS -->
   <item order="5-a" id="showConsentPage">${showConsentPage}</item>
   <item order="5-b" id="showConsentPageHelpModal">${showConsentPageHelpModal}</item>
   
   <!-- 6. PROJECT ACCESS OPTIONS -->
   <!-- options: anonymous, partId-access, partId, access -->
   <item order="6-a" id="initialScreen">${initialScreen}</item>
   <item order="6-b" id="accessCode">${accessCode}</item>
   
   <!-- 7. COLOR SETTINGS  -->
   <!-- defaults = #2a2a2a (font), #ccffcc (right), #e0e0e0 (center), #ffe0f0 (left) -->
   <item order="7-a" id="headerBarColor">${headerBarColor}</item>
   <item order="7-b" id="defaultFontColor">${defaultFontColor}</item>
   
   <!-- 8. PRESORT OPTIONS -->
   <item order="8-a" id="shuffleCards">${shuffleCards}</item>
   <item order="8-b" id="defaultFontSizePresort">${defaultFontSizePresort}</item>

   <!-- 9. SORT OPTIONS -->
   <item order="9-a" id="condOfInstFontSize">${condOfInstFontSize}</item>
   <item order="9-b" id="allowUnforcedSorts">false</item>
   <item order="9-c" id="warnOverloadedColumn">${warnOverloadedColumn}</item>
   <item order="9-d" id="defaultFontSizeSort">${defaultFontSizeSort}</item>
   <item order="9-e" id="minCardHeightSort">${minCardHeightSort}</item>

   <!-- 10. POSTSORT OPTIONS -->
   <item order="10-a" id="showPostsort">${showPostsort}</item>
   <item order="10-b" id="showSecondPosColumn">${showSecondPosColumn}</item>
   <item order="10-c" id="showSecondNegColumn">${showSecondNegColumn}</item>
   <item order="10-d" id="showBackButton">${showBackButton}</item>
   <item order="10-e" id="postsortCommentsRequired">${postsortCommentsRequired}</item>
   <item order="10-f" id="requireMinCommentLength">${requireMinCommentLength}</item>
   <item order="10-g" id="minWordCountValuePostsort">${minCommentLength}</item>
   <item order="10-h" id="defaultFontSizePostsort">${defaultFontSizePostsort}</item>
   <item order="10-i" id="minCardHeightPostsort">${minCardHeightPostsort}</item>

   <!-- 11. SURVEY - Survey Questions -->
   <item order="11-a" id="showSurvey">${showSurvey}</item>\n\n`;

  let data = data1.concat(data2);

  if (showSurvey === true || showSurvey === "true") {
    const open = `   <item id="survey">\n`;
    const close = `   </item>\n\n`;

    console.log(JSON.stringify(surveyQuestionsArray, null, 2));

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
        const placeholder = `        <placeholder>input comment here</placeholder>\n`;
        item = accumulatorString.concat(open, input, label, note, placeholder, close);
      }

      // for RADIO items
      if (itemObject.surveyQuestionType === "radio") {
        const input = `        <input type="radio" required="${itemObject.required}" other="${
          itemObject.other
        }">${encodeHTML(itemObject.options)}</input>\n`;
        label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
        const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
        item = accumulatorString.concat(open, input, label, note, close);
      }

      // for SELECT items
      if (itemObject.surveyQuestionType === "select") {
        const input = `        <input type="select" required="${itemObject.required}">${encodeHTML(
          itemObject.options,
        )}</input>\n`;
        label = `        <label>${encodeHTML(encodeHTML(itemObject.label))}</label>\n`;
        const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
        item = accumulatorString.concat(open, input, label, note, close);
      }

      // for CHECKBOX items
      if (itemObject.surveyQuestionType === "checkbox") {
        const input = `        <input type="checkbox" required="${itemObject.required}" other="${
          itemObject.other
        }">${encodeHTML(itemObject.options)}</input>\n`;
        label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
        const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
        item = accumulatorString.concat(open, input, label, note, close);
      }

      // for LIKERT items
      if (itemObject.surveyQuestionType === "likert") {
        const input = `        <input type="likert" required="${
          itemObject.required
        }" scale="${encodeHTML(itemObject.scale)}">.</input>\n`;
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
          itemObject.options,
        )}</input>\n`;
        label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
        const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
        item = accumulatorString.concat(open, input, label, note, close);
      }

      // for INFORMATION items
      if (itemObject.surveyQuestionType === "information") {
        const infoText = `       <input type="information"></input>\n`;
        const infoNoteHtml = encodeHTML(itemObject.note);
        const note = `       <note bg="${itemObject.bg}">${encodeHTML(infoNoteHtml)}</note>\n`;
        item = accumulatorString.concat(open, infoText, note, close);
      }

      data = data.concat(item);
    }
  }
  let finalText = `\n       
  </config>`;

  data = data.concat(finalText);

  return data;
};

export { generateConfigXml };

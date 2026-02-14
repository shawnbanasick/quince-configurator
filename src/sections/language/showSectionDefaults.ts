// @ts-ignore
// import appState from "../../GlobalState/appState";
import defObject from "./textareaDefaultObject";
import defObject_JA from "./textAreaDefaultObject_JA";
import defObject_DE from "./textAreaDefaultObject_DE";
import defObject_ES from "./textAreaDefaultObject_ES";
import defObject_FR from "./textAreaDefaultObject_FR";
import defObject_IT from "./textAreaDefaultObject_IT";
import defObject_KO from "./textAreaDefaultObject_KO";
import defObject_NL from "./textAreaDefaultObject_NL";
import defObject_PT from "./textAreaDefaultObject_PT";
import defObject_zhHans from "./textAreaDefaultObject_zhHans";
import defObject_zhHant from "./textAreaDefaultObject_zhHant";
import { useStore } from "../../GlobalState/useStore";

const showSectionDefaults = (section) => {
  let currentLang: string = localStorage.getItem("i18nextLng") || '""';

  let defObj;
  if (currentLang === "ja") {
    defObj = defObject_JA();
  }
  if (currentLang === "en") {
    defObj = defObject();
  }
  if (currentLang === "de") {
    defObj = defObject_DE();
  }
  if (currentLang === "es") {
    defObj = defObject_ES();
  }
  if (currentLang === "fr") {
    defObj = defObject_FR();
  }
  if (currentLang === "it") {
    defObj = defObject_IT();
  }
  if (currentLang === "ko") {
    defObj = defObject_KO();
  }
  if (currentLang === "nl") {
    defObj = defObject_NL();
  }
  if (currentLang === "pt") {
    defObj = defObject_PT();
  }
  if (currentLang === "zh-Hans") {
    defObj = defObject_zhHans();
  }
  if (currentLang === "zh-Hant") {
    defObj = defObject_zhHant();
  }

  let selectorArray: string[] = [];

  const setDefaults = (array) => {
    array.forEach((item) => {
      localStorage.setItem(item, defObj[item]);
      useStore.setState((state) => ({ ...state, [item]: defObj[item] }));
      //   appState[item] = defObj[item];
    });
  };

  // section 1
  if (section === "multipleScreens") {
    selectorArray = [
      "btnHelp",
      "fontSizeText",
      "cardHeightText",
      "btnNext",
      "stepCompletedMessage",
      "screenOrientationText",
      "mobileTextSize",
      "mobileViewSize",
      "mobileModalButtonCancel",
      "expandViewMessage",
    ];

    setDefaults(selectorArray);
  }

  if (section === "mobilePreventDef") {
    selectorArray = ["preventMobileTitle", "preventMobileMessage"];

    setDefaults(selectorArray);
  }

  if (section === "mobilePreventDef") {
    selectorArray = ["preventMobileTitle", "preventMobileMessage"];

    setDefaults(selectorArray);
  }

  // section 2
  if (section === "consentDef") {
    selectorArray = [
      "consentTitleBarText",
      "consentText",
      "consentHelpModalHead",
      "consentHelpModalText",
      "btnNextConsent",
      "btnHelpConsent",
    ];

    setDefaults(selectorArray);
  }

  // section 3
  if (section === "accessDef") {
    selectorArray = [
      "loginWelcomeText",
      "loginHeaderText",
      "loginPartIdText",
      "accessCodeText",
      "accessInputText",
      "partIdWarning",
      "accessCodeWarning",
      "loginSubmitButtonText",
    ];

    setDefaults(selectorArray);
  }

  // section 4
  if (section === "welcomeDef") {
    selectorArray = [
      "landingHead",
      "welcomeText",
      "landingHelpModalHead",
      "landingHelpModalText",
      "btnNextLanding",
      "btnHelpLanding",
    ];

    setDefaults(selectorArray);
  }

  // section 5
  if (section === "mobileWelcomeDef") {
    selectorArray = ["mobileWelcomeText"];

    setDefaults(selectorArray);
  }

  // section 6
  if (section === "presortDef") {
    selectorArray = [
      "logInFirst",
      "titleBarText",
      "presortStatements",
      "presortAgreement",
      "presortNeutral",
      "presortDisagreement",
      "presortImageSortInstructions",
      "presortModalHead",
      "presortModalText",
      "presortPreventNavModalHead",
      "presortPreventNavModalText",
      "presortFinishedModalHead",
      "presortFinishedModalText",
      "presortOnPageInstructions",
      "press1",
      "press2",
      "press3",
    ];

    setDefaults(selectorArray);
  }

  // section 7
  if (section === "mobilePresortDef") {
    selectorArray = [
      "mobilePresortConditionsOfInstruction",
      "mobilePresortCompletedLabel",
      "mobilePresortAssignLeft",
      "mobilePresortAssignRight",
      "mobilePresortRedoModalHead",
      "mobilePresortRedoModalText",
      "mobilePresortRedoModalConfirmButton",
      "mobilePresortEvaluationsComplete",
      "mobilePresortHelpModalHead",
      "mobilePresortHelpModalText",
      "mobilePresortFinishedModalHead",
      "mobilePresortFinishedModalText",
      "mobilePresortPreventNavModalHead",
      "mobilePresortPreventNavModalText",
      "mobilePresortProcessCompleteMessage",
    ];

    setDefaults(selectorArray);
  }

  // section 8
  if (section === "refineDef") {
    selectorArray = [
      "initialInstructionPartNeg1",
      "initialInstructionPartNeg2",
      "currentlySelectedNumber",
      "numStatementsToSelect",
      "thinPageSubmitButton",
      "thinPageTitle",
      "thinningHelpModalHead",
      "thinningHelpModalText",
      "thinningPreventNavModalHead",
      "thinningPreventNavModalText",
      "thinningConfirmModalHead",
      "thinningConfirmModalText",
      "initialInstructionPart1",
      "initialInstructionPart2",
      "initialInstructionPart3",
      "agreeMostText",
      "agreeLeastText",
      "finalInstructions",
    ];

    setDefaults(selectorArray);
  }

  // section 9
  if (section === "mobileRefineDef") {
    selectorArray = [
      "moveTopMobileHead",
      "moveTopMobileText",
      "moveAllTopMobileText",
      "moveTopMobileButtonOK",
      "mobileModalButtonCancel",
      "mobileThinConditionsOfInstruction",
      "mobileThinSubmitButtonText",
      "mobileThinSelectedText",
      "mobileThinHelpModalHead",
      "mobileThinHelpModalText",
      "mobileThinPreventNavModalHead",
      "mobileThinPreventNavModalText",
      "mobileThinProcessCompleteMessage",
      "mobileGuidanceModalRight1Header",
      "mobileGuidanceModalRight1Text",
      "mobileGuidanceModalRight2Header",
      "mobileGuidanceModalRight2Text",
      "mobileGuidanceModalLeft1Header",
      "mobileGuidanceModalLeft1Text",
      "mobileGuidanceModalLeft2Header",
      "mobileGuidanceModalLeft2Text",
      "mobileThinScrollBottomModalHead",
      "mobileThinScrollBottomModalText",
    ];

    setDefaults(selectorArray);
  }

  // section 10
  if (section === "sortDef") {
    selectorArray = [
      "sortHelpModalHead",
      "sortHelpModalText",
      "sortAgreement",
      "sortDisagreement",
      "condOfInst",
      "sortingCompleteModalHead",
      "sortingCompleteModalText",
      "sortPreventNavModalHead",
      "sortPreventNavModalText",
      "sortOverloadedColumnModalHead",
      "sortOverloadedColumnModalText",
    ];

    setDefaults(selectorArray);
  }

  // section 11
  if (section === "mobileSortDef") {
    selectorArray = [
      "mobileSortSwapModalHead",
      "mobileSortSwapModalText",
      "mobileSortSwapModalConfirmButton",
      "mobileSortConditionsOfInstruction",
      "mobileSortHelpModalHead",
      "mobileSortHelpModalText",
      "mobileSortScrollBottomModalHead",
      "mobileSortScrollBottomModalText",
      "mobileSortSwapModalSuccessMessage",
    ];

    setDefaults(selectorArray);
  }

  // section 12
  if (section === "postsortDef") {
    selectorArray = [
      "postsortHeader",
      "postsortInstructions",
      "placeholder",
      "postsortPlacedOn",
      "postsortAgreement",
      "postsortDisagreement",
      "postsortModalHead",
      "postsortModalText",
      "postsortPreventNavModalHead",
      "postsortPreventNavModalText",
      "postsortBackButtonText",
    ];

    setDefaults(selectorArray);
  }

  // section 13
  if (section === "mobilePostsortDef") {
    selectorArray = [
      "mobilePostsortPreventNavModalHead",
      "mobilePostsortPreventNavModalText",
      "mobilePostsortSortbarText",
      "mobilePostsortPlaceholder",
      "mobilePostsortHelpModalHead",
      "mobilePostsortHelpModalText",
    ];

    setDefaults(selectorArray);
  }

  // section 14
  if (section === "surveyDef") {
    selectorArray = [
      "surveyHeader",
      "surveyModalHead",
      "surveyModalText",
      "surveyPreventNavModalHead",
      "surveyPreventNavModalText",
    ];

    setDefaults(selectorArray);
  }

  // section 15
  if (section === "mobileSurveyDef") {
    selectorArray = ["mobileSurveyHelpModalHead", "mobileSurveyHelpModalText"];

    setDefaults(selectorArray);
  }

  // section 16
  if (section === "submitDef") {
    selectorArray = [
      "btnTransfer",
      "transferHead",
      "transferTextAbove",
      "transferTextBelow",
      "transferOkModalHeader",
      "transferOkModalText",
      "transferFailModalHeader",
      "transferFailModalText",
      "goodbyeMessage",
    ];

    setDefaults(selectorArray);
  }

  // section 17
  if (section === "mobileSubmitDef") {
    selectorArray = ["mobileSortTitleBar"];

    setDefaults(selectorArray);
  }

  // section 18
  if (section === "emailDef") {
    selectorArray = [
      "checkInternetMessage",
      "btnTransferEmail",
      "submitFailMessage",
      "defaultEmailClientFail",
      "clipboardEmail",
      "clipboardResults",
      "copiedText",
      "downloadResultsButtonText",
      "emailBodyMessage",
      "emailSubjectText",
    ];

    setDefaults(selectorArray);
  }

  // section 19
  if (section === "linkingDef") {
    selectorArray = ["linkingFallbackMessage", "linkingBtnText"];

    setDefaults(selectorArray);
  }

  // section 20
  if (section === "localDef") {
    selectorArray = [
      "LocalHeader",
      "PartIdText",
      "UsercodeText",
      "LocalStartButtonText",
      "LocalDeleteButtonText",
      "LocalDownloadButtonText",
      "StoredQsortsHeaderText",
      "LocalDeleteModalHead",
      "LocalDeleteModalText",
      "LocalParticipantsText",
      "LocalSaveBeforeDeleteModalHeader",
      "LocalSaveBeforeDeleteModalText",
    ];

    setDefaults(selectorArray);
  }

  // section 21
  if (section === "localSubmitDef") {
    selectorArray = [
      "LocalSaveDataButton",
      "LocalSubmitSuccessModalHeader",
      "LocalSubmitSuccessModalText",
      "ReturnToLocalPanelButtonText",
    ];

    setDefaults(selectorArray);
  }
};

export default showSectionDefaults;

import { useStore } from "../../globalState/useStore.js";

const clearSection = (array) => {
  array.forEach((item) => {
    localStorage.setItem(item, "");
    useStore.setState((state) => ({ ...state, [item]: "" }));
  });
};

const showSectionDefaults = (section) => {
  let selectorArray: string[] = [];

  // section 1
  if (section === "multipleClear") {
    selectorArray = [
      "btnHelp",
      "fontSizeText",
      "cardHeightText",
      "btnNext",
      "stepCompletedMessage",
      // "langLoginFirst",
      "screenOrientationText",
      "mobileTextSize",
      "mobileViewSize",
      "mobileModalButtonCancel",
      "expandViewMessage",
    ];

    clearSection(selectorArray);
  }

  // section 2
  if (section === "consentClear") {
    selectorArray = [
      "consentTitleBarText",
      "consentText",
      "consentHelpModalHead",
      "consentHelpModalText",
      "btnNextConsent",
      "btnHelpConsent",
    ];

    clearSection(selectorArray);
  }

  // section 3
  if (section === "accessClear") {
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

    clearSection(selectorArray);
  }

  // section 4
  if (section === "welcomeClear") {
    selectorArray = [
      "landingHead",
      "welcomeText",
      "landingHelpModalHead",
      "landingHelpModalText",
      "btnNextLanding",
      "btnHelpLanding",
    ];

    clearSection(selectorArray);
  }

  // section 5
  if (section === "mobileWelcomeClear") {
    selectorArray = ["mobileWelcomeText"];

    clearSection(selectorArray);
  }

  // section 6
  if (section === "presortClear") {
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

    clearSection(selectorArray);
  }

  // section 7
  if (section === "mobilePresortClear") {
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

    clearSection(selectorArray);
  }

  // section 8
  if (section === "refineClear") {
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

    clearSection(selectorArray);
  }

  // section 9
  if (section === "mobileRefineClear") {
    selectorArray = [
      "moveTopMobileHead",
      "moveTopMobileText",
      "moveAllTopMobileText",
      "moveTopMobileButtonOK",
      "mobileModalButtonCancel",
      "mobileThinSelectedText",
      "mobileThinConditionsOfInstruction",
      "mobileThinSubmitButtonText",
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

    clearSection(selectorArray);
  }

  // section 10
  if (section === "sortClear") {
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

    clearSection(selectorArray);
  }

  // section 11
  if (section === "mobileSortClear") {
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

    clearSection(selectorArray);
  }

  // section 12
  if (section === "postsortClear") {
    selectorArray = [
      "postsortHeader",
      "postsortInstructions",
      "placeholder",
      "postsortAgreement",
      "postsortDisagreement",
      "postsortModalHead",
      "postsortModalText",
      "postsortPreventNavModalHead",
      "postsortPreventNavModalText",
      "postsortBackButtonText",
    ];

    clearSection(selectorArray);
  }

  // section 13
  if (section === "mobilePostsortClear") {
    selectorArray = [
      "mobilePostsortPreventNavModalHead",
      "mobilePostsortPreventNavModalText",
      "mobilePostsortSortbarText",
      "mobilePostsortPlaceholder",
      "mobilePostsortHelpModalHead",
      "mobilePostsortHelpModalText",
    ];

    clearSection(selectorArray);
  }

  // section 14
  if (section === "surveyClear") {
    selectorArray = [
      "surveyHeader",
      "surveyModalHead",
      "surveyModalText",
      "surveyPreventNavModalHead",
      "surveyPreventNavModalText",
    ];

    clearSection(selectorArray);
  }

  // section 15
  if (section === "mobileSurveyClear") {
    selectorArray = ["mobileSurveyHelpModalHead", "mobileSurveyHelpModalText"];

    clearSection(selectorArray);
  }

  // section 16
  if (section === "submitClear") {
    selectorArray = [
      "btnTransfer",
      "transferHead",
      "transferTextAbove",
      "transferTextBelow",
      "transferOkModalHeader",
      "transferOkModalText",
      "transferFailModalHeader",
      "transferFailModalText",
      "fallbackMessage",
      "btnDownload",
      "goodbyeMessage",
    ];

    clearSection(selectorArray);
  }

  // section 17
  if (section === "mobileSubmitClear") {
    selectorArray = ["mobileSortTitleBar"];

    clearSection(selectorArray);
  }

  // section 18
  if (section === "emailClear") {
    selectorArray = [
      "checkInternetMessage",
      "btnTransferEmail",
      "submitFailMessage",
      "defaultEmailClientFail",
      "clipboardEmail",
      "clipboardResults",
      "copiedText",
      "downloadResultsButtonText",
      "btnDownload",
      "emailBodyMessage",
      "emailSubjectText",
    ];

    clearSection(selectorArray);
  }

  // section 19
  if (section === "linkingClear") {
    selectorArray = ["linkingFallbackMessage", "linkingBtnText"];

    clearSection(selectorArray);
  }

  // section 20
  if (section === "localClear") {
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

    clearSection(selectorArray);
  }

  // section 21
  if (section === "localSubmitClear") {
    selectorArray = [
      "LocalSaveDataButton",
      "LocalSubmitSuccessModalHeader",
      "LocalSubmitSuccessModalText",
      "ReturnToLocalPanelButtonText",
    ];

    clearSection(selectorArray);
  }
};

export default showSectionDefaults;

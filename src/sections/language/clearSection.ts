import { useStore } from "../../globalState/useStore.js";

const clearSection = (array) => {
  array.forEach((item) => {
    localStorage.setItem(item, "");
    useStore.setState((state) => ({ ...state, [item]: "" }));
  });
};

const showSectionDefaults = (section) => {
  let selectorArray: string[] = [];

  if (section === "multipleClear") {
    selectorArray = [
      "btnHelp",
      "footerTextSize",
      "footerCardHeight",
      "btnNext",
      "stepCompleted",
      // "langLoginFirst",
      "screenOrientationText",
    ];

    clearSection(selectorArray);
  }

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

  if (section === "welcomeClear") {
    selectorArray = [
      "landingHead",
      "welcomeMessage",
      "landingHelpModalHead",
      "landingHelpModalText",
      "btnNextLanding",
      "btnHelpLanding",
    ];

    clearSection(selectorArray);
  }

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

  if (section === "presortClear") {
    selectorArray = [
      "loginFirst",
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
    ];

    clearSection(selectorArray);
  }

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
    ];

    clearSection(selectorArray);
  }

  if (section === "refineClear") {
    selectorArray = [
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

  if (section === "mobileRefineClear") {
    selectorArray = [
      "moveTopMobileHead",
      "moveTopMobileText",
      "moveAllTopMobileText",
      "moveTopMobileButtonOK",
      "moveTopMobileButtonCancel",
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
    ];

    clearSection(selectorArray);
  }

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
      "postsortBackButton",
    ];

    clearSection(selectorArray);
  }

  if (section === "mobilePostsortClear") {
    selectorArray = [
      "mobilePostsortPreventNavModalHead",
      "mobilePostsortPreventNavModalText",
      "mobilePostsortSortbarText",
      "mobilePostsortHelpModalHead",
      "mobilePostsortHelpModalText",
    ];

    clearSection(selectorArray);
  }

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
  if (section === "submitClear") {
    selectorArray = [
      "BtnTransfer",
      "TransferHead",
      "TransferTextAbove",
      "TransferTextBelow",
      "TransferOkModalHeader",
      "TransferOkModalText",
      "TransferFailModalHeader",
      "TransferFailModalText",
      "FallbackMessage",
      "BtnDownload",
      "GoodbyeMessage",
    ];

    clearSection(selectorArray);
  }
  if (section === "localSubmitClear") {
    selectorArray = [
      "LocalSaveDataButton",
      "LocalSubmitSuccessModalHeader",
      "LocalSubmitSuccessModalText",
      "ReturnToLocalPanelButtonText",
    ];

    clearSection(selectorArray);
  }
  if (section === "emailClear") {
    selectorArray = [
      "EmailSubmitBtn",
      "EmailCopyResultsBtn",
      "EmailCopyAddressBtn",
      "CopySuccessMessage",
      "CopyFailMessage",
      "DefaultEmailFailModalText",
      "EmailBodyMessage",
    ];

    clearSection(selectorArray);
  }
  if (section === "linkingClear") {
    selectorArray = ["LinkingFallbackMessage", "LinkingBtnText"];

    clearSection(selectorArray);
  }
};

export default showSectionDefaults;

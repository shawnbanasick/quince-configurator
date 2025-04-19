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
      "langLocalHeader",
      "langPartIdText",
      "langUsercodeText",
      "langLocalStartButtonText",
      "langLocalDeleteButtonText",
      "langLocalDownloadButtonText",
      "langStoredQsortsHeaderText",
      "langLocalDeleteModalHead",
      "langLocalDeleteModalText",
      "langLocalParticipantsText",
      "langLocalSaveBeforeDeleteModalHeader",
      "langLocalSaveBeforeDeleteModalText",
    ];

    clearSection(selectorArray);
  }

  if (section === "presortClear") {
    selectorArray = [
      "langTitleBarText",
      "langPresortStatements",
      "langPresortAgreement",
      "langPresortNeutral",
      "langPresortDisagreement",
      "langPresortImageSortInstructions",
      "langPresortModalHead",
      "langPresortModalText",
      "langPresortPreventNavModalHead",
      "langPresortPreventNavModalText",
      "langPresortFinishedModalHead",
      "langPresortFinishedModalText",
      "langPresortOnPageInstructions",
    ];

    clearSection(selectorArray);
  }

  if (section === "sortClear") {
    selectorArray = [
      "langSortHelpModalHead",
      "langSortHelpModalText",
      "langSortAgreement",
      "langSortDisagreement",
      "langCondOfInst",
      "langSortingCompleteModalHead",
      "langSortingCompleteModalText",
      "langSortPreventNavModalHead",
      "langSortPreventNavModalText",
      "langSortOverloadedColumnModalHead",
      "langSortOverloadedColumnModalText",
    ];

    clearSection(selectorArray);
  }
  if (section === "postsortClear") {
    selectorArray = [
      "langPostsortHeader",
      "langPostsortInstructions",
      "langPlaceholder",
      "langPostsortAgreement",
      "langPostsortDisagreement",
      "langPostsortModalHead",
      "langPostsortModalText",
      "langPostsortPreventNavModalHead",
      "langPostsortPreventNavModalText",
      "langPostsortBackButton",
    ];

    clearSection(selectorArray);
  }

  if (section === "surveyClear") {
    selectorArray = [
      "langSurveyHeader",
      "langSurveyModalHead",
      "langSurveyModalText",
      "langSurveyPreventNavModalHead",
      "langSurveyPreventNavModalText",
    ];

    clearSection(selectorArray);
  }
  if (section === "submitClear") {
    selectorArray = [
      "langBtnTransfer",
      "langTransferHead",
      "langTransferTextAbove",
      "langTransferTextBelow",
      "langTransferOkModalHeader",
      "langTransferOkModalText",
      "langTransferFailModalHeader",
      "langTransferFailModalText",
      "langFallbackMessage",
      "langBtnDownload",
      "langGoodbyeMessage",
    ];

    clearSection(selectorArray);
  }
  if (section === "localSubmitClear") {
    selectorArray = [
      "langLocalSaveDataButton",
      "langLocalSubmitSuccessModalHeader",
      "langLocalSubmitSuccessModalText",
      "langReturnToLocalPanelButtonText",
    ];

    clearSection(selectorArray);
  }
  if (section === "emailClear") {
    selectorArray = [
      "langEmailSubmitBtn",
      "langEmailCopyResultsBtn",
      "langEmaiCopyAddressBtn",
      "langCopySuccessMessage",
      "langCopyFailMessage",
      "langDefaultEmailFailModalText",
      "langEmailBodyMessage",
    ];

    clearSection(selectorArray);
  }
  if (section === "linkingClear") {
    selectorArray = ["langLinkingFallbackMessage", "langLinkingBtnText"];

    clearSection(selectorArray);
  }
};

export default showSectionDefaults;

// import appState from "../../GlobalState/appState";
import defObject from "./textareaDefaultObject";
import { useStore } from "../../GlobalState/useStore";

const showSectionDefaults = (section) => {
  let defObj = defObject();
  let selectorArray: string[] = [];

  const setDefaults = (array) => {
    array.forEach((item) => {
      localStorage.setItem(item, defObj[item]);
      useStore.setState((state) => ({ ...state, [item]: defObj[item] }));
      //   appState[item] = defObj[item];
    });
  };

  if (section === "multipleScreens") {
    selectorArray = [
      "btnHelp",
      "footerTextSize",
      "footerCardHeight",
      "btnNext",
      "stepCompleted",
      "screenOrientationText",
    ];

    setDefaults(selectorArray);
  }

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

  if (section === "welcomeDef") {
    selectorArray = [
      "landingHead",
      "welcomeMessage",
      "landingHelpModalHead",
      "landingHelpModalText",
      "btnNextLanding",
      "btnHelpLanding",
    ];

    setDefaults(selectorArray);
  }

  if (section === "localDef") {
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

    setDefaults(selectorArray);
  }

  if (section === "presortDef") {
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

    setDefaults(selectorArray);
  }

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
    ];

    setDefaults(selectorArray);
  }

  if (section === "sortDef") {
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

    setDefaults(selectorArray);
  }

  if (section === "postsortDef") {
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

    setDefaults(selectorArray);
  }
  if (section === "surveyDef") {
    selectorArray = [
      "langSurveyHeader",
      "langSurveyModalHead",
      "langSurveyModalText",
      "langSurveyPreventNavModalHead",
      "langSurveyPreventNavModalText",
    ];

    setDefaults(selectorArray);
  }
  if (section === "submitDef") {
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

    setDefaults(selectorArray);
  }
  if (section === "localSubmitDef") {
    selectorArray = [
      "langLocalSaveDataButton",
      "langLocalSubmitSuccessModalHeader",
      "langLocalSubmitSuccessModalText",
      "langReturnToLocalPanelButtonText",
    ];

    setDefaults(selectorArray);
  }
  if (section === "emailDef") {
    selectorArray = [
      "langEmailSubmitBtn",
      "langEmailCopyResultsBtn",
      "langEmaiCopyAddressBtn",
      "langCopySuccessMessage",
      "langCopyFailMessage",
      "langDefaultEmailFailModalText",
      "langEmailBodyMessage",
    ];

    setDefaults(selectorArray);
  }
  if (section === "linkingDef") {
    selectorArray = ["langLinkingFallbackMessage", "langLinkingBtnText"];

    setDefaults(selectorArray);
  }
};

export default showSectionDefaults;

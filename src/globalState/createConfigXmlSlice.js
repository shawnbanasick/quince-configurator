import { version } from "react";

const createConfigXmlSlice = (set, get) => ({
  version: "Quince 1.0.0",
  devMode: false,
  useMobileMode: true,
  traceSorts: true,

  // FILE INFORMATION
  configFileVersion: "1.0.1",
  iterationDate: "2025-09-15",

  // GENERAL SETTINGS
  studyTitle: "My Study Title",
  creationDate: "",
  setupTarget: "baserow", // baserow or local only
  baserowToken: "",
  baserowDatabaseIdNumber: "",

  // EMAIL
  emailAddress: "",
  emailSubjectLine: "Quince Sort Results",

  // SECOND PROJECT LINKING
  linkToSecondProject: false,
  secondProjectUrl: "",

  // IMAGE OPTIONS
  useImages: false,
  numImages: 0,
  imageFileType: "jpg",
  imageFormat: "letterbox",

  // CONSENT PAGE OPTIONS
  showConsentPage: false,
  showConsentPageHelpModal: true,

  // OTHER GENERAL OPTIONS
  shuffleCards: true,
  headerBarColor: "#337ab7",

  // ACCESS  (anonymous, partId-access, partId, access)
  initialScreen: "anonymous",
  accessCode: "",

  // PRE-SORT
  greenCardColor: "#ccffcc",
  yellowCardColor: "#e0e0e0",
  pinkCardColor: "#ffe0e0",
  defaultFontColor: "#2a2a2a",
  defaultFontSizePresort: 22,

  // THINNING
  useThinProcess: true,
  thinGuidanceModalMaxIterations: 2,

  // SORTING
  allowUnforcedSorts: false,
  warnOverloadedColumn: true,
  condOfInstFontSize: 20,
  minCardHeightSort: 120,
  defaultFontSizeSort: 16,

  // POST-SORT
  showPostsort: true,
  showSecondPosColumn: false,
  showSecondNegColumn: false,
  showBackButton: true,
  postsortCommentsRequired: false,
  defaultFontSizePostsort: 16,
  minCardHeightPostsort: 120,

  // SURVEY
  showSurvey: false,

  // *** ALL OTHERS
  detailsArray: [
    `<b>1. Answer Required (not shown in image): </b>true`,
    `<b>2. Label: </b>Age*`,
    `<b>3. Note: </b>Please enter your year of birth (YYYY, eg. 1980).`,
    `<b>4. Options: </b> N/A`,
    `<b>5. Scale: </b> N/A`,
    `<b>6. Placeholder: </b> (** no input = no placeholder text **)`,
    `<b>7. Limit Answer Length: </b>true`,
    `<b>8. Answer Maximum Length: </b>4`,
    `<b>9. Answer Restricted to Numbers "0-9": </b>true`,
    `<b>10. Information Bar Background Color: </b>N/A`,
  ],
  showSurveyinformationImage: false,
  showSurveytextImage: true,
  showSurveytextareaImage: false,
  showSurveyradioImage: false,
  showSurveyselectImage: false,
  showSurveycheckboxImage: false,
  showSurveylikertImage: false,
  showSurveyrating2Image: false,
  showSurveyrating5Image: false,
  showSurveyrating10Image: false,
  surveyQuestionType: "text",
  surveyAnswerRequired: false,
  surveyQuestionLabel: "",
  surveyQuestionNote: "",
  surveyAnswerLenIsLimited: false,
  surveyAnswerLenMax: 999,
  surveyQuestionPlaceholder: "",
  surveyAnswerRestricted: false,
  surveyQuestionScale: "",
  triggerOptionsWarningModal: false,
  surveyQuestionOptions: "",
  configSurveyInfoBarColor: "#fde047",
  surveyQuestionsArray: [],
  displayOptionsSemiWarn: false,
  surveyQuestionInputPreviewQuestions: [],
  isEditingSurveyQuestion: false,
  isEditingSurveyQuestionIndex: -1,
  triggerSurveyQuestionDeleteModal: false,

  setMinCardHeightSort: (height) => {
    set(() => ({ minCardHeightSort: height }));
  },
  setDefaultFontSizeSort: (size) => {
    set(() => ({ defaultFontSizeSort: size }));
  },
  setBaserowToken: (token) => {
    set(() => ({ baserowToken: token }));
  },
  setBaserowDatabaseIdNumber: (id) => {
    set(() => ({ baserowDatabaseIdNumber: id }));
  },
  setVersion: (version) => {
    set(() => ({ version: version }));
  },
  setTriggerSurveyQuestionDeleteModal: (bool) => {
    set(() => ({ triggerSurveyQuestionDeleteModal: bool }));
  },
  setIsEditingSurveyQuestionIndex: (index) => {
    set(() => ({ isEditingSurveyQuestionIndex: index }));
  },
  setIsEditingSurveyQuestion: (bool) => {
    set(() => ({ isEditingSurveyQuestion: bool }));
  },
  setSurveyQuestionInputPreviewQuestions: (questions) => {
    set(() => ({ surveyQuestionInputPreviewQuestions: questions }));
  },
  setDisplayOptionsSemiWarn: (bool) => {
    set(() => ({ displayOptionsSemiWarn: bool }));
  },
  setSurveyQuestionsArray: (questionsArray) => {
    set(() => ({ surveyQuestionsArray: questionsArray }));
  },
  setConfigSurveyInfoBarColor: (color) => {
    set(() => ({ configSurveyInfoBarColor: color }));
  },
  setSurveyQuestionOptions: (options) => {
    set(() => ({ surveyQuestionOptions: options }));
  },
  setTriggerOptionsWarningModal: (bool) => {
    set(() => ({ triggerOptionsWarningModal: bool }));
  },
  setSurveyQuestionScale: (scale) => {
    set(() => ({ surveyQuestionScale: scale }));
  },
  setSurveyAnswerRestricted: (bool) => {
    set(() => ({ surveyAnswerRestricted: bool }));
  },
  setSurveyQuestionPlaceholder: (placeholder) => {
    set(() => ({ surveyQuestionPlaceholder: placeholder }));
  },
  setSurveyAnswerLenMax: (max) => {
    set(() => ({ surveyAnswerLenMax: max }));
  },
  setSurveyAnswerLenIsLimited: (bool) => {
    set(() => ({ surveyAnswerLenIsLimited: bool }));
  },
  setSurveyQuestionNote: (note) => {
    set(() => ({ surveyQuestionNote: note }));
  },
  setSurveyQuestionLabel: (label) => {
    set(() => ({ surveyQuestionLabel: label }));
  },
  setSurveyAnswerRequired: (bool) => {
    set(() => ({ surveyAnswerRequired: bool }));
  },
  setSurveyQuestionType: (type) => {
    set(() => ({ surveyQuestionType: type }));
  },
  setDetailsArray: (detailsArray) => {
    set(() => ({ detailsArray: detailsArray }));
  },
  setShowSurveyinformationImage: (bool) => {
    set(() => ({ showSurveyinformationImage: bool }));
  },
  setShowSurveytextImage: (bool) => {
    set(() => ({ showSurveytextImage: bool }));
  },
  setShowSurveytextareaImage: (bool) => {
    set(() => ({ showSurveytextareaImage: bool }));
  },
  setShowSurveyradioImage: (bool) => {
    set(() => ({ showSurveyradioImage: bool }));
  },
  setShowSurveyselectImage: (bool) => {
    set(() => ({ showSurveyselectImage: bool }));
  },
  setShowSurveycheckboxImage: (bool) => {
    set(() => ({ showSurveycheckboxImage: bool }));
  },
  setShowSurveylikertImage: (bool) => {
    set(() => ({ showSurveylikertImage: bool }));
  },
  setShowSurveyrating2Image: (bool) => {
    set(() => ({ showSurveyrating2Image: bool }));
  },
  setShowSurveyrating5Image: (bool) => {
    set(() => ({ showSurveyrating5Image: bool }));
  },
  setShowSurveyrating10Image: (bool) => {
    set(() => ({ showSurveyrating10Image: bool }));
  },
  setShowSurvey: (bool) => {
    set(() => ({ showSurvey: bool }));
  },
  setMinCardHeightPostsort: (height) => {
    set(() => ({ minCardHeightPostsort: height }));
  },
  setDefaultFontSizePresort: (size) => {
    set(() => ({ defaultFontSizePresort: size }));
  },
  setTraceSorts: (bool) => {
    set(() => ({ traceSorts: bool }));
  },
  setThinGuidanceModalMaxIterations: (num) => {
    set(() => ({ thinGuidanceModalMaxIterations: num }));
  },
  setAllowUnforcedSorts: (bool) => {
    set(() => ({ allowUnforcedSorts: bool }));
  },
  setWarnOverloadedColumn: (bool) => {
    set(() => ({ warnOverloadedColumn: bool }));
  },
  setCondOfInstFontSize: (size) => {
    set(() => ({ condOfInstFontSize: size }));
  },
  setSortDirection: (direction) => {
    set(() => ({ sortDirection: direction }));
  },
  setShowPostsort: (bool) => {
    set(() => ({ showPostsort: bool }));
  },
  setShowSecondPosColumn: (bool) => {
    set(() => ({ showSecondPosColumn: bool }));
  },
  setShowSecondNegColumn: (bool) => {
    set(() => ({ showSecondNegColumn: bool }));
  },
  setShowBackButton: (bool) => {
    set(() => ({ showBackButton: bool }));
  },
  setPostsortCommentsRequired: (bool) => {
    set(() => ({ postsortCommentsRequired: bool }));
  },
  setDefaultFontSizePostsort: (size) => {
    set(() => ({ defaultFontSizePostsort: size }));
  },
  setDefaultFontColor: (color) => {
    set(() => ({ defaultFontColor: color }));
  },
  setPinkCardColor: (color) => {
    set(() => ({ pinkCardColor: color }));
  },
  setYellowCardColor: (color) => {
    set(() => ({ yellowCardColor: color }));
  },
  setGreenCardColor: (color) => {
    set(() => ({ greenCardColor: color }));
  },
  setAccessCode: (code) => {
    set(() => ({ accessCode: code }));
  },
  setInitialScreen: (screen) => {
    set(() => ({ initialScreen: screen }));
  },
  setUseMobileMode: (bool) => {
    set(() => ({ useMobileMode: bool }));
  },
  setUseThinProcess: (bool) => {
    set(() => ({ useThinProcess: bool }));
  },
  setShowConsentPageHelpModal: (bool) => {
    set(() => ({ showConsentPageHelpModal: bool }));
  },
  setShowConsentPage: (bool) => {
    set(() => ({ showConsentPage: bool }));
  },
  setDevMode: (bool) => {
    set(() => ({ devMode: bool }));
  },
  setHeaderBarColor: (color) => {
    set(() => ({ headerBarColor: color }));
  },
  setShuffleCards: (bool) => {
    set(() => ({ shuffleCards: bool }));
  },
  setImageFormat: (format) => {
    set(() => ({ imageFormat: format }));
  },
  setImageFileType: (type) => {
    set(() => ({ imageFileType: type }));
  },
  setNumImages: (num) => {
    set(() => ({ numImages: num }));
  },
  setUseImages: (bool) => {
    set(() => ({ useImages: bool }));
  },
  setSecondProjectUrl: (url) => {
    set(() => ({ secondProjectUrl: url }));
  },
  setLinkToSecondProject: (bool) => {
    set(() => ({ linkToSecondProject: bool }));
  },
  setEmailSubjectLine: (subject) => {
    set(() => ({ emailSubjectLine: subject }));
  },
  setEmailAddress: (email) => {
    set(() => ({ emailAddress: email }));
  },
  setSetupTarget: (target) => {
    set(() => ({ setupTarget: target }));
  },
  setStudyTitle: (title) => {
    set(() => ({ studyTitle: title }));
  },
});

export default createConfigXmlSlice;

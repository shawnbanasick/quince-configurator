const createConfigXmlSlice = (set, get) => ({
  devMode: false,

  studyTitle: "My Study Title",
  setupTarget: "baserow",
  emailAddress: "",
  emailSubjectLine: "Your Study Results",
  linkToSecondProject: false,
  secondProjectUrl: "",
  useImages: false,
  numImages: 0,
  imageFileType: "jpg",
  imageFormat: "letterbox",

  showConsentPage: false,
  showConsentPageHelpModal: true,

  initialScreen: "anonymous",
  accessCode: "",
  headerBarColor: "#337ab7",

  shuffleCards: true,
  traceSorts: true,
  greenCardColor: "#ccffcc",
  yellowCardColor: "#e0e0e0",
  pinkCardColor: "#ffe0e0",
  defaultFontColor: "#2a2a2a",
  defaultFontSizePresort: 22,

  useThinProcess: true,
  thinGuidanceModalMaxIterations: 2,

  condOfInstFontSize: 20,
  useMobileMode: true,
  allowUnforcedSorts: false,
  warnOverloadedColumn: true,
  sortDirection: "positive",
  showPostSort: true,
  showSecondPosColumn: false,
  showSecondNegColumn: false,
  showBackButton: true,
  postsortCommentsRequired: true,
  defaultFontSizePostsort: 16,
  minCardHeightPostsort: 120,
  showSurvey: true,

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
  setShowPostSort: (bool) => {
    set(() => ({ showPostSort: bool }));
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

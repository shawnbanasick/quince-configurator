const createResultsSlice = (set) => ({
  cleanedResults: "",
  rawData: "",
  selectedPartId: "randomId",

  isConfigXmlLoaded: false,
  isStatementsXmlLoaded: false,
  isMapXmlLoaded: false,
  isLanguageXmlLoaded: false,

  hasResultsFileBeenLoaded: false,

  setHasResultsFileBeenLoaded: (Boolean) => {
    set(() => ({ hasResultsFileBeenLoaded: Boolean }));
  },
  setIsConfigXmlLoaded: (Boolean) => {
    set(() => ({ isConfigXmlLoaded: Boolean }));
  },
  setIsStatementsXmlLoaded: (Boolean) => {
    set(() => ({ isStatementsXmlLoaded: Boolean }));
  },
  setIsMapXmlLoaded: (Boolean) => {
    set(() => ({ isMapXmlLoaded: Boolean }));
  },
  setIsLanguageXmlLoaded: (Boolean) => {
    set(() => ({ isLanguageXmlLoaded: Boolean }));
  },

  setSelectedPartId: (string) => {
    set(() => ({ selectedPartId: string }));
  },
  setRawData: (data) => {
    set(() => ({ rawData: data }));
  },
  setCleanedResults: (data) => {
    set(() => ({ cleanedResults: data }));
  },
});

export default createResultsSlice;

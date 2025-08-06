const createResultsSlice = (set) => ({
  cleanedResults: "",
  rawData: "",
  selectedPartId: "randomId",
  //   numStatements: 0,

  setSelectedPartId: (string) => {
    set(() => ({ selectedPartId: string }));
  },
  setRawData: (data) => {
    set(() => ({ rawData: data }));
  },
  setCleanedResults: (data) => {
    set(() => ({ cleanedResults: data }));
  },

  //   setNumStatements: (num) => {
  //     set(() => ({ numStatements: num }));
  //   },
  //   setCurrentStatements: (statements) => {
  //     set(() => ({ currentStatements: statements }));
  //   },
});

export default createResultsSlice;

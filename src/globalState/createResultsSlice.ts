const createResultsSlice = (set) => ({
  cleanedResults: "",
  rawData: "",
  //   numStatements: 0,

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

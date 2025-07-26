const createResultsSlice = (set) => ({
  cleanedResults: "",
  //   numStatements: 0,

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

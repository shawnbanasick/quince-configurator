const createStatementsXmlSlice = (set) => ({
  currentStatements: "",
  numStatements: 0,

  setNumStatements: (num) => {
    set(() => ({ numStatements: num }));
  },
  setCurrentStatements: (statements) => {
    set(() => ({ currentStatements: statements }));
  },
});

export default createStatementsXmlSlice;

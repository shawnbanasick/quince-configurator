const createStatementsXmlSlice = (set, get) => ({
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

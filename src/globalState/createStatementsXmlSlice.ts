const createStatementsXmlSlice = (set, get) => ({
  currentStatements: "",

  setCurrentStatements: (statements) => {
    set(() => ({ currentStatements: statements }));
  },
});

export default createStatementsXmlSlice;

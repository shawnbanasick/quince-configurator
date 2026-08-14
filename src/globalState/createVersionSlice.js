const createVersionSlice = (set) => ({
  xmlFileVersion: "1.0.9",
  xmlIterationDate: "2026-08-18",

  setXmlFileVersion: (version) => {
    set(() => ({ xmlFileVersion: version }));
  },
});

export default createVersionSlice;

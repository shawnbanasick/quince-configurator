const createConfigSlice = (set, get) => ({
  configUseImages: true,

  setConfigUseImages: (bool) => {
    set(() => ({ configUseImages: bool }));
  },

  // showDescriptionPro: false,
  // showDescriptionBeginner: true,
  // displayMode: "beginner",
  // setDisplayMode: (mode) => {
  //   set(() => ({ displayMode: mode }));
  // },
  // setShowDescriptionPro: (bool) => {
  //   set(() => ({ showDescriptionPro: bool }));
  // },
  // setShowDescriptionBeginner: (bool) => {
  //   set(() => ({ showDescriptionBeginner: bool }));
  // },
});

export default createConfigSlice;

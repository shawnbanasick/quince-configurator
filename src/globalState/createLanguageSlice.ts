const createLanguageSlice = (set) => ({
  langDisplayAllMode: false,
  languageDisplayAll: false,
  languageDisplayEssential: true,

  /*
   ******** MODAL CONTROLLERS  ****************** */
  triggerConsentImageModal: false,

  /*
   ******** GENERIC STATE CHANGE  ****************** */
  setText: (stateDesig, text) => set(() => ({ [stateDesig]: text })),

  /*
   ******** SET VALUES  ****************** */
  setLangDisplayAllMode: (value) => {
    set(() => ({ langDisplayAllMode: value }));
  },

  setLanguageDisplayAll: (value) => {
    set(() => ({ languageDisplayAll: value }));
  },

  setLanguageDisplayEssential: (value) => {
    set(() => ({ languageDisplayEssential: value }));
  },

  setTriggerConsentImageModal: (value) => {
    set(() => ({ triggerConsentImageModal: value }));
  },
});

export default createLanguageSlice;

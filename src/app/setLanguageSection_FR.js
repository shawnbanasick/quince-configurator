import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_FR from "../sections/language/textAreaDefaultObject_FR";

const setLanguageSection_FR = async (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  const french = await showSectionDefaults_FR();

  useStore.setState(french);
  return;
};

export { setLanguageSection_FR };

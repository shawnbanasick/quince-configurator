import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_NL from "../sections/language/textAreaDefaultObject_NL";

const setLanguageSection_NL = (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  const dutch = showSectionDefaults_NL();

  useStore.setState(dutch);
  return;
};

export { setLanguageSection_NL };

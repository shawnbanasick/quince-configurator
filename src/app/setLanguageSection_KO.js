import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_KO from "../sections/language/textAreaDefaultObject_KO";

const setLanguageSection_KO = (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  const korean = showSectionDefaults_KO();

  useStore.setState(korean);
  return;
};

export { setLanguageSection_KO };

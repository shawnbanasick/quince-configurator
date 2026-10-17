import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_JA from "../sections/language/textAreaDefaultObject_JA";

const setLanguageSection_JA = (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  const japanese = showSectionDefaults_JA();

  useStore.setState(japanese);
  return;
};

export { setLanguageSection_JA };

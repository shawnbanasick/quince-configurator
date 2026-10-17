import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_IT from "../sections/language/textAreaDefaultObject_IT";

const setLanguageSection_IT = (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  const italian = showSectionDefaults_IT();

  useStore.setState(italian);
  return;
};

export { setLanguageSection_IT };

import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_ES from "../sections/language/textAreaDefaultObject_ES";

const setLanguageSection_ES = (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  const spanish = showSectionDefaults_ES();

  useStore.setState(spanish);
  return;
};

export { setLanguageSection_ES };

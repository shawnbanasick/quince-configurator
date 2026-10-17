import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_zhHans from "../sections/language/textAreaDefaultObject_zhHans";

const setLanguageSection_zhHans = (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  const chinese = showSectionDefaults_zhHans();

  useStore.setState(chinese);
  return;
};

export { setLanguageSection_zhHans };

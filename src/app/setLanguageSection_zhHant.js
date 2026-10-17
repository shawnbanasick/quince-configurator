import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_zhHant from "../sections/language/textAreaDefaultObject_zhHant";

const setLanguageSection_zhHant = (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  const traditionalChinese = showSectionDefaults_zhHant();

  useStore.setState(traditionalChinese);
  return;
};

export { setLanguageSection_zhHant };

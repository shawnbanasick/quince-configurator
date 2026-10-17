import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_PT from "../sections/language/textAreaDefaultObject_PT";

const setLanguageSection_PT = (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  const portuguese = showSectionDefaults_PT();

  useStore.setState(portuguese);
  return;
};

export { setLanguageSection_PT };

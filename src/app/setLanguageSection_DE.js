import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_DE from "../sections/language/textAreaDefaultObject_DE";

const setLanguageSection_DE = async (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }
  const german = await { ...showSectionDefaults_DE() };
  useStore.setState(german);
  return;
};

export { setLanguageSection_DE };

import { useStore } from "../GlobalState/useStore.js";
import showSectionDefaults_EN from "../sections/language/textareaDefaultObject";

const setLanguageSection_EN = (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  const english = { ...showSectionDefaults_EN() };

  useStore.setState({ ...english });
  return;
};

export { setLanguageSection_EN };

import { useStore } from "../globalState/useStore.js";

const setLanguageDefaults = (language) => {
  if (!language) {
    console.error("Language is not defined");
    return;
  }

  if (typeof language !== "string") {
    console.error("Language must be a string");
    return;
  }

  if (language === "en") {
    useStore.setState({
      mobileHeadersDefault5: "Strongly Agree, Agree, Neutral, Disagree, Strongly Disagree",
      mobileHeadersDefault7:
        "Strongly Agree, Agree, Agree Somewhat, Neutral, Disagree Somewhat, Disagree, Strongly Disagree",
      mobileHeadersDefault9:
        "Very Strongly Agree, Strongly Agree, Agree, Agree Somewhat, Neutral, Disagree Somewhat, Disagree, Strongly Disagree, Very Strongly Disagree",
      mobileHeadersDefault11:
        "Very Strongly Agree, Strongly Agree, Agree, Agree Somewhat, Slightly Agree, Neutral, Very Slightly Disagree, Disagree Somewhat, Disagree, Strongly Disagree, Very Strongly Disagree",
    });
  }
  if (language === "ja") {
    useStore.setState({
      mobileHeadersDefault5: "強く同意する、同意する、中立、反対する、強く反対する",
      mobileHeadersDefault7:
        "強く同意する、同意する、やや同意する、中立、やや反対する、反対する、強く反対する",
      mobileHeadersDefault9:
        "非常に強く同意、強く同意、同意、やや同意、中立、やや反対、反対、強く反対、非常に強く反対",
      mobileHeadersDefault11:
        "非常に強く同意、強く同意、同意、やや同意、やや同意、中立、やや反対、やや反対、反対、強く反対、非常に強く反対",
    });
  }
  return;
};

export { setLanguageDefaults };

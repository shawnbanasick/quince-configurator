import { useStore } from "../globalState/useStore.js";

const setLanguageDefaults = (language) => {
  console.log(language);

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
      mobileHeadersDefault5: "Strongly Disagree, Disagree, Neutral, Agree, Strongly Agree",
      mobileHeadersDefault7:
        "Strongly Disagree, Disagree, Disagree Somewhat, Neutral, Agree Somewhat, Agree, Strongly Agree",
      mobileHeadersDefault9:
        "Very Strongly Disagree, Strongly Disagree, Disagree, Disagree Somewhat, Neutral, Agree Somewhat, Agree, Strongly Agree, Very Strongly Agree",
      mobileHeadersDefault11:
        "Very Strongly Disagree, Strongly Disagree, Disagree, Disagree Somewhat, Very Slightly Disagree, Neutral, Slightly Agree, Agree Somewhat, Agree, Strongly Agree, Very Strongly Agree",
      mobileHeadersDefault13:
        "Completely Disagree, Very Strongly Disagree, Strongly Disagree, Disagree, Disagree Somewhat, Very Slightly Disagree, Neutral, Slightly Agree, Agree Somewhat, Agree, Strongly Agree, Very Strongly Agree, Completely Agree",
    });
  }
  if (language === "ja") {
    useStore.setState({
      mobileHeadersDefault5: "反対, やや反対, 中立, やや賛成, 賛成",
      mobileHeadersDefault7: "強く反対, 反対, やや反対, 中立, やや賛成, 賛成, 強く賛成",
      mobileHeadersDefault9:
        "強く反対, かなり反対, 反対, やや反対, 中立, やや賛成, 賛成, かなり賛成, 強く賛成",
      mobileHeadersDefault11:
        "強く反対, かなり反対, 反対, やや反対, どちらかといえば反対, 中立, どちらかといえば賛成, やや賛成, 賛成, かなり賛成, 強く賛成",
      mobileHeadersDefault13:
        "完全に反対, 強く反対, かなり反対, 反対, やや反対, どちらかといえば反対, 中立, どちらかといえば賛成, やや賛成, 賛成, かなり賛成, 強く賛成, 完全に賛成",
    });
  }
  return;
};

export { setLanguageDefaults };

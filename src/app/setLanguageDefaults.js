import { useStore } from "../GlobalState/useStore.js";

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
  if (language === "ko") {
    useStore.setState({
      mobileHeadersDefault5: "반대, 약간 반대, 중립, 약간 동의, 동의",
      mobileHeadersDefault7:
      "반대, 약간 반대, 약간 반대, 중립, 약간 동의, 동의, 동의",
      mobileHeadersDefault9:
      "매우 반대, 반대, 약간 반대, 약간 반대, 중립, 약간 동의, 동의, 약간 동의, 동의",
      mobileHeadersDefault11:
      "매우 반대, 반대, 약간 반대, 약간 반대, 약간 반대, 중립, 약간 동의, 약간 동의, 동의, 약간 동의, 동의",
      mobileHeadersDefault13:
      "매우 반대, 매우 반대, 반대, 약간 반대, 약간 반대, 약간 반대, 중립, 약간 동의, 약간 동의, 동의, 약간 동의, 동의, 매우 동의",
    });
  }
  if (language === "zhHant") {
    useStore.setState({
      mobileHeadersDefault5: "反對, 有点反對, 中立, 有点賛成, 賛成",
      mobileHeadersDefault7:
        "反對, 有点反對, 有点反對, 中立, 有点賛成, 賛成, 賛成",
      mobileHeadersDefault9:
        "非常反對, 反對, 有点反對, 有点反對, 中立, 有点賛成, 賛成, 有点賛成, 賛成",
      mobileHeadersDefault11:
        "非常反對, 反對, 有点反對, 有点反對, 有点反對, 中立, 有点賛成, 有点賛成, 賛成, 有点賛成, 賛成",
      mobileHeadersDefault13:
        "完全反對, 非常反對, 反對, 有点反對, 有点反對, 有点反對, 中立, 有点賛成, 有点賛成, 賛成, 有点賛成, 賛成, 完全賛成",
    });
  }
   if (language === "zh-Hans") {
    useStore.setState({
      mobileHeadersDefault5: "反對, 有点反對, 中立, 有点賛成, 賛成",
      mobileHeadersDefault7:
        "反對, 有点反對, 有点反對, 中立, 有点賛成, 賛成, 賛成",
      mobileHeadersDefault9:
        "非常反對, 反對, 有点反對, 有点反對, 中立, 有点賛成, 賛成, 有点賛成, 賛成",
      mobileHeadersDefault11:
        "非常反對, 反對, 有点反對, 有点反對, 有点反對, 中立, 有点賛成, 有点賛成, 賛成, 有点賛成, 賛成",
      mobileHeadersDefault13:
        "完全反對, 非常反對, 反對, 有点反對, 有点反對, 有点反對, 中立, 有点賛成, 有点賛成, 賛成, 有点賛成, 賛成, 完全賛成",
    });
  }
   if (language === "it") {
    useStore.setState({
      mobileHeadersDefault5: "Contro, Un po' contro, Neutro, Un po' a favore, A favore",
      mobileHeadersDefault7:
        "Contro, Un po' contro, Un po' contro, Neutro, Un po' a favore, A favore, A favore",
      mobileHeadersDefault9:
        "Molto contro, Contro, Un po' contro, Un po' contro, Neutro, Un po' a favore, A favore, Un po' a favore, A favore",
      mobileHeadersDefault11:
        "Molto contro, Contro, Un po' contro, Un po' contro, Un po' contro, Neutro, Un po' a favore, Un po' a favore, A favore, Un po' a favore, A favore",
      mobileHeadersDefault13:
        "Molto contro, Molto contro, Contro, Un po' contro, Un po' contro, Un po' contro, Neutro, Un po' a favore, Un po' a favore, A favore, Un po' a favore, A favore, Molto a favore",
    });
  }
   if (language === "es") {
    useStore.setState({
      mobileHeadersDefault5: "En contra, Un poco en contra, Neutral, Un poco a favor, A favor",
      mobileHeadersDefault7:
        "En contra, Un poco en contra, Un poco en contra, Neutral, Un poco a favor, A favor, A favor",
      mobileHeadersDefault9:
        "Muy en contra, En contra, Un poco en contra, Un poco en contra, Neutral, Un poco a favor, A favor, Un poco a favor, A favor",
      mobileHeadersDefault11:
        "Muy en contra, En contra, Un poco en contra, Un poco en contra, Un poco en contra, Neutral, Un poco a favor, Un poco a favor, A favor, Un poco a favor, A favor",
      mobileHeadersDefault13:
        "Muy en contra, Muy en contra, En contra, Un poco en contra, Un poco en contra, Un poco en contra, Neutral, Un poco a favor, Un poco a favor, A favor, Un poco a favor, A favor, Muy a favor",
    });
  }
   if (language === "fr") {
    useStore.setState({
      mobileHeadersDefault5: "En contre, Un peu en contre, Neutre, Un peu à l'avantage, À l'avantage",
      mobileHeadersDefault7:
        "En contre, Un peu en contre, Un peu en contre, Neutre, Un peu à l'avantage, À l'avantage, À l'avantage",
      mobileHeadersDefault9:
        "Très en contre, En contre, Un peu en contre, Un peu en contre, Neutre, Un peu à l'avantage, À l'avantage, Un peu à l'avantage, À l'avantage",
      mobileHeadersDefault11:
        "Très en contre, En contre, Un peu en contre, Un peu en contre, Un peu en contre, Neutre, Un peu à l'avantage, Un peu à l'avantage, À l'avantage, Un peu à l'avantage, À l'avantage",
      mobileHeadersDefault13:
        "Très en contre, Très en contre, En contre, Un peu en contre, Un peu en contre, Un peu en contre, Neutre, Un peu à l'avantage, Un peu à l'avantage, À l'avantage, Un peu à l'avantage, À l'avantage, Très à l'avantage",
    });
  }
     if (language === "nl") {
    useStore.setState({
      mobileHeadersDefault5: "Tegen, Enigszins tegen, Neutraal, Enigszins voor, Voor",
      mobileHeadersDefault7:
        "Sterk tegen, Tegen, Enigszins tegen, Neutraal, Enigszins voor, Voor, Sterk voor",
      mobileHeadersDefault9:
        "Zeer sterk tegen, Sterk tegen, Tegen, Enigszins tegen, Neutraal, Enigszins voor, Voor, Sterk voor, Zeer sterk voor",
      mobileHeadersDefault11:
        "Uiterst tegen, Zeer sterk tegen, Sterk tegen, Tegen, Enigszins tegen, Neutraal, Enigszins voor, Voor, Sterk voor, Zeer sterk voor, Uiterst voor",
      mobileHeadersDefault13:
        "Extreem tegen, Uiterst tegen, Zeer sterk tegen, Sterk tegen, Tegen, Enigszins tegen, Neutraal, Enigszins voor, Voor, Sterk voor, Zeer sterk voor, Uiterst voor, Extreem voor",
    });
  }
   if (language === "de") {
    useStore.setState({
      mobileHeadersDefault5: "Gegen, Enige Gegen, Neutral, Enige Für, Für",
      mobileHeadersDefault7:
        "Stark Gegen, Gegen, Enige Gegen, Neutral, Enige Für, Für, Stark Für",
      mobileHeadersDefault9:
        "Sehr Stark Gegen, Stark Gegen, Gegen, Enige Gegen, Neutral, Enige Für, Für, Stark Für, Sehr Stark Für",
      mobileHeadersDefault11:
        "Äußerst Gegen, Sehr Stark Gegen, Stark Gegen, Gegen, Enige Gegen, Neutral, Enige Für, Für, Stark Für, Sehr Stark Für, Äußerst Für",
      mobileHeadersDefault13:
        "Extrem Gegen, Äußerst Gegen, Sehr Stark Gegen, Stark Gegen, Gegen, Enige Gegen, Neutral, Enige Für, Für, Stark Für, Sehr Stark Für, Äußerst Für, Extrem Für",
    });
  }
  return;
};

export { setLanguageDefaults };

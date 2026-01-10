import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Start from "../sections/start/Start.js";
import { v4 as uuidv4 } from "uuid";
import { Config } from "../sections/config/Config";
import { Language } from "../sections/language/Language";
import { Map } from "../sections/map/Map";
import { WebHost } from "../sections/webHost/WebHost";
import { ToastContainer } from "react-toastify";
import { Statements } from "../sections/statements/Statements";
import { Databases } from "../sections/databases/Databases";
import { setLanguageDefaults } from "./setLanguageDefaults.js";
import { setLanguageSection_JA } from "./setLanguageSection_JA.js";
import { setLanguageSection_EN } from "./setLanguageSection_EN.js";
import { setLanguageSection_KO } from "./setLanguageSection_KO.js";
import { setLanguageSection_zhHans } from "./setLanguageSection_zhHans.js";
import { setLanguageSection_zhHant } from "./setLanguageSection_zhHant.js";
import { setLanguageSection_ES } from "./setLanguageSection_ES.js";
import { setLanguageSection_IT } from "./setLanguageSection_IT.js";
import { setLanguageSection_FR } from "./setLanguageSection_FR.js";
import { setLanguageSection_NL } from "./setLanguageSection_NL.js";
import { setLanguageSection_DE } from "./setLanguageSection_DE.js";
import { setLanguageSection_PT } from "./setLanguageSection_PT.js";
import { Results } from "../sections/results/Results.js";
import Button from "../sections/utils/Button";
import { useStore } from "../globalState/useStore.js";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import getLangAbbreviation from "./getLangAbbreviation.js";

const languages = ["de", "en", "es", "fr", "it", "ja", "ko", "nl", "pt", "zh-Hans", "zh-Hant"];

const getShowDescriptionPro = (state) => state.showDescriptionPro;
const getShowDescriptionBeginner = (state) => state.showDescriptionBeginner;
const getSetShowDescriptionPro = (state) => state.setShowDescriptionPro;
const getSetShowDescriptionBeginner = (state) => state.setShowDescriptionBeginner;
const getSetDisplayMode = (state) => state.setDisplayMode;

export const MainPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const showDescriptionPro = useStore(getShowDescriptionPro);
  const showDescriptionBeginner = useStore(getShowDescriptionBeginner);
  const setShowDescriptionPro = useStore(getSetShowDescriptionPro);
  const setShowDescriptionBeginner = useStore(getSetShowDescriptionBeginner);
  const setDisplayMode = useStore(getSetDisplayMode);

  const setMode = (e) => {
    const mode = e.target.id;
    if (mode === "pro") {
      setShowDescriptionPro(true);
      setShowDescriptionBeginner(false);
      setDisplayMode("pro");
    } else {
      setShowDescriptionPro(false);
      setShowDescriptionBeginner(true);
      setDisplayMode("beginner");
    }
  };

  if (currentLanguage === "ja") {
    setLanguageSection_JA(currentLanguage);
    setLanguageDefaults("ja");
  }
  if (currentLanguage === "en") {
    setLanguageSection_EN(currentLanguage);
    setLanguageDefaults("en");
  }
  if (currentLanguage === "es") {
    setLanguageSection_ES(currentLanguage);
    setLanguageDefaults("es");
  }

  if (currentLanguage === "ko") {
    setLanguageSection_KO(currentLanguage);
    setLanguageDefaults("ko");
  }
  if (currentLanguage === "zh-Hans") {
    setLanguageSection_zhHans(currentLanguage);
    setLanguageDefaults("zh-Hans");
  }
  if (currentLanguage === "zh-Hant") {
    setLanguageSection_zhHant(currentLanguage);
    setLanguageDefaults("zh-Hant");
  }
  if (currentLanguage === "it") {
    setLanguageSection_IT(currentLanguage);
    setLanguageDefaults("it");
  }
  if (currentLanguage === "fr") {
    setLanguageSection_FR(currentLanguage);
    setLanguageDefaults("fr");
  }
  if (currentLanguage === "nl") {
    setLanguageSection_NL(currentLanguage);
    setLanguageDefaults("nl");
  }
if (currentLanguage === "de") {
    setLanguageSection_DE(currentLanguage);
    setLanguageDefaults("de");
  }
  if (currentLanguage === "pt") {
    setLanguageSection_PT(currentLanguage);
    setLanguageDefaults("pt");
  }
  console.log("language: ", navigator.language);

  const onChangeLanguage = (lng: string) => {
    console.log(lng);
    i18n.changeLanguage(lng);
    // set default language for map.xml
    setLanguageDefaults(lng);
  };

  const handleErrorButtonClick = (error) => {
    const email = "ken.q.tools@gmail.com";
    const subject = "Quince Configurator Error";
    const body = `${t("PleaseProvideAnEmailAddress")}:\n\n\n${t(
      "PleaseDescribeTheEventsPriorToTheError"
    )}:\n\n\n${t("ForFasterDiagnosisOfTheError")}:\n- config.XML\n- map.XML\n- language.XML\n- ${t(
      "QSortResultsCsvFileFromBaserow"
    )}\n\n\n** Start Error Info**\nError Name:\n${error.name}\n\nError Message:\n${
      error.message
    }\n\nError Stack:\n${error.stack}\n** End Error Info**`;

    // Encode the subject and body to handle special characters
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Fallback component that receives error information
  const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
    return (
      <div role="alert" style={{ padding: "20px", textAlign: "center" }}>
        <h2 className="mb-[20px] mt-[50px]">{t("SomethingWentWrong")}...</h2>
        <button
          className="min-w-[180px] bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-[30px]"
          onClick={() => handleErrorButtonClick(error)}
        >
          {t("ClickToSendErrorReportEmailToDeveloper")}
        </button>
        <pre style={{ color: "red", marginTop: "50px" }}>{error.name}</pre>
        <pre style={{ color: "red", marginTop: "10px", marginBottom: "50px" }}>{error.message}</pre>
      </div>
    );
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset any state or navigate somewhere on retry
        window.location.href = "/";
      }}
    >
      <main className="w-[100%] flex flex-col space-y-4  items-center justify-center bg-[#f5f5f5]">
        <ToastContainer />
        <Tabs className="h-[98vh] w-[100%] p-2 bg-[#f5f5f5]">
          <TabList>
            <Tab>{t("welcome")}</Tab>
            <Tab>1. {t("database")}</Tab>
            <Tab>2. {t("settings")}</Tab>
            <Tab>3. {t("statements")}</Tab>
            <Tab>4. {t("qSortDesign")}</Tab>
            <Tab>5. {t("userInterfaceLanguage")}</Tab>
            <Tab>6. {t("webHost")}</Tab>
            <Tab>7. {t("results")}</Tab>
          </TabList>

          <TabPanel className="flex flex-col justify-center">
            <div className="justify-self-right w-[100%]">
              <div className="flex flex-row justify-between pl-6 pr-6 w-[100%]">
                <div id="selectLanguageDiv" className="">
                  <div>{t("selectLanguage")}</div>
                  <div className="flex flex-wrap space-x-1 space-y-1 overflow-x-auto ">
                    {languages.map((lng) => {
                      return (
                        <button
                          onClick={() => onChangeLanguage(lng)}
                          key={uuidv4()}
                          className={clsx(
                            "bg-blue-500 hover:bg-blue-700 text-white px-2 py-2 rounded-md min-w-[50px] ",
                            {
                              "bg-opacity-100": lng === currentLanguage,
                              "bg-opacity-50": lng !== currentLanguage,
                            }
                          )}
                        >
                          <div className="flex flex-row gap-2 justify-center">
                            {getLangAbbreviation(lng)}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div id="displayModeDiv" className="">
                  <div className="text-center">{t("selectConfiguratorDisplayMode")}</div>
                  <div className="flex flex-row justify-self-center">
                    <Button
                      id="beginner"
                      styleClass={`bg-blue-500 hover:bg-blue-700 ${
                        showDescriptionBeginner ? "bg-opacity-100" : "bg-opacity-50"
                      }`}
                      label={t("novice")}
                      onClick={setMode}
                    ></Button>
                    <Button
                      id="pro"
                      label={t("expert")}
                      styleClass={`bg-[#3b82f6]  hover:bg-blue-700 ${
                        showDescriptionPro ? "bg-opacity-100" : "bg-opacity-50"
                      }`}
                      onClick={setMode}
                    ></Button>
                  </div>
                  <div className="justify-self-center">
                    {showDescriptionPro && <div>{t("displaysEssentialInformation")}</div>}
                    {showDescriptionBeginner && (
                      <div>{t("displaysIndepthDescriptionsAndDirections")}</div>
                    )}
                  </div>
                </div>
              </div>
              <Start />
            </div>
          </TabPanel>

          <TabPanel>
            <Databases />
          </TabPanel>
          <TabPanel>
            <Config />
          </TabPanel>
          <TabPanel>
            <Statements />
          </TabPanel>
          <TabPanel>
            <Map />
          </TabPanel>
          <TabPanel>
            <Language />
          </TabPanel>
          <TabPanel>
            <WebHost />
          </TabPanel>
          <TabPanel>
            <Results />
          </TabPanel>
        </Tabs>
      </main>
    </ErrorBoundary>
  );
};

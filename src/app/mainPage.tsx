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
import { Results } from "../sections/results/Results.js";
import Button from "../sections/utils/Button";
import { useStore } from "../globalState/useStore.js";
import UkFlag from "../assets/images/UkFlag.svg?react";
import JapanFlag from "../assets/images/JapanFlag.svg?react";

// Add the following import statement for the declaration file

// const languages = ["en", "ru", "tm", "ja", "ko", "zh", "es", "fr", "de"];
const languages = ["en", "ja"];

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

  const flagArray = [<UkFlag className="w-[25px]" />, <JapanFlag className="w-[25px]" />];

  if (currentLanguage === "ja") {
    setLanguageSection_JA(currentLanguage);
    setLanguageDefaults("ja");
  }

  if (currentLanguage === "en") {
    setLanguageSection_EN(currentLanguage);
    setLanguageDefaults("en");
  }

  console.log("language: ", navigator.language);

  const onChangeLanguage = (lng: string) => {
    console.log(lng);
    i18n.changeLanguage(lng);
    // set default language for map.xml
    setLanguageDefaults(lng);
  };

  return (
    // space-y is top margin
    // <main className="w-[100%] flex flex-col space-y-4  items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 bg-[#f5f5f5]">
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
                <div className="flex flex-row space-x-2">
                  {languages.map((lng, index) => {
                    return (
                      <button
                        onClick={() => onChangeLanguage(lng)}
                        key={uuidv4()}
                        className={clsx(
                          "bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-[100px] ",
                          {
                            "bg-opacity-100": lng === currentLanguage,
                            "bg-opacity-50": lng !== currentLanguage,
                          }
                        )}
                      >
                        <div className="flex flex-row gap-2 justify-center">
                          {lng.toUpperCase()}
                          {flagArray[index]}
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

          {/* <a
            href="https://github.com/ecomnazar/react-i18n-boilerplate"
            target="_blank"
            className="text-[#0c8492]"
          >
            https://github.com/ecomnazar/react-i18n-boilerplate
          </a> */}
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
  );
};

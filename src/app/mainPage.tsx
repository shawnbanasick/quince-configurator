import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Image from "../assets/images/EQ-brand.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const languages = ["en", "ru", "tm"];

export const MainPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const onChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  let showDescriptionPro = false;
  let showDescriptionBeginner = true;

  // let releaseVersion = `Version ${appState.releaseVersion}`;
  // let showDescriptionPro;
  // let showDescriptionBeginner;
  // const displayMode = appState.displayMode;
  // if (displayMode === "pro") {
  //   appState.beginnerButtonActive = false;
  //   appState.proButtonActive = true;
  //   showDescriptionPro = true;
  //   showDescriptionBeginner = false;
  // } else {
  //   appState.beginnerButtonActive = true;
  //   appState.proButtonActive = false;
  //   showDescriptionPro = false;
  //   showDescriptionBeginner = true;
  // }

  return (
    <main className="w-screen h-screen flex flex-col space-y-4 items-center justify-center">
      <Tabs className="h-screen w-screen p-2">
        <TabList>
          <Tab>1. Start</Tab>
          <Tab>2. General Settings</Tab>
          <Tab>3. Q Sort Design Settings</Tab>
          <Tab>4. Statement Settings</Tab>
          <Tab>5. Language Settings</Tab>
          <Tab>6. Database Setup</Tab>
          <Tab>7. Web Host Setup</Tab>
        </TabList>

        <TabPanel className="flex-col justify-center">
          <div className="float-right">
            <div>{t("selectLanguage")}</div>
            <div className="space-x-2">
              {languages.map((lng) => {
                return (
                  <button
                    onClick={() => onChangeLanguage(lng)}
                    className={clsx(
                      "bg-[#146a76] text-white px-4 py-2 rounded-md",
                      {
                        "bg-opacity-100": lng === currentLanguage,
                        "bg-opacity-30": lng !== currentLanguage,
                      }
                    )}
                  >
                    {lng.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>
          <h1 className="text-center border-2 border-rose-500">
            {t("Welcome")}
          </h1>
          <img src={Image} className=" w-1/3" alt="Configurator Hero Image" />
          <div className="border-2 border-rose-500">
            EQ Web Sort Configurator simplifies the set-up and testing of an{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shawnbanasick/eq-web-sort"
            >
              EQ Web Sort
            </a>{" "}
            project for online Q-sorting. It provides guided editing of the EQ
            Web Sort configuration files and offers increased control over the
            design of the Q sort. It also includes a built-in web server to
            immediately test your Q sort setup on any locally installed web
            browser.
          </div>
          <div>
            Citation:
            <br /> Banasick, S. (2025). QuinceyQ Configurator (Version 1.0.0)
          </div>
          <h2>Select Configurator Display Mode:</h2>
          <div>
            <button
              id="beginner"
              // isActive={appState.beginnerButtonActive}
              // onClick={setMode}
            >
              Novice
            </button>
            <button
              id="pro"
              // isActive={appState.proButtonActive}
              // onClick={setMode}
            >
              Expert
            </button>
          </div>
          <div>
            {showDescriptionPro && (
              <p>shows only the essential configurations</p>
            )}
            {showDescriptionBeginner && (
              <p>displays in-depth descriptions and directions</p>
            )}
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
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 7</h2>
        </TabPanel>
      </Tabs>
    </main>
  );
};

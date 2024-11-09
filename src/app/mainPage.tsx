import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Start from "../sections/start/Start.js";
import { v4 as uuidv4 } from "uuid";
// Add the following import statement for the declaration file

const languages = ["en", "ru", "tm", "ja", "ko", "zh", "es", "fr", "de"];

export const MainPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const onChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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

        <TabPanel className="flex flex-col justify-center">
          <div className="justify-self-right">
            <div>{t("selectLanguage")}</div>
            <div className="space-x-2">
              {languages.map((lng) => {
                return (
                  <button
                    onClick={() => onChangeLanguage(lng)}
                    key={uuidv4()}
                    className={clsx(
                      "bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md",
                      {
                        "bg-opacity-100": lng === currentLanguage,
                        "bg-opacity-50": lng !== currentLanguage,
                      }
                    )}
                  >
                    {lng.toUpperCase()}
                  </button>
                );
              })}
              <Start />
            </div>
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

import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { LanguageIntroText } from "./LanguageIntroText";
import { UploadAndReadLanguageXml } from "./UploadAndReadLanguageXml.js";
import { DownloadLanguageXml } from "./DownloadLanguageXml.js";
import Button from "../../sections/utils/Button";

const getLanguageDisplayAll = (state) => state.languageDisplayAll;
const getLanguageDisplayEssential = (state) => state.languageDisplayEssential;
const getSetLanguageDisplayAll = (state) => state.setLanguageDisplayAll;
const getSetLanguageDisplayEssential = (state) => state.setLanguageDisplayEssential;
const getSetLangDisplayAllMode = (state) => state.setLangDisplayAllMode;
// const getLangDisplayAllMode = (state) => state.langDisplayAllMode;

const LanguageHeader: React.FC = () => {
  const { t } = useTranslation();
  //   const displayMode = useStore(getLangDisplayAllMode);
  const setDisplayMode = useStore(getSetLangDisplayAllMode);
  const languageDisplayAll = useStore(getLanguageDisplayAll);
  const languageDisplayEssential = useStore(getLanguageDisplayEssential);
  const setLanguageDisplayAll = useStore(getSetLanguageDisplayAll);
  const setLanguageDisplayEssential = useStore(getSetLanguageDisplayEssential);

  const setMode = (e) => {
    const mode = e.target.id;
    if (mode === "allOptions") {
      setLanguageDisplayAll(true);
      setLanguageDisplayEssential(false);
      setDisplayMode(true);
    } else {
      setLanguageDisplayAll(false);
      setLanguageDisplayEssential(true);
      setDisplayMode(false);
    }
  };

  const ActionButton: React.FC<{
    children: React.ReactNode;
    icon: React.ReactNode;
    description: string;
  }> = ({ children, description }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        id="displayModeDiv"
        className="flex flex-col items-center justify-self-end font-semibold w-[35%]"
      >
        <div className="text-right">{t("settingsViewOptions")}</div>
        <div className="flex flex-row justify-end">
          <Button
            id="essentialOptions"
            styleClass={`w-[200px] bg-blue-500 hover:bg-blue-700 ${
              languageDisplayEssential ? "bg-opacity-100" : "bg-opacity-50"
            }`}
            label={t("essentialOptions")}
            onClick={setMode}
          />
          <Button
            id="allOptions"
            label={t("allOptions")}
            styleClass={`bg-[#3b82f6] w-[200px] hover:bg-blue-700 ${
              languageDisplayAll ? "bg-opacity-100" : "bg-opacity-50"
            }`}
            onClick={setMode}
          />
        </div>
      </div>

      <div className="py-8 bg-[#f5f5f5]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f5f5f5]">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("languagePageTitle")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("languageSubtitle")}
            </p>
          </div>

          {/* Introduction Section - Beginner Mode */}
          {
            <div className="flex items-center justify-center mb-8">
              <LanguageIntroText />
            </div>
          }

          {/* Action Buttons Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ActionButton
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              }
              description={t("uploadLanguageXml")}
            >
              <div>
                <UploadAndReadLanguageXml />
              </div>
            </ActionButton>

            <ActionButton
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
              description={t("downloadLanguageXml")}
            >
              <div>
                <DownloadLanguageXml />
              </div>
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  );
};

export { LanguageHeader };

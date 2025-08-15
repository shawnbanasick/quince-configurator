import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import UploadAndReadXML from "./UploadAndReadXml.js";
import { ConfigSections } from "./ConfigSections.js";
import { DownloadConfigXml } from "./DownloadConfigXml.js";

// Type definitions
interface State {
  displayMode: string;
}

const getDisplayMode = (state: State): string => state.displayMode;

const Config: React.FC = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);

  const isBeginnerMode = displayMode === "beginner";

  const InfoCard: React.FC<{ children: React.ReactNode; icon: React.ReactNode }> = ({
    children,
    icon,
  }) => (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-start space-x-4">
      <div className="flex-shrink-0 w-6 h-6 text-blue-600">{icon}</div>
      <div className="text-blue-800 leading-relaxed">{children}</div>
    </div>
  );

  const ActionButton: React.FC<{
    children: React.ReactNode;
    icon: React.ReactNode;
    description: string;
    // component: React.ReactNode;
  }> = ({ children, description }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <div>
          <p className="text-sm min-h-[40px] text-gray-600 mb-4">{description}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3>
        </div>
        {/* <div className="w-full">{component}</div> */}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Configuration Settings</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("configSettings")}
          </p>
        </div>

        {/* Information Cards - Only show in beginner mode */}
        {isBeginnerMode && (
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Getting Started</h2>
              <p className="text-gray-600">
                Learn about configuration settings and how to use them effectively
              </p>
            </div>

            <div className="grid gap-6">
              <InfoCard
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              >
                {t("configPara1")}
              </InfoCard>

              <InfoCard
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              >
                {t("configPara2")}
              </InfoCard>

              <InfoCard
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                }
              >
                {t("configPara3")}
              </InfoCard>
            </div>
          </div>
        )}

        {/* Action Buttons Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ActionButton
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            }
            description="Load an existing configuration file to continue working with saved settings or to modify a previous project."
          >
            <div className="">
              <UploadAndReadXML />
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
            description="Download your current configuration as an XML file for backup or sharing"
          >
            <div className="flex-1 max-w-md">
              <DownloadConfigXml />
            </div>
          </ActionButton>
        </div>

        {/* Configuration Sections */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
            <h2 className="text-2xl font-semibold mb-2">Configuration Sections</h2>
            <p className="text-blue-100">Customize your study parameters and settings</p>
          </div>
          <div className="p-12">
            <ConfigSections />
          </div>
        </div>

        {/* Mode Indicator */}
        <div className="mt-8 text-center">
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              isBeginnerMode ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                isBeginnerMode ? "bg-green-500" : "bg-blue-500"
              }`}
            ></div>
            {isBeginnerMode ? "Beginner Mode" : "Advanced Mode"}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Config };

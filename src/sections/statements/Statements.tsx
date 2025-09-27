import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { StatementTextArea } from "./StatementTextArea";
import { UploadAndReadXmlStatements } from "./UploadAndReadXmlStatements";
import { generateStatementsXml } from "./generateStatementsXml.ts";
import ReactHtmlParser from "html-react-parser";

// Type definitions
interface State {
  currentStatements: string;
  version: string;
}

const getCurrentStatements = (state: State): string => state.currentStatements;
const getVersion = (state: State): string => state.version;
const getDisplayMode = (state) => state.displayMode;

const Statements: React.FC = () => {
  const { t } = useTranslation();
  const currentStatements = useStore(getCurrentStatements);
  const version = useStore(getVersion);
  let displayMode = useStore(getDisplayMode);

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  const handleDownloadStatements = (): void => {
    try {
      const xmlContent = generateStatementsXml(currentStatements, version);
      const blob = new Blob([xmlContent], { type: "application/xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "statements.xml";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading statements:", error);
      alert("An error occurred while downloading the statements file.");
    }
  };

  const ActionButton: React.FC<{
    children: React.ReactNode;
    icon: React.ReactNode;
    description: React.ReactNode;
    onClick?: () => void;
    component?: React.ReactNode;
    variant?: "primary" | "secondary";
  }> = ({ children, description, onClick, component }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center justify-center text-center">
        <div>
          <div className="text-sm text-gray-600 mb-4 min-h-[60px]">{description}</div>
        </div>
        <div className="flex justify-center items-center w-[100%]">
          {component || (
            <button
              onClick={onClick}
              className="flex flex-row gap-3 min-w-[500px] items-center justify-center cursor-pointer bg-orange-300 hover:opacity-50 border border-gray-600 rounded-md p-2"
            >
              {children}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("statementPageTitle")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("statementPageTitleDescription")}
          </p>
        </div>

        {displayMode ? (
          <div id="infoCardContainer">
            {/* INFO 1 */}
            <div className="flex flex-col gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-blue-800">
                    <div className="mb-2">{ReactHtmlParser(t("statementInfoCard1"))}</div>
                  </div>
                </div>
              </div>

              {/* INFO 2 */}
              <div className=" bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-row gap-2 text-blue-800">
                    <div className="mb-2">{ReactHtmlParser(t("statementInfoCard2"))}</div>
                  </div>
                </div>
              </div>

              {/* INFO 3 */}
              <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-blue-800">
                    <div className="mb-2">{ReactHtmlParser(t("statementInfoCard3"))}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Action Buttons Section */}
        <div className="flex flex-row gap-8 mb-12">
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
            description={ReactHtmlParser(t("uploadStatementsXmlDescriptionText"))}
            component={<UploadAndReadXmlStatements />}
          >
            Upload Statements
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
            description={ReactHtmlParser(t("downloadStatementsXmlDescriptionText"))}
            onClick={handleDownloadStatements}
            variant="secondary"
          >
            <svg className="max-w-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {t("saveStatements")}
          </ActionButton>
        </div>

        {/* Statement Editor Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8">
            <h2 className="text-2xl font-semibold mb-2">{t("statementEditor")}</h2>
            <div className="text-green-100">{t("createOrEditYourQsortStatements")}</div>
          </div>
          <div className="p-8">
            <div className="max-w-5xl mx-auto">
              <StatementTextArea />
            </div>
          </div>
        </div>

        {/* Version Information */}
        {version && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
              <div className="w-2 h-2 rounded-full mr-2 bg-gray-400"></div>
              Version: {version}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Statements };

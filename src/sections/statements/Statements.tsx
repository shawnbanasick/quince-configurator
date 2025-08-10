import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { StatementTextArea } from "./StatementTextArea";
import { UploadAndReadXmlStatements } from "./UploadAndReadXmlStatements";
import { generateStatementsXml } from "./generateStatementsXml.ts";

// Type definitions
interface State {
  currentStatements: string;
  version: string;
}

const getCurrentStatements = (state: State): string => state.currentStatements;
const getVersion = (state: State): string => state.version;

const Statements: React.FC = () => {
  const { t } = useTranslation();
  const currentStatements = useStore(getCurrentStatements);
  const version = useStore(getVersion);

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
    description: string;
    onClick?: () => void;
    component?: React.ReactNode;
    variant?: "primary" | "secondary";
  }> = ({ children, icon, description, onClick, component, variant = "primary" }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center ${
            variant === "primary"
              ? "bg-gradient-to-br from-blue-500 to-blue-600"
              : "bg-gradient-to-br from-orange-500 to-orange-600"
          }`}
        >
          <div className="w-8 h-8 text-white">{icon}</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
        <div className="w-full">
          {component || (
            <button
              onClick={onClick}
              className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-75 ${
                variant === "primary"
                  ? "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-200"
                  : "bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-200"
              }`}
            >
              {children}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const StatsCard: React.FC<{
    title: string;
    value: string | number;
    description: string;
    color: "blue" | "green" | "purple";
  }> = ({ title, value, description, color }) => {
    const colorClasses = {
      blue: "bg-blue-50 text-blue-600",
      green: "bg-green-50 text-green-600",
      purple: "bg-purple-50 text-purple-600",
    };

    return (
      <div className={`text-center p-6 rounded-xl ${colorClasses[color]}`}>
        <div className="text-3xl font-bold mb-2">{value}</div>
        <div className="text-sm font-medium mb-1">{title}</div>
        <div className="text-xs opacity-75">{description}</div>
      </div>
    );
  };

  // Calculate statement statistics
  const getStatementStats = () => {
    if (!currentStatements) return { count: 0, words: 0, characters: 0 };

    const statements = currentStatements
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");

    const totalWords = statements.reduce(
      (acc, statement) => acc + statement.split(/\s+/).filter((word) => word !== "").length,
      0
    );

    const totalCharacters = statements.reduce((acc, statement) => acc + statement.length, 0);

    return {
      count: statements.length,
      words: totalWords,
      characters: totalCharacters,
    };
  };

  const stats = getStatementStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Statement Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("listOfStatements")}
          </p>
        </div>

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
            description="Upload an existing statements XML file to load your statement list"
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
            description="Download your current statements as an XML file for backup or sharing"
            onClick={handleDownloadStatements}
            variant="secondary"
          >
            {t("saveStatements")}
          </ActionButton>
        </div>

        {/* Statistics Section */}
        {currentStatements && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Statement Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard
                title="Total Statements"
                value={stats.count}
                description="Number of statements"
                color="blue"
              />
              <StatsCard
                title="Total Words"
                value={stats.words}
                description="Across all statements"
                color="green"
              />
              <StatsCard
                title="Characters"
                value={stats.characters.toLocaleString()}
                description="Total character count"
                color="purple"
              />
            </div>
          </div>
        )}

        {/* Statement Editor Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8">
            <h2 className="text-2xl font-semibold mb-2">Statement Editor</h2>
            <p className="text-green-100">Create and edit your Q-sort statements</p>
          </div>
          <div className="p-8">
            <div className="max-w-5xl mx-auto">
              <StatementTextArea />
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
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
              <h3 className="font-semibold mb-2">Statement Guidelines</h3>
              <p className="text-sm leading-relaxed">
                Enter each statement on a new line. Statements should be clear, concise, and
                relevant to your research topic. The optimal number of statements for Q-methodology
                typically ranges from 20-60 depending on your study design.
              </p>
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

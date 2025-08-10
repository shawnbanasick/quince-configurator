import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ResultsUploadButton } from "./ResultsUploadButton";
import { ExportStaButton } from "./ExportStaButton";
import { ExportDatButton } from "./ExportDatButton";
import { ExportToZipButton } from "./ExportToZipButton";
import { ExportWordButton } from "./ExportWordButton";
import { useStore } from "../../globalState/useStore";
import { extractPartNames } from "./extractPartNames";

// Type definitions
interface State {
  cleanedResults: any[];
  surveyQuestionsArray: any;
  selectedPartId: string;
  setSelectedPartId: (id: string) => void;
}

interface Option {
  value: string;
  label: string;
  description?: string;
}

const getData = (state: State) => state.cleanedResults;

const Results: React.FC = () => {
  const { t } = useTranslation();
  const data = useStore(getData);

  const [selectedOutputOption, setSelectedOutputOption] = useState("kadeZip");
  const [selectedPartId, setSelectedPartId] = useState("randomId");

  // Process participant names based on selection
  const getParticipantNames = (): string[] | undefined => {
    if (!data) return undefined;

    const nameArrays = extractPartNames(data);
    const [randomIdArray, partIdArray, urlUsercodeArray] = nameArrays;

    switch (selectedPartId) {
      case "randomId":
        return randomIdArray;
      case "partId":
        return partIdArray;
      case "urlUsercode":
        return urlUsercodeArray;
      default:
        return randomIdArray;
    }
  };

  const names = getParticipantNames();

  const participantOptions: Option[] = [
    {
      value: "randomId",
      label: "Random ID",
      description: "System-generated unique identifiers",
    },
    {
      value: "partId",
      label: "Participant ID",
      description: "Custom participant identifiers",
    },
    {
      value: "urlUsercode",
      label: "URL User Code",
      description: "URL-based user identification codes",
    },
  ];

  const outputOptions: Option[] = [
    {
      value: "kadeZip",
      label: "KADE Zip File",
      description: "Complete analysis package for KADE software",
    },
    {
      value: "pqMethod",
      label: "PQMethod Files",
      description: "Individual files compatible with PQMethod",
    },
  ];

  const OptionButton: React.FC<{
    option: Option;
    isSelected: boolean;
    onClick: () => void;
    isFormat: boolean;
  }> = ({ option, isSelected, onClick, isFormat }) => (
    <button
      onClick={onClick}
      className={`
        w-[100%] group relative p-4 rounded-xl border-2 transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-200
        ${
          isSelected
            ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 shadow-lg"
            : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
        }
      `}
    >
      <div className="text-left">
        <h3 className={`font-semibold text-lg mb-1 ${isSelected ? "text-white" : "text-gray-900"}`}>
          {option.label}
        </h3>
        {option.description && isFormat && (
          <p className={`text-sm ${isSelected ? "text-blue-100" : "text-gray-500"}`}>
            {option.description}
          </p>
        )}
      </div>
      {isSelected && (
        <div className="absolute top-5 right-3">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </button>
  );

  const hasData = data && data.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("extractResults")}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("processResultsText")}
          </p>
        </div>

        {/* Data Upload Section */}
        <div className="bg-white rounded-2xl shadow-xl p-1 mb-8 border border-gray-100">
          <div className="flex flex-col justify-center items-center mt-2 mb-1 text-center">
            {/* <h2 className="text-2xl font-semibold text-gray-900 mb-2">Load Data</h2> */}
            <p className="text-gray-600">Load your Baserow results data to begin analysis</p>
            <ResultsUploadButton />
          </div>
        </div>

        {hasData ? (
          <>
            {/* Data Summary Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mt-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Export Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{data.length}</div>
                  <div className="text-sm text-gray-600">Total Responses</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">{names?.length || 0}</div>
                  <div className="text-sm text-gray-600">Unique Participants</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Ready</div>
                  <div className="text-sm text-gray-600">Status</div>
                </div>
              </div>
            </div>

            {/* Configuration Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Participant Identifier Selection */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {t("selectParticipantIdentifier")}
                  </h2>
                  <p className="text-gray-600">
                    Choose how participants should be identified in exports
                  </p>
                </div>

                <div className="flex flex-col space-y-4">
                  {participantOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      option={option}
                      isSelected={selectedPartId === option.value}
                      onClick={() => setSelectedPartId(option.value)}
                      isFormat={false}
                    />
                  ))}
                </div>

                {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Selected:</span>{" "}
                    {participantOptions.find((opt) => opt.value === selectedPartId)?.label}
                  </p>
                  {names && (
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Count:</span> {names.length} participants
                    </p>
                  )}
                </div> */}
              </div>

              {/* Output Format Selection */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Output Format</h2>
                  <p className="text-gray-600">Select your preferred export format</p>
                </div>

                <div className="space-y-6">
                  {outputOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      option={option}
                      isSelected={selectedOutputOption === option.value}
                      onClick={() => setSelectedOutputOption(option.value)}
                      isFormat={true}
                    />
                  ))}
                </div>

                {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Selected:</span>{" "}
                    {outputOptions.find((opt) => opt.value === selectedOutputOption)?.label}
                  </p>
                </div> */}
              </div>
            </div>

            {/* Export Actions Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Export Files</h2>
                <p className="text-gray-600">Download your processed data in various formats</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <ExportStaButton />
                  <span className="text-sm text-gray-500 text-center">
                    Statements file for analysis
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <ExportDatButton userData={data} partNames={names} />
                  <span className="text-sm text-gray-500 text-center">Data file for PQMethod</span>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <ExportToZipButton userData={data} participantIdent={selectedPartId} />
                  <span className="text-sm text-gray-500 text-center">
                    Complete analysis package
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <ExportWordButton
                    userData={data}
                    participantIdent={selectedPartId}
                    partNames={names}
                  />
                  <span className="text-sm text-gray-500 text-center">
                    Formatted report document
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* No Data State */
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Data Available</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Please load your Baserow CSV data file to begin the analysis and export process.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export { Results };

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ResultsUploadButton } from "./ResultsUploadButton";
import { ExportStaButton } from "./ExportStaButton";
import { ExportDatButton } from "./ExportDatButton";
import { ExportToZipButton } from "./ExportToZipButton";
import { ExportWordButton } from "./ExportWordButton";
import { useStore } from "../../globalState/useStore";

// const getDisplayMode = (state) => state.displayMode;
// const getCurrentStatements = (state) => state.currentStatements;
type ExportWordButtonProps = {
  userData: any; // Replace `any` with your actual data type
};
type State = {
  cleanedResults: any; // Replace `any` with accurate type
  surveyQuestionsArray: any;
};

const getData = (state: State) => state.cleanedResults;
const getSurvey = (state: State) => state.surveyQuestionsArray;

const Results: React.FC = () => {
  const data = useStore(getData);
  const survey = useStore(getSurvey);

  console.log(JSON.stringify(survey, null, 2));

  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("randomId");
  const [selectedOutputOption, setSelectedOutputOption] = useState("kadeZip");

  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  const options = [
    { value: "randomId", label: "Random Id" },
    { value: "partId", label: "Participant Id" },
    { value: "urlUsercode", label: "URL User Code" },
  ];

  const outputOptions = [
    { value: "kadeZip", label: "KADE Zip File" },
    { value: "pqMethod", label: "PQMethod Files" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center">Results</h1>
      <h2>{t("processResultsText")}</h2>

      <div className="p-4">
        <h2 className="text-xl mb-4">{t("selectParticipantIdentifier")}:</h2>
        <div className="flex space-x-4">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedOption(option.value)}
              className={`px-4 py-2 rounded-lg border ${
                selectedOption === option.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="mt-4">Selected: {selectedOption}</p>
      </div>
      <div className="p-4">
        <h2 className="text-xl mb-4">{t("selectParticipantIdentifier")}:</h2>
        <div className="flex space-x-4">
          {outputOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedOutputOption(option.value)}
              className={`px-4 py-2 rounded-lg border ${
                selectedOutputOption === option.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="mt-4">Selected: {selectedOutputOption}</p>
      </div>
      <div className="flex flex-row w-10/12 justify-center mt-4 mb-6">
        <ResultsUploadButton />
      </div>
      <div className="flex flex-row w-10/12 justify-center mt-4 mb-6">
        <ExportStaButton />
        <ExportDatButton />
        <ExportToZipButton userData={data} participantIdent={selectedOption} />
        <ExportWordButton userData={data} />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>Results Area</h1>
      </div>
    </div>
  );
};

export { Results };

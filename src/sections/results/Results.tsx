import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ResultsUploadButton } from "./ResultsUploadButton";
import { ExportStaButton } from "./ExportStaButton";
import { ExportDatButton } from "./ExportDatButton";
import { ExportToZipButton } from "./ExportToZipButton";
import { ExportWordButton } from "./ExportWordButton";
import { useStore } from "../../globalState/useStore";
import { extractPartNames } from "./extractPartNames";
// import { handleSelectPartId } from "./handleSelectPartId";

// const getDisplayMode = (state) => state.displayMode;

type ExportWordButtonProps = {
  userData: any;
  selectedPartId: string;
  partNames: string[];
};

type State = {
  cleanedResults: any; // Replace `any` with accurate type
  surveyQuestionsArray: any;
  selectedPartId: string;
  setSelectedPartId: any;
};
const getData = (state: State) => state.cleanedResults;
// const getSurvey = (state: State) => state.surveyQuestionsArray;

const Results: React.FC = () => {
  const data = useStore(getData);
  // const survey = useStore(getSurvey);
  let names;

  const nameArrays = extractPartNames(data);
  const { t } = useTranslation();
  const [selectedOutputOption, setSelectedOutputOption] = useState("kadeZip");
  const [selectedPartId, setSelectedPartId] = useState("randomId");

  let randomIdArray = [...nameArrays[0]];
  let partIdArray = [...nameArrays[1]];
  let urlUsercodeArray = [...nameArrays[2]];

  if (selectedPartId === "randomId") {
    names = randomIdArray;
  }
  if (selectedPartId === "partId") {
    names = partIdArray;
  }
  if (selectedPartId === "urlUsercode") {
    names = urlUsercodeArray;
  }

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
        {/* PART ID */}
        <h2 className="text-xl mb-4">{t("selectParticipantIdentifier")}:</h2>
        <div className="flex space-x-4">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedPartId(option.value)}
              className={`px-4 py-2 rounded-lg border ${
                selectedPartId === option.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="mt-4">Selected: {selectedPartId}</p>
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
        <ExportToZipButton userData={data} participantIdent={selectedPartId} />
        <ExportWordButton userData={data} participantIdent={selectedPartId} partNames={names} />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>Results Area</h1>
      </div>
    </div>
  );
};

export { Results };

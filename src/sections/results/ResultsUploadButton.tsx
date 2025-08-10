import React, { useRef, ChangeEvent, useState } from "react";
import Papa from "papaparse";
import { useStore } from "../../GlobalState/useStore";

type CsvRow = Record<string, string>;
const getSetCleanedResults = (state) => state.setCleanedResults;
const getSetRawData = (state) => state.setRawData;

const ResultsUploadButton: React.FC = () => {
  const setCleanedResults = useStore(getSetCleanedResults);
  const setRawData = useStore(getSetRawData);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [data, setData] = useState<CsvRow[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const file = e.target?.result as string;
      if (!file) return;
      Papa.parse(file, {
        header: true,
        delimiter: Papa.RECORD_SEP,
        skipEmptyLines: true,
        complete: (results) => {
          const cleanedData = results.data.map((row) => {
            const cleanedRow: CsvRow = {};
            for (const key in row) {
              if (row[key].trim() !== "") {
                cleanedRow[key] = row[key];
              }
            }
            return cleanedRow;
          });
          // setData(cleanedData);
          setRawData(cleanedData);
          setCleanedResults(cleanedData);
          console.log("CSV contents:\n", JSON.stringify(cleanedData, null, 2));
        },
      });
      // Optional: parse CSV here
    };
    reader.readAsText(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-2">
      <button
        onClick={handleButtonClick}
        className="flex flex-row items-center min-w-[200px] gap-3 cursor-pointer bg-orange-300 hover:opacity-50 border-2 border-gray-600 rounded-md p-3"
      >
        <svg className="max-w-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        Load Results File
      </button>
      <input
        type="file"
        accept=".csv"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export { ResultsUploadButton };

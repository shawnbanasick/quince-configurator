import React, { useRef, ChangeEvent, useState } from "react";
import Papa from "papaparse";
import { useStore } from "../../GlobalState/useStore";

type CsvRow = Record<string, string>;
const getSetCleanedResults = (state) => state.setCleanedResults;

const ResultsUploadButton: React.FC = () => {
  const setCleanedResults = useStore(getSetCleanedResults);
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
    <div className="p-4">
      <button
        onClick={handleButtonClick}
        className="w-80 px-6 p-2 bg-orange-300 text-black font-semibold rounded-md hover:opacity-50 focus:outline-none focus:ring-2 border-2 border-gray-600 focus:ring-orange-400 focus:ring-opacity-75 text-center min-h-[70px] select-none"
      >
        Upload CSV
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

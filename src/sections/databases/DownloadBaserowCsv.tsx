import React from "react";
import Papa from "papaparse";
import * as FileSaver from "file-saver";
import { useTranslation } from "react-i18next";

const DownloadBaserowCsv: React.FC = () => {
  const { t } = useTranslation();
  const projectName = "baserowHeader";

  const generateSampleCsvData = () => {
    // Generate single row with r1, r2, r3... to r300
    const sampleData: string[] = [];
    for (let i = 1; i <= 300; i++) {
      sampleData.push(`r${i}`);
    }
    return [sampleData]; // Return as single row array
  };

  const handleOnClick = () => {
    try {
      // Generate sample data
      const csvData = generateSampleCsvData();

      // Convert to CSV using Papaparse
      const csvString = Papa.unparse(csvData, {
        header: false,
        delimiter: ",",
        quotes: true,
        quoteChar: '"',
        escapeChar: '"',
        skipEmptyLines: true,
      });

      // Create blob and download
      const blob = new Blob([csvString], {
        type: "text/csv;charset=utf-8;",
      });

      const filename = `${projectName}.csv`;
      FileSaver.saveAs(blob, filename);
    } catch (error) {
      console.error("Error generating CSV:", error);
      alert("Error generating CSV file. Please try again.");
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className="border border-gray-900 min-w-[180px] bg-orange-300 hover:opacity-50 text-white mt-6 p-2 px-4 rounded"
    >
      <div className="flex flex-row justify-center items-center h-[30px] w-[360px] gap-2">
        <div className="flex justify-center items-center">
          <svg
            className="w-10 h-10 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div className="text-black">{t("baserowHeaderDownloadButton")}</div>
      </div>
    </button>
  );
};

export { DownloadBaserowCsv };

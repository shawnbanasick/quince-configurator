import { useTranslation } from "react-i18next";
import * as FileSaver from "file-saver";
import { useStore } from "../../GlobalState/useStore";
import createPQMethodDAT from "./createPqmethodDat";

// Type definitions
interface StoreState {
  studyTitle: string;
  cleanedResults: ResultItem[];
  currentStatements: string;
  mapInputQsortPattern: number[];
}

interface ResultItem {
  r20: string;
  [key: string]: any;
}

interface ExportDatButtonProps {
  partNames: string[] | undefined;
  userData: string[];
}

// Selector functions with proper typing
const getProjectName = (state: StoreState): string => state.studyTitle;
const getCleanedResults = (state: StoreState): ResultItem[] => state.cleanedResults;
const getCurrentStatements = (state: StoreState): string => state.currentStatements;
const getMapInputQsortPattern = (state: StoreState): number[] => state.mapInputQsortPattern;

const ExportDatButton: React.FC<ExportDatButtonProps> = ({ partNames }) => {
  const { t } = useTranslation();

  // Store selectors
  const projectName = useStore(getProjectName);
  const results = useStore(getCleanedResults);
  const currentStatements = useStore(getCurrentStatements);
  const mapInputQsortPattern = useStore(getMapInputQsortPattern);

  // Validation function
  const validateData = (): string | null => {
    if (!projectName?.trim()) {
      return "Please load your config.xml file first";
    }
    if (!results?.length) {
      return "Please load your Baserow CSV data file first";
    }
    if (!currentStatements?.trim()) {
      return "No statements available. Please load your statements.xml file first";
    }
    if (!mapInputQsortPattern?.length) {
      return "Q-sort pattern not available. Please load your map.xml file first";
    }
    return null;
  };

  // Process statements
  const getStatementsArray = (): string[] => {
    return currentStatements
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");
  };

  // Process sorts data
  const processSorts = (): number[][] => {
    return results.map((item: ResultItem) => {
      const prep1 = item.r20.slice(5).trim();
      const prep2 = prep1.split("|");
      return prep2.map((str) => Number(str));
    });
  };

  const handleExport = async (): Promise<void> => {
    try {
      // Validate required data
      const validationError = validateData();
      if (validationError) {
        alert(validationError);
        return;
      }

      const statementsArray = getStatementsArray();
      const sorts = processSorts();
      const numStatements = statementsArray.length;

      console.log("Export data:", {
        projectName,
        numStatements,
        sortsCount: sorts.length,
        respondentNamesCount: partNames?.length || 0,
      });

      // Generate DAT file content
      const datString = createPQMethodDAT(
        projectName,
        sorts,
        numStatements,
        mapInputQsortPattern,
        partNames || []
      );

      // Create and download file
      const blob = new Blob([datString], {
        type: "text/plain;charset=utf-8",
      });

      const fileName = `${projectName.substring(0, 8).replace(/[^a-zA-Z0-9]/g, "_")}.DAT`;
      FileSaver.saveAs(blob, fileName);
    } catch (error) {
      console.error("Error exporting DAT file:", error);
      alert(
        "An error occurred while exporting the DAT file. Please check the console for details."
      );
    }
  };

  // Don't render if no results available
  if (!results?.length) {
    return null;
  }

  return (
    <button
      onClick={handleExport}
      className="min-w-[180px] mr-5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 px-4 rounded transition-colors duration-200"
      disabled={!projectName || !results?.length}
      type="button"
      aria-label={t("downloadDatFile")}
    >
      <div className="flex flex-row justify-center items-center w-full h-full">
        <span className="text-sm font-medium">{t("downloadDatFile")}</span>
      </div>
    </button>
  );
};

export { ExportDatButton };

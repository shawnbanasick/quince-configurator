import { useTranslation } from "react-i18next";
import createPQMethodDAT from "./createPqmethodDat";
import * as FileSaver from "file-saver";
import { useStore } from "../../GlobalState/useStore";
// import DatIcon from '../images/DAT_Icon.svg';

const getProjectName = (state) => state.studyTitle;
const getCleanedResults = (state) => state.cleanedResults;
const getCurrentStatements = (state) => state.currentStatements;
const getMapInputQsortPattern = (state) => state.mapInputQsortPattern;

const ExportDatButton = (props) => {
  const { t } = useTranslation();
  const projectName = useStore(getProjectName);
  const results = useStore(getCleanedResults);
  const currentStatements2 = useStore(getCurrentStatements);
  const mapInputQsortPattern = useStore(getMapInputQsortPattern);

  if (!results) return;

  const statementsArray = currentStatements2.split("\n").filter((line) => line.trim() !== "");
  const respondentNames = props.partNames;

  let multiplierArray: any[] = [...mapInputQsortPattern];
  const numStatements = statementsArray.length;

  let sorts: any[] = [];
  results.forEach((item) => {
    let prep1 = item["r20"].slice(5).trim();
    let prep2 = prep1.split("|");
    sorts.push(prep2.map((str) => +str));
  });

  // console.log(JSON.stringify(sorts));

  const handleOnClick = async () => {
    if (!projectName) {
      alert("Please load your config.xml file first");
    }
    if (!results) {
      alert("Please load your Baserow CSV data file first");
    }
    console.log(JSON.stringify(results, null, 2));

    let datString = createPQMethodDAT(
      projectName,
      sorts,
      numStatements,
      multiplierArray, // Pass a single number, adjust index as needed
      respondentNames
    );

    console.log("555", datString);

    var blob = new Blob([datString], {
      type: "text/plain;charset=ascii",
    });
    FileSaver.saveAs(blob, `${projectName.substring(0, 8)}.DAT`);
  };

  return (
    <button
      onClick={handleOnClick}
      className="min-w-[180px] mr-5 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
    >
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="flex justify-center items-center mx-2">
          {/* <img src={DatIcon} height="50px" alt="CSV Icon" /> */}
        </div>
        <p>{t("downloadDatFile")}</p>
      </div>
    </button>
  );
};

export { ExportDatButton };

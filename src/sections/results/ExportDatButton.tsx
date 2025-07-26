import { useTranslation } from "react-i18next";
import createPQMethodDAT from "./createPqmethodDat";
import * as FileSaver from "file-saver";
import { useStore } from "../../GlobalState/useStore";
// import { cloneDeep } from 'es-toolkit';
// import DatIcon from '../images/DAT_Icon.svg';

const getProjectName = (state) => state.studyTitle;
const getCleanedResults = (state) => state.cleanedResults;

const ExportDatButton = () => {
  const { t } = useTranslation();
  const projectName = useStore(getProjectName);
  const results = useStore(getCleanedResults);
  //   const mainDataObject2 = coreState((state) => state.mainDataObject);
  //   const mainDataObject = cloneDeep(mainDataObject2);
  //   const multiplierArray = coreState((state) => state.multiplierArray);
  //   const projectName = coreState((state) => state.projectName);
  //   const statements = coreState((state) => state.statements);
  //   const respondentNames = coreState((state) => state.respondentNames);

  const handleOnClick = async () => {
    if (!projectName) {
      alert("Please load your config.xml file first");
    }
    if (!results) {
      alert("Please load your Baserow CSV data file first");
    }
    console.log(JSON.stringify(results, null, 2));

    let datString = createPQMethodDAT(
      projectName
      //   mainDataObject,
      //   multiplierArray,
      //   statements.length,
      //   respondentNames
    );

    console.log(datString);

    // var blob = new Blob([datString], {
    //   type: "text/plain;charset=ascii",
    // });
    // FileSaver.saveAs(blob, `${projectName.substring(0, 8)}.DAT`);
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

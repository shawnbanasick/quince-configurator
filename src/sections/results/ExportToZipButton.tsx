import JSZip from "jszip";
import { useTranslation } from "react-i18next";
import { getCurrentDate } from "./getCurrentDate";
import { getCurrentTime } from "./getCurrentTime";
import { useStore } from "../../GlobalState/useStore";
import { createQSortPattern } from "./createQSortPattern";
import { createSortsText } from "./createSortsText";

const getCurrentStatements = (state) => state.currentStatements;
const getProjectName = (state) => state.studyTitle;
const getQSortPatternObject = (state) => state.qSortPatternObject;

const ExportToZipButton = (props) => {
  const { t } = useTranslation();
  const currentStatements = useStore(getCurrentStatements);
  const projectName = useStore(getProjectName);
  const qSortPatternObject = useStore(getQSortPatternObject);
  let shouldIncludeTimestamp = true;

  const handleOnClick = () => {
    if (!currentStatements) {
      alert("Please load your statements.xml file first");
      return;
    }
    if (!qSortPatternObject) {
      alert("Please load your map.xml file first");
      return;
    }

    // create file name timeStamp
    const newDate = new Date();
    const timeStamp = `${getCurrentDate(newDate)}_${getCurrentTime(newDate)}`;

    // write statements.txt
    let statementsBlob = new Blob([currentStatements], {
      type: "text/plain;charset=utf-8",
    });
    // write name.txt
    let nameBlob = new Blob([projectName], {
      type: "text/plain;charset=utf-8",
    });
    // write pattern.txt
    let qSortPatternTxt = createQSortPattern(qSortPatternObject);
    let patternBlob = new Blob([qSortPatternTxt], {
      type: "text/plain;charset=utf-8",
    });
    // write sorts.txt
    let sortsTxt = createSortsText(props.userData, props.participantIdent);
    let sortsBlob = new Blob([sortsTxt], {
      type: "text/plain;charset=utf-8",
    });

    // set name for ZIP file
    let zipNameFile;
    if (shouldIncludeTimestamp === true) {
      zipNameFile = `KADE_input_${projectName}_${timeStamp}`;
    } else {
      zipNameFile = `KADE_input_${projectName}`;
    }
    // set name for FILE NAME TEXT file
    let txtNameFile;
    if (shouldIncludeTimestamp === true) {
      txtNameFile = `(archive)_KADE_results_${projectName}_${timeStamp}.txt`;
    } else {
      txtNameFile = `(archive)_KADE_results_${projectName}.txt`;
    }

    (async () => {
      try {
        // Initialize the zip file
        const zip = new JSZip();

        // pack in the files
        zip.file("name.txt", nameBlob);
        zip.file("statements.txt", statementsBlob);
        zip.file("pattern.txt", patternBlob);
        zip.file("sorts.txt", sortsBlob);

        // Convert the zip file into a buffer and download
        await zip.generateAsync({ type: "blob" }).then(function (blob) {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = `${zipNameFile}.zip`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(link.href);
        });
      } catch (error) {
        console.log(error);
        alert("There was an error attempting to create the ZIP file");
      }
    })();
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
        <p>{t("downloadZipFile")}</p>
      </div>
    </button>
  );
};

export { ExportToZipButton };

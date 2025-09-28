// import { useStore } from "../../globalState/useStore";
import encodeHTML from "../utils/encodeHTML";
import { useStore } from "../../globalState/useStore.js";

const generateStatementsXml = (statements, version) => {
  // let statementsArray = appState.statements;
  //   let statements = localStorage.getItem("currentStatements");
  let arr = statements.split(/\r\n|\r|\n/g);
  let filteredArray = arr.filter(function (el) {
    return el;
  });
  const statementsArray = filteredArray;

  // STUDY TITLE
  let studyTitle = useStore.getState().studyTitle;
  if (studyTitle === null || studyTitle === undefined) {
    studyTitle = "my Q study";
  }

  let getCurrentTimestamp = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // getMonth() returns 0-11
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day}@${hours}:${minutes}`;
  };

  const creationDate = getCurrentTimestamp();

  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <statements version="${version}" htmlParse="false">;

    <!-- 0. FILE INFORMATION -->
    <info order="0-1" id="statementsFileVersion">1.0.0</info>
    <info order="0-2" id="iterationDate">2025-08-31</info>
    <info order="0-3" id="studyTitle">${studyTitle}</info> 
    <info order="0-4" id="creationDate">${creationDate}</info> 

    <!-- 1. STATEMENTS -->\n`;

  for (let i = 0; i < statementsArray.length; i += 1) {
    let string = `     <statement id="${i + 1}">${encodeHTML(statementsArray[i])}</statement>\n`;

    data = data.concat(string);
    // }
  }

  const endingText = `   </statements>`;
  data = data.concat(endingText);

  return data;
};

export { generateStatementsXml };

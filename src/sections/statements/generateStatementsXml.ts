// import { useStore } from "../../globalState/useStore";
import encodeHTML from "../utils/encodeHTML";

const generateStatementsXml = (statements, version) => {
  // let statementsArray = appState.statements;
  //   let statements = localStorage.getItem("currentStatements");
  let arr = statements.split(/\r\n|\r|\n/g);
  let filteredArray = arr.filter(function (el) {
    return el;
  });
  const statementsArray = filteredArray;

  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <statements version="${version}" htmlParse="false">;

    <!-- 0. FILE INFORMATION -->
    <item order="0-1" id="statementsFileVersion">1.0.0</item>
    <item order="0-2" id="iterationDate">2025-08-31</item>

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

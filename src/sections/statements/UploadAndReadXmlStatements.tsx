import React from "react";
import XMLParser from "react-xml-parser";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { decodeHTML } from "../utils/decodeHTML";
import { stripHtmlDivs } from "./stripHtmlDivs";

const getSetCurrentStatements = (state) => state.setCurrentStatements;
const getSetNumStatements = (state) => state.setNumStatements;
const getSetIsStatementsXmlLoaded = (state) => state.setIsStatementsXmlLoaded;

const UploadAndReadXmlStatements: React.FC = () => {
  const { t } = useTranslation();
  const setCurrentStatements = useStore(getSetCurrentStatements);
  const setNumStatements = useStore(getSetNumStatements);
  const setIsStatementsXmlLoaded = useStore(getSetIsStatementsXmlLoaded);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = e.target?.result as string;
        const parser = new XMLParser();
        const xml = parser.parseFromString(data, "text/xml");
        const xmlObjectArray = xml.getElementsByTagName("statement");

        setNumStatements(xmlObjectArray.length);

        let statementString = "";
        xmlObjectArray.forEach((item) => {
          let strippedItem = stripHtmlDivs(item.value);
          let decodedItem = decodeHTML(strippedItem, true);
          let itemString = `${decodedItem}\n`;
          statementString += itemString;
        });
        setCurrentStatements(statementString);
        setIsStatementsXmlLoaded(true);
        return;
      };

      reader.onerror = () => {
        console.error("Error reading file");
        // setError("Error reading file");
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label
        className="w-80 px-6 p-2 bg-orange-300 text-black font-semibold rounded-md hover:opacity-50 focus:outline-none focus:ring-2 border-2 border-gray-600 focus:ring-orange-400 focus:ring-opacity-75 text-center min-h-[70px] select-none"
        htmlFor="uploadXml"
      >
        {t("loadStatements")}
      </label>
      <input
        className="hidden"
        id="uploadXml"
        type="file"
        name="xmlFile"
        accept=".xml"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export { UploadAndReadXmlStatements };

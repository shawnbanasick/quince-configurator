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
    <div className="flex items-center justify-center">
      <label
        className="flex flex-row gap-3 w-[400px] items-center justify-center cursor-pointer bg-orange-300 hover:opacity-50 border border-gray-600 rounded-md p-2 mt-5"
        htmlFor="uploadXml"
      >
        <svg className="max-w-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
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

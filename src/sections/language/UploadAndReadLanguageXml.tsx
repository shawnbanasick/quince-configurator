import { useRef } from "react";
import XMLParser from "react-xml-parser";
// import getNameTranslationObject from "./getNameTranslationObject";
import { decodeHTML } from "../utils/decodeHTML";
import { useTranslation } from "react-i18next";
import { useStore } from "../../globalState/useStore";

const getSetText = (state) => state.setText;
const getSetIsLanguageXmlLoaded = (state) => state.setIsLanguageXmlLoaded;

const UploadAndReadLanguageXml = () => {
  console.log("UploadAndReadLanguageXml component rendered");

  const { t } = useTranslation();
  const setText = useStore(getSetText);
  const setIsLanguageXmlLoaded = useStore(getSetIsLanguageXmlLoaded);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Triggers the hidden file input
    }
  };

  const handleFileSelection = async (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const data = await readFileAsText(file);
        const parser = new XMLParser();
        const xml = parser.parseFromString(data, "text/xml");
        const xmlObjectArray = xml.getElementsByTagName("item");
        const keys = xmlObjectArray.map((item) => item.attributes.id);
        console.log("Keys from XML:", keys);
        // console.log("Parsed XML object array:", JSON.stringify(xmlObjectArray, null, 2));

        xmlObjectArray.forEach((item) => {
          setText(item.attributes.id, decodeHTML(item.value, true));
          console.log(`Setting text for ${item.attributes.id}: ${decodeHTML(item.value)}`);
        });
        setIsLanguageXmlLoaded(true);
      } catch (error) {
        console.error("Error reading file", error);
        // setError("Error reading file");
      }
    }
  };

  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        resolve(e.target?.result as string);
      };
      reader.onerror = () => {
        reject(new Error("Error reading file"));
      };
      reader.readAsText(file);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="hidden"
        id="uploadXmlLanguage"
        type="file"
        name="xmlFile"
        accept=".xml"
        onChange={handleFileSelection}
        ref={fileInputRef}
      />
      <button
        className="w-[500px] px-6 p-2 bg-orange-300 text-black font-semibold rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 border border-gray-900 focus:ring-orange-400 focus:ring-opacity-75 text-center min-h-[40px] select-none"
        onClick={handleFileUpload}
      >
        {t("loadLanguage")}
      </button>
    </div>
  );
};
export { UploadAndReadLanguageXml };

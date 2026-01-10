import XMLParser from "react-xml-parser";
import { useRef } from "react";
import { decodeHTML } from "../utils/decodeHTML";
import { useTranslation } from "react-i18next";
import { useStore } from "../../globalState/useStore";

const getSetText = (state) => state.setText;
const getSetIsLanguageXmlLoaded = (state) => state.setIsLanguageXmlLoaded;

const UploadAndReadLanguageXml = () => {
  const { t } = useTranslation();
  const setText = useStore(getSetText);
  const setIsLanguageXmlLoaded = useStore(getSetIsLanguageXmlLoaded);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Triggers the hidden file input
    }
  };

  const handleFileSelection = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const data = await readFileAsText(file);
        const parser = new XMLParser();
        const xml = parser.parseFromString(data, "text/xml");
        const xmlObjectArray = xml.getElementsByTagName("item");

        xmlObjectArray.forEach((item) => {
          setText(item.attributes.id, decodeHTML(item.value, true));
        });
        setIsLanguageXmlLoaded(true);
      } catch (error) {
        console.error("Error reading file", error);
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
        className="flex flex-row gap-3 w-[400px] items-center font-semibold justify-center cursor-pointer bg-orange-300 hover:opacity-50 border border-gray-600 rounded-md p-2 mt-5"
        onClick={handleFileUpload}
      >
        <svg className="max-w-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        {t("loadLanguage")}
      </button>
    </div>
  );
};
export { UploadAndReadLanguageXml };

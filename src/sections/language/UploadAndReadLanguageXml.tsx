import XMLParser from "react-xml-parser";
// import getNameTranslationObject from "./getNameTranslationObject";
import { decodeHTML } from "../utils/decodeHTML";
import { useTranslation } from "react-i18next";
import { useStore } from "../../globalState/useStore";

const getSetText = (state) => state.setText;
// import XmlUploadErrorModal from "./XmlUploadErrorModal";

const UploadAndReadLanguageXml = () => {
  const { t } = useTranslation();
  const setText = useStore(getSetText);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const data = await readFileAsText(file);
        const parser = new XMLParser();
        const xml = parser.parseFromString(data, "text/xml");
        const xmlObjectArray = xml.getElementsByTagName("item");
        xmlObjectArray.forEach((item) => {
          setText(item.attributes.id, decodeHTML(item.value));
        });
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
      <label
        className="w-80 px-6 p-2 bg-orange-300 text-black font-semibold rounded-md hover:opacity-50 focus:outline-none focus:ring-2 border-2 border-gray-600 focus:ring-orange-400 focus:ring-opacity-75 text-center min-h-[30px] select-none"
        htmlFor="uploadXmlLanguage"
      >
        {t("loadLanguage")}
      </label>
      <input
        className="hidden"
        id="uploadXmlLanguage"
        type="file"
        name="xmlFile"
        accept=".xml"
        onChange={handleFileUpload}
      />
    </div>
  );
};
export { UploadAndReadLanguageXml };

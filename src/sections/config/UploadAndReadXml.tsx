import React, { useState } from "react";
import fxparser from "fast-xml-parser";
import { readConfigItems } from "./readConfigItems";

interface InputObjType {
  [key: string]: string | any[];
  surveyQuestArray: any[];
}

interface QuestObjType {
  type?: string;
  required?: string;
  label?: string;
  note?: string;
  bg?: string;
  limited?: string;
  maxlength?: string;
  restricted?: string;
  placeholder?: string;
  options?: string;
  scale?: string;
}

const UploadAndReadXML: React.FC = () => {
  const [xmlContent, setXmlContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const surveyQuestArray: QuestObjType[] = [];

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("file", file);
      const reader = new FileReader();

      const options = {
        ignoreAttributes: false,
        alwaysCreateTextNode: true,
        attributeNamePrefix: "@_",
        allowBooleanAttributes: true,
      };

      reader.onload = (e: ProgressEvent<FileReader>) => {
        try {
          const content = e.target?.result as string;

          const inputObj: InputObjType = {
            surveyQuestArray: [],
          };

          // Parse the XML content
          const parser = new fxparser.XMLParser(options);
          const xmlDoc = parser.parse(content);

          // Process the parsed XML data
          readConfigItems(xmlDoc.config.item);

          // Example of processing survey items
          if (xmlDoc.config && xmlDoc.config.item) {
            xmlDoc.config.item.forEach((item: any) => {
              if (item["@_id"] === "survey") {
                const surveyItems = item.children;
                const questObj: QuestObjType = {
                  type: surveyItems[0]?.["@_type"] || "",
                  required: surveyItems[0]?.["@_required"] || "",
                  label: surveyItems[0]?.["@_label"] || "",
                  note: surveyItems[0]?.["@_note"] || "",
                  bg: surveyItems[0]?.["@_bg"] || "",
                  limited: surveyItems[0]?.["@_limited"] || "",
                  maxlength: surveyItems[0]?.["@_maxlength"] || "",
                  restricted: surveyItems[0]?.["@_restricted"] || "",
                  placeholder: surveyItems[0]?.["@_placeholder"] || "",
                  options: surveyItems[0]?.["@_options"] || "",
                  scale: surveyItems[0]?.["@_scale"] || "",
                };
                surveyQuestArray.push(questObj);
              }
            });
          }

          setXmlContent(content);
        } catch (err) {
          console.error("Error parsing XML:", err);
          setError("Error parsing XML");
        }
      };

      reader.onerror = () => {
        console.error("Error reading file");
        setError("Error reading file");
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".xml" onChange={handleFileUpload} />
      {xmlContent && <pre>{xmlContent}</pre>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default UploadAndReadXML;

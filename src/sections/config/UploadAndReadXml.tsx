import React, { useState } from "react";
import XMLParser from "react-xml-parser";

const UploadAndReadXML: React.FC = () => {
  const [xmlContent, setXmlContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const surveyQuestArray = [];

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      type inputObj = {
        [key: string]: string;
        surveyQuestArray: any[];
      };

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const content = e.target?.result as string;

        const inputObj: inputObj = {};

        // Parse the XML content
        const parser = new XMLParser();
        const xmlDoc = parser.parseFromString(content, "text/xml");
        const xmlObjectArray = xmlDoc.getElementsByTagName("item");
        console.log(JSON.stringify(xmlObjectArray));

        // const inputObj = {};
        xmlObjectArray.forEach((item, index) => {
          // standard items
          if (xmlObjectArray[index].attributes.id === "textAlign") {
            // appState.triggerIncompatibleFileModal = true;
            return;
          }
          let key = xmlObjectArray[index].attributes.id;
          let value = xmlObjectArray[index].value;
          inputObj[key] = value;

          if (xmlObjectArray[index].attributes.id === "survey") {
            let inputObj = xmlObjectArray[index].children;
            let questObj = {};
            let questType = inputObj[0].attributes?.type;
            questObj.type = questType;
            questObj.required = inputObj[0].attributes?.required;
            if (questType !== "information") {
              questObj.label = inputObj[1]?.value;
            }
            if (questType === "information") {
              questObj.note = inputObj[1]?.value;
              questObj.bg = inputObj[1]?.attributes?.bg;
            }
            if (questType === "text") {
              questObj.limited = inputObj[0].attributes?.limited;
              let inputLenVal = inputObj[0].attributes?.maxlength;
              if (
                inputLenVal === null ||
                inputLenVal === undefined ||
                isNaN(inputLenVal)
              ) {
                questObj.maxlength = inputObj[0].attributes?.limitLength;
              } else {
                questObj.maxlength = inputObj[0].attributes?.maxlength;
              }
              questObj.restricted = inputObj[0].attributes?.restricted;
              questObj.note = inputObj[2]?.value;
              questObj.placeholder = inputObj[3]?.value;
            }
            if (questType === "textarea") {
              questObj.note = inputObj[2]?.value;
              questObj.placeholder = inputObj[3]?.value;
            }
            if (questType === "radio") {
              questObj[inputObj[2].name] = inputObj[2]?.value;
              questObj.options = inputObj[0]?.value;
            }
            if (questType === "likert") {
              questObj.required = inputObj[0].attributes?.required;
              questObj.scale = inputObj[0].attributes?.scale;
              questObj.label = inputObj[1]?.value;
            }
            if (
              questType === "select" ||
              questType === "checkbox" ||
              questType === "rating2" ||
              questType === "rating5" ||
              questType === "rating10"
            ) {
              questObj.options = inputObj[0]?.value;
              questObj.note = inputObj[2]?.value;
            }
            if (
              questType === "rating2" ||
              questType === "rating5" ||
              questType === "rating10"
            ) {
              questObj.scale = inputObj[0].attributes?.scale;
            }
            surveyQuestArray.push(questObj);
          }
        });

        inputObj.surveyQuestArray = surveyQuestArray;

        console.log("inputObj", JSON.stringify(inputObj, null, 2));

        // Check for parsing errors
        const parseError = xmlDoc.getElementsByTagName("parsererror");
        if (parseError.length > 0) {
          setError("Invalid XML file. Please upload a valid XML file.");
          setXmlContent(null);
        } else {
          setXmlContent(new XMLSerializer().serializeToString(xmlDoc));
          setError(null);
        }
      };

      reader.onerror = () => {
        setError("Failed to read the file. Please try again.");
        setXmlContent(null);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload and Read XML</h2>
      <input
        type="file"
        accept=".xml"
        onChange={handleFileUpload}
        style={{ marginBottom: "10px" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {xmlContent && (
        <div>
          <h3>XML Content:</h3>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {/* {xmlContent} */}
          </pre>
        </div>
      )}
    </div>
  );
};

export default UploadAndReadXML;

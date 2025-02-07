import React, { useState } from "react";
import XMLParser from "react-xml-parser";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";

interface QuestObjType {
  surveyQuestionType?: string;
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

const UploadAndReadXMLStatements: React.FC = () => {
  const { t } = useTranslation();

  const [xmlContent, setXmlContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [surveyQuestArray, setSurveyQuestArray] = useState<QuestObjType[]>([]);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = e.target?.result as string;
        const parser = new XMLParser();
        const xml = parser.parseFromString(data, "text/xml");
        const xmlObjectArray = xml.getElementsByTagName("item");

        xmlObjectArray.forEach((item, index) => {
          if (item?.attributes?.id === "studyTitle") {
            setStudyTitle(item?.value);
          }

          if (xmlObjectArray[index].attributes.id === "survey") {
            let inputObj = xmlObjectArray[index].children;
            let questObj: QuestObjType = {};
            let questType = inputObj[0].attributes?.type;
            questObj.surveyQuestionType = questType;
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
            setSurveyQuestionsArray(surveyQuestArray);
          }
        });
        return;
      };

      reader.onerror = () => {
        console.error("Error reading file");
        setError("Error reading file");
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <label
        className="cursor-pointer bg-orange-300 hover:opacity-50 border-2 border-gray-600 rounded-md p-2"
        htmlFor="uploadXml"
      >
        {t("uploadXmlConfigFile")}
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

export { UploadAndReadXMLStatements };

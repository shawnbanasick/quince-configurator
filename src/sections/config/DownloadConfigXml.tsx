import React, { useState } from "react";
// import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { generateConfigXml } from "./generateConfigXml";

const DownloadConfigXml: React.FC = () => {
  const { t } = useTranslation();

  //   const [xmlContent, setXmlContent] = useState<string | null>(null);
  //   const [error, setError] = useState<string | null>(null);
  //   const [surveyQuestArray, setSurveyQuestArray] = useState<QuestObjType[]>([]);

  const handleFileDownload = () => {
    const xmlContent = generateConfigXml();
    const blob = new Blob([xmlContent], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "config.xml";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <button
        className="cursor-pointer bg-orange-300 hover:opacity-50 border-2 border-gray-600 rounded-md p-2"
        id="downloadXml"
        onClick={handleFileDownload}
      >
        {t("downloadXmlConfigFile")}
      </button>
    </div>
  );
};

export { DownloadConfigXml };

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
    <div className="flex items-center justify-center mt-2">
      <button
        className="flex flex-row gap-3 min-w-[500px] items-center justify-center cursor-pointer bg-orange-300 hover:opacity-50 border border-gray-600 rounded-md p-2"
        id="downloadXml"
        onClick={handleFileDownload}
      >
        <svg className="max-w-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        {t("downloadXmlConfigFile")}
      </button>
    </div>
  );
};

export { DownloadConfigXml };

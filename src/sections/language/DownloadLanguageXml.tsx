import React from "react";
import { useTranslation } from "react-i18next";
import { generateLanguageXml } from "./generateLanguageXml.js";

const DownloadLanguageXml: React.FC = () => {
  const { t } = useTranslation();

  const handleFileDownload = () => {
    const xmlContent = generateLanguageXml();
    const blob = new Blob([xmlContent], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "language.xml";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="cursor-pointer font-semibold bg-orange-300 hover:bg-orange-500 border-2 border-gray-600 rounded-md p-2"
        id="downloadXml"
        onClick={handleFileDownload}
      >
        {t("downloadXmlLanguageFile")}
      </button>
    </div>
  );
};

export { DownloadLanguageXml };

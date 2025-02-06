import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import UploadAndReadXML from "./UploadAndReadXml.js";
import { ConfigSections } from "./ConfigSections.js";
import { DownloadConfigXml } from "./DownloadConfigXml.js";

const getDisplayMode = (state) => state.displayMode;

const Config: React.FC = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center">Config.xml</h1>
      <div className="flex flex-row w-2/3 justify-between  gap-[] mt-4 mb-6">
        <UploadAndReadXML />
        <DownloadConfigXml />
      </div>
      {display && (
        <div className="flex flex-col gap-6 w-2/3 justify-center pl-10 pr-10 pt-2 pb-8">
          <div>{t("configPara1")}</div>
          <div>{t("configPara2")}</div>
          <div>{t("configPara3")}</div>
        </div>
      )}
      <ConfigSections />
    </div>
  );
};

export { Config };

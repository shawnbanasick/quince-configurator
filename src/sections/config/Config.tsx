import Image from "../../assets/images/qq-brand-image.png";
// @ts-ignore
import Button from "../utils/Button.jsx";
// @ts-ignore
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import UploadAndReadXML from "./UploadAndReadXml.js";

const getDisplayMode = (state) => state.displayMode;

const Config = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  // const handleClick = () => {
  //   console.log("uploadXmlConfigButton clicked");
  //   const input = document.createElement("input");
  //   input.type = "file";
  //   input.accept = ".json";
  //   input.onchange = (e) => {
  //     const file = e.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const result = e.target.result;
  //       console.log(result);
  //       const json = JSON.parse(result);
  //       console.log(json);
  //       alert("config.json file data imported successfully");
  //     };
  //     reader.readAsText(file);
  //   };
  // };

  return (
    <>
      <h1 className="text-center">Config.xml</h1>

      <div className="mt-4 w-9/12 justify-self-center text-base">
        Quincey-Q Configurator simplifies the set-up and testing of an{" "}
        <a
          className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/eq-web-sort"
        >
          Quincey-Q
        </a>{" "}
        project for online Q sorting. It provides guided editing of the Q sort
        configuration files and offers increased control over the design of the
        Q sort. To test your setup before hosting it on the web, use the Ken-Q
        Tools Mini-Server available here.
      </div>

      <UploadAndReadXML />

      <h1 className="justify-self-center mt-4 mb-6">config.json</h1>
      {display && (
        <div className="flex, flex-col, justify-center pl-20 pr-20 pt-2 pb-8">
          <div className="justify-self-center">
            {t("configPara1")}
            <br />
            <br />
            {t("configPara2")}
            <br />
            <br />
            {t("configPara3")}
          </div>
        </div>
      )}
      <div id="uploadButtonContainer" className="justify-self-center">
        <div id="uploadXmlConfigButton" className="justify-self-center">
          <Button
            id="uploadXmlConfigButton"
            styleClass={`bg-orange-700  hover:bg-blue-700`}
            label={"import config.json file data"}
            onClick={() => {
              handleClick();
            }}
          >
            {t("uploadXmlConfigButton")}
          </Button>
        </div>
      </div>
    </>
  );
};

export { Config };

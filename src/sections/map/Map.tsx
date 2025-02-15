// @ts-ignore
import Image from "../../assets/images/qq-brand-image.png";
// import Button from "../utils/Button.jsx";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { Radio } from "../utils/RadioButtons";
import { MapInputElement } from "./MapInputElement";
import { setTint6Colors } from "./setTint6Colors.js";
import { setTint5Colors } from "./setTint5Colors.js";
import { setTint4Colors } from "./setTint4Colors.js";
import { setStep6Colors } from "./setStep6Colors.js";
import { setStep5Colors } from "./setStep5Colors.js";
import { setStep4Colors } from "./setStep4Colors.js";
import { setClearAllColors } from "./setClearAllColors.js";
import { UploadAndReadXmlMap } from "./UploadAndReadXmlMap.js";
import { generateMapXml } from "./generateMapXml.js";

const getDisplayMode = (state) => state.displayMode;
const getNumStatements = (state) => state.numStatements;
const getMapColorPalette = (state) => state.mapColorPalette;
const getSetMapColorPalette = (state) => state.setMapColorPalette;
const getMapColColorsStyle = (state) => state.mapColColorsStyle;
const getSetMapColColorsStyle = (state) => state.setMapColColorsStyle;

const Map = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  // const numStatements = useStore(getNumStatements);
  const mapColorPalette = useStore(getMapColorPalette);
  const setMapColorPalette = useStore(getSetMapColorPalette);
  const mapColColorsStyle = useStore(getMapColColorsStyle);
  const setMapColColorsStyle = useStore(getSetMapColColorsStyle);
  const numStatements = useStore(getNumStatements);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  const handleClick = () => {
    console.log("Map button clicked");
    const data = generateMapXml();
    console.log("data", data);
    // exportToXml("map.xml", data, "xml");
  };

  const handleMapColorPaletteChange = (value) => {
    console.log("Map color palette changed to: ", value);
    setMapColorPalette(value);
    if (value === "steps4") {
      setStep4Colors();
    }
    if (value === "steps5") {
      setStep5Colors();
    }
    if (value === "steps6") {
      setStep6Colors();
    }
    if (value === "tints4") {
      setTint4Colors();
    }
    if (value === "tints5") {
      setTint5Colors();
    }
    if (value === "tints6") {
      setTint6Colors();
    }
    if (value === "clear") {
      setClearAllColors();
    }
    return;
  };

  const handleMapColColorsChange = (value) => {
    console.log("Map column colors changed to: ", value);
    setMapColColorsStyle(value);
  };

  return (
    <div className="flex flex-col items-center justify-center pb-[100px]">
      <h1 className="text-center">Map.xml</h1>
      <h2>Q Sort Grid Settings</h2>
      <div className="flex flex-row w-10/12 justify-between gap-[] mt-4 mb-6">
        {/* <DownloadMapButton onClick={() => handleClick()}> */}
        <UploadAndReadXmlMap />
        <button
          className="bg-[orange] text-[black] w-[350px] p-[10px] rounded-[5px] mt-[20px]"
          onClick={() => handleClick()}
        >
          Click here to save file to <b>SETTINGS</b> folder and replace the
          "map.xml" file
        </button>
      </div>
      {displayMode && (
        // <DisplayModeText>
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">
          If you have a "map.xml" from a previous Quincey-Q project, you can
          click on the orange "Load 'map.xml' File Data" button to upload the
          file.
          <br />
          <br />
          Enter the number of cards in each column of the Q-sort grid. The
          background color of the "Q Sort Pattern" text will change to green
          when all of your statements have been allocated.
          <br />
          <br />
          When you have finished setting up the columns, click the orange button
          at the bottom of the page and save your information as 'map.xml' in
          the settings folder (replace the default file).
        </div>
      )}
      {/* <UploadButtonContainer> */}
      <div>{/* <UploadMapXmlButton /> */}</div>
      {/* ** DEBUG ONLY = REMOVE LATER */}
      {/* <MapInputElement numStatements={numStatements} /> */}
      <MapInputElement numStatements={33} />
      <div className="flex flex-row h-[50px] content-center gap-5 mt-1 mb-[20px]">
        <span className="content-center">{`1. ${t("mapColorPalette")}:`}</span>
        <Radio
          name="option1"
          value="steps4"
          label={t("steps4")}
          align="left"
          isChecked={mapColorPalette === "steps4"}
          handleChange={handleMapColorPaletteChange}
        />
        <Radio
          name="option1"
          value="steps5"
          label={t("steps5")}
          align="left"
          isChecked={mapColorPalette === "steps5"}
          handleChange={handleMapColorPaletteChange}
        />
        <Radio
          name="option1"
          value="steps6"
          label={t("steps6")}
          align="left"
          isChecked={mapColorPalette === "steps6"}
          handleChange={handleMapColorPaletteChange}
        />
        <Radio
          name="option1"
          value="tints4"
          label={t("tints4")}
          isChecked={mapColorPalette === "tints4"}
          handleChange={handleMapColorPaletteChange}
        />
        <Radio
          name="option1"
          value="tints5"
          label={t("tints5")}
          isChecked={mapColorPalette === "tints5"}
          handleChange={handleMapColorPaletteChange}
        />
        <Radio
          name="option1"
          value="tints6"
          label={t("tints6")}
          isChecked={mapColorPalette === "tints6"}
          handleChange={handleMapColorPaletteChange}
        />
        <Radio
          name="option1"
          value="custom"
          label={t("custom")}
          isChecked={mapColorPalette === "custom"}
          handleChange={handleMapColorPaletteChange}
        />
        <Radio
          name="option1"
          value="clear"
          label={t("clearAll")}
          isChecked={mapColorPalette === "clear"}
          handleChange={handleMapColorPaletteChange}
        />
      </div>
      <div className="flex flex-row h-[50px] content-center gap-5 mt-1">
        <span className="content-center">{`2. ${t("mapColColors")}:`}</span>
        <Radio
          name="option2"
          value="headers"
          label={t("headers")}
          align="left"
          isChecked={mapColColorsStyle === "headers"}
          handleChange={handleMapColColorsChange}
        />
        <Radio
          name="option2"
          value="headersAndColumns"
          label={t("headersAndColumns")}
          isChecked={mapColColorsStyle === "headersAndColumns"}
          handleChange={handleMapColColorsChange}
        />
        <Radio
          name="option2"
          value="noColoring"
          label={t("noColoring")}
          isChecked={mapColColorsStyle === "noColoring"}
          handleChange={handleMapColColorsChange}
        />
      </div>
    </div>
  );
};

export { Map };

// @ts-ignore
import Image from "../../assets/images/qq-brand-image.png";
// import Button from "../utils/Button.jsx";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { Radio } from "../utils/RadioButtons";
import { MapInputElement } from "./MapInputElement";

const getDisplayMode = (state) => state.displayMode;
const getNumStatements = (state) => state.numStatements;
const getMapColorPalette = (state) => state.mapColorPalette;
const getSetMapColorPalette = (state) => state.setMapColorPalette;
const getMapColColors = (state) => state.mapColColors;
const getSetMapColColors = (state) => state.setMapColColors;

const Map = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  // const numStatements = useStore(getNumStatements);
  const mapColorPalette = useStore(getMapColorPalette);
  const setMapColorPalette = useStore(getSetMapColorPalette);
  const mapColColors = useStore(getMapColColors);
  const setMapColColors = useStore(getSetMapColColors);
  const numStatements = useStore(getNumStatements);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  const handleClick = () => {
    console.log("Map button clicked");
    // const data = generateMapXml();
    // exportToXml("map.xml", data, "xml");
  };

  const handleMapColorPaletteChange = (event) => {
    setMapColorPalette(event.target.value);
  };
  const handleMapColColorsChange = (event) => {
    setMapColColors(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center">Map.xml</h1>
      <h2>Q Sort Grid Settings</h2>
      {displayMode && (
        // <DisplayModeText>
        <div className=" ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">
          If you have a "map.xml" from a previous EQ Web Sort project, you can
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

      <MapInputElement numStatements={numStatements} />

      <div className="flex flex-row h-[70px] content-center gap-5 mt-1">
        <span className="content-center">{`1. ${t("mapColorPalette")}:`}</span>
        <Radio
          name="option1"
          value="steps"
          label={t("steps")}
          align="left"
          isChecked={mapColorPalette === "steps"}
          handleChange={handleMapColorPaletteChange}
        />
        <Radio
          name="option1"
          value="tints"
          label={t("tints")}
          isChecked={mapColorPalette === "tints"}
          handleChange={handleMapColorPaletteChange}
        />
        <Radio
          name="option1"
          value="custom"
          label={t("custom")}
          isChecked={mapColorPalette === "custom"}
          handleChange={handleMapColorPaletteChange}
        />
      </div>

      <div className="flex flex-row h-[70px] content-center gap-5 mt-1">
        <span className="content-center">{`2. ${t("mapColColors")}:`}</span>
        <Radio
          name="option2"
          value="headers"
          label={t("headers")}
          align="left"
          isChecked={mapColColors === "headers"}
          handleChange={handleMapColColorsChange}
        />
        <Radio
          name="option2"
          value="headersAndColumns"
          label={t("headers and columns")}
          isChecked={mapColColors === "Headers and columns"}
          handleChange={handleMapColColorsChange}
        />
        <Radio
          name="option2"
          value="custom"
          label={t("custom")}
          isChecked={mapColColors === "custom"}
          handleChange={handleMapColColorsChange}
        />
      </div>

      {/* <DownloadMapButton onClick={() => handleClick()}> */}
      <button onClick={() => handleClick()}>
        Click here to save file to <b>SETTINGS</b> folder and replace the
        "map.xml" file
      </button>
    </div>
  );
};

export { Map };

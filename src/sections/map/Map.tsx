// @ts-ignore
import { useRef } from "react";
// import Image from "../../assets/images/qq-brand-image.png";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { Radio } from "../utils/RadioButtons";
import { MapInputElement } from "./MapInputElement";
import { setTint6Colors } from "./setTint6Colors.js";
import { setTint5Colors } from "./setTint5Colors.js";
import { setTint4Colors } from "./setTint4Colors.js";
import { setTint3Colors } from "./setTint3Colors.js";
import { setTint2Colors } from "./setTint2Colors.js";
import { setStep6Colors } from "./setStep6Colors.js";
import { setStep5Colors } from "./setStep5Colors.js";
import { setStep4Colors } from "./setStep4Colors.js";
import { setStep3Colors } from "./setStep3Colors.js";
import { setStep2Colors } from "./setStep2Colors.js";
import { setClearAllColors } from "./setClearAllColors.js";
import { UploadAndReadXmlMap } from "./UploadAndReadXmlMap.js";
import { generateMapXml } from "./generateMapXml.js";
import { UserTextAreaInput } from "../utils/UserTextAreaInput.js";

const getDisplayMode = (state) => state.displayMode;
const getMapColorPalette = (state) => state.mapColorPalette;
const getSetMapColorPalette = (state) => state.setMapColorPalette;
const getMapColColorsStyle = (state) => state.mapColColorsStyle;
const getSetMapColColorsStyle = (state) => state.setMapColColorsStyle;
const getMobileHeadersText = (state) => state.mobileHeadersText;
const getSetMobileHeadersText = (state) => state.setMobileHeadersText;
const getNumMapTotalColumns = (state) => state.numMapTotalColumns;
const getMobileHeadersDefaultLabels = (state) => state.mobileHeadersDefaultLabels;
const getSetMobileHeadersDefaultLabels = (state) => state.setMobileHeadersDefaultLabels;
const getMobileHeadersDefault5 = (state) => state.mobileHeadersDefault5;
const getMobileHeadersDefault7 = (state) => state.mobileHeadersDefault7;
const getMobileHeadersDefault9 = (state) => state.mobileHeadersDefault9;
const getMobileHeadersDefault11 = (state) => state.mobileHeadersDefault11;
const getNumStatements = (state) => state.numStatements;
const getAllStatementsAllocated = (state) => state.allStatementsAllocated;

const Map = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  const mapColorPalette = useStore(getMapColorPalette);
  const setMapColorPalette = useStore(getSetMapColorPalette);
  const mapColColorsStyle = useStore(getMapColColorsStyle);
  const setMapColColorsStyle = useStore(getSetMapColColorsStyle);
  const mobileHeadersText = useStore(getMobileHeadersText);
  const setMobileHeadersText = useStore(getSetMobileHeadersText);
  const numMapTotalColumns = useStore(getNumMapTotalColumns);
  const mobileHeadersDefaultLabels = useStore(getMobileHeadersDefaultLabels);
  const setMobileHeadersDefaultLabels = useStore(getSetMobileHeadersDefaultLabels);
  const mobileHeadersDefault5 = useStore(getMobileHeadersDefault5);
  const mobileHeadersDefault7 = useStore(getMobileHeadersDefault7);
  const mobileHeadersDefault9 = useStore(getMobileHeadersDefault9);
  const mobileHeadersDefault11 = useStore(getMobileHeadersDefault11);
  const numStatements = useStore(getNumStatements);
  const allStatementsAllocated = useStore(getAllStatementsAllocated);

  // let display;
  // if (displayMode === "beginner") {
  //   display = true;
  // } else {
  //   display = false;
  // }

  const handleMapColorPaletteChange = (value) => {
    setMapColorPalette(value);
    if (value === "steps2") {
      setStep2Colors();
    }
    if (value === "steps3") {
      setStep3Colors();
    }
    if (value === "steps4") {
      setStep4Colors();
    }
    if (value === "steps5") {
      setStep5Colors();
    }
    if (value === "steps6") {
      setStep6Colors();
    }
    if (value === "tints2") {
      setTint2Colors();
    }
    if (value === "tints3") {
      setTint3Colors();
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

  const handleMobileLabelsChange = (value) => {
    setMobileHeadersDefaultLabels(value);
    if (value === "labels5") {
      setMobileHeadersText(mobileHeadersDefault5);
    }
    if (value === "labels7") {
      setMobileHeadersText(mobileHeadersDefault7);
    }
    if (value === "labels9") {
      setMobileHeadersText(mobileHeadersDefault9);
    }
    if (value === "labels11") {
      setMobileHeadersText(mobileHeadersDefault11);
    }
  };

  const handleMapColColorsChange = (value) => {
    setMapColColorsStyle(value);
  };

  // count the number of mobile headers text label items
  const countMobileHeaders = (mobileHeadersText) => {
    if (!mobileHeadersText) return 0;
    const items = mobileHeadersText
      .split(",")
      .map((item) => (item.trim() !== "" ? item.trim() : null))
      .filter(Boolean);
    return items.length;
  };
  const numHeaderLabels = countMobileHeaders(mobileHeadersText);
  const numMissingHeaders = numMapTotalColumns - numHeaderLabels;

  const handleClick = () => {
    // check if mobile column labels match the number of columns
    if (numStatements === 0) {
      alert(t("loadStatementsError"));
      return;
    }

    if (!allStatementsAllocated) {
      alert(t("allStatementsAssignedError"));
    }

    if (numMissingHeaders !== 0) {
      alert(t("missingMobileColumnLabels"));
      return;
    }

    const data = generateMapXml();
    const blob = new Blob([data], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "map.xml";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center justify-center pb-[100px]">
      <h1 className="text-center">Map.xml</h1>
      <h2>{t("qSortGridSettings")}</h2>
      <div className="flex flex-row w-10/12 justify-between gap-[] mt-4 mb-6">
        <UploadAndReadXmlMap />
        <button
          className="w-80 px-6 p-2 bg-orange-300 text-black font-semibold rounded-md hover:opacity-50 focus:outline-none focus:ring-2 border-2 border-gray-600 focus:ring-orange-400 focus:ring-opacity-75 text-center min-h-[70px] select-none"
          onClick={() => handleClick()}
        >
          {t("saveMap")}
        </button>
      </div>
      {displayMode && (
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">
          {t("mapIntroText1")}
          <br />
          <br />
          {t("mapIntroText2")}
          <br />
          <br />
          {t("mapIntroText3")}
          <br />
          <br />
          {t("mapIntroText4")}
          <br />
          <br />
          {t("mapIntroText5")}
        </div>
      )}
      <MapInputElement numStatements={numStatements} />
      <div className="bg-gray-200 p-6  rounded-md items-left justify-center w-[86vw]">
        <span className="content-center">{`1. ${t("mapColorPalette")}:`}</span>
        <div className="flex flex-col content-center ">
          <div className="flex flex-row h-[50px] content-center gap-5 mt-3 mb-2 pl-6">
            <Radio
              name="option1"
              value="steps2"
              label={t("steps2")}
              align="left"
              isChecked={mapColorPalette === "steps2"}
              handleChange={handleMapColorPaletteChange}
            />
            <Radio
              name="option1"
              value="steps3"
              label={t("steps3")}
              align="left"
              isChecked={mapColorPalette === "steps3"}
              handleChange={handleMapColorPaletteChange}
            />
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
          </div>
          <div className="flex flex-row h-[50px] content-center gap-5 mb-2 pl-6">
            <Radio
              name="option1"
              value="tints2"
              label={t("tints2")}
              isChecked={mapColorPalette === "tints2"}
              handleChange={handleMapColorPaletteChange}
            />
            <Radio
              name="option1"
              value="tints3"
              label={t("tints3")}
              isChecked={mapColorPalette === "tints3"}
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
          </div>
          <div className="flex flex-row h-[50px] content-center gap-5 mb-6 pl-6">
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
        </div>
        <span className="content-center">{`2. ${t("mapColColors")}:`}</span>
        <div className="flex flex-row h-[50px] content-center gap-5 mt-1 pl-6">
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
        <div className="flex flex-col mt-6 mb-2">
          <div className="flex flex-row items-center gap-2 mb-2">
            <span>3. {t("mobileHeadersText")}:</span>
            <div className="flex flex-row w-[200px]">
              {numStatements > 0 &&
                (numMissingHeaders > 0 ? (
                  <div className="text-red-700  font-semibold">
                    {`${t("missingLabels")}: ${numMissingHeaders}`}
                  </div>
                ) : numMissingHeaders === 0 ? (
                  <div className="text-green-700  font-semibold">{`${t("labelsMatch")}`}</div>
                ) : (
                  <div className="text-red-700  font-semibold">
                    {`${t("excessLabels")}: ${numMissingHeaders}`}
                  </div>
                ))}
            </div>
            <span className="ml-20">{`${t("defaultOptions")}`}:</span>
            <Radio
              name="option"
              value="labels5"
              label={t("steps3MobileHeaders")}
              align="left"
              isChecked={mobileHeadersDefaultLabels === "labels5"}
              handleChange={handleMobileLabelsChange}
            />
            <Radio
              name="option"
              value="labels7"
              label={t("steps4MobileHeaders")}
              align="left"
              isChecked={mobileHeadersDefaultLabels === "labels7"}
              handleChange={handleMobileLabelsChange}
            />
            <Radio
              name="option3"
              value="labels9"
              label={t("steps5MobileHeaders")}
              align="left"
              isChecked={mobileHeadersDefaultLabels === "labels9"}
              handleChange={handleMobileLabelsChange}
            />
            <Radio
              name="option3"
              value="labels11"
              label={t("steps6MobileHeaders")}
              align="left"
              isChecked={mobileHeadersDefaultLabels === "labels11"}
              handleChange={handleMobileLabelsChange}
            />
          </div>
          <UserTextAreaInput
            classNameText="flex-1 mt-0 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
            classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
            label={""}
            name="mobileHeadersText"
            height={150}
            value={mobileHeadersText}
            highlight={false}
            placeholder="Separate with commas. For example: 'Very Important, Important, Neutral', 'Less Important', 'Not Important'"
            disabled={false}
            tabIndex="0"
          />
        </div>
      </div>
    </div>
  );
};

export { Map };

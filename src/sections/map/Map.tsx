import React, { useState } from "react";
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
import { EmojiN5 } from "./emoji/EmojiN5.js";
import { EmojiN4 } from "./emoji/EmojiN4.js";
import { EmojiN3 } from "./emoji/EmojiN3.js";
import { EmojiN2 } from "./emoji/EmojiN2.js";
import { EmojiN1 } from "./emoji/EmojiN1.js";
import { Emoji0 } from "./emoji/Emoji0";
import { Emoji1 } from "./emoji/Emoji1";
import { Emoji2 } from "./emoji/Emoji2";
import { Emoji3 } from "./emoji/Emoji3";
import { Emoji4 } from "./emoji/Emoji4";
import { Emoji5 } from "./emoji/Emoji5";
import { ToggleSwitch } from "./ToggleSwitch";
import ReactHTMLParser from "html-react-parser";
import { v4 as uuid } from "uuid";

// Type definitions
interface State {
  displayMode: string;
  mapColorPalette: string;
  setMapColorPalette: (value: string) => void;
  mapColColorsStyle: string;
  setMapColColorsStyle: (value: string) => void;
  colTextLabelsArray: string;
  setcolTextLabelsArray: (value: string) => void;
  numMapTotalColumns: number;
  mobileHeadersDefaultLabels: string;
  setMobileHeadersDefaultLabels: (value: string) => void;
  mobileHeadersDefault5: string;
  mobileHeadersDefault7: string;
  mobileHeadersDefault9: string;
  mobileHeadersDefault11: string;
  mobileHeadersDefault13: string;
  numStatements: number;
  allStatementsAllocated: boolean;
  useColLabelNumsDesktop: boolean;
  useColLabelNumsMobile: boolean;
  useColLabelTextDesktop: boolean;
  useColLabelTextMobile: boolean;
  useColLabelEmojiDesktop: boolean;
  useColLabelEmojiMobile: boolean;
  setUseColLabelNumsDesktop: (value: boolean) => void;
  setUseColLabelNumsMobile: (value: boolean) => void;
  setUseColLabelTextDesktop: (value: boolean) => void;
  setUseColLabelTextMobile: (value: boolean) => void;
  setUseColLabelEmojiDesktop: (value: boolean) => void;
  setUseColLabelEmojiMobile: (value: boolean) => void;
  setUseColLabelEmojiPresort: (value: boolean) => void;
  useColLabelEmojiPresort: boolean;
  useColLabelNums: boolean;
  useColLabelText: boolean;
  useColLabelEmoji: boolean;
  useColLabelNumsPostsort: boolean;
  useColLabelTextPostsort: boolean;
  useColLabelEmojiPostsort: boolean;
  setUseColLabelNums: (value: boolean) => void;
  setUseColLabelText: (value: boolean) => void;
  setUseColLabelEmoji: (value: boolean) => void;
  setUseColLabelNumsPostsort: (value: boolean) => void;
  setUseColLabelTextPostsort: (value: boolean) => void;
  setUseColLabelEmojiPostsort: (value: boolean) => void;
  emojiArray: any[];
  setEmojiArray: (value: any[]) => void;
  setEmojiArrayType: (value: string) => void;
}

interface EmojiProps {
  size: number;
}

const getDisplayMode = (state: State) => state.displayMode;
const getMapColorPalette = (state: State) => state.mapColorPalette;
const getSetMapColorPalette = (state: State) => state.setMapColorPalette;
const getMapColColorsStyle = (state: State) => state.mapColColorsStyle;
const getSetMapColColorsStyle = (state: State) => state.setMapColColorsStyle;
const getcolTextLabelsArray = (state: State) => state.colTextLabelsArray;
const getSetcolTextLabelsArray = (state: State) => state.setcolTextLabelsArray;
const getNumMapTotalColumns = (state: State) => state.numMapTotalColumns;
const getMobileHeadersDefaultLabels = (state: State) => state.mobileHeadersDefaultLabels;
const getSetMobileHeadersDefaultLabels = (state: State) => state.setMobileHeadersDefaultLabels;
const getMobileHeadersDefault5 = (state: State) => state.mobileHeadersDefault5;
const getMobileHeadersDefault7 = (state: State) => state.mobileHeadersDefault7;
const getMobileHeadersDefault9 = (state: State) => state.mobileHeadersDefault9;
const getMobileHeadersDefault11 = (state: State) => state.mobileHeadersDefault11;
const getMobileHeadersDefault13 = (state: State) => state.mobileHeadersDefault13;
const getNumStatements = (state: State) => state.numStatements;
const getAllStatementsAllocated = (state: State) => state.allStatementsAllocated;
const getSetEmojiArray = (state: State) => state.setEmojiArray;
const getEmojiArray = (state: State) => state.emojiArray;
const getSetEmojiArrayType = (state: State) => state.setEmojiArrayType;

const getUseColLabelEmojiPresort = (state: State) => state.useColLabelEmojiPresort;
const getSetUseColLabelEmojiPresort = (state: State) => state.setUseColLabelEmojiPresort;
const getUseColLabelNums = (state: State) => state.useColLabelNums;
const getSetUseColLabelNums = (state: State) => state.setUseColLabelNums;
const getUseColLabelText = (state: State) => state.useColLabelText;
const getSetUseColLabelText = (state: State) => state.setUseColLabelText;
const getUseColLabelEmoji = (state: State) => state.useColLabelEmoji;
const getSetUseColLabelEmoji = (state: State) => state.setUseColLabelEmoji;
const getUseColLabelNumsPostsort = (state: State) => state.useColLabelNumsPostsort;
const getSetUseColLabelNumsPostsort = (state: State) => state.setUseColLabelNumsPostsort;
const getUseColLabelTextPostsort = (state: State) => state.useColLabelTextPostsort;
const getSetUseColLabelTextPostsort = (state: State) => state.setUseColLabelTextPostsort;
const getUseColLabelEmojiPostsort = (state: State) => state.useColLabelEmojiPostsort;
const getSetUseColLabelEmojiPostsort = (state: State) => state.setUseColLabelEmojiPostsort;

const Map: React.FC = () => {
  const { t } = useTranslation();
  const useColLabelEmojiPresort = useStore(getUseColLabelEmojiPresort);
  const setUseColLabelEmojiPresort = useStore(getSetUseColLabelEmojiPresort);
  const useColLabelNums = useStore(getUseColLabelNums);
  const setUseColLabelNums = useStore(getSetUseColLabelNums);
  const useColLabelText = useStore(getUseColLabelText);
  const setUseColLabelText = useStore(getSetUseColLabelText);
  const useColLabelEmoji = useStore(getUseColLabelEmoji);
  const setUseColLabelEmoji = useStore(getSetUseColLabelEmoji);
  const useColLabelNumsPostsort = useStore(getUseColLabelNumsPostsort);
  const setUseColLabelNumsPostsort = useStore(getSetUseColLabelNumsPostsort);
  const useColLabelTextPostsort = useStore(getUseColLabelTextPostsort);
  const setUseColLabelTextPostsort = useStore(getSetUseColLabelTextPostsort);
  const useColLabelEmojiPostsort = useStore(getUseColLabelEmojiPostsort);
  const setUseColLabelEmojiPostsort = useStore(getSetUseColLabelEmojiPostsort);

  const displayMode = useStore(getDisplayMode);
  const mapColorPalette = useStore(getMapColorPalette);
  const setMapColorPalette = useStore(getSetMapColorPalette);
  const mapColColorsStyle = useStore(getMapColColorsStyle);
  const setMapColColorsStyle = useStore(getSetMapColColorsStyle);
  const colTextLabelsArray = useStore(getcolTextLabelsArray);
  const setcolTextLabelsArray = useStore(getSetcolTextLabelsArray);
  const numMapTotalColumns = useStore(getNumMapTotalColumns);
  const mobileHeadersDefaultLabels = useStore(getMobileHeadersDefaultLabels);
  const setMobileHeadersDefaultLabels = useStore(getSetMobileHeadersDefaultLabels);
  const mobileHeadersDefault5 = useStore(getMobileHeadersDefault5);
  const mobileHeadersDefault7 = useStore(getMobileHeadersDefault7);
  const mobileHeadersDefault9 = useStore(getMobileHeadersDefault9);
  const mobileHeadersDefault11 = useStore(getMobileHeadersDefault11);
  const mobileHeadersDefault13 = useStore(getMobileHeadersDefault13);
  const numStatements = useStore(getNumStatements);
  const allStatementsAllocated = useStore(getAllStatementsAllocated);
  const emojiArray = useStore(getEmojiArray);
  const setEmojiArray = useStore(getSetEmojiArray);
  const setEmojiArrayType = useStore(getSetEmojiArrayType);

  const isBeginnerMode = displayMode === "beginner";

  // mangage disable column label switches
  const [isSwitchDisabled, setIsSwitchDisabled] = useState(true);
  const [isSortEmojiSwitchDisabled, setIsSortEmojiSwitchDisabled] = useState(false);
  let sortEmojiSwitchDisabled = true;
  if (isSortEmojiSwitchDisabled === false && isSwitchDisabled === false) {
    sortEmojiSwitchDisabled = false;
  }

  // Color palette handlers
  const colorPaletteActions = {
    steps2: setStep2Colors,
    steps3: setStep3Colors,
    steps4: setStep4Colors,
    steps5: setStep5Colors,
    steps6: setStep6Colors,
    tints2: setTint2Colors,
    tints3: setTint3Colors,
    tints4: setTint4Colors,
    tints5: setTint5Colors,
    tints6: setTint6Colors,
    clear: setClearAllColors,
  };

  const handleMapColorPaletteChange = (value: string): void => {
    setMapColorPalette(value);
    const action = colorPaletteActions[value as keyof typeof colorPaletteActions];
    if (action) {
      action();
    }
  };

  const emoji5Array: any[] = [
    <EmojiN5 size={50} />,
    <EmojiN4 size={50} />,
    <EmojiN3 size={50} />,
    <EmojiN2 size={50} />,
    <EmojiN1 size={50} />,
    <Emoji0 size={50} />,
    <Emoji1 size={50} />,
    <Emoji2 size={50} />,
    <Emoji3 size={50} />,
    <Emoji4 size={50} />,
    <Emoji5 size={50} />,
  ];

  const emoji4Array: any[] = [
    <EmojiN5 size={50} />,
    <EmojiN3 size={50} />,
    <EmojiN2 size={50} />,
    <EmojiN1 size={50} />,
    <Emoji0 size={50} />,
    <Emoji1 size={50} />,
    <Emoji2 size={50} />,
    <Emoji3 size={50} />,
    <Emoji5 size={50} />,
  ];

  const emoji3Array: any[] = [
    <EmojiN3 size={50} />,
    <EmojiN2 size={50} />,
    <EmojiN1 size={50} />,
    <Emoji0 size={50} />,
    <Emoji1 size={50} />,
    <Emoji2 size={50} />,
    <Emoji3 size={50} />,
  ];

  const emoji2Array: any[] = [
    <EmojiN2 size={50} />,
    <EmojiN1 size={50} />,
    <Emoji0 size={50} />,
    <Emoji1 size={50} />,
    <Emoji2 size={50} />,
  ];

  const handleMobileLabelsChange = (value: string): void => {
    if (value === "labels5") {
      // setColNums("-2, -1, 0, +1, +2");
      setEmojiArray([...emoji2Array]);
      setIsSortEmojiSwitchDisabled(false);
      setEmojiArrayType("emoji2Array");
    }
    if (value === "labels7") {
      // setColNums("-3, -2, -1, 0, +1, +2, +3");
      setIsSortEmojiSwitchDisabled(false);
      setEmojiArray([...emoji3Array]);
      setEmojiArrayType("emoji3Array");
    }
    if (value === "labels9") {
      // setColNums("-4, -3, -2, -1, 0, +1, +2, +3, +4");
      setIsSortEmojiSwitchDisabled(false);
      setEmojiArray([...emoji4Array]);
      setEmojiArrayType("emoji4Array");
    }
    if (value === "labels11") {
      // setColNums("-5, -4, -3, -2, -1, 0, +1, +2, +3, +4, +5");
      setIsSortEmojiSwitchDisabled(false);
      setEmojiArray([...emoji5Array]);
      setEmojiArrayType("emoji5Array");
    }
    if (value === "labels13") {
      // setColNums("-6, -5, -4, -3, -2, -1, 0, +1, +2, +3, +4, +5, +6");
      setEmojiArray([]);
      setIsSortEmojiSwitchDisabled(true);
      setUseColLabelEmoji(false);
      setUseColLabelEmojiPresort(false);
      setUseColLabelEmojiPostsort(false);
      setEmojiArrayType("");
    }

    if (value === "otherDesigns") {
      setEmojiArray([]);
      setIsSortEmojiSwitchDisabled(true);
      setUseColLabelEmoji(false);
      setUseColLabelEmojiPresort(false);
      setUseColLabelEmojiPostsort(false);
      setEmojiArrayType("");
      setcolTextLabelsArray("");
    }

    setMobileHeadersDefaultLabels(value);

    const labelMappings = {
      labels5: mobileHeadersDefault5,
      labels7: mobileHeadersDefault7,
      labels9: mobileHeadersDefault9,
      labels11: mobileHeadersDefault11,
      labels13: mobileHeadersDefault13,
    };

    const labelText = labelMappings[value as keyof typeof labelMappings];
    if (labelText) {
      setcolTextLabelsArray(labelText);
    }

    setIsSwitchDisabled(false);
  };

  const handleMapColColorsChange = (value: string): void => {
    setMapColColorsStyle(value);
  };

  // Count mobile headers
  const countMobileHeaders = (text: string): number => {
    if (!text) return 0;
    const items = text
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    return items.length;
  };

  const numHeaderLabels = countMobileHeaders(colTextLabelsArray);
  const numMissingHeaders = numMapTotalColumns - numHeaderLabels;
  const handleDownloadMap = (): void => {
    try {
      // Validation checks
      if (numStatements === 0) {
        alert(t("loadStatementsError"));
        return;
      }

      if (!allStatementsAllocated) {
        alert(t("allStatementsAssignedError"));
        return;
      }

      // if (numMissingHeaders !== 0) {
      //   alert(t("missingMobileColumnLabels"));
      //   return;
      // }

      // Generate and download XML
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
    } catch (error) {
      console.error("Error downloading map:", error);
      alert("An error occurred while downloading the map file.");
    }
  };

  const ActionButton: React.FC<{
    children: React.ReactNode;
    description: React.ReactNode;
    onClick?: () => void;
    component?: React.ReactNode;
    variant?: "primary" | "secondary";
  }> = ({ children, description, onClick, component, variant = "primary" }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col justify-center items-center text-center space-y-4">
        <div>
          {/* <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3> */}
          <div className="text-sm text-gray-600 mb-4 min-h-[40px]">{description}</div>
        </div>
        <div className="flex justify-center items-center w-full ">
          {component || (
            <button
              onClick={onClick}
              className={`flex flex-row gap-3 min-w-[500px] items-center font-semibold justify-center cursor-pointer bg-orange-300 hover:opacity-50 border border-gray-600 rounded-md p-2`}
            >
              {children}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const RadioGroup: React.FC<{
    title: string;
    options: Array<{ value: string; label: string }>;
    selectedValue: string;
    onChange: (value: string) => void;
    name: string;
  }> = ({ title, options, selectedValue, onChange, name }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-row gap-3 flex-wrap">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <Radio
              name={name}
              value={option.value}
              label={option.label}
              align="left"
              isChecked={selectedValue === option.value}
              handleChange={onChange}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const StatusBadge: React.FC<{
    status: "success" | "warning" | "error";
    children: React.ReactNode;
  }> = ({ status, children }) => {
    const statusStyles = {
      success: "bg-green-100 text-green-800 border-green-200",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
      error: "bg-red-100 text-red-800 border-red-200",
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${statusStyles[status]}`}
      >
        {children}
      </span>
    );
  };

  const getHeaderStatus = (): { status: "success" | "warning" | "error"; message: string } => {
    if (numStatements === 0) {
      return { status: "warning", message: t("noStatementsLoaded") };
    }

    if (numMissingHeaders > 0)
      return { status: "error", message: `Missing ${numMissingHeaders} labels` };
    if (numMissingHeaders === 0) return { status: "success", message: "Labels match perfectly" };
    return { status: "error", message: `Excess labels: ${Math.abs(numMissingHeaders)}` };
  };

  const headerStatus = getHeaderStatus();

  const colorPaletteOptions = [
    { value: "steps2", label: t("steps2") },
    { value: "steps3", label: t("steps3") },
    { value: "steps4", label: t("steps4") },
    { value: "steps5", label: t("steps5") },
    { value: "steps6", label: t("steps6") },
    { value: "tints2", label: t("tints2") },
    { value: "tints3", label: t("tints3") },
    { value: "tints4", label: t("tints4") },
    { value: "tints5", label: t("tints5") },
    { value: "tints6", label: t("tints6") },
    { value: "custom", label: t("custom") },
    { value: "clear", label: t("clearAll") },
  ];

  const colorStyleOptions = [
    { value: "headers", label: t("headers") },
    { value: "headersAndColumns", label: t("headersAndColumns") },
    { value: "noColoring", label: t("noColoring") },
  ];

  const defaultLabelOptions = [
    { value: "labels5", label: t("steps3MobileHeaders") },
    { value: "labels7", label: t("steps4MobileHeaders") },
    { value: "labels9", label: t("steps5MobileHeaders") },
    { value: "labels11", label: t("steps6MobileHeaders") },
    { value: "labels13", label: t("steps7MobileHeaders") },
    { value: "otherDesigns", label: t("otherQsortDesigns") },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v8M8 4v12M12 4v16M16 4v12M20 4v8"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("mapPageTitle")}</h1>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("mapPageTitleDescription")}
          </div>
        </div>

        {/* Introduction Section - Beginner Mode */}
        <div className="flex flex-col gap-5">
          {isBeginnerMode && (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 ">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 text-blue-600">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-blue-800 space-y-4 leading-relaxed">
                  <p>{ReactHTMLParser(t("mapIntroText1"))}</p>
                </div>
              </div>
            </div>
          )}
          {isBeginnerMode && (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 text-blue-600">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-blue-800 space-y-4 leading-relaxed">
                  <p>{ReactHTMLParser(t("mapIntroText2"))}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ActionButton description={t("uploadMapDescription")} component={<UploadAndReadXmlMap />}>
            Upload Map File
          </ActionButton>

          <ActionButton
            description={ReactHTMLParser(t("downloadMapDescription"))}
            onClick={handleDownloadMap}
            variant="secondary"
          >
            <svg className="max-w-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {ReactHTMLParser(t("saveMap"))}
          </ActionButton>
        </div>

        {/* Map Input Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
            <div className="text-2xl font-semibold mb-2">{t("columnsLayout")}</div>
            <div className="text-purple-100">{t("columnsLayoutSubTitle")}</div>
          </div>
          <div className="pl-11 mt-4">{t("mapInputElementTitle")}</div>
          <div className="">
            <MapInputElement numStatements={numStatements} />
          </div>

          {/* Configuration Options */}
          <div className="p-8 pt-2 mt-4">
            {/* <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("colorSettings")}</h2> */}
            {/* Color Palette Options */}
            <RadioGroup
              title={`${t("mapColorPalette")}`}
              options={colorPaletteOptions}
              selectedValue={mapColorPalette}
              onChange={handleMapColorPaletteChange}
              name="colorPalette"
            />
            {/* Column Color Style */}
            <RadioGroup
              title={`${t("mapColColors")}`}
              options={colorStyleOptions}
              selectedValue={mapColColorsStyle}
              onChange={handleMapColColorsChange}
              name="colorStyle"
            />
          </div>
        </div>

        {/* Column Labels Configuration */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
          <div className="rounded-tr-2xl rounded-tl-2xl bg-gradient-to-r h-[130px] from-blue-500 to-blue-600 text-white p-8">
            <div className="flex items-center justify-between ">
              <div className="text-2xl font-semibold">{t("columnLabelsBoxTitle")}</div>
              <StatusBadge status={headerStatus.status}>{headerStatus.message}</StatusBadge>
            </div>
            <div className="mb-8">{t("columnLabelsboxSubTitle")}</div>
          </div>

          <div className="p-8">
            {/* NUMBERS - Column Headers - Numbers */}
            <div className="text-lg mt-2 font-semibold text-gray-900 mb-1">
              {t("mapColsPresetLevels")}
            </div>
            {/* PRESET LEVELS */}
            <div className="mb-4 mt-2">
              <div className="flex flex-row gap-3 ml-6 flex-wrap">
                {defaultLabelOptions.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <Radio
                      name="defaultLabels"
                      value={option.value}
                      label={option.label}
                      align="left"
                      isChecked={mobileHeadersDefaultLabels === option.value}
                      handleChange={handleMobileLabelsChange}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row mt-2 mb-8 ml-8 gap-2  min-h-[60px]">
              {isSortEmojiSwitchDisabled ? (
                <div>{t("emojiNotAvailable")}</div>
              ) : (
                emojiArray.map((element) => {
                  return <div key={uuid()}>{element}</div>;
                })
              )}
            </div>

            {/* TEXT DESCRIPTIONS - Custom Text Label Input */}
            <div>
              <div className="text-lg font-semibold text-gray-900 mt-4 mb-1">
                {t("presortColumnLabels")}
              </div>
              <div className="space-y-3 mb-8 ml-4">
                <ToggleSwitch
                  label={t("usePresortEmoji")}
                  labelPosition="left"
                  disabled={sortEmojiSwitchDisabled}
                  checked={useColLabelEmojiPresort}
                  onChange={() => setUseColLabelEmojiPresort(!useColLabelEmojiPresort)}
                  variant="green"
                />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {t("sortColumnLabels")}
              </div>
              <div className="ml-4 flex flex-col gap-3 mt-4">
                <div className="space-y-3">
                  <ToggleSwitch
                    label={t("useSortNumbers")}
                    labelPosition="left"
                    checked={useColLabelNums}
                    onChange={() => setUseColLabelNums(!useColLabelNums)}
                    disabled={isSwitchDisabled}
                    variant="green"
                  />
                </div>
                <div className="space-y-3">
                  <ToggleSwitch
                    label={t("useSortText")}
                    labelPosition="left"
                    checked={useColLabelText}
                    onChange={() => setUseColLabelText(!useColLabelText)}
                    disabled={isSwitchDisabled}
                    variant="green"
                  />
                </div>
                <UserTextAreaInput
                  classNameText="w-full ml-6 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  classNameLabel=""
                  label=""
                  name="colTextLabelsArray"
                  height={120}
                  value={colTextLabelsArray}
                  highlight={false}
                  placeholder={t("columnTextInputPlaceholder")}
                  disabled={false}
                  tabIndex="0"
                />
                <div className="text-sm ml-6 text-gray-500 ">
                  {t("sortTextInputSubTitle")} {t("totalNeeded")}: {numMapTotalColumns}
                </div>

                <div>
                  <div className="space-y-3 mt-2 mb-8">
                    <ToggleSwitch
                      label={t("useSortEmoji")}
                      labelPosition="left"
                      disabled={sortEmojiSwitchDisabled}
                      checked={useColLabelEmoji}
                      onChange={() => setUseColLabelEmoji(!useColLabelEmoji)}
                      variant="green"
                    />
                  </div>
                </div>
              </div>

              <div className=" w-[300px] text-lg font-semibold text-gray-900 mr-2">
                {t("postsortColumnLabels")}
              </div>
              <div className="space-y-3 ml-4 mb-4 mt-4">
                <ToggleSwitch
                  label={t("usePostsortNumbers")}
                  labelPosition="left"
                  checked={useColLabelNumsPostsort}
                  onChange={() => setUseColLabelNumsPostsort(!useColLabelNumsPostsort)}
                  disabled={isSwitchDisabled}
                  variant="green"
                />
              </div>
              <div className="space-y-3 ml-4">
                <ToggleSwitch
                  label={t("usePostsortText")}
                  labelPosition="left"
                  checked={useColLabelTextPostsort}
                  onChange={() => setUseColLabelTextPostsort(!useColLabelTextPostsort)}
                  disabled={isSwitchDisabled}
                  variant="green"
                />
              </div>
              <div className="flex flex-col gap-3 ml-4 mt-4">
                <div className="space-y-3 ">
                  <ToggleSwitch
                    label={t("usePostsortEmoji")}
                    labelPosition="left"
                    disabled={sortEmojiSwitchDisabled}
                    checked={useColLabelEmojiPostsort}
                    onChange={() => setUseColLabelEmojiPostsort(!useColLabelEmojiPostsort)}
                    variant="green"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Status Information */}
          {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">{numStatements}</div>
            <div className="text-sm text-gray-600">Total Statements</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">{numMapTotalColumns}</div>
            <div className="text-sm text-gray-600">Grid Columns</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">{numHeaderLabels}</div>
            <div className="text-sm text-gray-600">Header Labels</div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export { Map };

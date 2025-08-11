import React from "react";
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

// Type definitions
interface State {
  displayMode: string;
  mapColorPalette: string;
  setMapColorPalette: (value: string) => void;
  mapColColorsStyle: string;
  setMapColColorsStyle: (value: string) => void;
  mobileHeadersText: string;
  setMobileHeadersText: (value: string) => void;
  numMapTotalColumns: number;
  mobileHeadersDefaultLabels: string;
  setMobileHeadersDefaultLabels: (value: string) => void;
  mobileHeadersDefault5: string;
  mobileHeadersDefault7: string;
  mobileHeadersDefault9: string;
  mobileHeadersDefault11: string;
  numStatements: number;
  allStatementsAllocated: boolean;
}

const getDisplayMode = (state: State) => state.displayMode;
const getMapColorPalette = (state: State) => state.mapColorPalette;
const getSetMapColorPalette = (state: State) => state.setMapColorPalette;
const getMapColColorsStyle = (state: State) => state.mapColColorsStyle;
const getSetMapColColorsStyle = (state: State) => state.setMapColColorsStyle;
const getMobileHeadersText = (state: State) => state.mobileHeadersText;
const getSetMobileHeadersText = (state: State) => state.setMobileHeadersText;
const getNumMapTotalColumns = (state: State) => state.numMapTotalColumns;
const getMobileHeadersDefaultLabels = (state: State) => state.mobileHeadersDefaultLabels;
const getSetMobileHeadersDefaultLabels = (state: State) => state.setMobileHeadersDefaultLabels;
const getMobileHeadersDefault5 = (state: State) => state.mobileHeadersDefault5;
const getMobileHeadersDefault7 = (state: State) => state.mobileHeadersDefault7;
const getMobileHeadersDefault9 = (state: State) => state.mobileHeadersDefault9;
const getMobileHeadersDefault11 = (state: State) => state.mobileHeadersDefault11;
const getNumStatements = (state: State) => state.numStatements;
const getAllStatementsAllocated = (state: State) => state.allStatementsAllocated;

const Map: React.FC = () => {
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

  const isBeginnerMode = displayMode === "beginner";

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

  const handleMobileLabelsChange = (value: string): void => {
    setMobileHeadersDefaultLabels(value);
    const labelMappings = {
      labels5: mobileHeadersDefault5,
      labels7: mobileHeadersDefault7,
      labels9: mobileHeadersDefault9,
      labels11: mobileHeadersDefault11,
    };

    const labelText = labelMappings[value as keyof typeof labelMappings];
    if (labelText) {
      setMobileHeadersText(labelText);
    }
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

  const numHeaderLabels = countMobileHeaders(mobileHeadersText);
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

      if (numMissingHeaders !== 0) {
        alert(t("missingMobileColumnLabels"));
        return;
      }

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
    icon: React.ReactNode;
    description: string;
    onClick?: () => void;
    component?: React.ReactNode;
    variant?: "primary" | "secondary";
  }> = ({ children, icon, description, onClick, component, variant = "primary" }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center ${
            variant === "primary"
              ? "bg-gradient-to-br from-blue-500 to-blue-600"
              : "bg-gradient-to-br from-blue-500 to-blue-600"
          }`}
        >
          <div className="w-8 h-8 text-white">{icon}</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
        <div className="w-full">
          {component || (
            <button
              onClick={onClick}
              className={`flex items-center justify-center w-[500px] px-6 p-2 bg-orange-300 text-black font-semibold rounded-md hover:opacity-50 focus:outline-none focus:ring-2 border border-gray-600 focus:ring-orange-400 focus:ring-opacity-75 text-center h-[40px] select-none`}
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
    if (numStatements === 0) return { status: "warning", message: "No statements loaded" };
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Q-Sort Grid Configuration</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("qSortGridSettings")}
          </p>
        </div>

        {/* Action Buttons Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ActionButton
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            }
            description="Upload an existing map XML file to load your grid configuration"
            component={<UploadAndReadXmlMap />}
          >
            Upload Map File
          </ActionButton>

          <ActionButton
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
            description="Download your current map configuration as an XML file"
            onClick={handleDownloadMap}
            variant="secondary"
          >
            {t("saveMap")}
          </ActionButton>
        </div>

        {/* Introduction Section - Beginner Mode */}
        {isBeginnerMode && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8">
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
                <p>{t("mapIntroText1")}</p>
                <p>{t("mapIntroText2")}</p>
                <p>{t("mapIntroText3")}</p>
                <p>{t("mapIntroText4")}</p>
                <p>{t("mapIntroText5")}</p>
              </div>
            </div>
          </div>
        )}

        {/* Map Input Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
            <h2 className="text-2xl font-semibold mb-2">Grid Layout</h2>
            <p className="text-purple-100">Configure your Q-sort grid structure</p>
          </div>
          <div className="p-8">
            <MapInputElement numStatements={numStatements} />
          </div>
        </div>

        {/* Configuration Options */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Visual Configuration</h2>

          {/* Color Palette Options */}
          <RadioGroup
            title={`1. ${t("mapColorPalette")}`}
            options={colorPaletteOptions}
            selectedValue={mapColorPalette}
            onChange={handleMapColorPaletteChange}
            name="colorPalette"
          />

          {/* Column Color Style */}
          <RadioGroup
            title={`2. ${t("mapColColors")}`}
            options={colorStyleOptions}
            selectedValue={mapColColorsStyle}
            onChange={handleMapColColorsChange}
            name="colorStyle"
          />
        </div>

        {/* Mobile Headers Configuration */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">3. {t("mobileHeadersText")}</h2>
            <StatusBadge status={headerStatus.status}>{headerStatus.message}</StatusBadge>
          </div>

          {/* Default Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("defaultOptions")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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

          {/* Custom Headers Input */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Headers</h3>
            <UserTextAreaInput
              classNameText="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              classNameLabel=""
              label=""
              name="mobileHeadersText"
              height={120}
              value={mobileHeadersText}
              highlight={false}
              placeholder="Separate with commas. For example: 'Very Important, Important, Neutral, Less Important, Not Important'"
              disabled={false}
              tabIndex="0"
            />
            <p className="text-sm text-gray-500 mt-2">
              Enter column headers separated by commas. Total needed: {numMapTotalColumns}
            </p>
          </div>
        </div>

        {/* Status Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
      </div>
    </div>
  );
};

export { Map };

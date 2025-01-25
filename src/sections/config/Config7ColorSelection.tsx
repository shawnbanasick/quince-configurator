import React, { useState } from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import Image from "../../assets/images/infoIcon.svg";
import { ColorPicker } from "./ColorPicker";

const getHeaderBarColor = (state) => state.headerBarColor;
const getSetHeaderBarColor = (state) => state.setHeaderBarColor;
const getGreenCardColor = (state) => state.greenCardColor;
const getSetGreenCardColor = (state) => state.setGreenCardColor;
const getPinkCardColor = (state) => state.pinkCardColor;
const getSetPinkCardColor = (state) => state.setPinkCardColor;
const getYellowCardColor = (state) => state.yellowCardColor;
const getSetYellowCardColor = (state) => state.setYellowCardColor;
const getDefaultFontColor = (state) => state.defaultFontColor;
const getSetDefaultFontColor = (state) => state.setDefaultFontColor;

const Config7ColorSelection: React.FC = () => {
  const headerBarColor = useStore(getHeaderBarColor);
  const setHeaderBarColor = useStore(getSetHeaderBarColor);
  const greenCardColor = useStore(getGreenCardColor);
  const setGreenCardColor = useStore(getSetGreenCardColor);
  const pinkCardColor = useStore(getPinkCardColor);
  const setPinkCardColor = useStore(getSetPinkCardColor);
  const yellowCardColor = useStore(getYellowCardColor);
  const setYellowCardColor = useStore(getSetYellowCardColor);
  const defaultFontColor = useStore(getDefaultFontColor);
  const setDefaultFontColor = useStore(getSetDefaultFontColor);
  const { t } = useTranslation();

  const restoreDefaultColors = () => {
    setHeaderBarColor("#337ab7");
    setGreenCardColor("#ccffcc");
    setYellowCardColor("#e0e0e0");
    setPinkCardColor("#ffe0e0");
    setDefaultFontColor("#2a2a2a");
  };

  return (
    <div className="flex flex-col  pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <div className="flex flex-row content-center gap-5 mt-3">
        <span className="text-lg font-title font-semibold">
          {t("colorSettings")}
        </span>{" "}
        <img
          src={Image}
          className=" w-[25px] h-[25px] justify-self-center"
          onClick={() => alert("This is a tooltip")}
          alt="info icon"
        />
      </div>

      <button
        className={`bg-slate-400 w-[200px] h-6 hover:bg-opacity-50 text-white px-2 pb-1 mt-1 rounded-md select-none`}
        onClick={restoreDefaultColors}
      >
        {t("restoreDefaultColors")}
      </button>

      <div
        className={`flex flex-row h-[40px] content-center items-center gap-5 mt-1`}
      >
        <span className={`content-center`}>{`7a. ${t(
          "headerBarColor"
        )}:`}</span>
        <div
          className="w-10 h-5 rounded-md outline outline-1 outline-zinc-600"
          style={{ backgroundColor: headerBarColor }}
        >
          <ColorPicker
            baseColor={headerBarColor}
            onChange={setHeaderBarColor}
          />
        </div>
        <span>{headerBarColor}</span>
      </div>
      <div
        className={`flex flex-row h-[40px] content-center items-center gap-5 mt-1`}
      >
        <span className={`content-center`}>{`7a. ${t(
          "greenCardColor"
        )}:`}</span>
        <div
          className="w-10 h-5 rounded-md outline outline-1 outline-zinc-600"
          style={{ backgroundColor: greenCardColor }}
        >
          <ColorPicker
            baseColor={greenCardColor}
            onChange={setGreenCardColor}
          />
        </div>
        <span>{greenCardColor}</span>
      </div>
      <div
        className={`flex flex-row h-[40px] content-center items-center gap-5 mt-1`}
      >
        <span className={`content-center`}>{`7a. ${t(
          "yellowCardColor"
        )}:`}</span>
        <div
          className="w-10 h-5 rounded-md outline outline-1 outline-zinc-600"
          style={{ backgroundColor: yellowCardColor }}
        >
          <ColorPicker
            baseColor={yellowCardColor}
            onChange={setYellowCardColor}
          />
        </div>
        <span>{yellowCardColor}</span>
      </div>
      <div
        className={`flex flex-row h-[40px] content-center items-center gap-5 mt-1`}
      >
        <span className={`content-center`}>{`7a. ${t("pinkCardColor")}:`}</span>
        <div
          className="w-10 h-5 rounded-md outline outline-1 outline-zinc-600"
          style={{ backgroundColor: pinkCardColor }}
        >
          <ColorPicker baseColor={pinkCardColor} onChange={setPinkCardColor} />
        </div>
        <span>{pinkCardColor}</span>
      </div>
      <div
        className={`flex flex-row h-[40px] content-center items-center gap-5 mt-1`}
      >
        <span className={`content-center`}>{`7a. ${t(
          "defaultFontColor"
        )}:`}</span>
        <div
          className="w-10 h-5 rounded-md outline outline-1 outline-zinc-600"
          style={{ backgroundColor: defaultFontColor }}
        >
          <ColorPicker
            baseColor={defaultFontColor}
            onChange={setDefaultFontColor}
          />
        </div>
        <span>{defaultFontColor}</span>
      </div>
    </div>
  );
};

export { Config7ColorSelection };

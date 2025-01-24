import React, { useState } from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import Image from "../../assets/images/infoIcon.svg";
import { ColorPicker } from "./ColorPicker";

const getHeaderBarColor = (state) => state.headerBarColor;
const getSetHeaderBarColor = (state) => state.setHeaderBarColor;

const Config7ColorSelection: React.FC = () => {
  const headerBarColor = useStore(getHeaderBarColor);
  const setHeaderBarColor = useStore(getSetHeaderBarColor);
  const { t } = useTranslation();

  const [showHeaderBarColorPicker, setShowHeaderBarColorPicker] =
    useState(false);

  console.log(headerBarColor.toString());
  let colorTest = "#83cafe";

  return (
    <div className="flex flex-col  pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <div className="flex flex-row content-center gap-5 mt-3">
        <span className="text-lg font-title font-semibold">
          {t("landingPageOptions")}
        </span>{" "}
        <img
          src={Image}
          className=" w-[25px] h-[25px] justify-self-center"
          onClick={() => alert("This is a tooltip")}
          alt="info icon"
        />
      </div>

      <div
        className={`flex flex-row h-[70px] content-center items-center gap-5 mt-1`}
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
      </div>
    </div>
  );
};

export { Config7ColorSelection };

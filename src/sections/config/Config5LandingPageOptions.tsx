import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { UserNumInput } from "../utils/UserNumInput";
import { Radio } from "../utils/RadioButtons";
import Image from "../../assets/images/infoIcon.svg";

import clsx from "clsx";

const getUseImages = (state) => state.useImages;
const getSetUseImages = (state) => state.setUseImages;
const getNumImages = (state) => state.numImages;
const getSetNumImages = (state) => state.setNumImages;
const getImageFileType = (state) => state.imageFileType;
const getSetImageFileType = (state) => state.setImageFileType;
const getImageFormat = (state) => state.imageFormat;
const getSetImageFormat = (state) => state.setImageFormat;

const Config5LandingPageOptions: React.FC = () => {
  const useImages = useStore(getUseImages);
  const setUseImages = useStore(getSetUseImages);
  const numImages = useStore(getNumImages);
  const setNumImages = useStore(getSetNumImages);
  const imageFileType = useStore(getImageFileType);
  const setImageFileType = useStore(getSetImageFileType);
  const imageFormat = useStore(getImageFormat);
  const setImageFormat = useStore(getSetImageFormat);
  const { t } = useTranslation();

  const handleNumberInput = (input: any) => {
    setNumImages(input);
  };

  const handleImageFileTypeChange = (inputValue: any) => {
    console.log(inputValue);
    setImageFileType(inputValue);
  };

  const handleImageFormatChange = (inputValue: any) => {
    console.log(inputValue);
    setImageFormat(inputValue);
  };

  const handleUseImagesChange = (
    inputValue: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (inputValue.target.value === "true") {
      setUseImages(true);
    } else {
      setUseImages(false);
    }
  };

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
      <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
        <span className="content-center">{`5a. ${t("showConsentPage")}:`}</span>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": useImages,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  !useImages,
              }
            )}
            htmlFor="useImagesTrue"
          >
            <input
              type="radio"
              className="hidden"
              name="useImages"
              id="useImagesTrue" // htlmlFor targets this id.
              value="true"
              checked={useImages}
              onChange={handleUseImagesChange}
            />
            {t("true")}
          </label>
        </div>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": !useImages,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  useImages,
              }
            )}
            htmlFor="useImagesFalse"
          >
            <input
              type="radio"
              className="hidden"
              name="useImages"
              id="useImagesFalse" // htlmlFor targets this id.
              value="false"
              checked={!useImages}
              onChange={handleUseImagesChange}
            />
            {t("false")}
          </label>
        </div>
      </div>

      <div className="flex flex-row h-[70px] content-center gap-5 mt-1">
        <span
          className={`content-center ${useImages ? "" : "text-slate-400"} `}
        >{`4c. ${t("showConsentPageHelpModal")}:`}</span>
        <Radio
          name="imageFileType"
          value="jpg"
          label={"jpg"}
          align="left"
          disabled={!useImages}
          isChecked={imageFileType === "jpg"}
          handleChange={handleImageFileTypeChange}
        />
        <Radio
          name="imageFileType"
          value="png"
          label={"png"}
          disabled={!useImages}
          isChecked={imageFileType === "png"}
          handleChange={handleImageFileTypeChange}
        />
      </div>
      <div className="flex flex-row h-[70px] content-center gap-5 mt-1">
        <span
          className={`content-center ${useImages ? "" : "text-slate-400"}`}
        >{`4d. ${t("Image Format")}:`}</span>
        <Radio
          name="imageFormat"
          value="letterbox"
          label={"letterbox"}
          disabled={!useImages}
          align="left"
          isChecked={imageFormat === "letterbox"}
          handleChange={handleImageFormatChange}
        />
        <Radio
          name="imageFormat"
          value="4x3"
          label={"4x3"}
          disabled={!useImages}
          isChecked={imageFormat === "4x3"}
          handleChange={handleImageFormatChange}
        />
      </div>
    </div>
  );
};

export { Config5LandingPageOptions };

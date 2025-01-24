import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
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
const getShowConsetPage = (state) => state.showConsentPage;
const getSetShowConsentPage = (state) => state.setShowConsentPage;
const getShowConsentPageHelpModal = (state) => state.showConsentPageHelpModal;
const getSetShowConsentPageHelpModal = (state) =>
  state.setShowConsentPageHelpModal;

const Config5LandingPageOptions: React.FC = () => {
  const useImages = useStore(getUseImages);
  const setUseImages = useStore(getSetUseImages);
  const numImages = useStore(getNumImages);
  const setNumImages = useStore(getSetNumImages);
  const imageFileType = useStore(getImageFileType);
  const setImageFileType = useStore(getSetImageFileType);
  const imageFormat = useStore(getImageFormat);
  const setImageFormat = useStore(getSetImageFormat);
  const showConsentPageHelpModal = useStore(getShowConsentPageHelpModal);
  const setShowConsentPageHelpModal = useStore(getSetShowConsentPageHelpModal);

  const showConsentPage = useStore(getShowConsetPage);
  const setShowConsentPage = useStore(getSetShowConsentPage);
  const { t } = useTranslation();

  const handleShowConsentPageChange = (input: any) => {
    setShowConsentPage(input);
  };

  const handleShowConsentPageHelpModalChange = (inputValue: any) => {
    console.log(inputValue);
    setShowConsentPageHelpModal(inputValue);
  };

  const handleImageFormatChange = (inputValue: any) => {
    console.log(inputValue);
    setImageFormat(inputValue);
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
                "bg-opacity-100": showConsentPage,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  !showConsentPage,
              }
            )}
            htmlFor="useImagesTrue"
          >
            <input
              type="radio"
              className="hidden"
              name="showConsentPage"
              id="showConsentPageTrue" // htlmlFor targets this id.
              value="true"
              onChange={handleShowConsentPageChange}
            />
            {t("true")}
          </label>
        </div>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": !showConsentPage,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  showConsentPage,
              }
            )}
            htmlFor="useImagesFalse"
          >
            <input
              type="radio"
              className="hidden"
              name="showConsentPage"
              id="useImagesFalse" // htlmlFor targets this id.
              value="false"
              checked={!showConsentPage}
              onChange={handleShowConsentPageChange}
            />
            {t("false")}
          </label>
        </div>
      </div>

      <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
        <span className="content-center">{`5b. ${t(
          "showConsentPageHelpModal"
        )}:`}</span>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": showConsentPageHelpModal,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  !showConsentPageHelpModal,
              }
            )}
            htmlFor="useImagesTrue"
          >
            <input
              type="radio"
              className="hidden"
              name="showConsentPageHelpModal"
              id="showConsentPageHelpModalTrue" // htlmlFor targets this id.
              value="true"
              onChange={handleShowConsentPageHelpModalChange}
            />
            {t("true")}
          </label>
        </div>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": !showConsentPage,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  showConsentPage,
              }
            )}
            htmlFor="useImagesFalse"
          >
            <input
              type="radio"
              className="hidden"
              name="showConsentPageHelpModal"
              id="showConsentPageHelpModalFalse" // htlmlFor targets this id.
              value="false"
              checked={!showConsentPage}
              onChange={handleShowConsentPageHelpModalChange}
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
          handleChange={console.log("help")}
        />
        <Radio
          name="imageFileType"
          value="png"
          label={"png"}
          disabled={!useImages}
          isChecked={imageFileType === "png"}
          handleChange={console.log("help")}
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
          handleChange={console.log("help")}
        />
        <Radio
          name="imageFormat"
          value="4x3"
          label={"4x3"}
          disabled={!useImages}
          isChecked={imageFormat === "4x3"}
          handleChange={console.log("help")}
        />
      </div>
    </div>
  );
};

export { Config5LandingPageOptions };

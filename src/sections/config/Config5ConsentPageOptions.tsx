import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { Radio } from "../utils/RadioButtons";
import Image from "../../assets/images/infoIcon.svg";

import clsx from "clsx";

const getShowConsetPage = (state) => state.showConsentPage;
const getSetShowConsentPage = (state) => state.setShowConsentPage;
const getShowConsentPageHelpModal = (state) => state.showConsentPageHelpModal;
const getSetShowConsentPageHelpModal = (state) =>
  state.setShowConsentPageHelpModal;

const Config5ConsentPageOptions: React.FC = () => {
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

  return (
    <div className="flex flex-col  pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <div className="flex flex-row content-center gap-5 mt-3">
        <span className="text-lg font-title font-semibold">
          {t("consentPageOptions")}
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
            htmlFor="showConsentPageHelpModalTrue"
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
                "bg-opacity-100": !showConsentPageHelpModal,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  showConsentPageHelpModal,
              }
            )}
            htmlFor="showConsentPageHelpModalFalse"
          >
            <input
              type="radio"
              className="hidden"
              name="showConsentPageHelpModal"
              id="showConsentPageHelpModalFalse" // htlmlFor targets this id.
              value="false"
              checked={!showConsentPageHelpModal}
              onChange={handleShowConsentPageHelpModalChange}
            />
            {t("false")}
          </label>
        </div>
      </div>
    </div>
  );
};

export { Config5ConsentPageOptions };

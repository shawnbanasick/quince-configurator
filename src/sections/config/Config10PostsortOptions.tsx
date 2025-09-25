import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import Image from "../../assets/images/infoIcon.svg";
import { UserNumInput } from "../utils/UserNumInput";
import clsx from "clsx";

const getShowPostsort = (state) => state.showPostsort;
const getSetShowPostsort = (state) => state.setShowPostsort;
const getShowSecondPosColumn = (state) => state.showSecondPosColumn;
const getSetShowSecondPosColumn = (state) => state.setShowSecondPosColumn;
const getShowSecondNegColumn = (state) => state.showSecondNegColumn;
const getSetShowSecondNegColumn = (state) => state.setShowSecondNegColumn;
const getShowBackButton = (state) => state.showBackButton;
const getSetShowBackButton = (state) => state.setShowBackButton;
const getPostsortCommentsRequired = (state) => state.postsortCommentsRequired;
const getSetPostsortCommentsRequired = (state) => state.setPostsortCommentsRequired;
const getDefaultFontSizePostsort = (state) => state.defaultFontSizePostsort;
const getSetDefaultFontSizePostsort = (state) => state.setDefaultFontSizePostsort;
const getMinCardHeightPostsort = (state) => state.minCardHeightPostsort;
const getSetMinCardHeightPostsort = (state) => state.setMinCardHeightPostsort;

const Config10PostsortOptions: React.FC = () => {
  const { t } = useTranslation();
  const showPostsort = useStore(getShowPostsort);
  const setShowPostsort = useStore(getSetShowPostsort);
  const showSecondPosColumn = useStore(getShowSecondPosColumn);
  const setShowSecondPosColumn = useStore(getSetShowSecondPosColumn);
  const showSecondNegColumn = useStore(getShowSecondNegColumn);
  const setShowSecondNegColumn = useStore(getSetShowSecondNegColumn);
  const showBackButton = useStore(getShowBackButton);
  const setShowBackButton = useStore(getSetShowBackButton);
  const postsortCommentsRequired = useStore(getPostsortCommentsRequired);
  const setPostsortCommentsRequired = useStore(getSetPostsortCommentsRequired);
  const defaultFontSizePostsort = useStore(getDefaultFontSizePostsort);
  const setDefaultFontSizePostsort = useStore(getSetDefaultFontSizePostsort);
  const minCardHeightPostsort = useStore(getMinCardHeightPostsort);
  const setMinCardHeightPostsort = useStore(getSetMinCardHeightPostsort);

  const handleShowPostsortChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    console.log(input.target.value);
    if (input.target.value === "true") {
      setShowPostsort(true);
    } else {
      setShowPostsort(false);
    }
  };

  const handleShowSecondPosColumnChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    console.log(input.target.value);
    if (input.target.value === "true") {
      setShowSecondPosColumn(true);
    } else {
      setShowSecondPosColumn(false);
    }
  };

  const handleShowSecondNegColumnChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    console.log(input.target.value);
    if (input.target.value === "true") {
      setShowSecondNegColumn(true);
    } else {
      setShowSecondNegColumn(false);
    }
  };

  const handleShowBackButtonChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    console.log(input.target.value);
    if (input.target.value === "true") {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  };

  const handlePostsortCommentsRequiredChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    console.log(input.target.value);
    if (input.target.value === "true") {
      setPostsortCommentsRequired(true);
    } else {
      setPostsortCommentsRequired(false);
    }
  };

  const handleDefaultFontSizePostsortChange = (inputValue: any) => {
    setDefaultFontSizePostsort(inputValue);
  };

  const handleMinCardHeightPostsortChange = (inputValue: any) => {
    setMinCardHeightPostsort(inputValue);
  };

  return (
    <div className="flex flex-col  pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <div className="flex flex-row content-center gap-5 mt-3">
        <span className="text-lg font-title font-semibold">10. {t("postsortOptions")}</span>{" "}
        {/* <img
          src={Image}
          className=" w-[25px] h-[25px] justify-self-center"
          onClick={() => alert("This is a tooltip")}
          alt="info icon"
        /> */}
      </div>

      <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
        <span className="content-center">
          <mark>{`10a. ${t("showPostsort")}:`}</mark>
        </span>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": showPostsort,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  !showPostsort,
              }
            )}
            htmlFor="showPostsortTrue"
          >
            <input
              type="radio"
              className="hidden"
              name="showPostsort"
              id="showPostsortTrue" // htlmlFor targets this id.
              value="true"
              onChange={handleShowPostsortChange}
            />
            {t("true")}
          </label>
        </div>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": !showPostsort,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  showPostsort,
              }
            )}
            htmlFor="showPostsortFalse"
          >
            <input
              type="radio"
              className="hidden"
              name="showPostsort"
              id="showPostsortFalse" // htlmlFor targets this id.
              value="false"
              checked={!showPostsort}
              onChange={handleShowPostsortChange}
            />
            {t("false")}
          </label>
        </div>
      </div>
      {showPostsort && (
        <div
          className={clsx(
            `transition-all duration-300 ease-in-out transform ${
              showPostsort ? "opacity-100 scale-100" : "opacity-0 scale-100"
            }`
          )}
        >
          <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
            <span className="content-center">{`10b. ${t("showSecondPosColumn")}:`}</span>
            <div className="content-center">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white disabled:opacity-50 px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": showSecondPosColumn,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      !showSecondPosColumn,
                  }
                )}
                htmlFor="showSecondPosColumnTrue"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="showSecondPosColumn"
                  id="showSecondPosColumnTrue" // htlmlFor targets this id.
                  value="true"
                  onChange={handleShowSecondPosColumnChange}
                  disabled={!showPostsort} // Disable the radio button if showPostsort is true.
                />
                {t("true")}
              </label>
            </div>
            <div className="content-center">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": !showSecondPosColumn,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      showSecondPosColumn,
                  }
                )}
                htmlFor="showSecondPosColumnFalse"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="showSecondPosColumn"
                  id="showSecondPosColumnFalse" // htlmlFor targets this id.
                  value="false"
                  checked={!showSecondPosColumn}
                  onChange={handleShowSecondPosColumnChange}
                  disabled={!showPostsort} // Disable the radio button if showPostsort is true.
                />
                {t("false")}
              </label>
            </div>
          </div>

          <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
            <span className="content-center">{`10c. ${t("showSecondNegColumn")}:`}</span>
            <div className="content-center">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": showSecondNegColumn,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      !showSecondNegColumn,
                  }
                )}
                htmlFor="showSecondNegColumnTrue"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="showSecondNegColumn"
                  id="showSecondNegColumnTrue" // htlmlFor targets this id.
                  value="true"
                  onChange={handleShowSecondNegColumnChange}
                />
                {t("true")}
              </label>
            </div>
            <div className="content-center">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": !showSecondNegColumn,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      showSecondNegColumn,
                  }
                )}
                htmlFor="showSecondNegColumnFalse"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="showSecondNegColumn"
                  id="showSecondNegColumnFalse" // htlmlFor targets this id.
                  value="false"
                  checked={!showSecondNegColumn}
                  onChange={handleShowSecondNegColumnChange}
                />
                {t("false")}
              </label>
            </div>
          </div>

          <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
            <span className="content-center">{`10d. ${t("showBackButton")}:`}</span>
            <div className="content-center">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": showBackButton,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      !showBackButton,
                  }
                )}
                htmlFor="showBackButtonTrue"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="showBackButton"
                  id="showBackButtonTrue" // htlmlFor targets this id.
                  value="true"
                  onChange={handleShowBackButtonChange}
                />
                {t("true")}
              </label>
            </div>
            <div className="content-center">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": !showBackButton,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      showBackButton,
                  }
                )}
                htmlFor="showBackButtonFalse"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="showBackButton"
                  id="showBackButtonFalse" // htlmlFor targets this id.
                  value="false"
                  checked={!showBackButton}
                  onChange={handleShowBackButtonChange}
                />
                {t("false")}
              </label>
            </div>
          </div>

          <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
            <span className="content-center">
              <mark>{`10e. ${t("postsortCommentsRequired")}:`}</mark>
            </span>
            <div className="content-center">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": postsortCommentsRequired,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      !postsortCommentsRequired,
                  }
                )}
                htmlFor="postsortCommentsRequiredTrue"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="postsortCommentsRequired"
                  id="postsortCommentsRequiredTrue" // htlmlFor targets this id.
                  value="true"
                  onChange={handlePostsortCommentsRequiredChange}
                />
                {t("true")}
              </label>
            </div>
            <div className="content-center">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": !postsortCommentsRequired,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      postsortCommentsRequired,
                  }
                )}
                htmlFor="postsortCommentsRequiredFalse"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="postsortCommentsRequired"
                  id="postsortCommentsRequiredFalse" // htlmlFor targets this id.
                  value="false"
                  checked={!postsortCommentsRequired}
                  onChange={handlePostsortCommentsRequiredChange}
                />
                {t("false")}
              </label>
            </div>
          </div>
          <UserNumInput
            classNameNum={`mt-2 block min-w-[80px] px-3 py-2 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 outline outline-1 outline-zinc-600 ml-4`}
            classNameLabel={`flex flex-row content-center min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
            highlight={false}
            label={`10f. ${t("defaultFontSizePostsort")}:`}
            placeholder=""
            upperLimit={199}
            lowerLimit={6}
            step={1}
            disabled={false}
            name="defaultFontSizePostsort"
            value={defaultFontSizePostsort}
            onChange={handleDefaultFontSizePostsortChange}
          />

          <UserNumInput
            classNameNum={`mt-2 block min-w-[80px] px-3 py-2 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 outline outline-1 outline-zinc-600 ml-4`}
            classNameLabel={`flex flex-row content-center min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
            highlight={true}
            label={`10g. ${t("minCardHeightPostsort")}:`}
            placeholder=""
            upperLimit={199}
            lowerLimit={6}
            step={1}
            disabled={false}
            name="minCardHeightPostsort"
            value={minCardHeightPostsort}
            onChange={handleMinCardHeightPostsortChange}
          />
        </div>
      )}
    </div>
  );
};

export { Config10PostsortOptions };

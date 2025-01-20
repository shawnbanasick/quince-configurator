import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { UserNumInput } from "../utils/UserNumInput";
import clsx from "clsx";

const getUseImages = (state) => state.useImages;
const getSetUseImages = (state) => state.setUseImages;

const Config4SortImages: React.FC = () => {
  const useImages = useStore(getUseImages);
  const setUseImages = useStore(getSetUseImages);
  const { t } = useTranslation();

  const handleNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    // setSecondProjectUrl(event.target.value);
  };

  const handleUseImagesChange = (inputValue: any) => {
    if (inputValue.target.value === "true") {
      setUseImages(true);
    } else {
      setUseImages(false);
    }
  };

  return (
    <div className="flex flex-col hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <div className="flex flex-row h-[60px] content-center gap-5 mt-4">
        <span className="content-center">{`4a. ${t("sortImages")}:`}</span>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": useImages,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-2 outline-zinc-600":
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
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-2 outline-zinc-600":
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
      <UserNumInput
        classNameNum={`mt-2 block min-w-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 select-none sm:text-sm disabled:opacity-50 outline outline-2 outline-zinc-600 ml-4`}
        classNameLabel={`flex flex-row content-center min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
        highlight={true}
        label={`4b. Number of images:`}
        placeholder={t("enterSecondProjectUrlAddress")}
        upperLimit={199}
        lowerLimit={0}
        step={10}
        disabled={false}
        name="linkToSecondProjectEmailInput"
        value={"0"}
        onChange={handleNumberInput}
      />
    </div>
  );
};

export { Config4SortImages };

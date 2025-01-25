import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import Image from "../../assets/images/infoIcon.svg";
import { UserNumInput } from "../utils/UserNumInput";
import { Radio } from "../utils/RadioButtons";
import clsx from "clsx";
import { cond } from "lodash";

const getDefaultFontSizePresort = (state) => state.defaultFontSizePresort;
const getSetDefaultFontSizePresort = (state) => state.setDefaultFontSizePresort;
const getSortDirection = (state) => state.sortDirection;
const getSetSortDirection = (state) => state.setSortDirection;
const getAllowUnforcedSorts = (state) => state.allowUnforcedSorts;
const getSetAllowUnforcedSorts = (state) => state.setAllowUnforcedSorts;
const getWarnOverloadedColumn = (state) => state.warnOverloadedColumn;
const getSetWarnOverloadedColumn = (state) => state.setWarnOverloadedColumn;
const getConditionOfInstFontSize = (state) => state.condOfInstFontSize;
const getSetConditionOfInstFontSize = (state) => state.setCondOfInstFontSize;

const Config9SortOptions: React.FC = () => {
  const { t } = useTranslation();
  const defaultFontSizePresort = useStore(getDefaultFontSizePresort);
  const setDefaultFontSizePresort = useStore(getSetDefaultFontSizePresort);
  const sortDirection = useStore(getSortDirection);
  const setSortDirection = useStore(getSetSortDirection);
  const allowUnforcedSorts = useStore(getAllowUnforcedSorts);
  const setAllowUnforcedSorts = useStore(getSetAllowUnforcedSorts);
  const warnOverloadedColumn = useStore(getWarnOverloadedColumn);
  const setWarnOverloadedColumn = useStore(getSetWarnOverloadedColumn);
  const condOfInstFontSize = useStore(getConditionOfInstFontSize);
  const setCondOfInstFontSize = useStore(getSetConditionOfInstFontSize);

  const handleWarnOverloadedColumnChange = (
    input: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(input.target.value);
    if (input.target.value === "true") {
      setWarnOverloadedColumn(true);
    } else {
      setWarnOverloadedColumn(false);
    }
  };

  const handleAllowUnforcedSortsChange = (
    input: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(input.target.value);
    if (input.target.value === "true") {
      setAllowUnforcedSorts(true);
    } else {
      setAllowUnforcedSorts(false);
    }
  };

  const handleSortDirectionChange = (inputValue: any) => {
    setSortDirection(inputValue);
  };

  const handleCondOfInstFontSizeChange = (inputValue: any) => {
    setCondOfInstFontSize(inputValue);
  };

  return (
    <div className="flex flex-col  pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <div className="flex flex-row content-center gap-5 mt-3">
        <span className="text-lg font-title font-semibold">
          {t("sortPageOptions")}
        </span>{" "}
        <img
          src={Image}
          className=" w-[25px] h-[25px] justify-self-center"
          onClick={() => alert("This is a tooltip")}
          alt="info icon"
        />
      </div>

      <UserNumInput
        classNameNum={`mt-2 block min-w-[80px] px-3 py-2 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 outline outline-1 outline-zinc-600 ml-4`}
        classNameLabel={`flex flex-row content-center min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
        highlight={true}
        label={`9a. ${t("condOfInstFontSize")}:`}
        placeholder=""
        upperLimit={199}
        lowerLimit={6}
        step={1}
        disabled={false}
        name="linkToSecondProjectEmailInput"
        value={condOfInstFontSize}
        onChange={handleCondOfInstFontSizeChange}
      />

      <div className="flex flex-row h-[70px] content-center gap-5 mt-1">
        <span className={`content-center`}>{`9b. ${t("sortDirection")}:`}</span>
        <Radio
          name="sortDirection"
          value="negative"
          label={t("negative")}
          align="left"
          disabled={false}
          isChecked={sortDirection === "negative"}
          handleChange={handleSortDirectionChange}
        />
        <Radio
          name="sortDirection"
          value="positive"
          label={t("positive")}
          disabled={false}
          isChecked={sortDirection === "positive"}
          handleChange={handleSortDirectionChange}
        />
      </div>

      <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
        <span className="content-center">{`9c. ${t(
          "allowUnforcedSorts"
        )}:`}</span>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": allowUnforcedSorts,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  !allowUnforcedSorts,
              }
            )}
            htmlFor="allowUnforcedSortsTrue"
          >
            <input
              type="radio"
              className="hidden"
              name="allowUnforcedSorts"
              id="allowUnforcedSortsTrue" // htlmlFor targets this id.
              value="true"
              onChange={handleAllowUnforcedSortsChange}
            />
            {t("true")}
          </label>
        </div>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": !allowUnforcedSorts,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  allowUnforcedSorts,
              }
            )}
            htmlFor="allowUnforcedSortsFalse"
          >
            <input
              type="radio"
              className="hidden"
              name="allowUnforcedSorts"
              id="allowUnforcedSortsFalse" // htlmlFor targets this id.
              value="false"
              checked={!allowUnforcedSorts}
              onChange={handleAllowUnforcedSortsChange}
            />
            {t("false")}
          </label>
        </div>
      </div>

      <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
        <span className="content-center">{`9d. ${t(
          "warnOverloadedColumns"
        )}:`}</span>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": warnOverloadedColumn,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  !warnOverloadedColumn,
              }
            )}
            htmlFor="shuffleCardsTrue"
          >
            <input
              type="radio"
              className="hidden"
              name="warnOverloadedColumn"
              id="warnOverloadedColumnTrue" // htlmlFor targets this id.
              value="true"
              onChange={handleWarnOverloadedColumnChange}
            />
            {t("true")}
          </label>
        </div>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": !warnOverloadedColumn,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  warnOverloadedColumn,
              }
            )}
            htmlFor="shuffleCardsFalse"
          >
            <input
              type="radio"
              className="hidden"
              name="warnOverloadedColumn"
              id="warnOverloadedColumnFalse" // htlmlFor targets this id.
              value="false"
              checked={!warnOverloadedColumn}
              onChange={handleWarnOverloadedColumnChange}
            />
            {t("false")}
          </label>
        </div>
      </div>
    </div>
  );
};

export { Config9SortOptions };

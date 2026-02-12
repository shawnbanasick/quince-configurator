import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { UserNumInput } from "../utils/UserNumInput";
import clsx from "clsx";
// import Image from "../../assets/images/infoIcon.svg";
// import { ColorPicker } from "./ColorPicker";

const getShuffleCards = (state) => state.shuffleCards;
const getSetShuffleCards = (state) => state.setShuffleCards;

// const getGreenCardColor = (state) => state.greenCardColor;
// const getSetGreenCardColor = (state) => state.setGreenCardColor;
// const getPinkCardColor = (state) => state.pinkCardColor;
// const getSetPinkCardColor = (state) => state.setPinkCardColor;
// const getYellowCardColor = (state) => state.yellowCardColor;
// const getSetYellowCardColor = (state) => state.setYellowCardColor;

const getDefaultFontSizePresort = (state) => state.defaultFontSizePresort;
const getSetDefaultFontSizePresort = (state) => state.setDefaultFontSizePresort;

const Config9PresortOptions: React.FC = () => {
  const { t } = useTranslation();
  const shuffleCards = useStore(getShuffleCards);
  const setShuffleCards = useStore(getSetShuffleCards);
  const defaultFontSizePresort = useStore(getDefaultFontSizePresort);
  const setDefaultFontSizePresort = useStore(getSetDefaultFontSizePresort);

  // const greenCardColor = useStore(getGreenCardColor);
  // const pinkCardColor = useStore(getPinkCardColor);
  // const yellowCardColor = useStore(getYellowCardColor);
  // const setGreenCardColor = useStore(getSetGreenCardColor);
  // const setPinkCardColor = useStore(getSetPinkCardColor);
  // const setYellowCardColor = useStore(getSetYellowCardColor);

  // const restoreDefaultColors = () => {
  //   setGreenCardColor("#ccffcc");
  //   setYellowCardColor("#e0e0e0");
  //   setPinkCardColor("#ffe0e0");
  // };

  const handleShuffleCardsChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    if (input.target.value === "true") {
      setShuffleCards(true);
    } else {
      setShuffleCards(false);
    }
  };

  const handleDefaultFontSizePresortInput = (input: any) => {
    setDefaultFontSizePresort(input);
  };

  return (
    <div className="flex flex-col  pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <div className="flex flex-row content-center gap-5 mt-3">
        <span className="text-lg font-title font-semibold">9. {t("presortPageOptions")}</span>{" "}
        {/* <img
          src={Image}
          className=" w-[25px] h-[25px] justify-self-center"
          onClick={() => alert("This is a tooltip")}
          alt="info icon"
        /> */}
      </div>
      {/* <button
        className={`bg-slate-400 w-[200px] h-6 hover:bg-opacity-50 text-white px-2 pb-1 mt-1 rounded-md select-none`}
        onClick={restoreDefaultColors}
      >
        {t("restoreDefaultColors")}
      </button> */}

      <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
        <span className="content-center">{`9a. ${t("shuffleCards")}:`}</span>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": shuffleCards,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  !shuffleCards,
              },
            )}
            htmlFor="shuffleCardsTrue"
          >
            <input
              type="radio"
              className="hidden"
              name="shuffleCards"
              id="shuffleCardsTrue" // htlmlFor targets this id.
              value="true"
              onChange={handleShuffleCardsChange}
            />
            {t("true")}
          </label>
        </div>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": !shuffleCards,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  shuffleCards,
              },
            )}
            htmlFor="shuffleCardsFalse"
          >
            <input
              type="radio"
              className="hidden"
              name="shuffleCards"
              id="shuffleCardsFalse" // htlmlFor targets this id.
              value="false"
              checked={!shuffleCards}
              onChange={handleShuffleCardsChange}
            />
            {t("false")}
          </label>
        </div>
      </div>

      {/* <div className={`flex flex-row h-[40px] content-center items-center gap-5 mt-1`}>
        <span className={`content-center`}>{`8b. ${t("greenCardColor")}:`}</span>
        <div
          className="w-10 h-5 rounded-md outline outline-1 outline-zinc-600"
          style={{ backgroundColor: greenCardColor }}
        >
          <ColorPicker baseColor={greenCardColor} onChange={setGreenCardColor} />
        </div>
        <span>{greenCardColor}</span>
      </div>
      <div className={`flex flex-row h-[40px] content-center items-center gap-5 mt-1`}>
        <span className={`content-center`}>{`8c. ${t("yellowCardColor")}:`}</span>
        <div
          className="w-10 h-5 rounded-md outline outline-1 outline-zinc-600"
          style={{ backgroundColor: yellowCardColor }}
        >
          <ColorPicker baseColor={yellowCardColor} onChange={setYellowCardColor} />
        </div>
        <span>{yellowCardColor}</span>
      </div>
      <div className={`flex flex-row h-[40px] content-center items-center gap-5 mt-1`}>
        <span className={`content-center`}>{`8d. ${t("pinkCardColor")}:`}</span>
        <div
          className="w-10 h-5 rounded-md outline outline-1 outline-zinc-600"
          style={{ backgroundColor: pinkCardColor }}
        >
          <ColorPicker baseColor={pinkCardColor} onChange={setPinkCardColor} />
        </div>
        <span>{pinkCardColor}</span>
      </div> */}

      <UserNumInput
        classNameNum={`mt-2 block min-w-[80px] px-3 py-2 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 outline outline-1 outline-zinc-600 ml-4`}
        classNameLabel={`flex flex-row content-center min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
        highlight={true}
        label={`9b. ${t("defaultFontSizePresort")}:`}
        placeholder={t("defaultFontSizePresortPlaceholder")}
        upperLimit={199}
        lowerLimit={6}
        step={1}
        disabled={false}
        name="defaultFontSizePresortInput"
        value={defaultFontSizePresort}
        onChange={handleDefaultFontSizePresortInput}
      />
    </div>
  );
};

export { Config9PresortOptions };

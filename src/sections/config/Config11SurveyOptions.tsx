import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
// import Image from "../../assets/images/infoIcon.svg";
import clsx from "clsx";

const getShowSurvey = (state) => state.showSurvey;
const getSetShowSurvey = (state) => state.setShowSurvey;

const Config11SurveyOptions: React.FC = () => {
  const { t } = useTranslation();
  const showSurvey = useStore(getShowSurvey);
  const setShowSurvey = useStore(getSetShowSurvey);

  const handleShowSurveyChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    if (input.target.value === "true") {
      setShowSurvey(true);
    } else {
      setShowSurvey(false);
    }
  };

  return (
    <div className="flex flex-col  pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <div className="flex flex-row content-center gap-5 mt-3">
        <span className="text-lg font-title font-semibold">11. {t("surveyOptions")}</span>{" "}
        {/* <img
          src={Image}
          className=" w-[25px] h-[25px] justify-self-center"
          onClick={() => alert("This is a tooltip")}
          alt="info icon"
        /> */}
      </div>

      <div className="flex flex-row h-[60px] content-center gap-5 mt-3">
        <span className="content-center">
          <mark>{`11a. ${t("includeSurvey")}:`}</mark>
        </span>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": showSurvey,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  !showSurvey,
              }
            )}
            htmlFor="showSurveyTrue"
          >
            <input
              type="radio"
              className="hidden"
              name="showSurvey"
              id="showSurveyTrue" // htlmlFor targets this id.
              value="true"
              onChange={handleShowSurveyChange}
            />
            {t("true")}
          </label>
        </div>
        <div className="content-center">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": !showSurvey,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  showSurvey,
              }
            )}
            htmlFor="showSurveyFalse"
          >
            <input
              type="radio"
              className="hidden"
              name="showSurvey"
              id="showSurveyFalse" // htlmlFor targets this id.
              value="false"
              checked={!showSurvey}
              onChange={handleShowSurveyChange}
            />
            {t("false")}
          </label>
        </div>
      </div>
    </div>
  );
};

export { Config11SurveyOptions };

import React from "react";
import { UserDropdown } from "./UserDropdown";
import { UserTextInput } from "../utils/UserTextInput";
import { useTranslation } from "react-i18next";
import { AddQuestionButton } from "./AddQuestionButton";
import { SurveyImageContainer } from "./SurveyImageContainer";
import clsx from "clsx";
import { shouldDisplayObject } from "./shouldDisplayObject";
import DisplaySurvey from "./DisplaySurvey";

import { ColorPicker } from "./ColorPicker";

import HtmlParser from "html-react-parser";
import { useStore } from "../../globalState/useStore";

// const notifySuccess = () => {
//   toast.success("Item Added", {
//     position: toast.POSITION.BOTTOM_CENTER,
//     transition: Slide,
//   });
// };

// const notifyError = () => {
//   toast.error("Error - Item Not Added", {
//     position: toast.POSITION.BOTTOM_CENTER,
//     transition: Slide,
//   });
// };

const getShowSurvey = (state) => state.showSurvey;
const getDetailsArray = (state) => state.detailsArray;
const getSurveyQuestionType = (state) => state.surveyQuestionType;
const getConfigSurveyInfoBarColor = (state) => state.configSurveyInfoBarColor;
const getSetConfigSurveyInfoBarColor = (state) =>
  state.setConfigSurveyInfoBarColor;
const getDisplayOptionsSemiWarn = (state) => state.displayOptionsSemiWarn;

const getSurveyAnswerRequired = (state) => state.surveyAnswerRequired;
const getSetSurveyAnswerRequired = (state) => state.setSurveyAnswerRequired;
const getSurveyQuestionLabel = (state) => state.surveyQuestionLabel;
const getSetSurveyQuestionLabel = (state) => state.setSurveyQuestionLabel;
const getSurveyQuestionNote = (state) => state.surveyQuestionNote;
const getSetSurveyQuestionNote = (state) => state.setSurveyQuestionNote;
const getSurveyAnswerLenIsLimited = (state) => state.surveyAnswerLenIsLimited;
const getSetSurveyAnswerLenIsLimited = (state) =>
  state.setSurveyAnswerLenIsLimited;
const getSurveyAnswerLenMax = (state) => state.surveyAnswerLenMax;
const getSetSurveyAnswerLenMax = (state) => state.setSurveyAnswerLenMax;
const getSurveyAnswerRestricted = (state) => state.surveyAnswerRestricted;
const getSetSurveyAnswerRestricted = (state) => state.setSurveyAnswerRestricted;
const getSurveyQuestionScale = (state) => state.surveyQuestionScale;
const getSetSurveyQuestionScale = (state) => state.setSurveyQuestionScale;
const getSurveyQuestionOptions = (state) => state.surveyQuestionOptions;
const getSetSurveyQuestionOptions = (state) => state.setSurveyQuestionOptions;
const getSurveyQuestionPlaceholder = (state) => state.surveyQuestionPlaceholder;
const getSetSurveyQuestionPlaceholder = (state) =>
  state.setSurveyQuestionPlaceholder;

const SurveyQuestionInput: React.FC = () => {
  const showSurvey = useStore(getShowSurvey);
  const detailsArray = useStore(getDetailsArray);
  const surveyQuestionType = useStore(getSurveyQuestionType);
  const { t } = useTranslation();

  const configSurveyInfoBarColor = useStore(getConfigSurveyInfoBarColor);
  const setConfigSurveyInfoBarColor = useStore(getSetConfigSurveyInfoBarColor);
  const displayOptionsSemiWarn = useStore(getDisplayOptionsSemiWarn);

  const surveyQuestionLabel = useStore(getSurveyQuestionLabel);
  const setSurveyQuestionLabel = useStore(getSetSurveyQuestionLabel);
  const surveyQuestionNote = useStore(getSurveyQuestionNote);
  const setSurveyQuestionNote = useStore(getSetSurveyQuestionNote);
  const surveyAnswerLenMax = useStore(getSurveyAnswerLenMax);
  const setSurveyAnswerLenMax = useStore(getSetSurveyAnswerLenMax);
  const surveyQuestionScale = useStore(getSurveyQuestionScale);
  const setSurveyQuestionScale = useStore(getSetSurveyQuestionScale);
  const surveyQuestionOptions = useStore(getSurveyQuestionOptions);
  const setSurveyQuestionOptions = useStore(getSetSurveyQuestionOptions);
  const surveyQuestionPlaceholder = useStore(getSurveyQuestionPlaceholder);
  const setSurveyQuestionPlaceholder = useStore(
    getSetSurveyQuestionPlaceholder
  );
  const surveyAnswerLenIsLimited = useStore(getSurveyAnswerLenIsLimited);
  const setSurveyAnswerLenIsLimited = useStore(getSetSurveyAnswerLenIsLimited);
  const surveyAnswerRestricted = useStore(getSurveyAnswerRestricted);
  const setSurveyAnswerRestricted = useStore(getSetSurveyAnswerRestricted);
  const surveyAnswerRequired = useStore(getSurveyAnswerRequired);
  const setSurveyAnswerRequired = useStore(getSetSurveyAnswerRequired);

  const displayBoolean2 = shouldDisplayObject();
  const displayBoolean = displayBoolean2[surveyQuestionType];

  console.log("displayBoolean", displayBoolean);

  const handleSurveyQuestionLabelChange = (inputValue: any) => {
    setSurveyQuestionLabel(inputValue.target.value);
    console.log(inputValue.target.value);
  };

  const handleSurveyQuestionNoteChange = (inputValue: any) => {
    setSurveyQuestionNote(inputValue.target.value);
    console.log(inputValue.target.value);
  };

  const handleSurveyQuestionOptionsChange = (inputValue: any) => {
    setSurveyQuestionOptions(inputValue.target.value);
    console.log(inputValue.target.value);
  };

  const handleSurveyQuestionScaleChange = (inputValue: any) => {
    setSurveyQuestionScale(inputValue.target.value);
    console.log(inputValue.target.value);
  };

  const handleSurveyQuestionPlaceholderChange = (inputValue: any) => {
    setSurveyQuestionPlaceholder(inputValue.target.value);
    console.log(inputValue.target.value);
  };

  const handleSurveyAnswerLenMaxChange = (inputValue: any) => {
    console.log(inputValue.target.value);
    setSurveyAnswerLenMax(inputValue.target.value);
  };

  const handleSurveyAnswerRequiredChange = (inputValue: any) => {
    if (inputValue.target.value === "true") {
      setSurveyAnswerRequired(true);
    } else {
      setSurveyAnswerRequired(false);
    }
  };

  const handleSurveyAnswerLenIsLimitedChange = (inputValue: any) => {
    console.log(inputValue.target.value);
    if (inputValue.target.value === "true") {
      setSurveyAnswerLenIsLimited(true);
    } else {
      setSurveyAnswerLenIsLimited(false);
    }
  };

  const handleSurveyAnswerRestrictedChange = (inputValue: any) => {
    console.log(inputValue.target.value);
    if (inputValue.target.value === "true") {
      setSurveyAnswerRestricted(true);
    } else {
      setSurveyAnswerRestricted(false);
    }
  };

  return (
    <>
      {/* <GlobalStyle />
      <StyledToastContainer />
      <OptionsWarningModal /> */}
      <span className="text-lg font-title font-semibold mt-8">
        Survey Question Creator
      </span>
      {/* {showSurvey === "true" && ( */}
      <div>
        <div>
          <h3>Example Item:</h3>
          <SurveyImageContainer />
          <div className="mt-4 bg-slate-100">
            <div className="mt-4">
              <b>Example Settings:</b>
            </div>
            {detailsArray && (
              <ul>
                {detailsArray.map((item) => (
                  <li key={item}>{HtmlParser(item)}</li>
                ))}
              </ul>
            )}
            {displayOptionsSemiWarn && (
              // <SeparatorWarning>
              <div>
                Separate scale or options with three semicolons
                &nbsp;&nbsp;&nbsp; ;;;
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="mt-4">
            <span className="text-lg font-title font-semibold">
              New Item Settings:
            </span>
          </div>
          <div className="flex flex-row w-12/12 justify-between items-end mt-3">
            <UserDropdown />
            <AddQuestionButton />
          </div>
          <div className="flex flex-row h-[60px] content-center items-center gap-5 mt-3">
            <span
              className={`content-center ${
                displayBoolean.required ? "" : "text-slate-400"
              }`}
            >{`1. ${t("surveyAnswerRequired")}:`}</span>
            <div className="">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-50 text-slate-300 outline-slate-200":
                      !displayBoolean.required,
                    "bg-opacity-100 ": surveyAnswerRequired,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      !surveyAnswerRequired,
                  }
                )}
                htmlFor="surveyAnswerRequiredTrue"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="surveyAnswerRequired"
                  id="surveyAnswerRequiredTrue" // htlmlFor targets this id.
                  value="true"
                  checked={surveyAnswerRequired}
                  onChange={handleSurveyAnswerRequiredChange}
                />
                {t("true")}
              </label>
            </div>
            <div className="">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-50  text-slate-300 outline-slate-200":
                      !displayBoolean.required,
                    "bg-opacity-100": !surveyAnswerRequired,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      surveyAnswerRequired,
                  }
                )}
                htmlFor="surveyAnswerRequiredFalse"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="surveyAnswerRequired"
                  id="surveyAnswerRequiredFalse" // htlmlFor targets this id.
                  value="false"
                  checked={!surveyAnswerRequired}
                  onChange={handleSurveyAnswerRequiredChange}
                />
                {t("false")}
              </label>
            </div>
          </div>

          <UserTextInput
            classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
            classNameLabel={`min-w-[80px] content-center pt-1 mr-1 ${
              displayBoolean.label ? "" : "text-slate-400"
            } select-none`}
            highlight={true}
            placeholder={t("inputLabelPlaceholder")}
            label="2. Label:"
            disabled={!displayBoolean.label}
            name="surveyQuestionLabel"
            value={surveyQuestionLabel}
            onChange={handleSurveyQuestionLabelChange}
          />
          <UserTextInput
            label="3. Note:"
            classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
            classNameLabel={`min-w-[130px] content-center pt-1 mr-1 disabled:opacity-50 select-none ${
              displayBoolean.note ? "" : "text-slate-400"
            }`}
            highlight={true}
            placeholder={t("inputNotePlaceholder")}
            disabled={!displayBoolean.note}
            name="surveyQuestionNote"
            value={surveyQuestionNote}
            onChange={handleSurveyQuestionNoteChange}
          />
          <UserTextInput
            classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
            classNameLabel={`min-w-[130px] content-center pt-1 mr-1 disabled:opacity-50 select-none ${
              displayBoolean.options ? "" : "text-slate-400"
            }`}
            highlight={true}
            placeholder={t("inputOptionsPlaceholder")}
            disabled={!displayBoolean.options}
            name="surveyQuestionOptions"
            value={surveyQuestionOptions}
            onChange={handleSurveyQuestionOptionsChange}
            label="4. Options:"
          />
          <UserTextInput
            classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
            classNameLabel={`min-w-[130px] content-center pt-1 mr-1 disabled:opacity-50 select-none ${
              displayBoolean.scale ? "" : "text-slate-400"
            }`}
            label="5. Scale:"
            highlight={true}
            placeholder={t("inputScalePlaceholder")}
            disabled={!displayBoolean.scale}
            name="surveyQuestionScale"
            value={surveyQuestionScale}
            onChange={handleSurveyQuestionScaleChange}
          />

          <UserTextInput
            classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
            classNameLabel={`min-w-[130px] content-center pt-1 mr-1 disabled:opacity-50 select-none ${
              displayBoolean.placeholder ? "" : "text-slate-400"
            }`}
            highlight={true}
            placeholder={t("inputLabelPlaceholder")}
            disabled={!displayBoolean.placeholder}
            name="surveyQuestionPlaceholder"
            value={surveyQuestionPlaceholder}
            onChange={handleSurveyQuestionPlaceholderChange}
            label="6. Placeholder:"
          />
          <div className="flex flex-row h-[60px] content-center items-center gap-5 mt-3">
            <span
              className={`content-center ${
                displayBoolean.limited ? "" : "text-slate-400"
              }`}
            >{`7. ${t("surveyAnswerLenIsLimited")}:`}</span>
            <div className="">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-50  text-slate-300 outline-slate-200":
                      !displayBoolean.limited,
                    "bg-opacity-100": surveyAnswerLenIsLimited,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      !surveyAnswerLenIsLimited,
                  }
                )}
                htmlFor="surveyAnswerLenIsLimitedTrue"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="surveyAnswerLenIsLimited"
                  id="surveyAnswerLenIsLimitedTrue" // htlmlFor targets this id.
                  value="true"
                  checked={surveyAnswerLenIsLimited}
                  onChange={handleSurveyAnswerLenIsLimitedChange}
                />
                {t("true")}
              </label>
            </div>
            <div className="">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-50  text-slate-300 outline-slate-200":
                      !displayBoolean.limited,
                    "bg-opacity-100": !surveyAnswerLenIsLimited,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      surveyAnswerLenIsLimited,
                  }
                )}
                htmlFor="surveyAnswerLenIsLimitedFalse"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="surveyAnswerLenIsLimited"
                  id="surveyAnswerLenIsLimitedFalse" // htlmlFor targets this id.
                  value="false"
                  checked={!surveyAnswerLenIsLimited}
                  onChange={handleSurveyAnswerLenIsLimitedChange}
                />
                {t("false")}
              </label>
            </div>
          </div>
          <UserTextInput
            classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
            classNameLabel={`min-w-[130px] content-center pt-1 mr-1 disabled:opacity-50 select-none ${
              displayBoolean.maxLen ? "" : "text-slate-400"
            }`}
            label="8. Answer Maximum Length:"
            highlight={true}
            placeholder={t("inputLabelPlaceholder")}
            disabled={!displayBoolean.maxLen}
            name="surveyQuestionPlaceholder"
            value={surveyAnswerLenMax}
            onChange={handleSurveyAnswerLenMaxChange}
          />

          <div className="flex flex-row h-[60px] content-center items-center gap-5 mt-3">
            <span
              className={`content-center ${
                displayBoolean.restricted ? "" : "text-slate-400"
              }`}
            >{`9. ${t("surveyAnswerRestricted")}:`}</span>
            <div className="">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-50  text-slate-300 outline-slate-200":
                      !displayBoolean.restricted,
                    "bg-opacity-100": surveyAnswerRestricted,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      !surveyAnswerRestricted,
                  }
                )}
                htmlFor="surveyAnswerRestrictedTrue"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="surveyAnswerRestricted"
                  id="surveyAnswerRestrictedTrue" // htlmlFor targets this id.
                  value="true"
                  checked={surveyAnswerRestricted}
                  onChange={handleSurveyAnswerRestrictedChange}
                />
                {t("true")}
              </label>
            </div>
            <div className="">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-50  text-slate-300 outline-slate-200":
                      !displayBoolean.restricted,
                    "bg-opacity-100": !surveyAnswerRestricted,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                      surveyAnswerRestricted,
                  }
                )}
                htmlFor="surveyAnswerRestrictedFalse"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="surveyAnswerRestricted"
                  id="surveyAnswerRestrictedFalse" // htlmlFor targets this id.
                  value="false"
                  checked={!surveyAnswerRestricted}
                  onChange={handleSurveyAnswerRestrictedChange}
                />
                {t("false")}
              </label>
            </div>
          </div>
          <div
            className={`flex flex-row h-[40px] content-center items-center gap-5 mt-1`}
          >
            <span
              className={`content-center ${
                displayBoolean.bg ? "" : "text-slate-400"
              }`}
            >{`10. ${t("surveyInfoBarColor")}:`}</span>
            <div
              className="w-10 h-5 rounded-md outline outline-1 outline-zinc-600"
              style={{ backgroundColor: configSurveyInfoBarColor }}
            >
              <ColorPicker
                baseColor={configSurveyInfoBarColor}
                onChange={setConfigSurveyInfoBarColor}
                disabled={!displayBoolean.bg}
              />
            </div>
            <span className={`${displayBoolean.bg ? "" : "text-slate-400"}`}>
              {configSurveyInfoBarColor}
            </span>
          </div>
        </div>
        {/* <SurveyItemDndList /> */}
        <DisplaySurvey />
        {/* </SettingsContainer> */}
      </div>
      {/* )} */}
    </>
  );
};

export { SurveyQuestionInput };

// const Title = styled.h1`
//   font-size: 25px;
//   width: 70vw;
//   margin-left: 10px;
// `;

// const SurveyContainer = styled.div`
//   margin-bottom: 25px;
//   padding-left: 10px;
// `;

// const ExampleContainer = styled.div`
//   border: 3px solid black;
//   border-top-right-radius: 5px;
//   border-top-left-radius: 5px;
//   background: var(--second-theme-color);
//   margin-top: 20px;
//   margin-bottom: 0px;
//   padding-left: 10px;
//   width: 75vw;
//   max-width: 1200px;
//   height: auto;
//   transition: opacity 3s ease-in-out;
// `;

// const SettingsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: 3px solid black;
//   border-top: 0px solid black;
//   border-bottom-left-radius: 5px;
//   border-bottom-right-radius: 5px;
//   margin-top: 0px;
//   margin-bottom: 5px;
//   padding-top: 10px;
//   padding-left: 10px;
//   padding-bottom: 5px;
//   width: 75vw;
//   max-width: 1200px;
// `;

// const AddItemButton = styled(GeneralButton)`
//   margin-left: 70px; // 68vw;
//   margin-top: 50px; // 68vw;
//   margin-bottom: 10px; // 68vw;
//   width: 150px;
// `;

// const ImageContainer = styled.div`
//   width: clamp(250px, 70vw, 1175px);
// `;

// const StyledToastContainer = styled(ToastContainer).attrs({
//   // custom props
// })`
//   .Toastify__toast--success {
//     padding-left: 40px;
//     background-color: var(--main-theme-color);
//     width: 200px;
//   }
// `;

// const ColorLabel = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-left: 70px;
//   margin-top: 20px;
//   align-items: center;
//   gap: 20px;
// `;

// const SettingsTextContainer = styled.h3`
//   margin-top: 30px;
//   margin-bottom: 0px;
//   margin-left: 30px;

//   ul {
//     font-family: arial;
//     font-weight: normal;
//     margin-top: 3px;
//     list-style-type: none;
//   }
// `;

// const SeparatorWarning = styled.div`
//   background-color: goldenrod;
//   font-weight: bold;
//   padding: 10px;
//   width: 465px;
//   margin-bottom: 10px;
//   margin-left: 20px;
//   border-radius: 5px;
// `;

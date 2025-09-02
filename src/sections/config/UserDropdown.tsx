import React from "react";
import { exportSurveyObject } from "./exportSurveyObject";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";

const getSurveyQuestionType = (state) => state.surveyQuestionType;
const getSetSurveyQuestionType = (state) => state.setSurveyQuestionType;
const getSetDetailsArray = (state) => state.setDetailsArray;

const getSetShowSurveytextImage = (state) => state.setShowSurveytextImage;
const getSetShowSurveytextareaImage = (state) => state.setShowSurveytextareaImage;
const getSetShowSurveyradioImage = (state) => state.setShowSurveyradioImage;
const getSetShowSurveyselectImage = (state) => state.setShowSurveyselectImage;
const getSetShowSurveycheckboxImage = (state) => state.setShowSurveycheckboxImage;
const getSetShowSurveyrating2Image = (state) => state.setShowSurveyrating2Image;
const getSetShowSurveyrating5Image = (state) => state.setShowSurveyrating5Image;
const getSetShowSurveyrating10Image = (state) => state.setShowSurveyrating10Image;
const getSetShowSurveyinformationImage = (state) => state.setShowSurveyinformationImage;
const getSetShowSurveylikertImage = (state) => state.setShowSurveylikertImage;

const getSetSurveyQuestionLabel = (state) => state.setSurveyQuestionLabel;
const getSetSurveyQuestionNote = (state) => state.setSurveyQuestionNote;
const getSetSurveyQuestionOptions = (state) => state.setSurveyQuestionOptions;
const getSetSurveyQuestionScale = (state) => state.setSurveyQuestionScale;
const getSetSurveyQuestionPlaceholder = (state) => state.setSurveyQuestionPlaceholder;
const getSetSurveyAnswerLenMax = (state) => state.setSurveyAnswerLenMax;
const getSetSurveyAnswerRestricted = (state) => state.setSurveyAnswerRestricted;

const getSetSurveyAnswerLenIsLimited = (state) => state.setSurveyAnswerLenIsLimited;

const UserDropdown: React.FC = () => {
  const { t } = useTranslation();

  const surveyQuestionType = useStore(getSurveyQuestionType);
  const setSurveyQuestionType = useStore(getSetSurveyQuestionType);
  //   const detailsArray = useStore(getDetailsArray);
  const setDetailsArray = useStore(getSetDetailsArray);
  const setShowSurveytextImage = useStore(getSetShowSurveytextImage);
  const setShowSurveytextareaImage = useStore(getSetShowSurveytextareaImage);
  const setShowSurveyradioImage = useStore(getSetShowSurveyradioImage);
  const setShowSurveyselectImage = useStore(getSetShowSurveyselectImage);
  const setShowSurveycheckboxImage = useStore(getSetShowSurveycheckboxImage);
  const setShowSurveyrating2Image = useStore(getSetShowSurveyrating2Image);
  const setShowSurveyrating5Image = useStore(getSetShowSurveyrating5Image);
  const setShowSurveyrating10Image = useStore(getSetShowSurveyrating10Image);
  const setShowSurveyinformationImage = useStore(getSetShowSurveyinformationImage);
  const setShowSurveylikertImage = useStore(getSetShowSurveylikertImage);
  const setSurveyQuestionLabel = useStore(getSetSurveyQuestionLabel);
  const setSurveyQuestionNote = useStore(getSetSurveyQuestionNote);
  const setSurveyQuestionOptions = useStore(getSetSurveyQuestionOptions);
  const setSurveyQuestionScale = useStore(getSetSurveyQuestionScale);
  const setSurveyQuestionPlaceholder = useStore(getSetSurveyQuestionPlaceholder);
  const setSurveyAnswerLenMax = useStore(getSetSurveyAnswerLenMax);
  const setSurveyAnswerRestricted = useStore(getSetSurveyAnswerRestricted);
  const setSurveyAnswerLenIsLimited = useStore(getSetSurveyAnswerLenIsLimited);

  const clearImages = () => {
    setShowSurveytextImage(false);
    setShowSurveytextareaImage(false);
    setShowSurveyradioImage(false);
    setShowSurveyselectImage(false);
    setShowSurveycheckboxImage(false);
    setShowSurveyrating2Image(false);
    setShowSurveyrating5Image(false);
    setShowSurveyrating10Image(false);
    setShowSurveyinformationImage(false);
    setShowSurveylikertImage(false);
  };

  const clearInputForm = () => {
    setSurveyQuestionLabel("");
    setSurveyQuestionNote("");
    setSurveyQuestionOptions([]);
    setSurveyQuestionScale("");
    setSurveyQuestionPlaceholder("");
    setSurveyAnswerLenIsLimited(false);
    setSurveyAnswerLenMax(999);
    setSurveyAnswerRestricted(false);
  };

  const handleCategoryChange = (category) => {
    clearImages();
    setSurveyQuestionType(category);
    if (category === "text") {
      setShowSurveytextImage(true);
    }
    if (category === "textarea") {
      setShowSurveytextareaImage(true);
    }
    if (category === "radio") {
      setShowSurveyradioImage(true);
    }
    if (category === "select") {
      setShowSurveyselectImage(true);
    }
    if (category === "checkbox") {
      setShowSurveycheckboxImage(true);
    }
    if (category === "rating2") {
      setShowSurveyrating2Image(true);
    }
    if (category === "rating5") {
      setShowSurveyrating5Image(true);
    }
    if (category === "rating10") {
      setShowSurveyrating10Image(true);
    }
    if (category === "information") {
      setShowSurveyinformationImage(true);
    }
    // if (category === "likert") {
    //   setShowSurveylikertImage(true);
    // }
    const detailsArray2 = exportSurveyObject();
    setDetailsArray(detailsArray2[category]);
    clearInputForm();
  };

  return (
    // <InputContainerDiv>
    <div>
      {/* <TitleSpan>Select question type</TitleSpan> */}
      <div>1. {t("selectQuestionType")}</div>
      <select
        name="category"
        value={surveyQuestionType}
        onChange={(event) => handleCategoryChange(event.target.value)}
        className="block min-w-[200px] px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-md disabled:opacity-50 hover:cursor-pointer"
      >
        <option id="0">information</option>
        <option id="1">text</option>
        <option id="2">textarea</option>
        <option id="3">radio</option>
        <option id="4">select</option>
        <option id="5">checkbox</option>
        {/* <option id="6">likert</option> */}
        <option id="7">rating2</option>
        <option id="8">rating5</option>
        <option id="9">rating10</option>
      </select>
    </div>
  );
};

export { UserDropdown };

// const InputContainerDiv = styled.div`
//   display: flex;
//   margin-top: 25px;
//   margin-left: 70px;
//   width: 800px;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const TitleSpan = styled.span`
//   margin-right: 10px;
// `;

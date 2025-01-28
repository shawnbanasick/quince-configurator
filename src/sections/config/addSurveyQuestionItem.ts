import { useStore } from "../../globalState/useStore";
import { shouldDisplayObject } from "./shouldDisplayObject";
import decodeHTML from "../utils/decodeHTML";
import clearAddItemForm from "./clearAddItemForm";
import HtmlParser from "html-react-parser";
import clone from "lodash/clone";

const getShowSurveytextImage = (state) => state.showSurveytextImage;
const getShowSurveytextareaImage = (state) => state.showSurveytextareaImage;
const getShowSurveyradioImage = (state) => state.showSurveyradioImage;
const getShowSurveyselectImage = (state) => state.showSurveyselectImage;
const getShowSurveycheckboxImage = (state) => state.showSurveycheckboxImage;
const getShowSurveylikertImage = (state) => state.showSurveylikertImage;
const getShowSurveyrating2Image = (state) => state.showSurveyrating2Image;
const getShowSurveyrating5Image = (state) => state.showSurveyrating5Image;
const getShowSurveyrating10Image = (state) => state.showSurveyrating10Image;
const getShowSurveyinformationImage = (state) =>
  state.showSurveyinformationImage;
const getSurveyQuestionType = (state) => state.surveyQuestionType;
const getSurveyAnswerRequired = (state) => state.surveyAnswerRequired;
const getSurveyQuestionLabel = (state) => state.surveyQuestionLabel;
const getSurveyQuestionNote = (state) => state.surveyQuestionNote;
const getSurveyAnswerLenIsLimited = (state) => state.surveyAnswerLenIsLimited;
const getSurveyAnswerLenMax = (state) => state.surveyAnswerLenMax;
const getSurveyAnswerRestricted = (state) => state.surveyAnswerRestricted;
const getSurveyQuestionScale = (state) => state.surveyQuestionScale;
const getSurveyQuestionOptions = (state) => state.surveyQuestionOptions;
const getSurveyPlaceholder = (state) => state.surveyPlaceholder;
const getConfigSurveyInfoBarColor = (state) => state.configSurveyInfoBarColor;
const getTriggerOptionsWarningModal = (state) =>
  state.triggerOptionsWarningModal;
const getSurveyQuestionsArray = (state) => state.surveyQuestionsArray;
const getSetSurveyQuestionsArray = (state) => state.setSurveyQuestionsArray;

interface NewItemObj {
  surveyQuestionType?: string;
  required?: boolean;
  label?: string;
  note?: string;
}

const getOptionsArray = (options) => {
  let array = options.split(";;;");
  array = array.filter(function (e) {
    return e;
  });
  array = array.map((x) => x.replace(/\s/g, ""));
  return array;
};

const addSurveyQuestionItem = () => {
  const showSurveyinformationImage = useStore(getShowSurveyinformationImage);
  const showSurveytextImage = useStore(getShowSurveytextImage);
  const showSurveytextareaImage = useStore(getShowSurveytextareaImage);
  const showSurveyradioImage = useStore(getShowSurveyradioImage);
  const showSurveyselectImage = useStore(getShowSurveyselectImage);
  const showSurveycheckboxImage = useStore(getShowSurveycheckboxImage);
  const showSurveylikertImage = useStore(getShowSurveylikertImage);
  const showSurveyrating2Image = useStore(getShowSurveyrating2Image);
  const showSurveyrating5Image = useStore(getShowSurveyrating5Image);
  const showSurveyrating10Image = useStore(getShowSurveyrating10Image);
  const surveyQuestionType = useStore(getSurveyQuestionType);
  const surveyAnswerRequired = useStore(getSurveyAnswerRequired);
  const surveyQuestionLabel = useStore(getSurveyQuestionLabel);
  const surveyQuestionNote = useStore(getSurveyQuestionNote);
  const surveyAnswerLenIsLimited = useStore(getSurveyAnswerLenIsLimited);
  const surveyAnswerLenMax = useStore(getSurveyAnswerLenMax);
  const surveyAnswerRestricted = useStore(getSurveyAnswerRestricted);
  const surveyQuestionScale = useStore(getSurveyQuestionScale);
  const surveyQuestionOptions = useStore(getSurveyQuestionOptions);
  const surveyPlaceholder = useStore(getSurveyPlaceholder);
  const configSurveyInfoBarColor = useStore(getConfigSurveyInfoBarColor);
  const surveyQuestionsArray = useStore(getSurveyQuestionsArray);
  const triggerOptionsWarningModal = useStore(getTriggerOptionsWarningModal);
  const setSurveyQuestionsArray = useStore(getSetSurveyQuestionsArray);

  let displayOptionsSemiWarn = false;

  if (
    showSurveyrating5Image === true ||
    showSurveyrating10Image === true ||
    showSurveyrating2Image === true ||
    showSurveyradioImage === true ||
    showSurveyselectImage === true ||
    showSurveycheckboxImage === true ||
    showSurveylikertImage === true
  ) {
    displayOptionsSemiWarn = true;
  }

  const displayBoolean2 = shouldDisplayObject();
  const displayBoolean = displayBoolean2[surveyQuestionType];

  try {
    displayOptionsSemiWarn = false;
    const newItemObj: newItemObj = {};
    newItemObj.surveyQuestionType = surveyQuestionType;
    const newItemArray = [`<b>item type:</b> ${surveyQuestionType}`];

    if (displayBoolean.required === true) {
      newItemObj.required = surveyAnswerRequired;
      newItemArray.push(
        `<b>answer required (true/false):</b> ${surveyAnswerRequired}`
      );
    }
    if (displayBoolean.label === true) {
      newItemObj.label = surveyQuestionLabel;
      newItemArray.push(
        `<b>label text:</b> ${decodeHTML(surveyQuestionLabel)}`
      );
    }
    if (displayBoolean.note === true) {
      newItemObj.note = surveyQuestionNote;
      newItemArray.push(`<b>note:</b> ${decodeHTML(surveyQuestionNote)}`);
    }
    if (displayBoolean.limited === true) {
      newItemObj.limited = surveyAnswerLenIsLimited;
      newItemObj.length = surveyAnswerLenMax;
      if (
        surveyAnswerLenIsLimited === "false" ||
        surveyAnswerLenIsLimited === false
      ) {
        newItemArray.push(`<b>length limit:</b> false`);
      } else {
        newItemArray.push(
          `<b>length limit:</b> ${surveyAnswerLenIsLimited}`,
          `<b>max length:</b> ${surveyAnswerLenMax}`
        );
      }
    }
    if (displayBoolean.placeholder === true) {
      newItemObj.placeholder = surveyPlaceholder;
      newItemArray.push(`<b>placeholder:</b> ${surveyPlaceholder}`);
    }
    if (displayBoolean.restricted === true) {
      newItemObj.restricted = surveyAnswerRestricted;
      newItemArray.push(
        `<b>answer restricted to numbers "0-9" (true/false):</b> ${surveyAnswerRestricted}`
      );
    }
    if (displayBoolean.scale === true) {
      newItemObj.scale = surveyQuestionScale;
      let currentScale = decodeHTML(surveyQuestionScale);

      let testArray = getOptionsArray(currentScale);
      if (testArray.length < 2) {
        console.log("there is an issue");
        triggerOptionsWarningModal(true);
        return null;
      }

      newItemArray.push(`scale: ${decodeHTML(surveyQuestionScale)}`);
    }
    if (displayBoolean.options === true) {
      let currentOptions = decodeHTML(surveyQuestionOptions);

      let testArray = getOptionsArray(currentOptions);
      if (testArray.length < 2) {
        if (surveyQuestionType !== "information") {
          console.log("there is an issue");
          triggerOptionsWarningModal(true);
          return null;
        }
      }

      displayOptionsSemiWarn = true;
      newItemObj.options = surveyQuestionOptions;
      newItemArray.push(`options: ${decodeHTML(surveyQuestionOptions)}`);
    }
    if (displayBoolean.bg === true) {
      newItemObj.bg = configSurveyInfoBarColor;
      newItemArray.push(`background: ${configSurveyInfoBarColor}`);
    }
    const val = Math.floor(1000 + Math.random() * 9000);
    newItemObj.id = `item-${val}`;
    newItemObj.content = newItemArray;

    // get survey questions from STATE
    // surveyQuestionsArray = clone(surveyQuestionsArray);

    // ADD new question to ARRAY and save to STATE

    surveyQuestionsArray.push(newItemObj);
    setSurveyQuestionsArray(surveyQuestionsArray);

    const newArray = [...surveyQuestionsArray];

    localStorage.setItem("surveyQuestionsArray", JSON.stringify(newArray));

    // notifySuccess();
    // clearAddItemForm();
  } catch (error) {
    // notifyError();
    console.log(error);
  }
}; // end add item

export { addSurveyQuestionItem };

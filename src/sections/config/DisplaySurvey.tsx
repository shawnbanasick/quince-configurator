import React from "react";
import SurveyTextElement from "./SurveyTextElement";
import SurveyTextAreaElement from "./SurveyTextAreaElement";
import SurveyRadioElement from "./SurveyRadioElement";
import SurveyDropdownElement from "./SurveyDropdownElement";
import SurveyCheckboxElement from "./SurveyCheckboxElement";
import SurveyRating2Element from "./SurveyRating2Element";
import SurveyRating5Element from "./SurveyRating5Element";
import SurveyRating10Element from "./SurveyRating10Element";
import SurveyLikertElement from "./SurveyLikertElement";
import SurveyInformationElement from "./SurveyInformationElement";
import { v4 as uuid } from "uuid";
// import AnswerAllSurveyQuestionsModal from "./AnswerAllSurveyQuestionsModal";
// import ReactHtmlParser from "html-react-parser";
// import decodeHTML from "../../utilities/decodeHTML";
// import SurveyHelpModal from "./SurveyHelpModal";
// import useSettingsStore from "../../globalState/useSettingsStore";
import { useStore } from "../../globalState/useStore";
// import PromptUnload from "../../utilities/PromptUnload";

// const getLangObj = (state) => state.langObj;
// const getConfigObj = (state) => state.configObj;
// const getSurveyQuestionObjArray = (state) => state.surveyQuestionObjArray;
const getCheckReqQuesComplete = (state) => state.checkRequiredQuestionsComplete;
// const getSetDisplayNextButton = (state) => state.setDisplayNextButton;

const getSurveyQuestionInputPreviewQuestions = (state) =>
  state.surveyQuestionInputPreviewQuestions;

const SurveyPage = () => {
  const surveyQuestionInputPreviewQuestions = useStore(
    getSurveyQuestionInputPreviewQuestions
  );
  // STATE
  //   const configObj = useSettingsStore(getConfigObj);
  //   const langObj = useSettingsStore(getLangObj);
  //   const surveyQuestionObjArray = useSettingsStore(getSurveyQuestionObjArray);
  const checkRequiredQuestionsComplete = false;
  //   const setDisplayNextButton = useStore(getSetDisplayNextButton);

  const headerBarColor = "#83cafe";
  //   const surveyQuestionObjects = surveyQuestionObjArray;

  // setup language
  //   const surveyHeader = ReactHtmlParser(decodeHTML(langObj.surveyHeader)) || "";
  const surveyHeader = "Survey Questions";

  // set next button display
  //   setDisplayNextButton(true);

  const SurveyQuestions = () => {
    const surveyQuestionObjects = surveyQuestionInputPreviewQuestions;
    console.log("surveyQuestionObjects", surveyQuestionObjects);
    if (surveyQuestionObjects.length === 0) {
      //   return <NoQuestionsDiv>No questions added.</NoQuestionsDiv>;
      return <div>No questions added.</div>;
    } else {
      const QuestionList = surveyQuestionObjects.map((object, index) => {
        if (object.surveyQuestionType === "text") {
          return (
            <SurveyTextElement
              key={uuid()}
              check={checkRequiredQuestionsComplete}
              opts={object}
            />
          );
        }
        if (object.surveyQuestionType === "textarea") {
          return (
            <SurveyTextAreaElement
              key={uuid()}
              check={checkRequiredQuestionsComplete}
              opts={object}
            />
          );
        }
        if (object.surveyQuestionType === "radio") {
          return (
            <SurveyRadioElement
              key={uuid()}
              check={checkRequiredQuestionsComplete}
              opts={object}
            />
          );
        }
        if (object.surveyQuestionType === "select") {
          return (
            <SurveyDropdownElement
              key={uuid()}
              check={checkRequiredQuestionsComplete}
              opts={object}
            />
          );
        }
        if (object.surveyQuestionType === "checkbox") {
          return (
            <SurveyCheckboxElement
              key={uuid()}
              check={checkRequiredQuestionsComplete}
              opts={object}
            />
          );
        }
        if (object.surveyQuestionType === "rating2") {
          return (
            <SurveyRating2Element
              key={uuid()}
              check={checkRequiredQuestionsComplete}
              opts={object}
            />
          );
        }
        if (object.surveyQuestionType === "likert") {
          return (
            <SurveyLikertElement
              key={uuid()}
              check={checkRequiredQuestionsComplete}
              opts={object}
            />
          );
        }
        if (object.surveyQuestionType === "rating5") {
          return (
            <SurveyRating5Element
              key={uuid()}
              check={checkRequiredQuestionsComplete}
              opts={object}
            />
          );
        }
        if (object.surveyQuestionType === "rating10") {
          return (
            <SurveyRating10Element
              key={uuid()}
              check={checkRequiredQuestionsComplete}
              opts={object}
            />
          );
        }
        if (object.surveyQuestionType === "information") {
          return <SurveyInformationElement key={uuid()} opts={object} />;
        }
        return null;
      });
      return QuestionList;
    }
  };

  return (
    <React.Fragment>
      <h2 className="mt-8"> Survey Question Preview</h2>
      {/* <PromptUnload /> */}
      {/* <SurveyHelpModal /> */}
      {/* <AnswerAllSurveyQuestionsModal /> */}
      {/* <SortTitleBar background={headerBarColor}>{surveyHeader}</SortTitleBar>
      <SortTitleBar background={headerBarColor}>{surveyHeader}</SortTitleBar> */}
      {/* <Container> */}
      <div>
        <SurveyQuestions />
      </div>
    </React.Fragment>
  );
};

export default SurveyPage;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-bottom: 150px;
//   margin-top: 50px;
// `;

// const SortTitleBar = styled.div`
//   width: 100vw;
//   padding-left: 1.5vw;
//   padding-right: 1.5vw;
//   padding-top: 5px;
//   min-height: 50px;
//   background-color: ${(props) => props.background};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   font-weight: bold;
//   font-size: 28px;
//   position: fixed;
//   top: 0;
//   z-index: 9999;
// `;

// const NoQuestionsDiv = styled.div`
//   margin-top: 50px;
//   font-size: 24px;
//   font-weight: bold;
// `;

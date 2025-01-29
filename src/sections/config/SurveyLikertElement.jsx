import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ReactHtmlParser from "html-react-parser";

const SurveyLikertElement = (props) => {
  // PROPS
  const checkRequiredQuestionsComplete = props.check;
  // gives the number of questions
  const questionId = `itemNum${props.opts.itemNum}`;
  const labelText = ReactHtmlParser(props.opts.label) || "";

  // PERSISTENT STATE
  let [selected, setSelected] = useState("");

  // LOCAL STATE
  const [formatOptions, setFormatOptions] = useState({
    bgColor: "whitesmoke",
    border: "none",
  });

  // ****** GET SCALE ARRAY *******

  const getScaleArray = (options) => {
    let array = options.split(";;;");
    return array;
  };
  const scaleArray = getScaleArray(props.opts.scale);

  // ****** ON CHANGE  *******
  const handleChange = (e) => {
    const resultsSurvey = JSON.parse(localStorage.getItem("resultsSurvey"));
    resultsSurvey[`itemNum${props.opts.itemNum}`] = +e.target.value + 1;
    localStorage.setItem("resultsSurvey", JSON.stringify(resultsSurvey));
  }; // end handleChange

  // ****** CHECK IF ALL PARTS ANSWERED on render *******
  let setYellow = false;
  if (selected.length === 0) {
    setYellow = true;
  }

  useEffect(() => {
    // if is a required question, check if all parts answered
    if (
      (props.opts.required === true || props.opts.required === "true") &&
      checkRequiredQuestionsComplete === true &&
      setYellow
    ) {
      setFormatOptions({
        bgColor: "rgba(253, 224, 71, .5)",
        border: "3px dashed black",
      });
    } else {
      setFormatOptions({
        bgColor: "whitesmoke",
        border: "none",
      });
    }
  }, [checkRequiredQuestionsComplete, setYellow, props.opts.required]);

  const scaleList = scaleArray.map((item) => {
    return (
      <ScaleDiv key={uuid()}>
        <div>{ReactHtmlParser(item)}</div>
      </ScaleDiv>
    );
  });

  // template
  const RadioInput = ({ value, checked, setter }) => {
    return (
      <>
        <input
          type="radio"
          checked={checked === value}
          onChange={() => setter(value)}
          value={value}
        />
      </>
    );
  };

  const RadioItems = () => {
    const radioList = scaleArray.map((item, index) => (
      // <RadioButtons
      <div
        className="radioButtons"
        key={uuid()}
        onChange={(e) => handleChange(e)}
      >
        {/* <RadioInput */}
        <div
          className="radioInput"
          value={index}
          checked={selected}
          setter={setSelected}
        />
      </div>
    ));
    return (
      // <ButtonContainer className="buttonContainer" cols={scaleArray.length}>
      <div className="buttonContainer" cols={scaleArray.length}>
        {radioList}
      </div>
    );
  };

  return (
    // <Container bgColor={formatOptions.bgColor} border={formatOptions.border}>
    <div bgColor={formatOptions.bgColor} border={formatOptions.border}>
      {/* <TitleBar> */}
      <div>
        <div>{labelText}</div>
      </div>
      {/* <RadioContainer className="radioContainer"> */}
      <div className="radioContainer">
        {/* <RatingTitle className="ratingTitle" cols={scaleArray.length}> */}
        <div className="ratingTitle" cols={scaleArray.length}>
          {scaleList}
        </div>
        <RadioItems />
      </div>
    </div>
  );
};

export default SurveyLikertElement;

// const Container = styled.div`
//   width: 90vw;
//   padding: 12px 20px 0px 20px;
//   margin-left: 20px;
//   margin-right: 20px;
//   max-width: 1300px;
//   min-height: 170px;
//   background-color: ${(props) => props.bgColor};
//   outline: ${(props) => props.border};
//   outline-offset: -3px;
// `;

// const TitleBar = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 50px;
//   padding: 5px;
//   font-size: 18px;
//   text-align: center;
//   background-color: lightgray;
//   width: 100%;
//   border-radius: 3px;
// `;

// const RadioContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: left;
//   align-items: left;
//   padding: 10px 20px 0px 20px;
//   vertical-align: center;
//   margin-top: 0px;
//   height: auto;
//   min-height: 50px;
//   font-size: 16px;
//   background-color: white;
//   width: 100%;
//   border-radius: 3px;
//   border: 2px solid lightgray;

//   label {
//     margin-left: 8px;
//   }
// `;

// const ButtonContainer = styled.div`
//   display: inline-grid;
//   grid-template-columns: ${(props) =>
//     `repeat(${props.cols}, ${100 / props.cols}%)`};
//   margin-bottom: 3px;
//   justify-items: center;
//   align-items: center;
// `;

// const RatingTitle = styled.div`
//   display: inline-grid;
//   grid-template-columns: ${(props) =>
//     `repeat(${props.cols}, ${100 / props.cols}%)`};
// `;

// const ScaleDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// `;

// const RadioButtons = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   justify-self: center;
//   margin-bottom: 5px;
//   padding: 5px;
//   width: 25px;
//   input {
//     height: 1.5em;
//     width: 20px;
//   }
// `;

import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ReactHtmlParser from "html-react-parser";
import flatten from "lodash/flatten";
import countBy from "lodash/countBy";
import { decodeHTML } from "../utils/decodeHTML";

const SurveyRatings2Element = (props) => {
  // HELPER FUNCTIONS
  const getOptionsArray = (options) => {
    let array = options.split(";;;");
    array = array.filter(function (e) {
      return e;
    });
    if (array.length === 0) {
      array = ["", ""];
    }
    return array;
  };

  // PROPS
  const optsArray = getOptionsArray(props.opts.options);
  const checkRequiredQuestionsComplete = props.check;
  // gives the number of questions
  const rows = optsArray.length;
  const questionId = `itemNum${props.opts.itemNum}`;
  const labelText = ReactHtmlParser(decodeHTML(props.opts.label)) || "";
  const noteText = ReactHtmlParser(decodeHTML(props.opts.note)) || "";
  let displayNoteText = true;
  if (noteText.length < 1 || noteText === "") {
    displayNoteText = false;
  }

  // PERSISTENT STATE
  let [checkedState, setCheckedState] = useState(
    Array.from({ length: rows }, () => Array.from({ length: 2 }, () => false))
  );

  // LOCAL STATE
  const [formatOptions, setFormatOptions] = useState({
    bgColor: "whitesmoke",
    border: "none",
  });

  const scaleArray = getOptionsArray(props.opts.scale);

  // ****** ON CHANGE  *******
  const handleChange = (selectedRow, column, e) => {
    const resultsSurvey = JSON.parse(localStorage.getItem("resultsSurvey"));
    // update local state with radio selected
    const newArray = [];
    const newCheckedState = checkedState.map(function (row, index) {
      if (selectedRow === index) {
        row.map(function (item, index) {
          if (column === index) {
            newArray.push(true);
            return null;
          } else {
            newArray.push(false);
            return null;
          }
        });
        return newArray;
      } else {
        return row;
      }
    });
    setCheckedState(newCheckedState);
    // record if answered or not
    let arrayLen2 = checkedState.length;
    let flattenedCheckedState2 = flatten([...newCheckedState]);
    let count2 = countBy(flattenedCheckedState2);
    let objTestValue2 = count2[true] || 0;

    let textString = "";
    newCheckedState.forEach((item, index) => {
      // let name = `itemNum${props.opts.itemNum}-${index + 1}`;
      let value = item[0] ? "1" : "2";
      if (index === 0) {
        textString += value;
      } else {
        textString += "," + value;
      }
    });
    resultsSurvey[`itemNum${props.opts.itemNum}`] = textString;

    if (objTestValue2 !== arrayLen2) {
      if (props.opts.required === true || props.opts.required === "true") {
        resultsSurvey[`itemNum${props.opts.itemNum}`] = "no-*?*-response";
      } else {
        resultsSurvey[`itemNum${props.opts.itemNum}`] = "no response";
      }
    }
    localStorage.setItem("resultsSurvey", JSON.stringify(resultsSurvey));
  }; // end handleChange

  // ****** CHECK IF ALL PARTS ANSWERED on render *******
  let setYellow = false;
  let arrayLen = checkedState.length;
  let flattenedCheckedState = flatten([...checkedState]);
  let count = countBy(flattenedCheckedState);
  let objTestValue = count[true] || 0;
  if (objTestValue < arrayLen) {
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

  const RadioItems = () => {
    const radioList = optsArray.map((item, index) => {
      const itemText = ReactHtmlParser(decodeHTML(item)) || "";
      return (
        <div
          className="flex h-[40px] items-center content-center"
          style={{
            display: "inline-grid",
            gridTemplateColumns: "minmax(30%, 1000px) 100px 100px 1fr",
            backgroundColor: index % 2 ? "white" : "#ececec",
          }}
          key={uuid()}
        >
          {/* <OptionsText key={uuid()}>{itemText}</OptionsText> */}
          <div key={uuid()}>{itemText}</div>
          {/* <RadioInput */}
          <input
            key={uuid()}
            className="flex items-center content-center"
            id={`Q-${index}`}
            type="radio"
            value={1}
            name={`itemNum${props.opts.itemNum}-${index + 1}`}
            onChange={(e) => handleChange(index, 0, e)}
            checked={checkedState[index][0]}
          />
          <input
            key={uuid()}
            className="flex items-center content-center"
            id={`Q2-${index}`}
            type="radio"
            value={2}
            name={`itemNum${props.opts.itemNum}-${index + 1}`}
            onChange={(e) => handleChange(index, 1, e)}
            checked={checkedState[index][1]}
          />
        </div>
      );
    });
    return <div>{radioList}</div>;
  };

  if (true) {
    return (
      // <Container bgColor={formatOptions.bgColor} border={formatOptions.border}>
      <div className="w-10/12 p-[20px] max-w[1300px] bg-[whitesmoke] outline outline-1 outline-gray-300 outline-none mt-1 ">
        {/* <TitleBar> */}
        <div>
          <div className="bg-gray-300 flex items-center justify-center p-[5px] min-h-[20px] text-[18px] text-center w-full rounded-[3px]">
            {labelText}
          </div>
        </div>
        {/* <NoteText id="noteText"> */}
        <div id="noteText">
          <div className="content-center min-h-[35px]">{noteText}</div>
        </div>
        {/* <RadioContainer> */}
        <div className="flex flex-col gap-3 p-2 bg-white  min-w-[100px] outline outline-1 outline-slate-300">
          {/* <RatingTitle> */}
          <div
            style={{
              display: "inline-grid",
              gridTemplateColumns: "minmax(30%, 1000px) 100px 100px 1fr",
            }}
          >
            {/* <ScaleDiv> */}
            <div> </div>
            <div className="flex justify-center items-center">
              <div>{ReactHtmlParser(decodeHTML(scaleArray[0]))}</div>
            </div>
            {/* <ScaleDiv> */}
            <div className="flex justify-center items-center">
              <div>{ReactHtmlParser(decodeHTML(scaleArray[1]))}</div>
            </div>
          </div>
          <RadioItems />
        </div>
      </div>
    );
  } else {
    return (
      // <Container bgColor={formatOptions.bgColor} border={formatOptions.border}>
      <div bgColor={formatOptions.bgColor} border={formatOptions.border}>
        {/* <TitleBar> */}
        <div>
          <div>{labelText}</div>
        </div>
        {/* <RadioContainer> */}
        <div>
          {/* <RatingTitle> */}
          <div>
            <div />
            {/* <ScaleDiv> */}
            <div>
              <div>{ReactHtmlParser(scaleArray[0])}</div>
            </div>
            {/* <ScaleDiv> */}
            <div>
              <div>{ReactHtmlParser(scaleArray[1])}</div>
            </div>
          </div>
          <RadioItems />
        </div>
      </div>
    );
  }
};

export default SurveyRatings2Element;

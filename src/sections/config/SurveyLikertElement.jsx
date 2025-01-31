import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ReactHtmlParser from "html-react-parser";

const SurveyLikertElement = (props) => {
  const checkRequiredQuestionsComplete = props.check;
  const questionId = `itemNum${props.opts.itemNum}`;
  const labelText = ReactHtmlParser(props.opts.label) || "";

  let [selected, setSelected] = useState("");
  const [formatOptions, setFormatOptions] = useState({
    bgColor: "bg-gray-200",
    border: "border-none",
  });

  const getScaleArray = (options) => options.split(";;;");
  const scaleArray = getScaleArray(props.opts.scale);

  const handleChange = (e) => {
    const resultsSurvey = JSON.parse(localStorage.getItem("resultsSurvey"));
    resultsSurvey[`itemNum${props.opts.itemNum}`] = +e.target.value + 1;
    localStorage.setItem("resultsSurvey", JSON.stringify(resultsSurvey));
  };

  let setYellow = selected.length === 0;

  useEffect(() => {
    if (
      (props.opts.required === true || props.opts.required === "true") &&
      checkRequiredQuestionsComplete &&
      setYellow
    ) {
      setFormatOptions({
        bgColor: "bg-yellow-300 bg-opacity-50",
        border: "border-4 border-black border-dashed",
      });
    } else {
      setFormatOptions({ bgColor: "bg-gray-200", border: "border-none" });
    }
  }, [checkRequiredQuestionsComplete, setYellow, props.opts.required]);

  const scaleList = scaleArray.map((item) => (
    <div key={uuid()} className="flex justify-center items-center text-center">
      {ReactHtmlParser(item)}
    </div>
  ));

  const RadioInput = ({ value, checked, setter }) => (
    <input
      type="radio"
      className="h-6 w-6"
      checked={checked === value}
      onChange={() => setter(value)}
      value={value}
    />
  );

  const RadioItems = () => {
    return (
      <div
        className={`w-[100%] justify-items-center items-center mb-1 bg-[whitesmoke] `}
        style={{
          display: "inline-grid",
          gridTemplateColumns: `repeat(${scaleArray.length}, 1fr)`,
        }}
      >
        {scaleArray.map((item, index) => (
          <div key={uuid()} className="flex justify-center items-center p-1">
            <RadioInput value={index} checked={selected} setter={setSelected} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`w-12/12 p-[20px] max-w[1300px] bg-[whitesmoke] outline outline-1 outline-gray-300 outline-none mt-1`}
    >
      <div className="bg-gray-300 flex items-center justify-center p-[5px] min-h-[20px] text-[18px] text-center w-full rounded-[3px]">
        {labelText}
      </div>
      <div className="flex flex-col justify-start items-start p-5 bg-white rounded border-2 border-gray-300">
        <div
          className={`w-[100%] text-center mb-2`}
          style={{
            display: "inline-grid",
            gridTemplateColumns: `repeat(${scaleList.length}, 1fr)`,
          }}
        >
          {scaleList}
        </div>
        <RadioItems />
      </div>
    </div>
  );
};

export default SurveyLikertElement;

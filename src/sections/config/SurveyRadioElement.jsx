import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ReactHtmlParser from "html-react-parser";

const SurveyRadioElement = (props) => {
  // HELPER FUNCTION
  const getOptionsArray = (options) => {
    let array = options.split(";;;");
    array = array.filter(function (e) {
      return e;
    });
    array = array.map((x) => x.trim());
    return array;
  };

  // PROPS
  let questionId = props.opts.id;
  const checkRequiredQuestionsComplete = props.check;
  const labelText = ReactHtmlParser(props.opts.label) || "";
  const noteText = ReactHtmlParser(props.opts.note) || "";
  const optsArray = getOptionsArray(props.opts.options);
  let displayNoteText = true;
  if (noteText.length < 1 || noteText === "") {
    displayNoteText = false;
  }

  // PERSISTENT STATE
  let [selected, setSelected] = useState("");

  // LOCAL STATE
  const [formatOptions, setFormatOptions] = useState({
    bgColor: "whitesmoke",
    border: "none",
  });

  // template
  const RadioInput = ({ label, value, checked, setter }) => {
    return (
      <label>
        {/* <InputStyleDiv> */}
        <div className="flex items-center gap-1 ml-3 mr-3">
          <input
            type="radio"
            checked={checked === value}
            onChange={() => setter(value)}
            value={value}
          />
          {/* <LabelDiv> */}
          <div>
            <div>{label}</div>
          </div>
        </div>
      </label>
    );
  };

  const handleChange = (e) => {
    const resultsSurvey = JSON.parse(localStorage.getItem("resultsSurvey"));
    resultsSurvey[`itemNum${props.opts.itemNum}`] = +e.target.value + 1;
    localStorage.setItem("resultsSurvey", JSON.stringify(resultsSurvey));
  }; // end handle change

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

  const RadioItems = () => {
    const radioList = optsArray.map((item, index) => (
      <div key={uuid()}>
        <RadioInput
          value={index}
          checked={selected}
          label={item}
          setter={setSelected}
        />
      </div>
    ));
    return (
      <div className="flex flex-col gap-3 p-2 bg-white  min-w-[100px] outline outline-1 outline-slate-300">
        {radioList}
      </div>
    );
  };

  if (true) {
    return (
      // <Container bgColor={formatOptions.bgColor} border={formatOptions.border}>
      <div className="w-12/12 p-[20px] max-w[1300px] bg-[whitesmoke] outline outline-1 outline-gray-300 outline-none mt-1 ">
        {/* <TitleBar> */}
        <div className="bg-gray-300 flex items-center justify-center p-[5px] min-h-[20px] text-[18px] text-center w-full rounded-[3px]">
          <div>{labelText}</div>
        </div>
        {/* <NoteText> */}
        <div>
          <div className="content-center min-h-[35px]">{noteText}</div>
        </div>
        {/* <RadioContainer onChange={(e) => handleChange(e)}> */}
        <div onChange={(e) => handleChange(e)}>
          <RadioItems />
        </div>
      </div>
    );
  } else {
    return (
      <Container bgColor={formatOptions.bgColor} border={formatOptions.border}>
        <TitleBar>
          <div>{labelText}</div>
        </TitleBar>
        <RadioContainer onChange={(e) => handleChange(e)}>
          <RadioItems />
        </RadioContainer>
      </Container>
    );
  }
};

export default SurveyRadioElement;

// const Container = styled.div`
//   width: 90vw;
//   padding: 20px;
//   margin-left: 20px;
//   margin-right: 20px;
//   max-width: 1300px;
//   min-height: 200px;
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
//   padding: 0px 20px 20px 20px;
//   vertical-align: center;
//   margin-top: 0px;
//   min-height: 100px;
//   font-size: 16px;
//   background-color: white;
//   width: 100%;
//   border-radius: 3px;
//   border: 2px solid lightgray;

//   input {
//     margin-top: 8px;
//   }

//   label {
//     margin-left: 8px;
//   }
// `;

// const LabelDiv = styled.div`
//   padding-left: 5px;
// `;

// const InputStyleDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: baseline;
// `;

// const NoteText = styled.div`
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   vertical-align: center;
//   margin-top: 5px;
//   height: 50px;
//   font-size: 16px;
//   text-align: center;
//   background-color: whitesmoke;
//   width: 100%;
//   border-radius: 3px;
// `;

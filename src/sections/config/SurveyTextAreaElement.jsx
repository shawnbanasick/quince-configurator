import React, { useState, useEffect } from "react";
import ReactHtmlParser from "html-react-parser";
import { decodeHTML } from "../utils/decodeHTML";

// import sanitizeString from "../../utilities/sanitizeString.js";

const SurveyTextAreaElement = (props) => {
  // HELPER FUNCTION
  const asyncLocalStorage = {
    async setItem(key, value) {
      await null;
      return localStorage.setItem(key, value);
    },
  };

  // FROM PROPS
  const id = `itemNum${props.opts.itemNum}`;
  const checkRequiredQuestionsComplete = props.check;
  const labelText = ReactHtmlParser(decodeHTML(props.opts.label)) || "";
  const noteText = ReactHtmlParser(decodeHTML(props.opts.note)) || "";
  // true removes div holder so placeholder text renders properly
  const placeholder =
    ReactHtmlParser(decodeHTML(props.opts.placeholder, true)) || "";
  let displayNoteText = true;
  if (noteText.length < 1 || noteText === "") {
    displayNoteText = false;
  }

  // PERSISTENT STATE
  const [userText, setUserText] = useState("");

  // LOCAL STATE
  const [formatOptions, setFormatOptions] = useState({
    bgColor: "whitesmoke",
    border: "none",
  });

  // ON CHANGE
  const handleOnChange = (e) => {
    const resultsSurvey = JSON.parse(localStorage.getItem("resultsSurvey"));
    let value = e.target.value;
    setUserText(value);
    // record if answered or not
    if (value.length > 0) {
      let sanitizedText = value;
      resultsSurvey[`itemNum${props.opts.itemNum}`] = sanitizedText;
    } else {
      if (props.opts.required === true || props.opts.required === "true") {
        resultsSurvey[`itemNum${props.opts.itemNum}`] = "no-*?*-response";
      } else {
        resultsSurvey[`itemNum${props.opts.itemNum}`] = "no response";
      }
    }
    asyncLocalStorage.setItem("resultsSurvey", JSON.stringify(resultsSurvey));
  };

  // required question answer check
  let userTextLen = false;
  if (userText.length > 0 && userText !== "") {
    userTextLen = true;
  }

  useEffect(() => {
    if (
      (props.opts.required === true || props.opts.required === "true") &&
      checkRequiredQuestionsComplete === true &&
      userTextLen < 1
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
  }, [
    checkRequiredQuestionsComplete,
    userText,
    userTextLen,
    props.opts.required,
  ]);

  if (true) {
    return (
      // <Container bgColor={formatOptions.bgColor} border={formatOptions.border}>
      <div className="w-10/12 p-[20px]  max-w[1300px] bg-[whitesmoke] outline outline-1 outline-gray-300 outline-none mt-1 ">
        {/* <TitleBar> */}
        <div className="bg-gray-300 flex items-center justify-center p-[5px] min-h-[20px] text-[18px] text-center w-full rounded-[3px]">
          <div>{labelText}</div>
        </div>
        {/* <NoteText>{noteText}</NoteText> */}
        <div className="content-center min-h-[35px]">{noteText}</div>
        {/* <TextAreaInput */}
        <textarea
          type="textarea"
          rows="5"
          cols="33"
          value={userText}
          className="border border-1 border-gray-300 p-[5px] w-full rounded-md"
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      </div>
    );
  } else {
    return (
      // <Container bgColor={formatOptions.bgColor} border={formatOptions.border}>
      <div bgColor={formatOptions.bgColor} border={formatOptions.border}>
        <TitleBar>
          <div>{labelText}</div>
        </TitleBar>
        <TextAreaInput
          value={userText}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      </div>
    );
  }
};

export default SurveyTextAreaElement;

// const Container = styled.div`
//   width: 90vw;
//   padding: 20px;
//   margin-left: 20px;
//   margin-right: 20px;
//   max-width: 1300px;
//   min-height: 200px;
//   background-color: whitesmoke;
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

// const NoteText = styled.div`
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   vertical-align: center;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   height: 50px;
//   font-size: 16px;
//   text-align: center;
//   background-color: whitesmoke;
//   width: 100%;
//   border-radius: 3px;
// `;

// const TextAreaInput = styled.textarea`
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   vertical-align: center;
//   margin-top: 0px;
//   height: 150px;
//   font-size: 18px;
//   background-color: white;
//   width: 100%;
//   border-radius: 3px;
//   border: 2px solid lightgray;
//   padding: 5px;
// `;

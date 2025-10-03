import { useState, useEffect } from "react";
import ReactHtmlParser from "html-react-parser";
import { decodeHTML } from "../utils/decodeHTML";

const SurveyTextElement = (props) => {
  // HELPER FUNCTION
  const asyncLocalStorage = {
    async setItem(name, value) {
      await null;
      return localStorage.setItem(name, value);
    },
  };

  // PROPS
  let questionId = `itemNum${props.opts.itemNum}`;
  const checkRequiredQuestionsComplete = props.check;
  const labelText = ReactHtmlParser(decodeHTML(props.opts.label)) || "";
  const noteText = ReactHtmlParser(decodeHTML(props.opts.note)) || "";
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

  // event handler
  const handleOnChange = (e) => {
    const resultsSurvey = JSON.parse(localStorage.getItem("resultsSurvey"));
    let value = e.target.value;
    let valueLen = value.length;
    // restrict to numbers (from config.xml)
    if (props.opts.restricted === "true" || props.opts.restricted === true) {
      value = value.replace(/\D/g, "");
    }
    // limit length (from config.xml)
    if (props.opts.limited === "true" || props.opts.limited === true) {
      if (value.length > +props.opts.limitLength) {
        value = value.substring(0, +props.opts.limitLength);
      }
    }
    setUserText(value);
    // record if answered or not
    if (valueLen > 0) {
      let sanitizedText = value;
      resultsSurvey[`itemNum${props.opts.itemNum}`] = sanitizedText;
    } else {
      // for when participant deletes their answer after entering it
      if (props.opts.required === true || props.opts.required === "true") {
        resultsSurvey[`itemNum${props.opts.itemNum}`] = "no-*?*-response";
      } else {
        resultsSurvey[`itemNum${props.opts.itemNum}`] = "no response";
      }
    }
    asyncLocalStorage.setItem("resultsSurvey", JSON.stringify(resultsSurvey));
  }; // End event handler

  useEffect(() => {
    let userTextLen = false;
    if (userText.length > 0 && userText !== "") {
      userTextLen = true;
    }
    if (
      checkRequiredQuestionsComplete === true &&
      userTextLen < 1 &&
      props.opts.required === true
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
  }, [checkRequiredQuestionsComplete, userText, props]);

  if (displayNoteText) {
    return (
      // <Container bgColor={formatOptions.bgColor} border={formatOptions.border}>
      <div className="w-10/12 p-[20px] max-w[1300px] bg-[whitesmoke] outline outline-1 outline-gray-300 outline-none mt-1 ">
        {/* <TitleBar> */}
        <div className="bg-gray-300 flex items-center justify-center p-[5px] min-h-[20px] text-[18px] text-center w-full rounded-[3px]">
          <div>{labelText}</div>
        </div>
        {/* <NoteText id="noteText"> */}
        <div id="noteText">
          <div className="content-center min-h-[35px]">{noteText}</div>
        </div>
        {/* <TextInput */}
        <input
          className="border border-1 border-gray-300 p-[5px] w-full rounded-md"
          type="text"
          value={userText}
          // placeholder={placeholder}
          onChange={handleOnChange}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SurveyTextElement;

// const Container = styled.div`
//   width: 90vw;
//   padding: 20px;
//   margin-left: 20px;
//   margin-right: 20px;
//   max-width: 1300px;
//   background-color: ${(props) => props.bgColor};
//   outline: ${(props) => props.border};
//   outline-offset: -3px;
// `;

// const TitleBar = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 5px;
//   min-height: 50px;
//   font-size: 18px;
//   text-align: center;
//   width: 100%;
//   border-radius: 3px;
//   background-color: lightgray;
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

// const TextInput = styled.input`
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   vertical-align: center;
//   height: 50px;
//   font-size: 18px;
//   background-color: white;
//   width: 100%;
//   border-radius: 3px;
//   border: 2px solid lightgray;
//   padding-left: 5px;
//   padding-right: 5px;
// `;

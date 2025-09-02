import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import ReactHtmlParser from "html-react-parser";
import { decodeHTML } from "../utils/decodeHTML";
import flatten from "lodash/flatten";
import { useTranslation } from "react-i18next";

const SurveyDropdownElement = (props) => {
  const { t } = useTranslation();

  let overrideStrings = {
    allItemsAreSelected: t("allItemsAreSelected"),
    clearSearch: t("clearSearch"),
    clearSelected: t("clearSelected"),
    noOptions: t("noOptions"),
    search: t("search"),
    selectAll: t("selectAll"),
    selectAllFiltered: t("selectAllFiltered"),
    selectSomeItems: t("selectSomeItems"),
    create: t("create"),
  };

  // HELPER FUNCTION
  const getOptionsArray = (options) => {
    let array = options.split(";;;");
    array = array.filter(function (e) {
      return e;
    });
    const objArray = array.map((x) => {
      x.replace(/\s/g, "");
      const tempObj = {};
      tempObj.label = x;
      tempObj.value = x;
      return tempObj;
    });
    return objArray;
  };

  // PROPS
  const checkRequiredQuestionsComplete = props.check;
  let questionId = props.opts.id;
  const labelText = ReactHtmlParser(decodeHTML(props.opts.label)) || "";
  let originalOptions = props.opts.options.split(";;;") || [];
  originalOptions = originalOptions.map((x) => ReactHtmlParser(decodeHTML(x.trim())));
  const noteText = ReactHtmlParser(decodeHTML(props.opts.note)) || "";
  let displayNoteText = true;
  if (noteText.length < 1 || noteText === "") {
    displayNoteText = false;
  }

  // PERSISTENT STATE
  let [selected, setSelected] = useState([]);

  // LOCAL STATE
  const [formatOptions, setFormatOptions] = useState({
    bgColor: "whitesmoke",
    border: "none",
  });

  // HANDLE ON CHANGE
  const handleOnChange = (e) => {
    const resultsSurvey = JSON.parse(localStorage.getItem("resultsSurvey")) || {};
    setSelected(e);

    let newArray = flatten(originalOptions);

    if (e.length !== 0) {
      let selected2 = "";
      for (let i = 0; i < e.length; i++) {
        let label = e[i].value;
        let id = newArray.indexOf(label);
        if (i === 0) {
          selected2 += id + 1;
        } else {
          selected2 += "," + (id + 1);
        }
      }
      resultsSurvey[`itemNum${props.opts.itemNum}`] = selected2;
    } else {
      if (props.opts.required === true || props.opts.required === "true") {
        resultsSurvey[`itemNum${props.opts.itemNum}`] = "no-*?*-response";
      } else {
        resultsSurvey[`itemNum${props.opts.itemNum}`] = "no response";
      }
    }
    localStorage.setItem("resultsSurvey", JSON.stringify(resultsSurvey));
  };

  let selectedLen = false;
  if (selected.length > 0) {
    selectedLen = true;
  }

  useEffect(() => {
    if (
      (props.opts.required === true || props.opts.required === "true") &&
      checkRequiredQuestionsComplete === true &&
      selectedLen === false
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
  }, [checkRequiredQuestionsComplete, selectedLen, props.opts.required]);

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
        <div className="content-center min-h-[35px]" id="noteText">
          <div>{noteText}</div>
        </div>
        <MultiSelect
          className={"multiselect"}
          options={getOptionsArray(props.opts.options)}
          labelledBy="Select"
          onChange={handleOnChange}
          value={selected}
          overrideStrings={overrideStrings}
        />
      </div>
    );
  } else {
    return (
      <Container bgColor={formatOptions.bgColor} border={formatOptions.border}>
        <TitleBar>
          <div>{labelText}</div>
        </TitleBar>
        <MultiSelect
          className={"multiselect"}
          options={getOptionsArray(props.opts.options)}
          labelledBy="Select"
          onChange={handleOnChange}
          value={selected}
        />
      </Container>
    );
  }
};

export default SurveyDropdownElement;

// const Container = styled.div`
//   width: 90vw;
//   padding: 20px;
//   margin-left: 20px;
//   margin-right: 20px;
//   max-width: 1300px;
//   min-height: 125px;
//   background-color: ${(props) => props.bgColor};
//   outline: ${(props) => props.border};
//   outline-offset: -3px;

//   .multiselect {
//     font-size: 16px;
//     line-height: 1.1em;
//   }
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

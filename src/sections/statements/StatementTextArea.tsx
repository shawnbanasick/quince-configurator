// import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";

// import appState from "../../GlobalState/appState";
// import UploadStatementsXmlButton from "./UploadStatementsXmlButton";

const getDisplayMode = (state) => state.displayMode;
const getCurrentStatements = (state) => state.currentStatements;
const getSetCurrentStatements = (state) => state.setCurrentStatements;
const getSetNumStatements = (state) => state.setNumStatements;

const StatementTextArea = () => {
  const { t } = useTranslation();
  let displayMode = useStore(getDisplayMode);
  const currentStatements = useStore(getCurrentStatements);
  const setCurrentStatements = useStore(getSetCurrentStatements);
  const setNumStatements = useStore(getSetNumStatements);

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    let statementInput = event.target.value;
    setCurrentStatements(statementInput);
    // get the number of statements
    const statementsArray = statementInput.split("\n").filter((line) => line.trim() !== "");
    setNumStatements(statementsArray.length);
  };

  return (
    // <Container>
    <div className="flex flex-col items-center justify-center">
      {displayMode && (
        // <DisplayModeText>
        <div className=" ml-[10px] mb-[50px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[5px] border-[1.5px] border-black">
          <b>{t("htmlFormatting")}</b>
          <br />
          {t("htmlFormattingSubTitle")}
          <ul className="indent-6">
            <li>
              &lt;b&gt;bold&lt;/b&gt; = <b>bold </b>
            </li>
            <li>
              &lt;u&gt;underlined&lt;/u&gt; = <u>underlined </u>
            </li>
            <li>
              &lt;i&gt;italicized&lt;/i&gt; = <i>italicized </i>
            </li>
            <li>
              &lt;b&gt;&lt;u&gt;&lt;i&gt;all three nested tags&lt;/i&gt;&lt;/u&gt;&lt;/b&gt; ={" "}
              <b>
                <u>
                  <i>all three nested tags</i>
                </u>
              </b>
            </li>
          </ul>
        </div>
      )}
      <label>{t("enterOrPasteStatements")}: </label>
      <textarea
        className="w-[clamp(500px,80vw,1200px)] h-[400px] mt-[10px] mb-[30px] select-all border-2 border-slate-300 rounded-md p-6"
        name="textValue"
        value={currentStatements || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export { StatementTextArea };

// const StatementTextsInput = styled.textarea`
//   width: clamp(500px, 80vw, 1500px);
//   height: 400px;
//   margin-top: 10px;
//   margin-bottom: 30px;
//   user-select: all;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   user-select: none;
// `;

// const DisplayModeText = styled.div`
//   align-self: left;
//   margin-left: 10px;
//   margin-top: 40px;
//   margin-bottom: 30px;
//   width: 78vw;
//   max-width: 1200px;
//   font-size: 20px;
//   padding: 10px;
//   background: whitesmoke;
//   border-radius: 3px;

//   border: 2px solid black;
// `;

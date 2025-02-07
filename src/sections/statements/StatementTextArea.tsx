import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";

// import appState from "../../GlobalState/appState";
// import UploadStatementsXmlButton from "./UploadStatementsXmlButton";

const getDisplayMode = (state) => state.displayMode;

const StatementTextArea = () => {
  const { t } = useTranslation();
  let displayMode = useStore(getDisplayMode);

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  let currentStatements = localStorage.getItem("currentStatements");

  const handleChange = (event) => {
    console.log(event.target.value);
    //   let statementInput = event.target.value;
    //   appState.currentStatements = statementInput;
    //   localStorage.setItem("currentStatements", statementInput);
  };

  return (
    // <Container>
    <div className="flex flex-col items-center justify-center">
      {displayMode && (
        // <DisplayModeText>
        <div className="self-start ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">
          If you have statements from a previous EQ Web Sort project, you can
          click on the orange "Load 'statements.xml' File Data" button to upload
          the statements.xml file.
          <br />
          <br />
          Statements can include HTML paired tag formatting if desired:
          <ul>
            <li>
              &lt;b&gt;bold&lt;/b&gt; produces <b>bold </b>
            </li>
            <li>
              &lt;u&gt;underlined&lt;/u&gt; produces <u>underlined </u>
            </li>
            <li>
              &lt;i&gt;italicized&lt;/i&gt; produces <i>italicized </i>
            </li>
            <li>
              &lt;b&gt;&lt;u&gt;&lt;i&gt;all three nested
              tags&lt;/i&gt;&lt;/u&gt;&lt;/b&gt; produces{" "}
              <b>
                <u>
                  <i>all three nested tags</i>
                </u>
              </b>
            </li>
          </ul>
          Other information on HTML paired tag formatting can be found in the
          Config section.
          <br />
          <br />
          When you have finished adding your statements, click the orange button
          at the bottom of the page and save your information as
          'statements.xml' in the settings folder (replace the default file).
        </div>
      )}
      {/* <UploadStatementsXmlButton /> */}
      <label>Enter or Paste Statements (1 statement per line) : </label>
      <textarea
        className="w-[clamp(500px,80vw,1500px)] h-[400px] mt-[10px] mb-[30px] select-all border-2 border-slate-300"
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

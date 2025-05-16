import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";

const getDisplayMode = (state) => state.displayMode;

const LanguageIntroText = () => {
  const { t } = useTranslation();
  let displayMode = useStore(getDisplayMode);

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <div>
      {/* <DisplayModeText> */}
      <div className=" mt-[20px] mb-[30px] pb-6 w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">
        <mark>
          <b>**Important**</b>
        </mark>{" "}
        The input options will change according to the setup target (firebase, sheets, or local). If
        you want to set up the language.xml file for a local, offline data collection project, be
        sure to choose "local" for Question 2-2 "Setup target" in the Config section <b>before</b>{" "}
        you input the language data here.
        <br />
        <br />
        If you have a language.xml file from another Quincy project, you can load it into the
        Configurator by clicking the orange "<b>Load 'language.xml' File Data</b>" button below. If
        you don't have a file from a previous project, you can load the default English settings by
        clicking the section buttons, or you can create a new file by inputting all of the data
        yourself.
        <br />
        <br />
        <h4>
          <b>Section Buttons</b>
        </h4>
        The "Use Defaults" button will insert the default text into all of the input boxes in that
        section. The "Clear Section" button will clear all of the input boxes in that section. The
        "View Reference Image" buttons give hints about the location of the text in the application.
        <br />
        <br />
        <h4>
          <b>Simple HTML Formatting</b>
        </h4>
        {`Simple text formatting is available here by using tags before and after the text to be modified. Simple formatting options include bold <b> </b>, italics <i> </i>, yellow highlighting <mark> </mark>, and underline <u> </u>.`}{" "}
        <br />
        <br />
        {`A new line can be inserted using a single break tag <br/>, and an open line between text can be created by using two break tags <br/> <br/>.`}
        <br />
        <br />
        {`A web page link can be inserted by using this pattern:`}
        <br />
        {`<a href="https://qmethod.org/" target="_blank" rel="noreferrer"> <u>qmethod.org</u> </a>.`}
        <br />
        <br />
        {`Font size can be adjusted by using this pattern:`}
        <br />
        {`<div style="font-size: 20px"> </div>`}
        <br />
        <br />
        <h4>
          <b>Complex HTML Layouts</b>
        </h4>
        Complex HTML layouts are possible for the Welcome message, Submit Data text, Goodbye
        message, and pop-up modal texts. In-line CSS styling can be used to modify the HTML
        elements.
        <br />
        <br />
        {`You can use `}
        <a href="https://codepen.io" rel="noopener noreferrer" target="_blank">
          CodePen
        </a>{" "}
        {`to interactively develop complex layouts. In CodePen, click on the "Start Coding" button on the top left side of the page, then put your code in the "HTML" box on the left. When you are happy with the layout, copy and paste the HTML code from CodePen into the input boxes below.`}
        <br />
        <br />
        <b>{`CodePen Examples: `}</b>
        {/* <ListContainer> */}
        <div className="mt-[5px] mb-2">
          <li>
            <a href="https://codepen.io/shawnbanasick/pen/gOxOQrr" target="_blank" rel="noreferrer">
              Headers and text
            </a>{" "}
          </li>

          <li>
            <a href="https://codepen.io/shawnbanasick/pen/QWMWJEM" target="_blank" rel="noreferrer">
              Lists
            </a>{" "}
          </li>
          <li>
            <a href="https://codepen.io/shawnbanasick/pen/WNENYNp" target="_blank" rel="noreferrer">
              Font size adjustment
            </a>{" "}
          </li>

          <li>
            <a href="https://codepen.io/shawnbanasick/pen/vYJYQxN" target="_blank" rel="noreferrer">
              Side-by-side layouts
            </a>{" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/NWvWGMY"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vertical and horizontal centering
            </a>
            &nbsp;(for Landing section){" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/mdMdQby"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vertical and horizontal centering
            </a>
            &nbsp;(for modals){" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/WNEqVJM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Combined example - a complex &quot;Welcome Message&quot;
            </a>{" "}
          </li>
        </div>
        {`See the default text below for more HTML examples.`}
        <br />
        <h4 className="mt-6">
          <b>Customizations</b>
        </h4>
        <mark>Highlighted options must be customized for your project</mark>
        <br />
        <h4 className="mt-6">
          <b>Save Data</b>
        </h4>
        When you have finished adding your language data, click the orange button at the bottom of
        the page and save your information as 'language.xml' in the settings folder (replace the
        default file).
      </div>
    </div>
  );
};

export { LanguageIntroText };

// const DisplayModeText = styled.div`
//   align-self: left;
//   margin-left: 10px;
//   margin-bottom: 50px;
//   width: 75vw;
//   max-width: 1000px;
//   font-size: 20px;
//   padding: 10px;
//   border: 2px solid black;
//   background: whitesmoke;
//   border-radius: 5px;
// `;

// const ListContainer = styled.ul`
//   margin-top: 5px;
// `;

// import React from "react";
// import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";

// const getDisplayMode = (state) => state.displayMode;

const LanguageIntroText = () => {
  const { t } = useTranslation();

  // let displayMode = useStore(getDisplayMode);
  // if (displayMode === "beginner") {
  //   displayMode = true;
  // } else {
  //   displayMode = false;
  // }

  return (
    <div>
      {/* <DisplayModeText> */}
      <div className=" mt-[20px] mb-[30px] pb-6 w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">
        <mark>
          <b>{t("important")}</b>
        </mark>{" "}
        {t("languageIntroText1")}
        <br />
        <br />
        {t("languageIntroText2")}
        <br />
        <br />
        <h4>
          <b>{t("sectionButtons")}</b>
        </h4>
        {t("languageIntroText3")}
        <br />
        <br />
        <h4>
          <b>{t("simpleHtmlFormatting")}</b>
        </h4>
        {t("languageIntroText4")}
        <br />
        <br />
        {t("languageIntroText5")}
        <br />
        <br />
        {t("languageIntroText6")}
        <br />
        {t("languageIntroText7")}
        <br />
        <br />
        {t("languageIntroText8")}
        <br />
        {t("languageIntroText9")}
        <br />
        <br />
        <h4>
          <b>{t("complexHtmlLayouts")}</b>
        </h4>
        {t("languageIntroText10")}
        <br />
        <br />
        {t("languageIntroText11")}
        <br />
        <br />
        <b>{`CodePen Examples: `}</b>
        {/* <ListContainer> */}
        <div className="mt-[5px] mb-2">
          <li>
            <a href="https://codepen.io/shawnbanasick/pen/gOxOQrr" target="_blank" rel="noreferrer">
              {t("languageIntroText12")}
            </a>{" "}
          </li>

          <li>
            <a href="https://codepen.io/shawnbanasick/pen/QWMWJEM" target="_blank" rel="noreferrer">
              {t("languageIntroText13")}
            </a>{" "}
          </li>
          <li>
            <a href="https://codepen.io/shawnbanasick/pen/WNENYNp" target="_blank" rel="noreferrer">
              {t("languageIntroText14")}
            </a>{" "}
          </li>

          <li>
            <a href="https://codepen.io/shawnbanasick/pen/vYJYQxN" target="_blank" rel="noreferrer">
              {t("languageIntroText15")}
            </a>{" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/NWvWGMY"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("languageIntroText16")}
            </a>
            &nbsp;(for Landing section){" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/mdMdQby"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("languageIntroText17")}
            </a>
            &nbsp;(for modals){" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/WNEqVJM"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("languageIntroText18")}
            </a>{" "}
          </li>
        </div>
        {`See the default text below for more HTML examples.`}
        <br />
        <h4 className="mt-6">
          <b>{t("customizations")}</b>
        </h4>
        <mark>{t("languageIntroText19")}</mark>
        <br />
        <h4 className="mt-6">
          <b>{t("saveData")}</b>
        </h4>
        {t("languageIntroText20")}
      </div>
    </div>
  );
};

export { LanguageIntroText };

// import React from "react";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "html-react-parser";

const getDisplayMode = (state) => state.displayMode;

const LanguageIntroText = () => {
  const { t } = useTranslation();

  let displayMode = useStore(getDisplayMode);
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  const InfoCard: React.FC<{ children: React.ReactNode; icon: React.ReactNode }> = ({
    children,
    icon,
  }) => (
    <div className="bg-blue-50 border border-blue-200 w-[80%] rounded-xl p-6 flex items-start space-x-4">
      <div className="flex-shrink-0 w-6 h-6 text-blue-600">{icon}</div>
      <div className="text-blue-800 leading-relaxed">{children}</div>
    </div>
  );

  return displayMode ? (
    <div className="flex flex-col justify-center items-center gap-3">
      <InfoCard
        icon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
      >
        {ReactHtmlParser(t("languageIntroText1"))}
      </InfoCard>
      <InfoCard
        icon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
      >
        {ReactHtmlParser(t("customizations"))} {ReactHtmlParser(t("languageIntroText19"))}
      </InfoCard>

      <InfoCard
        icon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
      >
        {ReactHtmlParser(t("sectionButtons"))}
        {ReactHtmlParser(t("languageIntroText3"))}
      </InfoCard>
      <InfoCard
        icon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
      >
        {ReactHtmlParser(t("languageIntroText20"))}
      </InfoCard>

      {/* HTML INSTRUCTIONS */}
      <div className=" mt-[20px] mb-[30px] pb-6 w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">
        <h2>{t("htmlCustomFormatting")}</h2>
        <br />
        <h4>
          <b>{t("simpleHtmlFormatting")}</b>
        </h4>
        {t("languageIntroText4")}
        <br />
        <br />
        {t("forExample")}
        <ul className="indent-6">
          {" "}
          <li>
            {" "}
            &lt;b&gt;bold&lt;/b&gt; = <b>bold </b>
          </li>
          <li>
            &lt;u&gt;underlined&lt;/u&gt; = <u>underlined </u>
          </li>
          <li>
            &lt;mark&gt;highlighted&lt;/mark&gt; = <mark>highlighted</mark>
          </li>
          <li>
            {" "}
            &lt;i&gt;italicized&lt;/i&gt; = <i>italicized </i>{" "}
          </li>{" "}
          <li>
            {" "}
            &lt;mark&gt;&lt;b&gt;&lt;u&gt;&lt;i&gt;all tags nested
            &lt;/i&gt;&lt;/u&gt;&lt;/b&gt;&lt;/mark&gt; ={" "}
            <mark>
              <b>
                {" "}
                <u>
                  {" "}
                  <i>all tags nested</i>{" "}
                </u>{" "}
              </b>
            </mark>{" "}
          </li>{" "}
        </ul>

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
        {ReactHtmlParser(t("languageIntroText11"))}
        <br />
        <br />
        <b>{`CodePen Examples: `}</b>
        {/* <ListContainer> */}
        <div className="mt-[5px] mb-2 pl-10">
          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/gOxOQrr"
              target="_blank"
              rel="noreferrer"
              className="text-[#3b82f6] underline hover:text-blue-800"
            >
              {t("languageIntroText12")}
            </a>{" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/QWMWJEM"
              target="_blank"
              rel="noreferrer"
              className="text-[#3b82f6] underline hover:text-blue-800"
            >
              {t("languageIntroText13")}
            </a>{" "}
          </li>
          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/WNENYNp"
              target="_blank"
              rel="noreferrer"
              className="text-[#3b82f6] underline hover:text-blue-800"
            >
              {t("languageIntroText14")}
            </a>{" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/vYJYQxN"
              target="_blank"
              rel="noreferrer"
              className="text-[#3b82f6] underline hover:text-blue-800"
            >
              {t("languageIntroText15")}
            </a>{" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/NWvWGMY"
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#3b82f6] underline hover:text-blue-800"
            >
              {t("languageIntroText16")}
            </a>
            {/* &nbsp;(for main sections){" "} */}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/mdMdQby"
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#3b82f6] underline hover:text-blue-800"
            >
              {t("languageIntroText17")}
            </a>
            {/* &nbsp;(for modal dialog boxes){" "} */}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/WNEqVJM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b82f6] underline hover:text-blue-800"
            >
              {t("languageIntroText18")}
            </a>{" "}
          </li>
        </div>
        {t("languageIntroText18b")}
      </div>
    </div>
  ) : null;
};

export { LanguageIntroText };

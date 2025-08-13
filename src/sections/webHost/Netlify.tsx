import React from "react";
import { useTranslation } from "react-i18next";
import { decodeHTML } from "../utils/decodeHTML.js";
import ReactHtmlParser from "html-react-parser";
import netlify1 from "../../assets/images/netlify1.png";
import netlify2 from "../../assets/images/netlify2.png";
import netlify3 from "../../assets/images/netlify3.png";
import netlify4 from "../../assets/images/netlify4.png";
import netlify5 from "../../assets/images/netlify5.png";
import netlify6 from "../../assets/images/netlify6.png";
import netlify7 from "../../assets/images/netlify7.png";
import netlify8 from "../../assets/images/netlify8.png";
import netlify9 from "../../assets/images/netlify9.png";
import netlify10 from "../../assets/images/netlify10.png";
import netlify11 from "../../assets/images/netlify11.png";
import netlify12 from "../../assets/images/netlify12.png";
import netlify13 from "../../assets/images/netlify13.png";
// import netlify14 from "../../assets/images/netlify14.png";
// import netlify15 from "../../assets/images/netlify15.png";
// import netlify16 from "../../assets/images/netlify16.png";
// import netlify17 from "../../assets/images/netlify17.png";

interface StepData {
  id: number;
  text: string;
  image: string;
  imageWidth?: number;
  imageAlt: string;
}

const Netlify: React.FC = () => {
  const { t } = useTranslation();
  const description = ReactHtmlParser(decodeHTML(t("netlifyIntroText"))) || "";

  // Decode Language XML
  const step1Text = ReactHtmlParser(decodeHTML(t("netlifyStep1"))) || "";
  const step2Text = ReactHtmlParser(decodeHTML(t("netlifyStep2"))) || "";
  const step3Text = ReactHtmlParser(decodeHTML(t("netlifyStep3"))) || "";
  const step4Text = ReactHtmlParser(decodeHTML(t("netlifyStep4"))) || "";
  const step5Text = ReactHtmlParser(decodeHTML(t("netlifyStep5"))) || "";
  const step6Text = ReactHtmlParser(decodeHTML(t("netlifyStep6"))) || "";
  const step7Text = ReactHtmlParser(decodeHTML(t("netlifyStep7"))) || "";
  const step8Text = ReactHtmlParser(decodeHTML(t("netlifyStep8"))) || "";
  const step9Text = ReactHtmlParser(decodeHTML(t("netlifyStep9"))) || "";
  const step10Text = ReactHtmlParser(decodeHTML(t("netlifyStep10"))) || "";
  const step11Text = ReactHtmlParser(decodeHTML(t("netlifyStep11"))) || "";
  const step12Text = ReactHtmlParser(decodeHTML(t("netlifyStep12"))) || "";
  const step13Text = ReactHtmlParser(decodeHTML(t("netlifyStep13"))) || "";
  //   const step14Text = ReactHtmlParser(decodeHTML(t("netlifyStep14"))) || "";
  //   const step15Text = ReactHtmlParser(decodeHTML(t("netlifyStep15"))) || "";
  //   const step16Text = ReactHtmlParser(decodeHTML(t("netlifyStep16"))) || "";
  //   const step17Text = ReactHtmlParser(decodeHTML(t("netlifyStep16"))) || "";

  const langArray = [
    step1Text,
    step2Text,
    step3Text,
    step4Text,
    step5Text,
    step6Text,
    step7Text,
    step8Text,
    step9Text,
    step10Text,
    step11Text,
    step12Text,
    step13Text,
    // step14Text,
    // step15Text,
    // step16Text,
    // step17Text,
  ];

  // Configuration for all steps
  const steps: StepData[] = [
    {
      id: 1,
      text: `${step1Text}`,
      image: netlify1,
      imageAlt: "Baserow registration screen",
    },
    {
      id: 2,
      text: `${step2Text}`,
      image: netlify2,
      imageAlt: "Baserow dashboard",
    },
    {
      id: 3,
      text: `${step1Text}`,
      image: netlify3,
      imageAlt: "Create new database",
    },
    {
      id: 4,
      text: "Name your database (e.g., 'Q-Methodology Research') and provide a description for your project to keep it organized.",
      image: netlify4,
      imageAlt: "Database template selection",
    },
    {
      id: 5,
      text: "Configure your database settings including privacy options and collaboration permissions for your research team.",
      image: netlify5,
      imageAlt: "Database configuration",
    },
    {
      id: 6,
      text: "Create your first table for storing Q-sort data. Set up columns for participant information, statement rankings, and demographic data.",
      image: netlify6,
      imageAlt: "Table setup",
    },
    {
      id: 7,
      text: "Configure field types for your data collection. Use appropriate field types like number for rankings, text for comments, and single select for categories.",
      image: netlify7,
      imageAlt: "Field configuration",
    },
    {
      id: 8,
      text: "Begin entering your research data or set up the table structure to prepare for data import from your Q-methodology study.",
      image: netlify8,
      imageAlt: "Data entry",
    },
    {
      id: 9,
      text: "Create different views of your data including grid view for data entry, gallery view for visual organization, and form view for data collection.",
      image: netlify9,
      imageAlt: "View configuration",
    },
    {
      id: 10,
      text: "Configure sharing settings to collaborate with your research team. Set appropriate permissions for viewing, editing, and commenting.",
      image: netlify10,
      imageAlt: "Sharing settings",
    },
    {
      id: 11,
      text: "Access the API settings to enable programmatic data access for advanced analysis tools and statistical software integration.",
      image: netlify11,
      imageAlt: "API configuration",
    },
    {
      id: 12,
      text: "Generate API tokens for secure access to your data. Keep these tokens secure and use them for automated data synchronization.",
      image: netlify12,
      imageWidth: 500,
      imageAlt: "API token generation",
    },
    {
      id: 13,
      text: "Manage your API tokens and configure access permissions for different applications and research tools you plan to integrate.",
      image: netlify13,
      imageWidth: 400,
      imageAlt: "Token management",
    },
    // {
    //   id: 14,
    //   text: "Set up integration with your Q-methodology analysis software by configuring the connection settings and testing the data flow.",
    //   image: netlify14,
    //   imageAlt: "Integration setup",
    // },
    // {
    //   id: 15,
    //   text: "Test your database connection and verify that data can be properly imported and exported for your research analysis workflow.",
    //   image: netlify15,
    //   imageAlt: "Testing connection",
    // },
    // {
    //   id: 16,
    //   text: "Complete the final configuration steps and verify that all features are working correctly for your Q-methodology research project.",
    //   image: netlify16,
    //   imageAlt: "Final configuration",
    // },
    // {
    //   id: 17,
    //   text: "Complete the final configuration steps and verify that all features are working correctly for your Q-methodology research project.",
    //   image: netlify17,
    //   imageAlt: "Final configuration",
    // },
  ];

  const StepCard: React.FC<{ step: StepData; isFirst?: boolean; index: number }> = ({
    step,
    index,
  }) => {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Step Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
          <div className="flex items-center space-x-4">
            <div className="w-[50px] h-[50px] bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold text-lg">
              {step.id}
            </div>
            <div className="w-[95%]">{langArray[index]}</div>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {/* Image Container */}
          <div className="flex justify-center items-center bg-gray-50 rounded-xl p-4 border border-gray-200">
            <img
              src={step.image}
              className="w-auto max-w-[500px]  max-h-[500px] rounded-lg shadow-md border border-gray-300"
              style={{ maxWidth: step.imageWidth ? `${step.imageWidth}px` : "none" }}
              alt={step.imageAlt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-9/10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Server rack */}
                <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={1} />

                {/* Server compartments */}
                <line x1="3" y1="8" x2="21" y2="8" strokeWidth={1} />
                <line x1="3" y1="12" x2="21" y2="12" strokeWidth={1} />
                <line x1="3" y1="16" x2="21" y2="16" strokeWidth={1} />

                {/* Server indicators/lights */}
                <circle cx="6" cy="6" r="1" fill="currentColor" />
                <circle cx="9" cy="6" r="1" fill="currentColor" />

                <circle cx="6" cy="10" r="1" fill="currentColor" />
                <circle cx="9" cy="10" r="1" fill="currentColor" />

                <circle cx="6" cy="14" r="1" fill="currentColor" />
                <circle cx="9" cy="14" r="1" fill="currentColor" />

                {/* Network/connectivity symbol */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 6l2 2-2 2M20 8h-4"
                />

                {/* Cloud connection indicator */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M14 18c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                />
              </svg>
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-4">{t("netlifyTitleText")}</div>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("netlifyIntro1")}
          </div>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            {" "}
            {description}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} isFirst={index === 0} index={index} />
            ))}
          </div>

          {/* Completion Section */}
          <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl text-white p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-2">{t("netlifySetupComplete")}</div>
              <div className="text-green-100 max-w-2xl mx-auto">
                {t("netlifySetupCompleteMessage")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      {/* <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 text-blue-600">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-blue-800">
            <h3 className="font-semibold mb-2 text-lg">Need Additional Help?</h3>
            <p className="text-sm leading-relaxed mb-3">
              If you encounter any issues during the setup process, here are some helpful resources:
            </p>
            <ul className="text-sm space-y-1 list-disc list-inside ml-4">
              <li>Check the official Baserow documentation for troubleshooting tips</li>
              <li>Ensure you have the necessary permissions for your Baserow account</li>
              <li>Verify your internet connection is stable during the setup process</li>
              <li>Contact your system administrator if you encounter authentication issues</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export { Netlify };

import React from "react";
import { useTranslation } from "react-i18next";
import { decodeHTML } from "../utils/decodeHTML.js";
import ReactHtmlParser from "html-react-parser";
import baserow1 from "../../assets/images/baserow1.png";
import baserow2 from "../../assets/images/baserow2.png";
import baserow3 from "../../assets/images/baserow3.png";
import baserow4 from "../../assets/images/baserow4.png";
import baserow5 from "../../assets/images/baserow5.png";
import baserow6 from "../../assets/images/baserow6.png";
import baserow7 from "../../assets/images/baserow7.png";
import baserow8 from "../../assets/images/baserow8.png";
import baserow9 from "../../assets/images/baserow9.png";
import baserow10 from "../../assets/images/baserow10.png";
import baserow11 from "../../assets/images/baserow11.png";
import baserow12 from "../../assets/images/baserow14.png";
import baserow13 from "../../assets/images/baserow15.png";
import baserow14 from "../../assets/images/baserow16.png";
import baserow15 from "../../assets/images/baserow17.png";
import baserow16 from "../../assets/images/baserow19.png";

interface StepData {
  id: number;
  text: string;
  image: string;
  imageWidth?: number;
  imageAlt: string;
}

const Baserow: React.FC = () => {
  const { t } = useTranslation();
  const description = ReactHtmlParser(decodeHTML(t("databaseIntroText"))) || "";

  // Decode Language XML
  const step1Text = ReactHtmlParser(decodeHTML(t("baserowStep1"))) || "";
  const step2Text = ReactHtmlParser(decodeHTML(t("baserowStep2"))) || "";
  const step3Text = ReactHtmlParser(decodeHTML(t("baserowStep3"))) || "";
  const step4Text = ReactHtmlParser(decodeHTML(t("baserowStep4"))) || "";
  const step5Text = ReactHtmlParser(decodeHTML(t("baserowStep5"))) || "";
  const step6Text = ReactHtmlParser(decodeHTML(t("baserowStep6"))) || "";
  const step7Text = ReactHtmlParser(decodeHTML(t("baserowStep7"))) || "";
  const step8Text = ReactHtmlParser(decodeHTML(t("baserowStep8"))) || "";
  const step9Text = ReactHtmlParser(decodeHTML(t("baserowStep9"))) || "";
  const step10Text = ReactHtmlParser(decodeHTML(t("baserowStep10"))) || "";
  const step11Text = ReactHtmlParser(decodeHTML(t("baserowStep11"))) || "";
  const step12Text = ReactHtmlParser(decodeHTML(t("baserowStep12"))) || "";
  const step13Text = ReactHtmlParser(decodeHTML(t("baserowStep13"))) || "";
  const step14Text = ReactHtmlParser(decodeHTML(t("baserowStep14"))) || "";
  const step15Text = ReactHtmlParser(decodeHTML(t("baserowStep15"))) || "";
  const step16Text = ReactHtmlParser(decodeHTML(t("baserowStep16"))) || "";

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
    step14Text,
    step15Text,
    step16Text,
  ];

  // Configuration for all steps
  const steps: StepData[] = [
    {
      id: 1,
      text: `${step1Text}`,
      image: baserow1,
      imageAlt: "Baserow registration screen",
    },
    {
      id: 2,
      text: `${step2Text}`,
      image: baserow2,
      imageAlt: "Baserow dashboard",
    },
    {
      id: 3,
      text: `${step1Text}`,
      image: baserow3,
      imageAlt: "Create new database",
    },
    {
      id: 4,
      text: "Name your database (e.g., 'Q-Methodology Research') and provide a description for your project to keep it organized.",
      image: baserow4,
      imageAlt: "Database template selection",
    },
    {
      id: 5,
      text: "Configure your database settings including privacy options and collaboration permissions for your research team.",
      image: baserow5,
      imageAlt: "Database configuration",
    },
    {
      id: 6,
      text: "Create your first table for storing Q-sort data. Set up columns for participant information, statement rankings, and demographic data.",
      image: baserow6,
      imageAlt: "Table setup",
    },
    {
      id: 7,
      text: "Configure field types for your data collection. Use appropriate field types like number for rankings, text for comments, and single select for categories.",
      image: baserow7,
      imageAlt: "Field configuration",
    },
    {
      id: 8,
      text: "Begin entering your research data or set up the table structure to prepare for data import from your Q-methodology study.",
      image: baserow8,
      imageAlt: "Data entry",
    },
    {
      id: 9,
      text: "Create different views of your data including grid view for data entry, gallery view for visual organization, and form view for data collection.",
      image: baserow9,
      imageAlt: "View configuration",
    },
    {
      id: 10,
      text: "Configure sharing settings to collaborate with your research team. Set appropriate permissions for viewing, editing, and commenting.",
      image: baserow10,
      imageAlt: "Sharing settings",
    },
    {
      id: 11,
      text: "Access the API settings to enable programmatic data access for advanced analysis tools and statistical software integration.",
      image: baserow11,
      imageAlt: "API configuration",
    },
    {
      id: 12,
      text: "Generate API tokens for secure access to your data. Keep these tokens secure and use them for automated data synchronization.",
      image: baserow12,
      imageWidth: 500,
      imageAlt: "API token generation",
    },
    {
      id: 13,
      text: "Manage your API tokens and configure access permissions for different applications and research tools you plan to integrate.",
      image: baserow13,
      imageWidth: 400,
      imageAlt: "Token management",
    },
    {
      id: 14,
      text: "Set up integration with your Q-methodology analysis software by configuring the connection settings and testing the data flow.",
      image: baserow14,
      imageAlt: "Integration setup",
    },
    {
      id: 15,
      text: "Test your database connection and verify that data can be properly imported and exported for your research analysis workflow.",
      image: baserow15,
      imageAlt: "Testing connection",
    },
    {
      id: 16,
      text: "Complete the final configuration steps and verify that all features are working correctly for your Q-methodology research project.",
      image: baserow16,
      imageAlt: "Final configuration",
    },
  ];

  const StepCard: React.FC<{ step: StepData; isFirst?: boolean; index: number }> = ({
    step,
    isFirst = false,
    index,
  }) => {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Step Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold text-lg">
              {step.id}
            </div>
            <div>{langArray[index]}</div>
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Baserow Setup Process</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("baserowIntro1")}
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            {" "}
            {description}
          </p>
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
              <h3 className="text-2xl font-bold mb-2">Setup Complete!</h3>
              <p className="text-green-100 max-w-2xl mx-auto">
                Congratulations! You have successfully completed the Baserow setup process. Your
                database is now ready for Q-methodology research data collection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
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
      </div>
    </div>
  );
};

export { Baserow };

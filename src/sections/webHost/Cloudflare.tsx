import React from "react";
import { useTranslation } from "react-i18next";
import { decodeHTML } from "../utils/decodeHTML.js";
import ReactHtmlParser from "html-react-parser";
import cloudflare11 from "../../assets/images/cloudflare11.svg";
import cloudflare12 from "../../assets/images/cloudflare12.svg";
import cloudflare1 from "../../assets/images/cloudflare1.svg";
import cloudflare2 from "../../assets/images/cloudflare2.svg";
import cloudflare3 from "../../assets/images/cloudflare3.svg";
import cloudflare4 from "../../assets/images/cloudflare4.svg";
import cloudflare5 from "../../assets/images/cloudflare5.svg";
import cloudflare6 from "../../assets/images/cloudflare6.svg";
import cloudflare7 from "../../assets/images/cloudflare7.svg";
import cloudflare8 from "../../assets/images/cloudflare8.svg";
import cloudflare9 from "../../assets/images/cloudflare9.svg";
import cloudflare10 from "../../assets/images/cloudflare10.svg";

interface StepData {
  id: number;
  text: string;
  image: string;
  imageWidth?: number;
  imageAlt: string;
}

const Cloudflare: React.FC = () => {
  const { t } = useTranslation();
  const description =
    ReactHtmlParser(decodeHTML(t("cloudflareIntroText"))) || "";

  // Decode Language XML
  const step1Text = ReactHtmlParser(decodeHTML(t("cloudflareStep1"))) || "";
  const step2Text = ReactHtmlParser(decodeHTML(t("cloudflareStep2"))) || "";
  const step3Text = ReactHtmlParser(decodeHTML(t("cloudflareStep3"))) || "";
  const step4Text = ReactHtmlParser(decodeHTML(t("cloudflareStep4"))) || "";
  const step5Text = ReactHtmlParser(decodeHTML(t("cloudflareStep5"))) || "";
  const step6Text = ReactHtmlParser(decodeHTML(t("cloudflareStep6"))) || "";
  const step7Text = ReactHtmlParser(decodeHTML(t("cloudflareStep7"))) || "";
  const step8Text = ReactHtmlParser(decodeHTML(t("cloudflareStep8"))) || "";
  const step9Text = ReactHtmlParser(decodeHTML(t("cloudflareStep9"))) || "";
  const step10Text = ReactHtmlParser(decodeHTML(t("cloudflareStep10"))) || "";
  const step11Text = ReactHtmlParser(decodeHTML(t("cloudflareStep11"))) || "";
  const step12Text = ReactHtmlParser(decodeHTML(t("cloudflareStep12"))) || "";

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
  ];

  // Configuration for all steps
  const steps: StepData[] = [
    {
      id: 1,
      text: `${step1Text}`,
      image: cloudflare1,
      imageAlt: "Baserow registration screen",
    },
    {
      id: 2,
      text: `${step2Text}`,
      image: cloudflare2,
      imageAlt: "Baserow dashboard",
    },
    {
      id: 3,
      text: `${step1Text}`,
      image: cloudflare3,
      imageAlt: "Create new database",
    },
    {
      id: 4,
      text: "Name your database (e.g., 'Q-Methodology Research') and provide a description for your project to keep it organized.",
      image: cloudflare4,
      imageAlt: "Database template selection",
    },
    {
      id: 5,
      text: "Configure your database settings including privacy options and collaboration permissions for your research team.",
      image: cloudflare5,
      imageAlt: "Database configuration",
    },
    {
      id: 6,
      text: "Create your first table for storing Q-sort data. Set up columns for participant information, statement rankings, and demographic data.",
      image: cloudflare6,
      imageAlt: "Table setup",
    },
    {
      id: 7,
      text: "Configure field types for your data collection. Use appropriate field types like number for rankings, text for comments, and single select for categories.",
      image: cloudflare7,
      imageAlt: "Field configuration",
    },
    {
      id: 8,
      text: "Begin entering your research data or set up the table structure to prepare for data import from your Q-methodology study.",
      image: cloudflare8,
      imageAlt: "Data entry",
    },
    {
      id: 9,
      text: "Create different views of your data including grid view for data entry, gallery view for visual organization, and form view for data collection.",
      image: cloudflare9,
      imageAlt: "View configuration",
    },
    {
      id: 10,
      text: "Configure sharing settings to collaborate with your research team. Set appropriate permissions for viewing, editing, and commenting.",
      image: cloudflare10,
      imageAlt: "Sharing settings",
    },
    {
      id: 11,
      text: "Access the API settings to enable programmatic data access for advanced analysis tools and statistical software integration.",
      image: cloudflare11,
      imageAlt: "API configuration",
    },
    {
      id: 12,
      text: "Generate API tokens for secure access to your data. Keep these tokens secure and use them for automated data synchronization.",
      image: cloudflare12,
      imageAlt: "API token generation",
    },
  ];

  const StepCard: React.FC<{
    step: StepData;
    isFirst?: boolean;
    index: number;
  }> = ({ step, index }) => {
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
              className="w-[750px] max-w-[500px]  max-h-[500px] shadow-md border border-gray-300"
              style={{
                maxWidth: step.imageWidth ? `${step.imageWidth}px` : "none",
              }}
              alt={step.imageAlt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8">
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
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="16"
                  rx="2"
                  strokeWidth={1}
                />

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
          <div className="text-4xl font-bold text-gray-900 mb-4">
            {t("cloudflareTitleText")}
          </div>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("cloudflareIntro1")}
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
              <StepCard
                key={step.id}
                step={step}
                isFirst={index === 0}
                index={index}
              />
            ))}
          </div>

          {/* Completion Section */}
          <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl text-white p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-2">
                {t("netlifySetupComplete")}
              </div>
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

export { Cloudflare };

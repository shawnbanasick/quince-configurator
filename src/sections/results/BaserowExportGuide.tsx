import React from "react";
import { useTranslation } from "react-i18next";
import { decodeHTML } from "../utils/decodeHTML.ts";
import ReactHtmlParser from "html-react-parser";
import export1 from "../../assets/images/export1.png";
import export2 from "../../assets/images/export2.png";
import export3 from "../../assets/images/export3.png";
import export4 from "../../assets/images/export4.png";
import export5 from "../../assets/images/export5.png";

interface StepData {
  id: number;
  text: string;
  image: string;
  imageWidth?: number;
  imageAlt: string;
}

const BaserowExportGuide: React.FC = () => {
  const { t } = useTranslation();
  const description = ReactHtmlParser(decodeHTML(t("baserowExportIntro3"))) || "";

  const step1Text = ReactHtmlParser(decodeHTML(t("exportStep1"))) || "";
  const step2Text = ReactHtmlParser(decodeHTML(t("exportStep2"))) || "";
  const step3Text = ReactHtmlParser(decodeHTML(t("exportStep3"))) || "";
  const step4Text = ReactHtmlParser(decodeHTML(t("exportStep4"))) || "";
  const step5Text = ReactHtmlParser(decodeHTML(t("exportStep5"))) || "";

  const langArray = [step1Text, step2Text, step3Text, step4Text, step5Text];

  // Configuration for all steps
  const steps: StepData[] = [
    {
      id: 1,
      text: `${step1Text}`,
      image: export1,
      imageAlt: "Baserow registration screen",
    },
    {
      id: 2,
      text: `${step2Text}`,
      image: export2,
      imageAlt: "Baserow dashboard",
    },
    {
      id: 3,
      text: `${step1Text}`,
      image: export3,
      imageAlt: "Create new database",
    },
    {
      id: 4,
      text: "Name your database (e.g., 'Q-Methodology Research') and provide a description for your project to keep it organized.",
      image: export4,
      imageAlt: "Database template selection",
    },
    {
      id: 5,
      text: "Configure your database settings including privacy options and collaboration permissions for your research team.",
      image: export5,
      imageAlt: "Database configuration",
    },
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
              className="w-auto max-w-[500px]  max-h-[500px] rounded-sm shadow-md border border-gray-300"
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
    <div className="min-h-screen  py-8">
      <div className="max-w-9/10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6"></div>
          <div className="text-4xl font-bold text-gray-900 mb-4">{t("baserowExportIntro1")}</div>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("baserowExportIntro2")}
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
              <div className="text-2xl font-bold mb-2">{t("exportSuccess1")}</div>
              <div className="text-green-100 max-w-2xl mx-auto">{t("exportSuccess2")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BaserowExportGuide };

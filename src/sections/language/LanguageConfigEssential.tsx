import React from "react";
import { ConsentPageTextInput } from "./ConsentPageTextInput.js";
import { WelcomeScreenTextInput } from "./WelcomeScreenTextInput.js";
import { MobileWelcomeScreenTextInput } from "./MobileWelcomeScreenTextInput.js";

// import { MultipleScreenTextInput } from "./MultipleScreenTextInput";
// import { AccessControlTextInput } from "./AccessControlTextInput.js";
// import { PresortTextInput } from "./PresortTextInput.js";
import { MobilePresortTextInput } from "./MobilePresortTextInput.js";
// import { RefineEvaluationsTextInput } from "./RefineEvaluationsTextInput.js";
// import { MobileRefineEvaluationsTextInput } from "./MobileRefineEvaluationsTextInput.js";
import { SortTextInput } from "./SortTextInput.js";
import { MobileSortTextInput } from "./MobileSortTextInput.js";
// import { PostsortTextInput } from "./PostsortTextInput.js";
// import { MobilePostsortTextInput } from "./MobilePostsortTextInput.js";
// import { SurveyTextInput } from "./SurveyTextInput.js";
// import { MobileSurveyTextInput } from "./MobileSurveyTextInput.js";
// import { SubmitTextInput } from "./SubmitTextInput.js";
// import { MobileSubmitTextInput } from "./MobileSubmitTextInput.js";
// import { FailureTextInput } from "./EmailTextInput.js";
// import { ProjectLinkingTextInput } from "./ProjectLinkingTextInput.js";

const LanguageConfigEssential: React.FC = () => {
  const ConfigSection: React.FC<{
    title: string;
    description: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "accent";
  }> = ({ title, description, icon, children, variant = "primary" }) => {
    const variants = {
      primary: "from-blue-400 to-purple-600",
      secondary: "from-green-600 to-teal-600",
      accent: "from-orange-500 to-red-500",
    };

    return (
      <div
        id="cards"
        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-[83vw] max-w-[1500px] mb-8"
      >
        <div className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6`}>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 text-white">{icon}</div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-1">{title}</h2>
              <p className="text-white text-opacity-90 text-sm">{description}</p>
            </div>
          </div>
        </div>
        <div className="p-8">{children}</div>
      </div>
    );
  };

  // Organize components by categories
  const screenSections = [
    {
      title: "Access & Consent",
      description: "Configure access control and consent page content",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      components: [<ConsentPageTextInput key="consent" />],
      variant: "secondary" as const,
    },
    {
      title: "Welcome Screens",
      description: "Configure welcome messages for desktop and mobile",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          />
        </svg>
      ),
      components: [
        <WelcomeScreenTextInput key="welcome" />,
        <MobileWelcomeScreenTextInput key="mobile-welcome" />,
      ],
      variant: "primary" as const,
    },
    {
      title: "Pre-sort Configuration",
      description: "Set up pre-sorting instructions and interface",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ),
      components: [<MobilePresortTextInput key="mobile-presort" />],
      variant: "secondary" as const,
    },
    {
      title: "Sorting Interface",
      description: "Configure the main Q-sort sorting interface",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      components: [<SortTextInput key="sort" />, <MobileSortTextInput key="mobile-sort" />],
      variant: "primary" as const,
    },
  ];

  return (
    <div className="flex flex-col items-center text-black justify-center">
      {screenSections.map((section, index) => (
        <ConfigSection
          key={index}
          title={section.title}
          description={section.description}
          icon={section.icon}
          variant={section.variant}
        >
          <div className="space-y-6">
            {section.components.map((component, componentIndex) => (
              <div key={componentIndex}>{component}</div>
            ))}
          </div>
        </ConfigSection>
      ))}
    </div>
  );
};

export { LanguageConfigEssential };

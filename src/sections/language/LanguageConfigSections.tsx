import React from "react";
import { MultipleScreenTextInput } from "./MultipleScreenTextInput";
import { ConsentPageTextInput } from "./ConsentPageTextInput.js";
import { AccessControlTextInput } from "./AccessControlTextInput.js";
import { WelcomeScreenTextInput } from "./WelcomeScreenTextInput.js";
import { MobileWelcomeScreenTextInput } from "./MobileWelcomeScreenTextInput.js";
import { PresortTextInput } from "./PresortTextInput.js";
import { MobilePresortTextInput } from "./MobilePresortTextInput.js";
import { RefineEvaluationsTextInput } from "./RefineEvaluationsTextInput.js";
import { MobileRefineEvaluationsTextInput } from "./MobileRefineEvaluationsTextInput.js";
import { SortTextInput } from "./SortTextInput.js";
import { MobileSortTextInput } from "./MobileSortTextInput.js";
import { PostsortTextInput } from "./PostsortTextInput.js";
import { MobilePostsortTextInput } from "./MobilePostsortTextInput.js";
import { SurveyTextInput } from "./SurveyTextInput.js";
import { MobileSurveyTextInput } from "./MobileSurveyTextInput.js";
import { SubmitTextInput } from "./SubmitTextInput.js";
import { MobileSubmitTextInput } from "./MobileSubmitTextInput.js";
import { FailureTextInput } from "./EmailTextInput.js";
import { ProjectLinkingTextInput } from "./ProjectLinkingTextInput.js";
import { useTranslation } from "react-i18next";

const LanguageConfigSections: React.FC = () => {
  const { t } = useTranslation();

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
      title: t("multiScreenConfigurations"),
      description: t("multiScreenConfigurationsSubTitle"),
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      components: [<MultipleScreenTextInput key="multi" />],
      variant: "primary" as const,
    },
    {
      title: t("accessAndConsent"),
      description: t("accessAndConsentSubTitle"),
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
      components: [<ConsentPageTextInput key="consent" />, <AccessControlTextInput key="access" />],
      variant: "secondary" as const,
    },
    {
      title: t("welcomeScreens"),
      description: t("welcomeScreensSubTitle"),
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
      title: t("presortConfiguration"),
      description: t("presortConfigurationSubTitle"),
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
      components: [
        <PresortTextInput key="presort" />,
        <MobilePresortTextInput key="mobile-presort" />,
      ],
      variant: "secondary" as const,
    },
    {
      title: t("refinementProcess"),
      description: t("refinementProcessSubTitle"),
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
      components: [
        <RefineEvaluationsTextInput key="refine" />,
        <MobileRefineEvaluationsTextInput key="mobile-refine" />,
      ],
      variant: "accent" as const,
    },
    {
      title: t("sortingInterface"),
      description: t("sortingInterfaceSubTitle"),
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
    {
      title: t("postsortCommentsInterface"),
      description: t("postsortCommentsInterfaceSubTitle"),
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      components: [
        <PostsortTextInput key="postsort" />,
        <MobilePostsortTextInput key="mobile-postsort" />,
      ],
      variant: "secondary" as const,
    },
    {
      title: t("surveyConfiguration"),
      description: t("surveyConfigurationSubTitle"),
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      components: [<SurveyTextInput key="survey" />, <MobileSurveyTextInput key="mobile-survey" />],
      variant: "accent" as const,
    },
    {
      title: t("submissionAndCompletion"),
      description: t("submissionAndCompletionSubTitle"),
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
      components: [<SubmitTextInput key="submit" />, <MobileSubmitTextInput key="mobile-submit" />],
      variant: "primary" as const,
    },
    {
      title: t("errorsAndLinking"),
      description: t("errorsAndLinkingSubTitle"),
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      components: [<FailureTextInput key="failure" />, <ProjectLinkingTextInput key="linking" />],
      variant: "secondary" as const,
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

export { LanguageConfigSections };

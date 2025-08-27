import React from "react";
import { LanguageHeader } from "./LanguageHeader";
import { LanguageConfigSections } from "./LanguageConfigSections";
import { LanguageConfigEssential } from "./LanguageConfigEssential";
import { useStore } from "../../globalState/useStore.js";

const getLangDisplayAllMode = (state) => state.langDisplayAllMode;

const Language: React.FC = () => {
  const displayMode = useStore(getLangDisplayAllMode);

  return (
    <>
      <LanguageHeader />
      {displayMode ? <LanguageConfigSections /> : <LanguageConfigEssential />}
    </>
  );
};

export { Language };

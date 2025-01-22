import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { UserTextInput } from "../utils/UserTextInput";

const getStudyTitle = (state) => state.studyTitle;
const getSetStudyTitle = (state) => state.setStudyTitle;

const Config1StudyTitle: React.FC = () => {
  const studyTitle = useStore(getStudyTitle);
  const setStudyTitle = useStore(getSetStudyTitle);
  const { t } = useTranslation();

  const handleStudyTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setStudyTitle(event.target.value);
  };

  return (
    <div className="flex flex-col pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <h3 className="text-lg font-title mt-0 font-semibold">
        {t("statementSortVsImageSort")}
      </h3>
      <UserTextInput
        classNameText={`mt-4 block w-[420px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        classNameLabel={`min-w-[150px] content-center pt-1 mr-1`}
        highlight={true}
        disabled={false}
        label={`1. ${t("studyTitle")}:`}
        placeholder={t("enterStudyTitle")}
        name="studyNameInput"
        value={studyTitle}
        onChange={handleStudyTitleChange}
      />
    </div>
  );
};

export { Config1StudyTitle };

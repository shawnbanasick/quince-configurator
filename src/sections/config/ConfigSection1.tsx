// @ts-ignore
import React, { useState } from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { UserTextInput } from "../utils/UserTextInput";
import { Radio } from "../utils/RadioButtons";
import clsx from "clsx";

const getStudyTitle = (state) => state.studyTitle;
const getSetStudyTitle = (state) => state.setStudyTitle;
const getDisplayMode = (state) => state.displayMode;
const getSetupTarget = (state) => state.setupTarget;
const getSetSetupTarget = (state) => state.setSetupTarget;
const getLinkToSecondProject = (state) => state.linkToSecondProject;
const getSetLinkToSecondProject = (state) => state.setLinkToSecondProject;
const getUseImages = (state) => state.useImages;
const getSetUseImages = (state) => state.setUseImages;
const getSecondProjectUrl = (state) => state.secondProjectUrl;
const getSetSecondProjectUrl = (state) => state.setSecondProjectUrl;
const getEmailAddress = (state) => state.emailAddress;
const getSetEmailAddress = (state) => state.setEmailAddress;
const getEmailSubjectLine = (state) => state.emailSubjectLine;
const getSetEmailSubjectLine = (state) => state.setEmailSubjectLine;

const ConfigSection1: React.FC = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  const studyTitle = useStore(getStudyTitle);
  const setStudyTitle = useStore(getSetStudyTitle);
  const setupTarget = useStore(getSetupTarget);
  const setSetupTarget = useStore(getSetSetupTarget);
  const linkToSecondProject = useStore(getLinkToSecondProject);
  const setLinkToSecondProject = useStore(getSetLinkToSecondProject);
  const useImages = useStore(getUseImages);
  const setUseImages = useStore(getSetUseImages);
  const secondProjectUrl = useStore(getSecondProjectUrl);
  const setSecondProjectUrl = useStore(getSetSecondProjectUrl);
  const emailAddress = useStore(getEmailAddress);
  const setEmailAddress = useStore(getSetEmailAddress);
  const emailSubjectLine = useStore(getEmailSubjectLine);
  const setEmailSubjectLine = useStore(getSetEmailSubjectLine);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  const handleLinkSecondProjectChange = (event: any) => {
    if (event.target.value === "true") {
      setLinkToSecondProject(true);
    } else {
      setLinkToSecondProject(false);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target.value);
  };

  const handleSecondProjectUrlAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecondProjectUrl(event.target.value);
  };

  const handleUseImagesChange = (inputValue: any) => {
    if (inputValue.target.value === "true") {
      setUseImages(true);
    } else {
      setUseImages(false);
    }
  };

  const handleStudyTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setStudyTitle(event.target.value);
  };

  const handleSetupTargetChange = (inputValue: any) => {
    setSetupTarget(inputValue);
  };

  return (
    <>
      <div className="flex flex-col align-center w-2/3 pl-20 pr-20 pt-2 pb-8 min-h-[300px] outline outline-2 outline-red-300 mb-40">
        <UserTextInput
          classNameText={`mt-1 block w-[800px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          classNameLabel={`min-w-[150px] content-center pt-1 mr-1`}
          highlight={true}
          disabled={false}
          label={`1. ${t("studyTitle")}:`}
          placeholder={t("enterStudyTitle")}
          name="studyNameInput"
          value={studyTitle}
          onChange={handleStudyTitleChange}
        />
        <div>
          <div className="flex flex-row h-[70px] content-center gap-5 mt-1">
            <span className="content-center">{`2. ${t("setupTarget")}:`}</span>
            <Radio
              name="option"
              value="baserow"
              label={t("baserow+email")}
              align="left"
              isChecked={setupTarget === "baserow"}
              handleChange={handleSetupTargetChange}
            />
            <Radio
              name="option"
              value="email"
              label={t("emailOnly")}
              isChecked={setupTarget === "email"}
              handleChange={handleSetupTargetChange}
            />
          </div>

          <div className="flex align-center">
            <UserTextInput
              classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 select-none sm:text-sm disabled:opacity-50`}
              classNameLabel={`min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
              highlight={true}
              label={`2b. ${t("emailAddress")}:`}
              placeholder={t("enterEmailAddress")}
              disabled={false}
              name="emailInput"
              value={emailAddress}
              onChange={handleEmailChange}
            />
          </div>

          <div className="flex content-center mt-4 outline outline-2 outline-red-300">
            <UserTextInput
              classNameText={`mt-5 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500  content-center focus:border-indigo-500 select-none sm:text-sm disabled:opacity-50`}
              classNameLabel={`min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
              highlight={true}
              label={`2c. ${t("emailSubjectLine")}:`}
              placeholder={t("enterEmailSubjectLineText")}
              disabled={false}
              name="emailAddress"
              value={secondProjectUrl}
              onChange={handleSecondProjectUrlAddressChange}
            />
          </div>

          <div className="flex flex-row h-[60px] content-center items-center gap-5 mt-3">
            <span className="content-center">{`3. ${t(
              "linkToSecondProject"
            )}:`}</span>
            <div className="">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": linkToSecondProject,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-2 outline-zinc-600":
                      !linkToSecondProject,
                  }
                )}
                htmlFor="linkToSecondProjectTrue"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="linkToSecondProject"
                  id="linkToSecondProjectTrue" // htlmlFor targets this id.
                  value="true"
                  checked={linkToSecondProject}
                  onChange={handleLinkSecondProjectChange}
                />
                {t("true")}
              </label>
            </div>
            <div className="">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": !linkToSecondProject,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-2 outline-zinc-600":
                      linkToSecondProject,
                  }
                )}
                htmlFor="linkToSecondProjectFalse"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="linkToSecondProject"
                  id="linkToSecondProjectFalse" // htlmlFor targets this id.
                  value="false"
                  checked={!linkToSecondProject}
                  onChange={handleLinkSecondProjectChange}
                />
                {t("false")}
              </label>
            </div>
          </div>

          <UserTextInput
            classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 select-none sm:text-sm disabled:opacity-50`}
            classNameLabel={`min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
            highlight={true}
            label={`3b. ${t("secondProjectUrlAddress")}:`}
            placeholder={t("enterSecondProjectUrlAddress")}
            disabled={!linkToSecondProject}
            name="linkToSecondProjectEmailInput"
            value={secondProjectUrl}
            onChange={handleSecondProjectUrlAddressChange}
          />

          <div className="flex flex-row h-[60px] content-center gap-5 mt-5 outline outline-2 outline-red-300">
            <span className="content-center">{`4. ${t("sortImages")}:`}</span>
            <div className="content-center">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": useImages,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-2 outline-zinc-600":
                      !useImages,
                  }
                )}
                htmlFor="useImagesTrue"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="useImages"
                  id="useImagesTrue" // htlmlFor targets this id.
                  value="true"
                  checked={useImages}
                  onChange={handleUseImagesChange}
                />
                {t("true")}
              </label>
            </div>
            <div className="content-center">
              <label
                className={clsx(
                  "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
                  {
                    "bg-opacity-100": !useImages,
                    "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-2 outline-zinc-600":
                      useImages,
                  }
                )}
                htmlFor="useImagesFalse"
              >
                <input
                  type="radio"
                  className="hidden"
                  name="useImages"
                  id="useImagesFalse" // htlmlFor targets this id.
                  value="false"
                  checked={!useImages}
                  onChange={handleUseImagesChange}
                />
                {t("false")}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ConfigSection1 };

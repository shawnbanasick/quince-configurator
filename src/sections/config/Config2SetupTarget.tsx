import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { UserTextInput } from "../utils/UserTextInput";
// import { Radio } from "../utils/RadioButtons";

// const getSetupTarget = (state) => state.setupTarget;
// const getSetSetupTarget = (state) => state.setSetupTarget;
const getEmailAddress = (state) => state.emailAddress;
const getSetEmailAddress = (state) => state.setEmailAddress;
const getEmailSubjectLine = (state) => state.emailSubjectLine;
const getSetEmailSubjectLine = (state) => state.setEmailSubjectLine;
const getBaserowToken = (state) => state.baserowToken;
const getSetBaserowToken = (state) => state.setBaserowToken;
const getBaserowDatabaseId = (state) => state.baserowDatabaseId;
const getSetBaserowDatabaseId = (state) => state.setBaserowDatabaseId;

const Config2SetupTarget: React.FC = () => {
  // const setupTarget = useStore(getSetupTarget);
  // const setSetupTarget = useStore(getSetSetupTarget);
  const emailAddress = useStore(getEmailAddress);
  const setEmailAddress = useStore(getSetEmailAddress);
  const emailSubjectLine = useStore(getEmailSubjectLine);
  const setEmailSubjectLine = useStore(getSetEmailSubjectLine);
  const baserowToken = useStore(getBaserowToken);
  const setBaserowToken = useStore(getSetBaserowToken);
  const baserowDatabaseId = useStore(getBaserowDatabaseId);
  const setBaserowDatabaseId = useStore(getSetBaserowDatabaseId);
  const { t } = useTranslation();

  // Language XML Decoding
  // const setupTargetText = t("setupTarget") || "";

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target.value);
  };

  const handleBaserowTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle Baserow token change logic here
    setBaserowToken(event.target.value);
  };

  const handleBaserowDatabaseIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle Baserow database ID change logic here
    setBaserowDatabaseId(event.target.value);
  };

  const handleEmailSubjectTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailSubjectLine(event.target.value);
  };

  return (
    <div className="flex flex-col pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <h3 className="text-lg font-title font-semibold">{`2. ${t("baserowSetup")}`}</h3>

      <div className="flex align-center">
        <UserTextInput
          classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
          classNameLabel={`min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          highlight={true}
          label={`2a. ${t("baserowToken")}:`}
          placeholder={t("enterBaserowToken")}
          disabled={false}
          name="baserowToken"
          value={baserowToken}
          onChange={handleBaserowTokenChange}
        />
      </div>
      <div className="flex align-center">
        <UserTextInput
          classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
          classNameLabel={`min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          highlight={true}
          label={`2b. ${t("baserowDatabaseIdNumber")}:`}
          placeholder={t("enterBaserowDatabaseIdNumber")}
          disabled={false}
          name="baserowDatabaseId"
          value={baserowDatabaseId}
          onChange={handleBaserowDatabaseIdChange}
        />
      </div>

      <div className="flex align-center">
        <UserTextInput
          classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
          classNameLabel={`min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          highlight={true}
          label={`2c. ${t("emailAddress")}:`}
          placeholder={t("enterEmailAddress")}
          disabled={false}
          name="emailInput"
          value={emailAddress}
          onChange={handleEmailChange}
        />
      </div>

      <div className="flex content-center mt-4">
        <UserTextInput
          classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
          classNameLabel={`min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          highlight={true}
          label={`2d. ${t("emailSubjectLine")}:`}
          placeholder={t("enterEmailSubjectLineText")}
          disabled={false}
          name="emailAddress"
          value={emailSubjectLine}
          onChange={handleEmailSubjectTextChange}
        />
      </div>
    </div>
  );
};

export { Config2SetupTarget };

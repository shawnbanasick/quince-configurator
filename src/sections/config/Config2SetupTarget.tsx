import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { UserTextInput } from "../utils/UserTextInput";

const getEmailAddress = (state) => state.emailAddress;
const getSetEmailAddress = (state) => state.setEmailAddress;
const getBaserowToken = (state) => state.baserowToken;
const getSetBaserowToken = (state) => state.setBaserowToken;
const getBaserowDatabaseIdNumber = (state) => state.baserowDatabaseIdNumber;
const getSetBaserowDatabaseIdNumber = (state) => state.setBaserowDatabaseIdNumber;

const Config2SetupTarget: React.FC = () => {
  const emailAddress = useStore(getEmailAddress);
  const setEmailAddress = useStore(getSetEmailAddress);
  const baserowToken = useStore(getBaserowToken);
  const setBaserowToken = useStore(getSetBaserowToken);
  const baserowDatabaseIdNumber = useStore(getBaserowDatabaseIdNumber);
  const setBaserowDatabaseIdNumber = useStore(getSetBaserowDatabaseIdNumber);
  const { t } = useTranslation();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target.value);
  };

  const handleBaserowTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBaserowToken(event.target.value);
  };

  const handleBaserowDatabaseIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBaserowDatabaseIdNumber(event.target.value);
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
          name="baserowDatabaseIdNumber"
          value={baserowDatabaseIdNumber}
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
    </div>
  );
};

export { Config2SetupTarget };

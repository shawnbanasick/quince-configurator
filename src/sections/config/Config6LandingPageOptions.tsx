import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { Radio } from "../utils/RadioButtons";
import { UserTextInput } from "../utils/UserTextInput";
import Image from "../../assets/images/infoIcon.svg";

const getInitialScreen = (state) => state.initialScreen;
const getSetInitialScreen = (state) => state.setInitialScreen;
const getAccessCode = (state) => state.accessCode;
const getSetAccessCode = (state) => state.setAccessCode;

const Config6LandingPageOptions: React.FC = () => {
  const initialScreen = useStore(getInitialScreen);
  const setInitialScreen = useStore(getSetInitialScreen);
  const accessCode = useStore(getAccessCode);
  const setAccessCode = useStore(getSetAccessCode);
  const { t } = useTranslation();

  const handleInitialScreenChange = (inputValue: any) => {
    setInitialScreen(inputValue);
  };

  const handleAccessCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccessCode(event.target.value);
  };

  let accessCodeInputDisabled = false;
  if (initialScreen === "anonymous" || initialScreen === "partId") {
    accessCodeInputDisabled = true;
  }

  return (
    <div className="flex flex-col  pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <div className="flex flex-row content-center gap-5 mt-3">
        <span className="text-lg font-title font-semibold">
          {t("projectAccessOptions")}
        </span>{" "}
        <img
          src={Image}
          className=" w-[25px] h-[25px] justify-self-center"
          onClick={() => alert("This is a tooltip")}
          alt="info icon"
        />
      </div>

      <div className="flex flex-row h-[70px] content-center gap-5 mt-1">
        <span className={`content-center`}>{`6a. ${t("accessMode")}:`}</span>
        <Radio
          name="accessMode"
          value="anonymous"
          label={t("anonymous")}
          align="left"
          disabled={false}
          isChecked={initialScreen === "anonymous"}
          handleChange={handleInitialScreenChange}
        />
        <Radio
          name="accessMode"
          value="partId"
          label={t("partId")}
          disabled={false}
          isChecked={initialScreen === "partId"}
          handleChange={handleInitialScreenChange}
        />
        <Radio
          name="accessMode"
          value="access"
          label={t("accessCode")}
          disabled={false}
          isChecked={initialScreen === "access"}
          handleChange={handleInitialScreenChange}
        />
        <Radio
          name="accessMode"
          value="partId-access"
          label={t("partId") + " + " + t("accessCode")}
          disabled={false}
          isChecked={initialScreen === "partId-access"}
          handleChange={handleInitialScreenChange}
        />
      </div>

      <UserTextInput
        classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
        classNameLabel={`min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 ${
          accessCodeInputDisabled ? "text-slate-400" : ""
        } select-none`}
        highlight={true}
        label={`6b. ${t("accessCode")}:`}
        placeholder={t("inputAccessCode")}
        disabled={accessCodeInputDisabled}
        name="accessCodeInput"
        value={accessCode}
        onChange={handleAccessCodeChange}
      />
    </div>
  );
};

export { Config6LandingPageOptions };

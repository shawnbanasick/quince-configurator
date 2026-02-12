import React from "react";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { UserTextInput } from "../utils/UserTextInput";
// import Image from "../../assets/images/infoIcon.svg";
import clsx from "clsx";

const getLinkToSecondProject = (state) => state.linkToSecondProject;
const getSetLinkToSecondProject = (state) => state.setLinkToSecondProject;
const getSecondProjectUrl = (state) => state.secondProjectUrl;
const getSetSecondProjectUrl = (state) => state.setSecondProjectUrl;

const Config4LinkProject: React.FC = () => {
  const linkToSecondProject = useStore(getLinkToSecondProject);
  const setLinkToSecondProject = useStore(getSetLinkToSecondProject);
  const secondProjectUrl = useStore(getSecondProjectUrl);
  const setSecondProjectUrl = useStore(getSetSecondProjectUrl);
  const { t } = useTranslation();

  const handleSecondProjectUrlAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondProjectUrl(event.target.value);
  };

  const handleLinkSecondProjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "true") {
      setLinkToSecondProject(true);
    } else {
      setLinkToSecondProject(false);
    }
  };

  return (
    <div className="flex flex-col  pt-6 pb-2 hover:bg-gray-100 hover:outline outline-2 outline-zinc-600 p-2 hover:rounded-md">
      <div className="flex flex-row content-center gap-5 mt-3">
        <span className="text-lg font-title font-semibold">{`4. ${t("projectLinking")}`}</span>
        {/* <img
          src={Image}
          className=" w-[25px] h-[25px] justify-self-center"
          onClick={() => alert("This is a tooltip")}
          alt="info icon"
        /> */}
      </div>
      <div className="flex flex-row h-[60px] content-center items-center gap-5 mt-3">
        <span className="content-center">{`4a. ${t("linkToSecondProject")}:`}</span>
        <div className="">
          <label
            className={clsx(
              "bg-blue-500 hover:bg-opacity-50 text-white px-4 py-2 rounded-md select-none",
              {
                "bg-opacity-100": linkToSecondProject,
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  !linkToSecondProject,
              },
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
                "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                  linkToSecondProject,
              },
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
        classNameText={`mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50`}
        classNameLabel={`min-w-[170px] content-center pt-1 mr-1 disabled:opacity-50 ${
          linkToSecondProject ? "" : "text-slate-400"
        } select-none`}
        highlight={false}
        label={`4b. ${t("secondProjectUrlAddress")}:`}
        placeholder={t("enterSecondProjectUrlAddress")}
        disabled={!linkToSecondProject}
        name="linkToSecondProjectEmailInput"
        value={secondProjectUrl}
        onChange={handleSecondProjectUrlAddressChange}
      />
    </div>
  );
};

export { Config4LinkProject };

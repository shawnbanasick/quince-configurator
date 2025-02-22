// @ts-ignore
import Image from "../../assets/images/qq-brand-image.png";
// import Button from "../utils/Button.jsx";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { Radio } from "../utils/RadioButtons";
import baserow1 from "../../assets/images/baserow1.png";
import baserow2 from "../../assets/images/baserow2.png";
import baserow3 from "../../assets/images/baserow3.png";
import baserow4 from "../../assets/images/baserow4.png";
import baserow5 from "../../assets/images/baserow5.png";
import baserow6 from "../../assets/images/baserow6.png";
import baserow7 from "../../assets/images/baserow7.png";
import baserow8 from "../../assets/images/baserow8.png";
import baserow9 from "../../assets/images/baserow9.png";
import baserow10 from "../../assets/images/baserow10.png";
import baserow11 from "../../assets/images/baserow11.png";

const getDisplayMode = (state) => state.displayMode;
const getSetupTarget = (state) => state.setupTarget;

const Databases = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  const database = useStore(getSetupTarget);

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  return (
    <div className="flex flex-col items-center justify-center pb-[100px]">
      <h1 className="text-center">Database Setup</h1>
      <h2>Visual Setup Guides for Baserow and Firebase</h2>
      <div className="flex flex-row w-10/12 justify-between gap-[] mt-4 mb-6"></div>
      {displayMode && (
        // <DisplayModeText>
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">
          If you have a "map.xml" from a previous Quincey-Q project, you can click on the orange
          "Load 'map.xml' File Data" button to upload the file.
          <br />
          <br />
          Enter the number of cards in each column of the Q-sort grid. The background color of the
          "Q Sort Pattern" text will change to green when all of your statements have been
          allocated.
          <br />
          <br />
          When you have finished setting up the columns, click the orange button at the bottom of
          the page and save your information as 'map.xml' in the settings folder (replace the
          default file).
        </div>
      )}
      <div className="flex flex-col justify-center items-center content-center gap-5 mt-1 mb-[20px]">
        <span className="text-3xl">{`${t("currentlySelectedDatabase")}:`}</span>
        <div className="flex flex-row gap-5">
          <Radio
            name="database"
            value="baserow"
            label={"Baserow"}
            align="left"
            isChecked={database === "baserow"}
          />
          <Radio
            name="database"
            value="firebase"
            label={"Firebase"}
            align="left"
            isChecked={database === "firebase"}
          />
          <Radio
            name="database"
            value="email"
            label={"Email Only"}
            align="left"
            isChecked={database === "email"}
          />
        </div>
        <span>{t("toChangeTheDatabase")}</span>
      </div>
      <span className="mt-8 text-8xl mb-6 font-bold">Baserow</span>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`1. ${t(
          "step1"
        )}`}</div>
        <img
          src={baserow1}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          width={800}
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`1. ${t(
          "step2"
        )}`}</div>
        <img
          src={baserow2}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 2"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`2. ${t(
          "step3"
        )}`}</div>
        <img
          src={baserow3}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 3"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`3. ${t(
          "step4"
        )}`}</div>
        <img
          src={baserow4}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 4"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`4. ${t(
          "step5"
        )}`}</div>
        <img
          src={baserow5}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`5. ${t(
          "step6"
        )}`}</div>
        <img
          src={baserow6}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`6. ${t(
          "step7"
        )}`}</div>
        <img
          src={baserow7}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`7. ${t(
          "step7"
        )}`}</div>
        <img
          src={baserow8}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`8. ${t(
          "step9"
        )}`}</div>
        <img
          src={baserow9}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`9. ${t(
          "step10"
        )}`}</div>
        <img
          src={baserow10}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`10. ${t(
          "step11"
        )}`}</div>
        <img
          src={baserow11}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`11. ${t(
          "step1"
        )}`}</div>
      </div>
    </div>
  );
};

export { Databases };

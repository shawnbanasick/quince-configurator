import Image from "../../assets/images/qq-brand-image.png";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { Radio } from "../utils/RadioButtons";
import { Baserow } from "./Baserow";
import { Firebase } from "./Firebase";

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
          Researchers in Europe should use the GDPR-friendly Baserow option. MAIN PAGE
          <br />
          <br />
          The database selection is set in the config.xml file. To change the database selection, go
          to the settings folder and open the config.xml file. Change the database selection to the
          desired database. The options are 'baserow', 'firebase', and 'email'. Save the file and
          when you return to this page the visual guide for the database will appear.
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
        <span className="w-[500px]">{t("toChangeTheDatabase")}</span>
      </div>

      {database === "baserow" && <Baserow />}
      {database === "firebase" && <Firebase />}
    </div>
  );
};

export { Databases };

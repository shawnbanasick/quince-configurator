import Image from "../../assets/images/qq-brand-image.png";
import Button from "../utils/Button";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";

const getShowDescriptionPro = (state) => state.showDescriptionPro;
const getShowDescriptionBeginner = (state) => state.showDescriptionBeginner;
const getSetShowDescriptionPro = (state) => state.setShowDescriptionPro;
const getSetShowDescriptionBeginner = (state) => state.setShowDescriptionBeginner;
const getSetDisplayMode = (state) => state.setDisplayMode;

const Start = () => {
  const { t } = useTranslation();
  const showDescriptionPro = useStore(getShowDescriptionPro);
  const showDescriptionBeginner = useStore(getShowDescriptionBeginner);
  const setShowDescriptionPro = useStore(getSetShowDescriptionPro);
  const setShowDescriptionBeginner = useStore(getSetShowDescriptionBeginner);
  const setDisplayMode = useStore(getSetDisplayMode);

  const setMode = (e) => {
    const mode = e.target.id;
    if (mode === "pro") {
      setShowDescriptionPro(true);
      setShowDescriptionBeginner(false);
      setDisplayMode("pro");
    } else {
      setShowDescriptionPro(false);
      setShowDescriptionBeginner(true);
      setDisplayMode("beginner");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center mt-8">Quincy-Q Configurator</h1>
      <img src={Image} className=" w-1/12 justify-self-center" alt="Configurator Hero Image" />
      <div className="mt-4 w-9/12 align-self-center text-base">
        Quincy-Q Configurator simplifies the set-up and testing of an{" "}
        <a
          className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/eq-web-sort"
        >
          Quincy-Q
        </a>{" "}
        project for online Q sorting. It provides guided editing of the Q sort configuration files
        and offers increased control over the design of the Q sort. To test your setup before
        hosting it on the web, use the Ken-Q Tools Mini-Server available here.
      </div>
      <div className="justify-self-center mt-4 mb-8">
        Citation:
        <br /> Banasick, S. (2025). Quincy-Q Configurator (Version 1.0.0)
      </div>
      <h2 className="text-center mt-4">{t("SelectConfiguratorDisplayMode")}:</h2>
      <div className="flex flex-row justify-self-center mt-4">
        <Button
          id="beginner"
          styleClass={`bg-blue-500 hover:bg-blue-700 ${
            showDescriptionBeginner ? "bg-opacity-100" : "bg-opacity-50"
          }`}
          label={t("Novice")}
          // isActive={appState.beginnerButtonActive}
          onClick={setMode}
        ></Button>
        <Button
          id="pro"
          label={t("Expert")}
          styleClass={`bg-[#3b82f6]  hover:bg-blue-700 ${
            showDescriptionPro ? "bg-opacity-100" : "bg-opacity-50"
          }`}
          // isActive={appState.proButtonActive}
          onClick={setMode}
        ></Button>
      </div>
      <div className="justify-self-center mt-3">
        {showDescriptionPro && <p>shows only the essential configurations</p>}
        {showDescriptionBeginner && <p>{t("displaysIndepthDescriptionsAndDirections")}</p>}
      </div>
    </div>
  );
};

export default Start;

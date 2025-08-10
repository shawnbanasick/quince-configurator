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
    <div className="flex flex-col items-center justify-center  w-[100%]">
      {/* <img src={Image} className=" w-1/12 justify-self-center" alt="Configurator Hero Image" /> */}

      <svg
        className="mt-4"
        width="200"
        height="200"
        viewBox="0 0 64 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <!-- Main configuration container --> */}
        <rect
          x="16"
          y="12"
          width="32"
          height="40"
          rx="4"
          fill="#E0F2FE"
          stroke="#0369A1"
          stroke-width="1.0"
        />

        {/* <!-- Configuration toggles/switches --> */}
        <rect x="20" y="20" width="12" height="3" rx="1.5" fill="#94A3B8" />
        <rect x="28" y="19.5" width="6" height="4" rx="2" fill="#0EA5E9" />

        <rect x="20" y="28" width="12" height="3" rx="1.5" fill="#94A3B8" />
        <rect x="20" y="27.5" width="6" height="4" rx="2" fill="#0EA5E9" />

        <rect x="20" y="36" width="12" height="3" rx="1.5" fill="#94A3B8" />
        <rect x="26" y="35.5" width="6" height="4" rx="2" fill="#0EA5E9" />

        {/* <!-- Q character --> */}
        <circle cx="40" cy="43" r="4" fill="none" stroke="#0EA5E9" stroke-width="2.5" />
        <line
          x1="42.5"
          y1="45.5"
          x2="45"
          y2="48"
          stroke="#0EA5E9"
          stroke-width="2.5"
          stroke-linecap="round"
        />

        {/* <!-- Small indicator dots --> */}
        <circle cx="22" cy="46" r="1" fill="#0369A1" />
        <circle cx="26" cy="46" r="1" fill="#38BDF8" />
        <circle cx="30" cy="46" r="1" fill="#0EA5E9" />
      </svg>
      <div className="text-center text-6xl mb-4  mt-6">Quincy Configurator</div>

      <div className="mt-2 w-9/12 align-self-center text-base">
        Quincy Configurator simplifies the set-up and testing of an{" "}
        <a
          className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/eq-web-sort"
        >
          Quincy
        </a>{" "}
        project for online Q sorting. It provides guided editing of the Q sort configuration files
        and offers increased control over the design of the Q sort. To test your setup before
        hosting it on the web, use the Ken-Q Tools Mini-Server available here.
      </div>
      {/* <div className="justify-self-center mt-4 mb-8">
        Citation:
        <br /> Banasick, S. (2025). Quincy Configurator (Version 1.0.0)
      </div> */}
      <h2 className="text-center mt-10">{t("selectConfiguratorDisplayMode")}</h2>
      <div className="flex flex-row justify-self-center mt-4">
        <Button
          id="beginner"
          styleClass={`bg-blue-500 hover:bg-blue-700 ${
            showDescriptionBeginner ? "bg-opacity-100" : "bg-opacity-50"
          }`}
          label={t("novice")}
          // isActive={appState.beginnerButtonActive}
          onClick={setMode}
        ></Button>
        <Button
          id="pro"
          label={t("expert")}
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

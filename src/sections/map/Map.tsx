import Image from "../../assets/images/qq-brand-image.png";
// @ts-ignore
import Button from "../utils/Button.jsx";
// @ts-ignore
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";

const getShowDescriptionPro = (state) => state.showDescriptionPro;
const getShowDescriptionBeginner = (state) => state.showDescriptionBeginner;
const getSetShowDescriptionPro = (state) => state.setShowDescriptionPro;
const getSetShowDescriptionBeginner = (state) =>
  state.setShowDescriptionBeginner;
const getSetDisplayMode = (state) => state.setDisplayMode;

const Map = () => {
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
    <>
      <h1 className="text-center">Map.xml</h1>

      <div className="mt-4 w-9/12 justify-self-center text-base">
        Quincey-Q Configurator simplifies the set-up and testing of an{" "}
        <a
          className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/eq-web-sort"
        >
          Quincey-Q
        </a>{" "}
        project for online Q sorting. It provides guided editing of the Q sort
        configuration files and offers increased control over the design of the
        Q sort. To test your setup before hosting it on the web, use the Ken-Q
        Tools Mini-Server available here.
      </div>
    </>
  );
};

export { Map };

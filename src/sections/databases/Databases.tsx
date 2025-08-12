import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { Baserow } from "./Baserow";
import { decodeHTML } from "../utils/decodeHTML.js";
import ReactHtmlParser from "html-react-parser";

const getDisplayMode = (state) => state.displayMode;

const Databases = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);

  // Decode Language XML
  const description = ReactHtmlParser(decodeHTML(t("databaseIntroText"))) || "";

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  return (
    <div className="flex flex-col items-center justify-center pb-[100px] bg-gradient-to-br from-slate-50 to-blue-50">
      {<Baserow />}
    </div>
  );
};

export { Databases };

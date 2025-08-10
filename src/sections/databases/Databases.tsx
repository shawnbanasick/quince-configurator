import Image from "../../assets/images/qq-brand-image.png";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { Baserow } from "./Baserow";
import { decodeHTML } from "../utils/decodeHTML.js";
import ReactHtmlParser from "html-react-parser";

const getDisplayMode = (state) => state.displayMode;
// const getSetupTarget = (state) => state.setupTarget;
// const getSetSetupTarget = (state) => state.setSetupTarget;

const Databases = () => {
  const { t } = useTranslation();
  const displayMode = useStore(getDisplayMode);
  // const database = useStore(getSetupTarget);
  // const setSetupTarget = useStore(getSetSetupTarget);

  // Decode Languge XML
  // const title = ReactHtmlParser(decodeHTML(t("illustratedSetupGuideForBaserowDatabase"))) || "";
  const description = ReactHtmlParser(decodeHTML(t("databaseIntroText"))) || "";

  let display;
  if (displayMode === "beginner") {
    display = true;
  } else {
    display = false;
  }

  return (
    <div className="flex flex-col items-center justify-center pb-[100px] bg-gradient-to-br from-slate-50 to-blue-50">
      {/* <h1 className="text-center">{title}</h1> */}
      {/* <div className="flex flex-row w-10/12 justify-between gap-[] mt-4 mb-6"></div> */}
      {/* {displayMode && (
        // <DisplayModeText>
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">
          {description}
        </div>
      )} */}

      {<Baserow />}
    </div>
  );
};

export { Databases };

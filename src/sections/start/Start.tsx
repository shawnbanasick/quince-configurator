import HeroImage from "../../assets/images/HeroImage.svg?react";
import dropZoneViz from "../../assets/images/dropFilesViz.png";
import newSetupFilesViz from "../../assets/images/newSetupFilesViz.png";
import editFilesViz from "../../assets/images/editFilesViz.png";
import settingsFolder from "../../assets/images/settingsFolder.png";
import quinceTemplate from "../../assets/images/quinceTemplate.png";
import qrCodeEnglish from "../../assets/images/qr-code-english.png";
import qrCodeJapanese from "../../assets/images/qr-code-japanese.png";
import { useTranslation } from "react-i18next";
import ReactHTMLParser from "html-react-parser";
import { useStore } from "../../GlobalState/useStore";
import { VersionHistory } from "./VersionHistory";

interface GlobalState {
  version: string;
}

const getVersion = (state: GlobalState) => state.version;

const Start = () => {
  const { t } = useTranslation();
  const version = useStore(getVersion);
  const frontPageVersion = version.replace("Quince ", "");

  return (
    <div className="flex flex-col items-center justify-center  w-[100%] bg-[#f5f5f5]  text-gray-900">
      <HeroImage className="w-[70vw]" />
      <div className="mt-8 w-9/12 align-self-center items-center justify-center text-center font-semibold text-3xl">
        {"Version: " + frontPageVersion}
      </div>
      <VersionHistory />

      {/* WHAT IS IT? */}
      <div className="mt-8 w-9/12 align-self-center items-center justify-center font-semibold text-3xl">
        {ReactHTMLParser(t("what0"))}
      </div>
      <div className="mt-2 w-9/12 align-self-center text-base">{ReactHTMLParser(t("what1"))} </div>
      <div className="mt-5 w-9/12 align-self-center text-base">
        {ReactHTMLParser(t("what2"))}
        <a
          className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/quince"
        >
          (link)
        </a>{" "}
        {ReactHTMLParser(t("what3"))}{" "}
      </div>
      {/* FEATURES */}
      <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">
        {ReactHTMLParser(t("features0"))}
      </div>
      <div className="w-9/12 align-self-center flex justify-start">
        <ul className="space-y-1 text-gray-900">
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {ReactHTMLParser(t("features1"))}
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {ReactHTMLParser(t("features2"))}
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {ReactHTMLParser(t("features3"))}
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {ReactHTMLParser(t("features4"))}
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {ReactHTMLParser(t("features5"))}
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {ReactHTMLParser(t("features6"))} (
            <a
              className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1C3ppvAEKJmaQH6jqbI0qMtM_W5FO7C2g/view?usp=sharing"
            >
              {ReactHTMLParser(t("features7"))}
            </a>
            )
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {ReactHTMLParser(t("features8"))}&nbsp; (
            <a
              className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shawnbanasick/kade"
            >
              KADE
            </a>
            &nbsp; /&nbsp;
            <a
              className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
              target="_blank"
              rel="noopener noreferrer"
              href="http://schmolck.org/qmethod/"
            >
              PQMethod
            </a>
            )
          </li>
        </ul>
      </div>
      <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl mb-2">
        {ReactHTMLParser(t("demo4"))}
      </div>
      <div className="w-9/12 align-self-center flex flex-row justify-start ml-6 gap-6">
        {/* English Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              {ReactHTMLParser(t("demo1"))}
            </h3>
            <a
              className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400 mb-4"
              target="_blank"
              rel="noopener noreferrer"
              href="https://quince-sort.netlify.app/#/"
            >
              {ReactHTMLParser(t("demo2"))}
            </a>
            <img
              src={qrCodeEnglish}
              className="w-auto max-w-[100px] max-h-[180px]"
              alt="QR code for English demo"
              loading="lazy"
            />
          </div>
        </div>

        {/* Japanese Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              {ReactHTMLParser(t("demo3"))}
            </h3>
            <a
              className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400 mb-4"
              target="_blank"
              rel="noopener noreferrer"
              href="https://quince-sort-japanese.netlify.app/"
            >
              {ReactHTMLParser(t("demo2"))}
            </a>
            <img
              src={qrCodeJapanese}
              className="w-auto max-w-[100px] max-h-[180px]"
              alt="QR code for Japanese demo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 w-9/12 align-self-center font-semibold text-3xl mb-2">Citations</div>
      <div className="w-7/12 text-2xl -indent-6 pl-6">
        {`Shawn Banasick and Stephen Jeffares. “Quince V${frontPageVersion}”. Zenodo, October 25, 2025. `}
        <a
          className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://doi.org/10.5281/zenodo.17438714"
        >
          https://doi.org/10.5281/zenodo.17438714
        </a>
      </div>
      <div className="mt-8 w-7/12 text-2xl -indent-6 pl-6">
        {`Shawn Banasick. “Quince Configurator V${frontPageVersion}”. Zenodo, October 25, 2025. `}
        <a
          className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://doi.org/10.5281/zenodo.17438862"
        >
          https://doi.org/10.5281/zenodo.17438862
        </a>
      </div>

      {/* HOW DOES IT WORK? */}
      <div className="flex flex-col justify-center items-center">
        <div className="mt-12 w-9/12 align-self-center font-semibold text-3xl">
          {ReactHTMLParser(t("setup1"))}
        </div>
        <div className="mt-2 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          1. {ReactHTMLParser(t("setup2"))}{" "}
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          2. {ReactHTMLParser(t("setup3"))}
          <a
            className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shawnbanasick/quince/releases/download/v1.0.7/quince-v107-Template.zip"
          >
            (link)
          </a>{" "}
          {ReactHTMLParser(t("setup4"))}{" "}
          <a
            className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1lVHtw2vfbOLClSJSEynjQCgVrjOVFBAx/view?usp=sharing"
          >
            (link)
          </a>{" "}
        </div>

        <div className="mt-8 w-7/12 align-self-center text-2xl pl-6">
          {ReactHTMLParser(t("setup5"))}
        </div>
        <div>
          <img
            src={quinceTemplate}
            className="w-auto max-w-[900px]  max-h-[700px] mt-8"
            alt={"template files image"}
            loading="lazy"
          />
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl pl-6">
          {" "}
          {ReactHTMLParser(t("setup6"))}
        </div>
        <div>
          <img
            src={settingsFolder}
            className="w-auto max-w-[800px]  max-h-[500px] mt-8 mb-8"
            alt={"settings folder image"}
            loading="lazy"
          />
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          3. {ReactHTMLParser(t("setup7"))}
          <img
            src={newSetupFilesViz}
            className="w-auto max-w-[800px]  max-h-[500px] mt-8 justify-self-center mb-8"
            alt={"edit new files visualization"}
            loading="lazy"
          />
          {ReactHTMLParser(t("setup8"))}
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          4. {ReactHTMLParser(t("setup9"))}
        </div>
        <img
          src={dropZoneViz}
          className="w-auto max-w-[800px]  max-h-[500px] mt-8"
          alt={"edit files visualization"}
          loading="lazy"
        />
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          5. {ReactHTMLParser(t("setup10"))}
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          6. {ReactHTMLParser(t("setup11"))}
        </div>
        <div className="mt-12 w-9/12 align-self-center font-semibold text-3xl">
          {ReactHTMLParser(t("setup12"))}
        </div>
        <div className="mt-4 w-7/12 align-self-center text-2xl">
          {ReactHTMLParser(t("setup13"))}
        </div>
        <div className="mt-4 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          1. {ReactHTMLParser(t("setup14"))}
        </div>
        <img
          src={editFilesViz}
          className="w-auto max-w-[800px]  max-h-[500px] mt-8"
          alt={"edit files visualization"}
          loading="lazy"
        />
        <div className="mt-4 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          2. {ReactHTMLParser(t("setup15"))}
        </div>
        <div className="mt-4 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          3. {ReactHTMLParser(t("setup16"))}
        </div>
        <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">
          {ReactHTMLParser(t("setup17"))}
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          1. {ReactHTMLParser(t("setup18"))}
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          2. {ReactHTMLParser(t("setup19"))}
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          3. {ReactHTMLParser(t("setup20"))}
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6 mb-12">
          4. {ReactHTMLParser(t("setup21"))}
        </div>
      </div>
    </div>
  );
};

export default Start;

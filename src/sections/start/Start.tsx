// import Image from "../../assets/images/qq-brand-image.png";
// import ConfiguratorIcon from "../../assets/images/ConfiguratorIcon.svg?react";
import HeroImage from "../../assets/images/HeroImage.svg?react";
// import EditFilesIcon from "../../assets/images/EditFilesViz.svg?react";
import DropZoneViz from "../../assets/images/DropFilesViz.svg?react";
import newSetupFilesViz from "../../assets/images/newSetupFilesViz.png";
import editFilesViz from "../../assets/images/EditFilesViz.png";

const Start = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-[100%] bg-[#f5f5f5]  text-gray-900">
      {/* <img src={Image} className=" w-1/12 justify-self-center" alt="Configurator Hero Image" /> */}

      {/* <ConfiguratorIcon /> */}
      <HeroImage className="w-[70vw]" />

      {/* WHAT IS IT? */}
      <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">What is this?</div>
      <div className="mt-2 w-9/12 align-self-center text-base">
        Quince is software for digital Q sorting. It is the combination of two projects - EQ Web
        Sort and Poet-Q. It consists of a package of tools that allow researchers to easily
        configure, deploy, and manage Q sorting projects. For desktop computers it provides
        participants with a clean, intuitive drag-and-drop interface that simulates the feel of
        paper-based card sorting. On mobile phones, the software adapts to a touch-based interface,
        making online Q sorting an accessible experience for all participants.
      </div>
      <div className="mt-5 w-9/12 align-self-center text-base">
        The software and required online services are free to use. The only cost is the time you
        spend learning how to setup a Quince project.
      </div>

      {/* FEATURES */}
      <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">Features</div>
      <div className="w-9/12 align-self-center flex justify-start">
        <ul className="space-y-1 text-gray-900">
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            uses multilingual interface - use almost any (left-to-right) language for your project
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            includes (optional) participant questionnaire
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            works on desktop and mobile phone
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            uses GDPR compliant database service
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            generates detailed results report (view a sample results file here)
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            generates a formated results file for easy input into analysis software like KADE or
            PQMethod
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            requires only basic computer skills - no programming knowledge is needed
          </li>
        </ul>
      </div>

      {/* HOW DOES IT WORK? */}
      <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">How does it work?</div>
      <div className="mt-5 w-9/12 align-self-center text-base -indent-6 pl-6">
        The Configurator provides guided editing of the Quince settings and visual guides for the
        setup of the database and webhosting.
      </div>
      <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
        1. Sign-up for the database service. (Tab 1 above)
      </div>
      <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
        2. Customize the Quince settings files according to your project's needs. (Tabs 2-5)
      </div>
      <img
        src={newSetupFilesViz}
        className="w-auto max-w-[800px]  max-h-[500px] mt-8"
        alt={"edit new files visualization"}
        loading="lazy"
      />
      <img
        src={editFilesViz}
        className="w-auto max-w-[800px]  max-h-[500px] mt-8"
        alt={"edit files visualization"}
        loading="lazy"
      />
      <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
        3. Sign-up for the webhost service and upload the Quince template folder. (Tab 6)
      </div>
      <DropZoneViz className="mt-8" />
      <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
        4. Your project is online! (Always do a pilot study to confirm that everything is working)
      </div>
      <div className="mt-8 w-7/12 align-self-center text-2xl mb-8 -indent-6 pl-6">
        5. When your project is finished, load your project's customized settings files back into
        this configurator in Tabs 2-5, and then load your results file from the database (Tab 7).
        You can then download the results report and analysis input files.
      </div>

      {/* HOW TO START?
      <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">How to start?</div> */}
      <div className="mt-2 w-9/12 align-self-center text-base">
        The Quince template files can be downloaded{" "}
        <a
          className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/eq-web-sort"
        >
          here
        </a>
        .
      </div>

      {/* <div className="justify-self-center mt-4 mb-8">
        Citation:
        <br /> Banasick, S. (2025). Quince Configurator (Version 1.0.0)
      </div> */}
      {/* <h2 className="text-center mt-10">{t("selectConfiguratorDisplayMode")}</h2>
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
      </div> */}
    </div>
  );
};

export default Start;

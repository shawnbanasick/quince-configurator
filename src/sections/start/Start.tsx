import HeroImage from "../../assets/images/HeroImage.svg?react";
import dropZoneViz from "../../assets/images/dropFilesViz.png";
import newSetupFilesViz from "../../assets/images/newSetupFilesViz.png";
import editFilesViz from "../../assets/images/editFilesViz.png";
import settingsFolder from "../../assets/images/settingsFolder.png";
import quinceTemplate from "../../assets/images/quinceTemplate.png";
import { useTranslation } from "react-i18next";

const Start = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center  w-[100%] bg-[#f5f5f5]  text-gray-900">
      <HeroImage className="w-[70vw]" />
      {/* WHAT IS IT? */}
      <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">{t("what0")}</div>
      <div className="mt-2 w-9/12 align-self-center text-base">{t("what1")} </div>
      <div className="mt-5 w-9/12 align-self-center text-base">{t("what2")} </div>
      {/* FEATURES */}
      <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">{t("features0")}</div>
      <div className="w-9/12 align-self-center flex justify-start">
        <ul className="space-y-1 text-gray-900">
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {t("features1")}
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {t("features2")}
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {t("features3")}
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {t("features4")}
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {t("features5")}
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {t("features6")} (
            <a
              className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1gIzl2Ca3XjK_yISLsXHxWtw8dDH9nTNC/view?usp=sharing"
            >
              {t("features7")}
            </a>
            )
          </li>
          <li className="flex items-center h-2 p-3">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
            {t("features8")}&nbsp; (
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
      <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">Demo Links</div>
      <div className="w-9/12 align-self-center flex flex-col justify-start">
        <div className="ml-4">
          <span>English - </span>
          <a
            className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://quince-sort.netlify.app/#/"
          >
            Link
          </a>{" "}
        </div>
        <div className="ml-4">
          <span>Japanese - </span>
          <a
            className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://quince-sort-japanese.netlify.app/"
          >
            Link
          </a>{" "}
        </div>
      </div>
      {/* HOW DOES IT WORK? */}
      <div className="flex flex-col justify-center items-center">
        <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">
          Project Setup Process
        </div>

        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          {`1. Click on the tab labelled "1. Database" above and follow the visual guide to setup the database service.`}
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          2. Download the{" "}
          <a
            className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shawnbanasick/eq-web-sort"
          >
            Quince Template
          </a>{" "}
          ZIP file. Uncompress the ZIP file on your computer and navigate to the main folder. Inside
          you will see several other folders, some icon files, and the main HTML file. The 'assets'
          folder contains the JavaScript files and styling files - do not change anything in this
          folder. The 'logo' folder contains the branding image for Quince. If you want to use your
          institution's branding instead of the default Quince image, follow the steps in{" "}
          <a
            className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1lVHtw2vfbOLClSJSEynjQCgVrjOVFBAx/view?usp=sharing"
          >
            this guide
          </a>{" "}
          . The most important folder is the 'settings' folder.
        </div>
        <img
          src={quinceTemplate}
          className="w-auto max-w-[900px]  max-h-[700px] mt-8"
          alt={"template files image"}
          loading="lazy"
        />
        <div className="mt-8 w-7/12 align-self-center text-2xl ">
          {" "}
          All of the customizations that you make with this Configurator must be written into these
          four XML files in the "settings" folder.
        </div>
        <img
          src={settingsFolder}
          className="w-auto max-w-[800px]  max-h-[500px] mt-8 mb-8"
          alt={"settings folder image"}
          loading="lazy"
        />
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          3. Click on tabs 2-5 at the top of this web page to customize your Q sort project design.
          The default options will be shown. If you are happy with the default option, you don't
          need to change that setting. However, the options <mark>highlighted in yellow</mark> must
          be changed to fit your project. <br />
          <br /> The changes you make are not automatically saved. If you reload the page, your
          changes will be lost. To make your changes permanent, you must save each XML file to the
          Quince Template 'settings' folder with the same name and <b>replace</b> the default files.
          Do not change the names of the settings files.
        </div>
        <img
          src={newSetupFilesViz}
          className="w-auto max-w-[800px]  max-h-[500px] mt-8"
          alt={"edit new files visualization"}
          loading="lazy"
        />
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          4. Follow the visual guide in Tab 6 to create an account on the web host service and
          upload your project by dragging and dropping the entire Quince Template <b>folder</b> into
          the web host setup page.
        </div>
        <img
          src={dropZoneViz}
          className="w-auto max-w-[800px]  max-h-[500px] mt-8"
          alt={"edit files visualization"}
          loading="lazy"
        />
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          5. Your project is online! Customize the project name to make it easier to share the URL
          with your participants.
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          6. Conduct a pilot study to confirm that everything is working as expected.
        </div>

        <div className="mt-12 w-9/12 align-self-center font-semibold text-3xl">
          Edit an Existing Project
        </div>
        <div className="mt-4 w-7/12 align-self-center text-2xl">
          {`If you want to fix a mistake in your project, or update a old project, you can load those older settings files into the configurator and make modifications.`}
        </div>
        <div className="mt-4 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          {`1. Find your project's Quince Template files folder on your computer. Load the settings file (config.xml, statements.xml, map.xml, or language.xml) that you want to change into the appropriate Tab of this Configurator and make the desired changes.`}
        </div>
        <img
          src={editFilesViz}
          className="w-auto max-w-[800px]  max-h-[500px] mt-8"
          alt={"edit files visualization"}
          loading="lazy"
        />
        <div className="mt-4 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          2. When you are finished making changes, save the file back into the Template files folder
          using the same name and <b>replace</b> the old file. Do not change the settings file name.
        </div>
        <div className="mt-4 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          {`3. Follow the visual guide in Tab 6 (start with step 12). Log into your web host account. Then drag and drop the Quince Template files folder onto the web host setup page. Refresh the web page of your Quince project and it will now display the updated information.`}
        </div>
        <div className="mt-8 w-9/12 align-self-center font-semibold text-3xl">
          Results and Analysis
        </div>

        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          1. When your project is finished, you can use this Configurator to produce a summary
          report and detailed listing of the results. First, go to Tab 7 and follow the visual guide
          to export your Baserow data.
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          2. Next, on your computer find the Quince Template folder that you uploaded to the web
          host. On Tabs 2-5 of this Configurator <b>load</b> your project's four XML settings files.
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6">
          3. Once your settings files are loaded, go to Tab 7 and <b>load</b> the results file you
          exported from Baserow in Step 1. The Configurator will now show the download links for the
          results files.
        </div>
        <div className="mt-8 w-7/12 align-self-center text-2xl -indent-6 pl-6 mb-12">
          4. Choose your analysis software's data format, and then download the results report and
          analysis input files.
        </div>
      </div>
    </div>
  );
};

export default Start;

import { useTranslation } from "react-i18next";
import { decodeHTML } from "../utils/decodeHTML.js";
import ReactHtmlParser from "html-react-parser";
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
import baserow14 from "../../assets/images/baserow14.png";
import baserow15 from "../../assets/images/baserow15.png";
import baserow16 from "../../assets/images/baserow16.png";
import baserow17 from "../../assets/images/baserow17.png";
import baserow19 from "../../assets/images/baserow19.png";

const Baserow = () => {
  const { t } = useTranslation();

  // Decode Language XML
  const step1Text = ReactHtmlParser(decodeHTML(t("baserowStep1"))) || "";
  const step2Text = ReactHtmlParser(decodeHTML(t("baserowStep2"))) || "";
  const step3Text = ReactHtmlParser(decodeHTML(t("baserowStep3"))) || "";
  const step4Text = ReactHtmlParser(decodeHTML(t("baserowStep4"))) || "";
  const step5Text = ReactHtmlParser(decodeHTML(t("baserowStep5"))) || "";
  const step6Text = ReactHtmlParser(decodeHTML(t("baserowStep6"))) || "";
  const step7Text = ReactHtmlParser(decodeHTML(t("baserowStep7"))) || "";
  const step8Text = ReactHtmlParser(decodeHTML(t("baserowStep8"))) || "";
  const step9Text = ReactHtmlParser(decodeHTML(t("baserowStep9"))) || "";
  const step10Text = ReactHtmlParser(decodeHTML(t("baserowStep10"))) || "";
  const step11Text = ReactHtmlParser(decodeHTML(t("baserowStep11"))) || "";
  const step14Text = ReactHtmlParser(decodeHTML(t("baserowStep14"))) || "";
  const step15Text = ReactHtmlParser(decodeHTML(t("baserowStep15"))) || "";
  const step16Text = ReactHtmlParser(decodeHTML(t("baserowStep16"))) || "";
  const step17Text = ReactHtmlParser(decodeHTML(t("baserowStep17"))) || "";
  const step19Text = ReactHtmlParser(decodeHTML(t("baserowStep19"))) || "";

  return (
    <>
      <span className="mt-8 text-8xl mb-6 font-bold">Baserow Setup Process</span>
      <div className="flex flex-col gap-10 justify-center items-center"></div>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`1.`} {step1Text}
          <a
            className="text-blue-600 underline underline-offset-2 decoration-4 decoration-blue-300 hover:decoration-blue-400"
            href="https://baserow.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            Baserow Link
          </a>{" "}
        </div>
        <img
          src={baserow1}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          width={800}
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`2. `} {step2Text}
        </div>
        <img
          src={baserow2}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 2"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`3.`} {step3Text}
        </div>
        <img
          src={baserow3}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 3"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`4.`} {step4Text}
        </div>
        <img
          src={baserow4}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 4"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`5.`} {step5Text}
        </div>
        <img
          src={baserow5}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`6.`} {step6Text}
        </div>
        <img
          src={baserow6}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`7.`} {step7Text}
        </div>
        <img
          src={baserow7}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`8.`} {step8Text}
        </div>
        <img
          src={baserow8}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`9.`} {step9Text}
        </div>
        <img
          src={baserow9}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`10.`} {step10Text}
        </div>
        <img
          src={baserow10}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`11.`} {step11Text}
        </div>
        <img
          src={baserow11}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`12.`} {step14Text}
        </div>
        <img
          src={baserow14}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
          width={500}
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`13.`} {step15Text}
        </div>
        <img
          src={baserow15}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
          width={400}
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`14.`} {step16Text}
        </div>
        <img
          src={baserow16}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`15.`} {step17Text}
        </div>
        <img
          src={baserow17}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-yellow-100 rounded-[3px] border-2 border-black">
          {`16.`} {step19Text}
        </div>
        <img
          src={baserow19}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="baserow screen 1"
        />
      </div>
    </>
  );
};

export { Baserow };

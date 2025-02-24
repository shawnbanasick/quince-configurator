import { useTranslation } from "react-i18next";
import baserow1 from "../../assets/images/baserow1.png";

const Firebase = () => {
  const { t } = useTranslation();

  return (
    <>
      <span className="mt-8 text-8xl mb-6 font-bold">Firebase</span>
      <div className="flex flex-col gap-10 justify-center items-center"></div>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="ml-[10px] mt-[40px] mb-[30px] w-[78vw] max-w-[1200px] text-[20px] p-[10px] bg-[whitesmoke] rounded-[3px] border-2 border-black">{`1. ${t(
          "baserowStep1"
        )}`}</div>
        <img
          src={baserow1}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          width={800}
          alt="baserow screen 1"
        />
      </div>
    </>
  );
};

export { Firebase };

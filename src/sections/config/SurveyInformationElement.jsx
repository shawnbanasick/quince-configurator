import React, { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import { decodeHTML } from "../utils/decodeHTML";

const SurveyInformationElement = (props) => {
  let infoText = "";
  if (typeof props.opts.options === "string") {
    infoText = ReactHtmlParser(decodeHTML(props.opts.options));
  }

  const [color, setColor] = useState(props.opts.bg);

  useEffect(() => {
    setColor(props.opts.bg);
  }, [props.opts.bg]);

  return (
    <div className="w-10/12 p-[20px] max-w[1300px] bg-[whitesmoke] outline outline-1 outline-gray-300 outline-none mt-0">
      <div
        className={`flex w-12/12 max-w-[1300px] p-2 items-center justify-center h-[30px] rounded-md border border-1 border-gray-300 outline-none mt-2`}
        style={{ backgroundColor: color }}
      >
        <div className={`flex items-center bg-[${color}`}>{infoText}</div>
      </div>
    </div>
  );
};

export default SurveyInformationElement;

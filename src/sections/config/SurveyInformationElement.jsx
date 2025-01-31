import React, { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";

const SurveyInformationElement = (props) => {
  // useEffect(() => {
  //   const resultsSurvey = JSON.parse(localStorage.getItem("resultsSurvey"));
  //   resultsSurvey[`itemNum${props.opts.itemNum}`] = "info. - na";
  //   // localStorage.setItem("resultsSurvey", JSON.stringify(resultsSurvey));
  // }, [props.opts.itemNum]);

  const infoText = ReactHtmlParser(props.opts.options) || "";

  console.log("SurveyInformationElement props: ", props.opts.bg);

  const [color, setColor] = useState(props.opts.bg);
  // const [color, setColor] = useState("#fde047");

  useEffect(() => {
    setColor(props.opts.bg);
  }, [props.opts.bg]);

  console.log("SurveyInformationElement color: ", color);

  return (
    // <Container>
    <div className="w-12/12 p-[20px] max-w[1300px] bg-[whitesmoke] outline outline-1 outline-gray-300 outline-none mt-0">
      {/* <TitleBar backgroundColor={props.opts.background}> */}
      <div
        className={`flex w-12/12 max-w-[1300px] p-2 items-center h-[30px] rounded-md border border-1 border-gray-300 outline-none mt-2`}
        style={{ backgroundColor: color }}
      >
        <div className={`flex items-center bg-[${color}`}>{infoText}</div>
      </div>
    </div>
  );
};

export default SurveyInformationElement;

// const Container = styled.div`
//   width: 90vw;
//   padding: 20px;
//   margin-left: 20px;
//   margin-right: 20px;
//   max-width: 1300px;
//   background-color: whitesmoke;
//   min-height: 50px;
// `;

// const TitleBar = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 5px;
//   min-height: 50px;
//   font-size: 18px;
//   text-align: center;
//   background-color: ${(props) => props.backgroundColor || "lightgray"};
//   width: 100%;
//   border-radius: 3px;
// `;

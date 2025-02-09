import React, { useState, useEffect, useRef } from "react";
import { useStore } from "../../globalState/useStore.js";
import { InputDiv } from "./InputDiv";
import { convertQsortObjectToArray } from "./convertQsortObjectToArray";
// import appState from "../../GlobalState/appState";

// const getQSortPatternObject = (state) => state.qSortPatternObject;
// const getSetQSortPatternObject = (state) => state.setQSortPatternObject;
const getQSortPattern = (state) => state.qSortPattern;
const getSetQSortPattern = (state) => state.setQSortPattern;

const getColColN6 = (state) => state.colColN6;
const getColColN5 = (state) => state.colColN5;
const getColColN4 = (state) => state.colColN4;
const getColColN3 = (state) => state.colColN3;
const getColColN2 = (state) => state.colColN2;
const getColColN1 = (state) => state.colColN1;
const getColCol0 = (state) => state.colCol0;
const getColCol1 = (state) => state.colCol1;
const getColCol2 = (state) => state.colCol2;
const getColCol3 = (state) => state.colCol3;
const getColCol4 = (state) => state.colCol4;
const getColCol5 = (state) => state.colCol5;
const getColCol6 = (state) => state.colCol6;
const getColCol7 = (state) => state.colCol7;
const getColCol8 = (state) => state.colCol8;
const getColCol9 = (state) => state.colCol9;
const getColCol10 = (state) => state.colCol10;
const getColCol11 = (state) => state.colCol11;
const getColCol12 = (state) => state.colCol12;
const getColCol13 = (state) => state.colCol13;

const getSetMapInputQsortPattern = (state) => state.setMapInputQsortPattern;

const MapInputElement = (props) => {
  let backgroundCol = "#d6dbe0";

  // const setQSortPatternObject = useStore(getSetQSortPatternObject);
  // const qSortPatternObject = useStore(getQSortPatternObject);

  const colColN6 = useStore(getColColN6);
  const colColN5 = useStore(getColColN5);
  const colColN4 = useStore(getColColN4);
  const colColN3 = useStore(getColColN3);
  const colColN2 = useStore(getColColN2);
  const colColN1 = useStore(getColColN1);
  const colCol0 = useStore(getColCol0);
  const colCol1 = useStore(getColCol1);
  const colCol2 = useStore(getColCol2);
  const colCol3 = useStore(getColCol3);
  const colCol4 = useStore(getColCol4);
  const colCol5 = useStore(getColCol5);
  const colCol6 = useStore(getColCol6);
  const colCol7 = useStore(getColCol7);
  const colCol8 = useStore(getColCol8);
  const colCol9 = useStore(getColCol9);
  const colCol10 = useStore(getColCol10);
  const colCol11 = useStore(getColCol11);
  const colCol12 = useStore(getColCol12);
  const colCol13 = useStore(getColCol13);
  const qSortPattern = useStore(getQSortPattern);
  // const setQSortPattern = useStore(getSetQSortPattern);
  const setMapInputQsortPattern = useStore(getSetMapInputQsortPattern);

  let numInputStatements = useRef(0);

  const [displayValue, setDisplayValue] = useState({
    activeValueM6: 0,
    activeValueM5: 0,
    activeValueM4: 0,
    activeValueM3: 0,
    activeValueM2: 0,
    activeValueM1: 0,
    activeValue0: 0,
    activeValue1: 0,
    activeValue2: 0,
    activeValue3: 0,
    activeValue4: 0,
    activeValue5: 0,
    activeValue6: 0,
    activeValue7: 0,
    activeValue8: 0,
    activeValue9: 0,
    activeValue10: 0,
    activeValue11: 0,
    activeValue12: 0,
    activeValue13: 0,
    statementsLength: 0,
  });

  const [displayTitles, setDisplayTitles] = useState({
    inputTitle: "Enter the Number of Statements in Each Column",
    inputColor: "white",
  });

  // getState
  const statementsLength = props.numStatements;
  // localStore.statementsLength = statementsLength;

  // const valuesTextArray = [
  //   "activeValueM6",
  //   "activeValueM5",
  //   "activeValueM4",
  //   "activeValueM3",
  //   "activeValueM2",
  //   "activeValueM1",
  //   "activeValue0",
  //   "activeValue1",
  //   "activeValue2",
  //   "activeValue3",
  //   "activeValue4",
  //   "activeValue5",
  //   "activeValue6",
  //   "activeValue7",
  //   "activeValue8",
  //   "activeValue9",
  //   "activeValue10",
  //   "activeValue11",
  //   "activeValue12",
  //   "activeValue13",
  // ];

  // calculate qSortPattern when useState is called
  useEffect(() => {
    let qSortPattern = [
      +displayValue.activeValueM6,
      +displayValue.activeValueM5,
      +displayValue.activeValueM4,
      +displayValue.activeValueM3,
      +displayValue.activeValueM2,
      +displayValue.activeValueM1,
      +displayValue.activeValue0,
      +displayValue.activeValue1,
      +displayValue.activeValue2,
      +displayValue.activeValue3,
      +displayValue.activeValue4,
      +displayValue.activeValue5,
      +displayValue.activeValue6,
      +displayValue.activeValue7,
      +displayValue.activeValue8,
      +displayValue.activeValue9,
      +displayValue.activeValue10,
      +displayValue.activeValue11,
      +displayValue.activeValue12,
      +displayValue.activeValue13,
    ];
    function sumArrayReduce([...arr]) {
      return arr.reduce((sum, current) => sum + current, 0);
    }

    numInputStatements.current = sumArrayReduce(qSortPattern);

    console.log("numInputStatements", numInputStatements.current);

    setMapInputQsortPattern(qSortPattern);
    console.log(JSON.stringify(qSortPattern));
  }, [displayValue]);

  // setQSortPattern([]);

  //   valuesTextArray.forEach((item, index) => {
  //     let storedValue = localStorage.getItem(item);
  //     if (!storedValue) {
  //       //   activeValue[item] = valuesArray[index];
  //     //   localStorage.setItem(item, valuesArray[index]);
  //     } else {
  //       //   activeValue[item] = storedValue;
  //     }
  //   });

  // handle # cards input in each column
  const calcQsortDesign = (event) => {
    let columnName = event.target.name;
    console.log("columnName", columnName);

    // set column in local state to new value
    // let targetName = displayValue[`activeValue${event.target.name}`] = event.target.value;
    // let targetName = `activeValue${event.target.name}`;
    setDisplayValue({
      ...displayValue,
      [`activeValue${event.target.name}`]: event.target.value,
    });

    // to get local state of all current values
    // const qSortPatternObject = localStore.qSortPatternObject;
    // let qSortPatternObject = JSON.parse(
    //   localStorage.getItem("qSortPatternObject")
    // );

    // if negative, substitute - for M
    if (columnName.charAt(0) === "M") {
      columnName = +columnName.replace("M", "-");
    }

    // set new key - value in qSortPatternObject
    // qSortPatternObject[columnName] = event.target.value;
    // send all current values back to local state
    // displayValue.qSortPatternObject = qSortPatternObject;

    // process array for completeness and UI feedback
    // const qSortPattern = convertQsortObjectToArray(qSortPatternObject);
    const enteredStatements = numInputStatements.current;
    console.log(props);
    console.log(props.numStatements, enteredStatements);
    const difference = props.numStatements - enteredStatements;
    const fullColumnName = `activeValue${event.target.name}`;
    const targetValue = event.target.value;

    if (difference === 0) {
      setDisplayTitles({
        inputTitle: "All Statements Allocated",
        inputColor: "bg-green-200",
      });
    }
    if (difference > 0) {
      setDisplayTitles({
        inputTitle: `${difference} Statements Left`,
        inputColor: "bg-white",
      });
    }
    if (difference < 0) {
      setDisplayTitles({
        inputTitle: `Over-Allocated: ${-difference} statements`,
        inputColor: "bg-red-200",
      });
    }

    // appState[fullColumnName] = targetValue;
    if (fullColumnName === "activeValueM6") {
      // setActiveValueM6(targetValue);
      setDisplayValue({ ...displayValue, activeValueM6: targetValue });
    }
    if (fullColumnName === "activeValueM5") {
      // setActiveValueM5(targetValue);
    }
    if (fullColumnName === "activeValueM4") {
      // setActiveValueM4(targetValue);
    }
    if (fullColumnName === "activeValueM3") {
      // setActiveValueM3(targetValue);
    }
    if (fullColumnName === "activeValueM2") {
      // setActiveValueM2(targetValue);
    }
    if (fullColumnName === "activeValueM1") {
      // setActiveValueM1(targetValue);
    }
    if (fullColumnName === "activeValue0") {
      // setActiveValue0(targetValue);
    }
    if (fullColumnName === "activeValue1") {
      // setActiveValue1(targetValue);
    }
    if (fullColumnName === "activeValue2") {
      // setActiveValue2(targetValue);
    }
    if (fullColumnName === "activeValue3") {
      // setActiveValue3(targetValue);
    }
    if (fullColumnName === "activeValue4") {
      // setActiveValue4(targetValue);
    }
    if (fullColumnName === "activeValue5") {
      // setActiveValue5(targetValue);
    }
    if (fullColumnName === "activeValue6") {
      // setActiveValue6(targetValue);
    }
    if (fullColumnName === "activeValue7") {
      // setActiveValue7(targetValue);
    }
    if (fullColumnName === "activeValue8") {
      // setActiveValue8(targetValue);
    }
    if (fullColumnName === "activeValue9") {
      // setActiveValue9(targetValue);
    }
    if (fullColumnName === "activeValue10") {
      // setActiveValue10(targetValue);
    }
    if (fullColumnName === "activeValue11") {
      // setActiveValue11(targetValue);
    }
    if (fullColumnName === "activeValue12") {
      // setActiveValue12(targetValue);
    }
    if (fullColumnName === "activeValue13") {
      // setActiveValue13(targetValue);
    }

    localStorage.setItem(`${fullColumnName}`, targetValue);
    // localStorage.setItem(
    //   "qSortPatternObject",
    //   JSON.stringify(qSortPatternObject)
    // );
  };

  console.log("activeValueM6", displayValue.activeValueM6);

  if (true) {
    return (
      //   <DesignDiv>
      <div className="mt-10 mb-20 flex flex-col w-auto items-center justify-center outline outline-2 outline-blue-300">
        {/* <TitleDiv> */}
        <div className="flex w-auto flex-row items-center justify-center outline outline-2 outline-green-300">
          {/* <TextDiv inputColor={localStore.inputColor}>Q Sort Pattern</TextDiv> */}
          <div
            className="mb-5 w-[400px] pt-2 pl-2 outline outline-2 outline-purple-300"
            // data-inputColor={displayValue.inputColor}
          >
            Q Sort Pattern
          </div>
          {numInputStatements.current > 0 ? (
            // <TextDiv2>{localStore.inputTitle}</TextDiv2>
            <div
              className={`${displayTitles.inputColor} border border-2 border-blue-300`}
            >
              {displayTitles.inputTitle}
            </div>
          ) : (
            <div>No Statements Loaded</div>
          )}
        </div>
        {/* <InputRow> */}
        <div className="flex flex-row w-auto flex-wrap items-center justify-center outline outline-2 outline-yellow-300">
          <InputDiv
            label={"-6"}
            name={"M6"}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValueM6}
            stateDesig={"colColN6"}
            default={colColN6}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"-5"}
            name={"M5"}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValueM5}
            stateDesig={"colColN5"}
            default={colColN5}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"-4"}
            name={"M4"}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValueM4}
            stateDesig={"colColN4"}
            default={colColN4}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"-3"}
            name={"M3"}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValueM3}
            stateDesig={"colColN3"}
            default={colColN3}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"-2"}
            name={"M2"}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValueM2}
            stateDesig={"colColN2"}
            default={colColN2}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"-1"}
            name={"M1"}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValueM1}
            stateDesig={"colColN1"}
            default={colColN1}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"0"}
            name={0}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue0}
            stateDesig={"colCol0"}
            default={colCol0}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"1"}
            name={1}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue1}
            stateDesig={"colCol1"}
            default={colCol1}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"2"}
            name={2}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue2}
            stateDesig={"colCol2"}
            default={colCol2}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"3"}
            name={3}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue3}
            stateDesig={"colCol3"}
            default={colCol3}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"4"}
            name={4}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue4}
            stateDesig={"colCol4"}
            default={colCol4}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"5"}
            name={5}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue5}
            stateDesig={"colCol5"}
            default={colCol5}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"6"}
            name={6}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue6}
            stateDesig={"colCol6"}
            default={colCol6}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"7"}
            name={7}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue7}
            stateDesig={"colCol7"}
            default={colCol7}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"8"}
            name={8}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue8}
            stateDesig={"colCol8"}
            default={colCol8}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"9"}
            name={9}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue9}
            stateDesig={"colCol9"}
            default={colCol9}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"10"}
            name={10}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue10}
            stateDesig={"colCol10"}
            default={colCol10}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"11"}
            name={11}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue11}
            stateDesig={"colCol11"}
            default={colCol11}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"12"}
            name={12}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue12}
            stateDesig={"colCol12"}
            default={colCol12}
            backgroundCol={backgroundCol}
          />
          <InputDiv
            label={"13"}
            name={13}
            onChangeCallback={calcQsortDesign}
            value={displayValue.activeValue13}
            stateDesig={"colCol13"}
            default={colCol13}
            onColorChange={colCol13}
            backgroundCol={backgroundCol}
          />
        </div>
      </div>
    );
  }
  return <div />;
};

export { MapInputElement };

// const InputRow = styled.div`
//   display: flex;
// `;

// const DesignDiv = styled.div`
//   margin-top: 10px;
//   margin-bottom: 50px;
//   display: flex;
//   flex-direction: column;
//   width: auto;
// `;

// const TextDiv = styled.div`
//   background-color: ${(props) => props.inputColor};
//   font-size: 20px;
//   margin-bottom: 5px;
//   width: 400px;
//   padding-top: 4px;
//   padding-left: 4px;
//   height: 25px;
// `;

// const TextDiv2 = styled.div`
//   font-size: 20px;
//   margin-bottom: 5px;
//   padding-top: 4px;
//   padding-left: 4px;
//   width: 700px;
//   height: 25px;
// `;

// const TitleDiv = styled.div`
//   display: flex;
//   width: 700px;
// `;

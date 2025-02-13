import React, { useState, useEffect, useRef } from "react";
import { useStore } from "../../globalState/useStore.js";
import { InputDiv } from "./InputDiv";
import { convertQsortObjectToArray } from "./convertQsortObjectToArray";

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
  // Numbers tile bar background color
  let backgroundCol = "#d6dbe0";

  const totalEntries = useRef(0);

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
  const setMapInputQsortPattern = useStore(getSetMapInputQsortPattern);

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

  // *** HANDLE INPUT CHANGE ***
  const calcQsortDesign = (event) => {
    const columnName = event.target.name;
    const value = +event.target.value;
    console.log("value", value);
    console.log("columnName", columnName);

    totalEntries.current = +totalEntries.current + value;

    setDisplayValue((prevState) => ({
      ...prevState,
      [`activeValue${columnName}`]: value,
    }));

    localStorage.setItem(`activeValue${columnName}`, value.toString());
  };

  useEffect(() => {
    const qSortPatternArray = [
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

    const numInputStatements = qSortPatternArray.reduce(
      (sum, current) => sum + current,
      0
    );

    setMapInputQsortPattern(qSortPatternArray);

    const difference = props.numStatements - numInputStatements;

    if (difference === 0) {
      setDisplayTitles({
        inputTitle: "All Statements Allocated",
        inputColor: "bg-green-200",
      });
    } else if (difference > 0) {
      setDisplayTitles({
        inputTitle: `${difference} Statements Left`,
        inputColor: "bg-white",
      });
    } else {
      setDisplayTitles({
        inputTitle: `Over-Allocated: ${-difference} statements`,
        inputColor: "bg-red-200",
      });
    }
  }, [displayValue, props.numStatements, setMapInputQsortPattern]);

  return (
    <div className="mt-10 mb-20 flex flex-col w-auto items-center justify-center outline outline-2 outline-blue-300">
      <div className="flex w-auto flex-row items-center justify-center outline outline-2 outline-green-300">
        <div className="mb-5 w-[400px] pt-2 pl-2 outline outline-2 outline-purple-300">
          Q Sort Pattern
        </div>
        {props.numStatements > 0 ? (
          <div
            className={`${displayTitles.inputColor} border border-2 border-blue-300`}
          >
            {displayTitles.inputTitle}
          </div>
        ) : (
          <div>No Statements Loaded in the Statements.xml section</div>
        )}
      </div>
      <div className="flex flex-row gap-1 w-auto flex-wrap items-center justify-center outline outline-2 outline-yellow-300">
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
          name={"0"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue0}
          stateDesig={"colCol0"}
          default={colCol0}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"1"}
          name={"1"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue1}
          stateDesig={"colCol1"}
          default={colCol1}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"2"}
          name={"2"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue2}
          stateDesig={"colCol2"}
          default={colCol2}
          backgroundCol={"#83cafe"}
        />
        <InputDiv
          label={"3"}
          name={"3"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue3}
          stateDesig={"colCol3"}
          default={colCol3}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"4"}
          name={"4"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue4}
          stateDesig={"colCol4"}
          default={colCol4}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"5"}
          name={"5"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue5}
          stateDesig={"colCol5"}
          default={colCol5}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"6"}
          name={"6"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue6}
          stateDesig={"colCol6"}
          default={colCol6}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"7"}
          name={"7"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue7}
          stateDesig={"colCol7"}
          default={colCol7}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"8"}
          name={"8"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue8}
          stateDesig={"colCol8"}
          default={colCol8}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"9"}
          name={"9"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue9}
          stateDesig={"colCol9"}
          default={colCol9}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"10"}
          name={"10"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue10}
          stateDesig={"colCol10"}
          default={colCol10}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"11"}
          name={"11"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue11}
          stateDesig={"colCol11"}
          default={colCol11}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"12"}
          name={"12"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue12}
          stateDesig={"colCol12"}
          default={colCol12}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"13"}
          name={"13"}
          onChangeCallback={calcQsortDesign}
          value={displayValue.activeValue13}
          stateDesig={"colCol13"}
          default={colCol13}
          backgroundCol={backgroundCol}
        />
      </div>
    </div>
  );
};

export { MapInputElement };

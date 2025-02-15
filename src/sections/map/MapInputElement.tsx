import { useState, useEffect, useRef } from "react";
import { useStore } from "../../globalState/useStore.js";
import { InputDiv } from "./InputDiv";
import { useTranslation } from "react-i18next";

// import { convertQsortObjectToArray } from "./convertQsortObjectToArray";

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

const getActiveValueM6 = (state) => state.activeValueM6;
const getActiveValueM5 = (state) => state.activeValueM5;
const getActiveValueM4 = (state) => state.activeValueM4;
const getActiveValueM3 = (state) => state.activeValueM3;
const getActiveValueM2 = (state) => state.activeValueM2;
const getActiveValueM1 = (state) => state.activeValueM1;
const getActiveValue0 = (state) => state.activeValue0;
const getActiveValue1 = (state) => state.activeValue1;
const getActiveValue2 = (state) => state.activeValue2;
const getActiveValue3 = (state) => state.activeValue3;
const getActiveValue4 = (state) => state.activeValue4;
const getActiveValue5 = (state) => state.activeValue5;
const getActiveValue6 = (state) => state.activeValue6;
const getActiveValue7 = (state) => state.activeValue7;
const getActiveValue8 = (state) => state.activeValue8;
const getActiveValue9 = (state) => state.activeValue9;
const getActiveValue10 = (state) => state.activeValue10;
const getActiveValue11 = (state) => state.activeValue11;
const getActiveValue12 = (state) => state.activeValue12;
const getActiveValue13 = (state) => state.activeValue13;
const getSetNumber = (state) => state.setNumber;
const getQSortPatternObject = (state) => state.qSortPatternObject;
const getSetMapInputQsortPattern = (state) => state.setMapInputQsortPattern;
const getSetQSortPatternObject = (state) => state.setQSortPatternObject;

const MapInputElement = (props) => {
  // Numbers tile bar background color
  const { t } = useTranslation();
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
  const activeValueM6 = useStore(getActiveValueM6);
  const activeValueM5 = useStore(getActiveValueM5);
  const activeValueM4 = useStore(getActiveValueM4);
  const activeValueM3 = useStore(getActiveValueM3);
  const activeValueM2 = useStore(getActiveValueM2);
  const activeValueM1 = useStore(getActiveValueM1);
  const activeValue0 = useStore(getActiveValue0);
  const activeValue1 = useStore(getActiveValue1);
  const activeValue2 = useStore(getActiveValue2);
  const activeValue3 = useStore(getActiveValue3);
  const activeValue4 = useStore(getActiveValue4);
  const activeValue5 = useStore(getActiveValue5);
  const activeValue6 = useStore(getActiveValue6);
  const activeValue7 = useStore(getActiveValue7);
  const activeValue8 = useStore(getActiveValue8);
  const activeValue9 = useStore(getActiveValue9);
  const activeValue10 = useStore(getActiveValue10);
  const activeValue11 = useStore(getActiveValue11);
  const activeValue12 = useStore(getActiveValue12);
  const activeValue13 = useStore(getActiveValue13);
  const setMapInputQsortPattern = useStore(getSetMapInputQsortPattern);
  const setNumber = useStore(getSetNumber);
  let qSortPatternObject = useStore(getQSortPatternObject);
  const setQSortPatternObject = useStore(getSetQSortPatternObject);

  const [displayTitles, setDisplayTitles] = useState({
    inputTitle: "Enter the Number of Statements in Each Column",
    inputColor: "white",
  });

  // *** HANDLE INPUT CHANGE ***
  const calcQsortDesign = (value, name) => {
    const columnName2 = name;
    let columnName = columnName2.replace("M", "-");

    console.log("value", value);
    console.log("columnName", columnName);

    totalEntries.current = +totalEntries.current + value;

    if (
      !qSortPatternObject ||
      qSortPatternObject === null ||
      qSortPatternObject === undefined
    ) {
      qSortPatternObject = JSON.parse(
        localStorage.getItem("qSortPatternObject") || '""'
      );
    }

    setNumber(`activeValue${columnName2}`, value.toString());
    localStorage.setItem(`activeValue${columnName}`, value.toString());
    qSortPatternObject[columnName] = value.toString();

    localStorage.setItem(
      "qSortPatternObject",
      JSON.stringify(qSortPatternObject)
    );

    setQSortPatternObject(qSortPatternObject);
  };

  // get current entries and compute total statements entered
  useEffect(() => {
    const qSortPatternArray = [
      +activeValueM6,
      +activeValueM5,
      +activeValueM4,
      +activeValueM3,
      +activeValueM2,
      +activeValueM1,
      +activeValue0,
      +activeValue1,
      +activeValue2,
      +activeValue3,
      +activeValue4,
      +activeValue5,
      +activeValue6,
      +activeValue7,
      +activeValue8,
      +activeValue9,
      +activeValue10,
      +activeValue11,
      +activeValue12,
      +activeValue13,
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
        inputColor: "bg-red-100",
      });
    }
  }, [
    props.numStatements,
    setMapInputQsortPattern,
    activeValue0,
    activeValue1,
    activeValue2,
    activeValue3,
    activeValue4,
    activeValue5,
    activeValue6,
    activeValue7,
    activeValue8,
    activeValue9,
    activeValue10,
    activeValue11,
    activeValue12,
    activeValue13,
    activeValueM1,
    activeValueM2,
    activeValueM3,
    activeValueM4,
    activeValueM5,
    activeValueM6,
  ]);

  return (
    <div className="flex flex-col mt-10 mb-10 w-auto">
      <div className="flex flex-row">
        <div className="flex items-center h-[50px] w-auto pr-4 pl-2">
          {t("qSortPattern")}:
        </div>
        {props.numStatements > 0 ? (
          <div
            className={`flex pl-2 pr-2 rounded-sm items-center ${displayTitles.inputColor} `}
          >
            {displayTitles.inputTitle}
          </div>
        ) : (
          <div>No Statements Loaded in the Statements.xml section</div>
        )}
      </div>
      <div className="flex flex-row gap-1 w-auto flex-wrap items-center justify-center">
        <InputDiv
          label={"-6"}
          name={"M6"}
          onChangeCallback={calcQsortDesign}
          value={activeValueM6}
          stateDesig={"colColN6"}
          default={colColN6}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"-5"}
          name={"M5"}
          onChangeCallback={calcQsortDesign}
          value={activeValueM5}
          stateDesig={"colColN5"}
          default={colColN5}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"-4"}
          name={"M4"}
          onChangeCallback={calcQsortDesign}
          value={activeValueM4}
          stateDesig={"colColN4"}
          default={colColN4}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"-3"}
          name={"M3"}
          onChangeCallback={calcQsortDesign}
          value={activeValueM3}
          stateDesig={"colColN3"}
          default={colColN3}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"-2"}
          name={"M2"}
          onChangeCallback={calcQsortDesign}
          value={activeValueM2}
          stateDesig={"colColN2"}
          default={colColN2}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"-1"}
          name={"M1"}
          onChangeCallback={calcQsortDesign}
          value={activeValueM1}
          stateDesig={"colColN1"}
          default={colColN1}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"0"}
          name={"0"}
          onChangeCallback={calcQsortDesign}
          value={activeValue0}
          stateDesig={"colCol0"}
          default={colCol0}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"1"}
          name={"1"}
          onChangeCallback={calcQsortDesign}
          value={activeValue1}
          stateDesig={"colCol1"}
          default={colCol1}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"2"}
          name={"2"}
          onChangeCallback={calcQsortDesign}
          value={activeValue2}
          stateDesig={"colCol2"}
          default={colCol2}
          backgroundCol={"#83cafe"}
        />
        <InputDiv
          label={"3"}
          name={"3"}
          onChangeCallback={calcQsortDesign}
          value={activeValue3}
          stateDesig={"colCol3"}
          default={colCol3}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"4"}
          name={"4"}
          onChangeCallback={calcQsortDesign}
          value={activeValue4}
          stateDesig={"colCol4"}
          default={colCol4}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"5"}
          name={"5"}
          onChangeCallback={calcQsortDesign}
          value={activeValue5}
          stateDesig={"colCol5"}
          default={colCol5}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"6"}
          name={"6"}
          onChangeCallback={calcQsortDesign}
          value={activeValue6}
          stateDesig={"colCol6"}
          default={colCol6}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"7"}
          name={"7"}
          onChangeCallback={calcQsortDesign}
          value={activeValue7}
          stateDesig={"colCol7"}
          default={colCol7}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"8"}
          name={"8"}
          onChangeCallback={calcQsortDesign}
          value={activeValue8}
          stateDesig={"colCol8"}
          default={colCol8}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"9"}
          name={"9"}
          onChangeCallback={calcQsortDesign}
          value={activeValue9}
          stateDesig={"colCol9"}
          default={colCol9}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"10"}
          name={"10"}
          onChangeCallback={calcQsortDesign}
          value={activeValue10}
          stateDesig={"colCol10"}
          default={colCol10}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"11"}
          name={"11"}
          onChangeCallback={calcQsortDesign}
          value={activeValue11}
          stateDesig={"colCol11"}
          default={colCol11}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"12"}
          name={"12"}
          onChangeCallback={calcQsortDesign}
          value={activeValue12}
          stateDesig={"colCol12"}
          default={colCol12}
          backgroundCol={backgroundCol}
        />
        <InputDiv
          label={"13"}
          name={"13"}
          onChangeCallback={calcQsortDesign}
          value={activeValue13}
          stateDesig={"colCol13"}
          default={colCol13}
          backgroundCol={backgroundCol}
        />
      </div>
    </div>
  );
};

export { MapInputElement };

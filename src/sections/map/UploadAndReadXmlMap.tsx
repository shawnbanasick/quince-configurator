import React from "react";
import XMLParser from "react-xml-parser";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { setClearAllColors } from "./setClearAllColors";
import { setClearAllColNumbers } from "./setClearAllColNumbers";

const getSetNumber = (state) => state.setNumber;
const getSetColor = (state) => state.setColor;
const getSetMapColorPalette = (state) => state.setMapColorPalette;
const getSetQSortPatternObject = (state) => state.setQSortPatternObject;

const UploadAndReadXmlMap: React.FC = () => {
  const { t } = useTranslation();
  const setNumber = useStore(getSetNumber);
  const setColor = useStore(getSetColor);
  const setMapColorPalette = useStore(getSetMapColorPalette);
  const setQSortPatternObject = useStore(getSetQSortPatternObject);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = e.target?.result as string;
        const parser = new XMLParser();
        const xml = parser.parseFromString(data, "text/xml");
        const xmlObjectArray = xml.getElementsByTagName("item");

        let nameArray, countArray, colorsArray;
        if (xmlObjectArray.length > 0) {
          // read file contents
          nameArray = xmlObjectArray[1]?.value.split(",");
          countArray = xmlObjectArray[2]?.value.split(",");
          colorsArray = xmlObjectArray[3]?.value.split(",");
        }

        console.log("nameArray", JSON.stringify(nameArray));
        console.log("countArray", JSON.stringify(countArray));
        console.log("colorsArray", JSON.stringify(colorsArray));

        // reset color pallette button value
        setMapColorPalette("custom");
        localStorage.setItem("mapColorPalette", "custom");

        // create qSortPatternObject
        const qSortPatternObject = {};
        nameArray.forEach((item, index) => {
          if (item.charAt(0) === "N") {
            item = +item.replace("N", "-");
          } else {
            item = +item;
          }
          qSortPatternObject[item] = `${countArray[index]}`;
        });
        localStorage.setItem(
          "qSortPatternObject",
          JSON.stringify(qSortPatternObject)
        );

        setQSortPatternObject(qSortPatternObject);

        console.log(JSON.stringify(qSortPatternObject));

        // clear all colors
        setClearAllColors();
        // clear column count numbers
        setClearAllColNumbers();

        // nameArray ["N4","N3","N2","N1","0","1","2","3","4"]
        // countArray ["2","3","4","5","5","5","4","3","2"]
        // colorsArray ["#F98080","#F8B4B4","#FBD5D5","#FDE8E8","#F3F4F6","#DEF7EC","#BCF0DA","#84E1BC","#31C48D"]

        // set colors and column count numbers
        nameArray.forEach((item, index) => {
          // set count numbers
          let designation = item.replace("N", "M");
          let stateDesig = `activeValue${designation}`;
          let value = +countArray[index];
          setNumber(stateDesig, value);
          localStorage.setItem(stateDesig, JSON.stringify(value));
          // set colors
          let designation3 = `colCol${item}`;
          setColor(designation3, colorsArray[index]);
          localStorage.setItem(designation3, colorsArray[index]);
        });
        return;
      };

      reader.onerror = () => {
        console.error("Error reading file");
        // setError("Error reading file");
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label
        className="w-80 px-6 p-2 bg-orange-300 text-black font-semibold rounded-md hover:opacity-50 focus:outline-none focus:ring-2 border-2 border-gray-600 focus:ring-orange-400 focus:ring-opacity-75 text-center min-h-[70px] select-none"
        htmlFor="uploadXml"
      >
        {t("loadMap")}
      </label>
      <input
        className="hidden"
        id="uploadXml"
        type="file"
        name="xmlFile"
        accept=".xml"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export { UploadAndReadXmlMap };

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface UserTextInputProps {
  classNameNum: string;
  classNameLabel: string;
  highlight: boolean;
  upperLimit: number;
  lowerLimit: number;
  step: number;
  label: string;
  disabled: boolean;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// const clone = require("rfdc")();

const UserNumInput: React.FC<UserTextInputProps> = ({
  classNameNum,
  classNameLabel,
  highlight,
  upperLimit,
  lowerLimit,
  step,
  label,
  disabled,
  placeholder,
  name,
  value,
  onChange,
}) => {
  const { t } = useTranslation();

  // const [value, setValue] = useState(props.value);
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;

    if (isNaN(value)) {
      return null;
    }

    setShowWarning(false);
    const upperLimitValue = upperLimit + step;
    const lowerLimitValue = lowerLimit - step;

    // limit according to props boundaries
    if (value <= lowerLimitValue || value >= upperLimitValue) {
      if (value < lowerLimit) {
        value = lowerLimit;
      }
      if (value > upperLimit) {
        value = upperLimit;
      }
      onChange(value); // setValue(value);
      // appState[]
      setShowWarning(true);
    } else {
      onChange(value); // setValue(value);
    }

    onChange(value); // setValue(value);
  };

  const warningMessage = `${t("lowerLimit")}: ${lowerLimit}, ${t(
    "upperLimit"
  )}: ${upperLimit}`;

  console.log(label, value);

  return (
    <div className="flex items-center">
      <label htmlFor={name} className={classNameLabel}>
        {`${label} `}
      </label>
      <input
        className={classNameNum}
        type="number"
        tabIndex={0}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        step={step}
        max={upperLimit}
        min={lowerLimit}
        value={value}
        onChange={handleChange}
      />
      {showWarning ? <div>{warningMessage}</div> : null}
    </div>
  );
};

export { UserNumInput };

// const NumberInput = styled.input.attrs({
//   type: "number",
// })`
//   color: black;
//   cursor: pointer;
//   margin-bottom: 0;
//   width: 75px;
//   border-radius: 5px;
//   box-sizing: border-box;
//   height: 25px;
//   border: 1px solid lightgray;
//   box-shadow: none;
//   outline: none;
//   transition: 0.15s;
//   text-align: center;
//   &:hover {
//     outline: none;
//     background: none;
//     box-shadow: none;
//   }
// `;

// const NumberWarningMessage = styled.div`
//   margin-left: 10px;
//   padding-top: 4px;
//   padding-left: 10px;
//   padding-right: 10px;
//   background-color: lightpink;
//   color: var(--font-color);
//   height: 25px;
//   width: auto;
//   font-size: 14px;
//   /* width: 225px; */
// `;

// const UserNumberContainer = styled.div`
//   display: flex;
//   margin-top: 25px;
//   margin-left: 70px;
//   width: 90%;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center;
//   /* border: 2px solid green; */
// `;

// const TitleSpan = styled.span`
//   margin-right: 10px;
// `;

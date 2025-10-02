import React from "react";
// import { useTranslation } from "react-i18next";
import { useStore } from "../../globalState/useStore.js";

interface UserTextAreaInputProps {
  tabIndex: string;
  classNameText: string;
  classNameLabel: string;
  highlight: boolean;
  label: string;
  placeholder: string;
  name: string;
  value: string;
  height: number;
  disabled: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getSetText = (state) => state.setText;

const UserTextAreaInput: React.FC<UserTextAreaInputProps> = ({
  classNameText,
  classNameLabel,
  highlight,
  label,
  placeholder,
  name,
  value,
}) => {
  const setText = useStore(getSetText);
  const key = `${name}`; // ${sectionName}

  const handleChange = (event) => {
    event.preventDefault();
    console.log("UserTextAreaInput handleChange", event.target.value);
    const value = event.target.value;
    setText(key, value);
    localStorage.setItem(key, value);
  };

  if (highlight === true) {
    return (
      <div className="flex flex-row w-[100%] focus-within:font-bold">
        <label htmlFor={name} className={classNameLabel}>
          <mark>{label ? label : ""}</mark>
        </label>
        <textarea
          className={`${classNameText}`}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          value={value}
        />
      </div>
    );
    1;
  } else {
    return (
      <div className="flex flex-row items-center w-[100%] focus-within:font-bold">
        <label htmlFor={name} className={classNameLabel}>
          {label ? label : ""}
        </label>
        <textarea
          className={`${classNameText}`}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          value={value}
        />
      </div>
    );
  }
};

export { UserTextAreaInput };

import React from "react";
import { useTranslation } from "react-i18next";
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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  height: number;
  disabled: boolean;
}

const getSetText = (state) => state.setText;

const UserTextAreaInput: React.FC<UserTextAreaInputProps> = ({
  tabIndex,
  classNameText,
  classNameLabel,
  highlight,
  label,
  placeholder,
  name,
  value,
  onChange,
  height,
}) => {
  // props = label, stateId, sectionName, width, left
  const { t } = useTranslation();
  const setText = useStore(getSetText);
  const key = `${name}`; // ${sectionName}

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setText(key, value);
    localStorage.setItem(key, value);
  };

  if (highlight === true) {
    return (
      <div className="flex flex-row w-[72vw]">
        <label htmlFor={name} className={classNameLabel}>
          <mark> {`${t(label)} `}</mark>
        </label>
        <textarea
          className={`${classNameText}`}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
        >
          {value}
        </textarea>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row items-center w-[72vw]">
        <label htmlFor={name} className={classNameLabel}>
          {`${t(label)} `}
        </label>
        <textarea
          className={`${classNameText}`}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
        >
          {value}
        </textarea>
      </div>
    );
  }
};

export { UserTextAreaInput };

// const UserText = styled.textarea((props) => ({
//   width: `${width + 26}%`,
//   height: `${height}px`,
//   marginLeft: `${left}px`,
//   marginTop: `15px`,
//   marginBottom: `15px`,
//   paddingLeft: `10px`,
// }));

// const InputContainerDiv = styled.div`
//   display: flex;
//   margin-left: 70px;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const TitleSpan = styled.span`
//   margin-right: 10px;
// `;

// const TitleSpanHighlight = styled.div`
//   margin-right: 10px;
//   background-color: #ffff00;
// `;

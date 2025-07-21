interface UserTextInputProps {
  classNameText: string;
  classNameLabel: string;
  highlight: boolean;
  label: string;
  disabled: boolean;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserTextInput: React.FC<UserTextInputProps> = ({
  label,
  placeholder,
  classNameText,
  classNameLabel,
  disabled,
  name,
  value,
  highlight,
  onChange,
}) => {
  // props = label, stateId, sectionName, width, left, value, onChange, highlight, placeholder

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  if (disabled === true) {
    highlight = false; // if disabled, no highlight
  }

  if (highlight === true) {
    return (
      <div className="flex flex-row w-[72vw] focus-within:font-bold">
        <label htmlFor={name} className={classNameLabel}>
          <mark> {label ? label : ""}</mark>
        </label>
        <input
          className={classNameText}
          type="text"
          id={name}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-row w-[72vw] focus-within:font-bold">
        <label htmlFor={name} className={classNameLabel}>
          {label ? label : ""}
        </label>
        <input
          className={classNameText}
          type="text"
          id={name}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  }
};

export { UserTextInput };

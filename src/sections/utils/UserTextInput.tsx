// import debounce from "lodash/debounce";

interface UserTextInputProps {
  classNameText: string;
  classNameLabel: string;
  highlight: boolean;
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserTextInput: React.FC<UserTextInputProps> = ({
  highlight,
  label,
  placeholder,
  classNameText,
  classNameLabel,
  name,
  value,
  onChange,
}) => {
  // props = label, stateId, sectionName, width, left, value, onChange, highlight, placeholder

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    onChange(event);
  };

  if (highlight === true) {
    return (
      <div className="flex flex-row w-500px">
        <label htmlFor={name} className={classNameLabel}>
          {label}
        </label>
        <input
          className={classNameText}
          type="text"
          id={name}
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

/*
const UserText = styled.input((props) => ({
  width: `${props.width + 26}%`,
  marginLeft: `${props.left}px`,
  marginTop: `15px`,
  marginBottom: `15px`,
  paddingLeft: `10px`,
  display: `flex`,
  alignSelf: `center`,
}));

const InputContainerDiv = styled.div`
  display: flex;
  margin-left: 70px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TitleSpan = styled.span`
  margin-right: 10px;
   width: auto; 
`;

const TitleSpanHighlight = styled.div`
  margin-right: 10px;
  background-color: #ffff00;
`;
*/

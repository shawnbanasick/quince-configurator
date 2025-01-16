import { useTranslation } from "react-i18next";

const UserTextInput = (props) => {
  // props = label, stateId, sectionName, width, left, value, onChange, highlight, placeholder
  const { t } = useTranslation();

  const key = `${props.stateId}`;

  const handleChange = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
    // const value = event.target.value;
    // appState[key] = value;
    // localStorage.setItem(key, value);
    // // console.log(value);
  };

  //  appState[key] = localStorage.getItem(key);

  if (props.highlight === "true") {
    return (
      <div>
        <div>{`${t(props.label)} `}</div>
        <input
          tabindex="0"
          type="text"
          placeholder={props.placeholder}
          width={props.width}
          left={props.left}
          name={props.name}
          value={props.value || ""}
          onChange={handleChange}
          className="optionsInput"
        />
      </div>
    );
  } else {
    return (
      <div>
        <div>{`${t(props.label)} `}</div>
        <input
          tabindex="0"
          type="text"
          placeholder={props.placeholder}
          width={props.width}
          left={props.left}
          name={props.name}
          value={props.value || ""}
          onChange={handleChange}
          className="optionsInput"
        />
      </div>
    );
  }
};

export default { UserTextInput };

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

import React from "react";

export interface RadioProps {
  name?: string;
  label?: string;
  value?: string;
  isChecked?: boolean;
  handleChange?: any;
  align?: "left" | "center" | "right";
}

export const Radio: React.FC<RadioProps> = ({
  name,
  label,
  value,
  isChecked,
  handleChange,
}) => {
  const handleRadioChange = (e: any) => {
    const { id } = e.currentTarget;
    handleChange(id); // Send back id to radio group for comparison
  };

  return (
    <div className={`content-center`}>
      <div className="">
        <label
          className="bg-gray-100 border-gray-100 p-4 outline outline-1 outline-slate-300 has-[:checked]:text-green-500 has-[:checked]:bg-green-100 has-[:checked]:border-green-700 rounded-lg h-4 "
          htmlFor={value}
        >
          <input
            type="radio"
            className="hidden"
            name={name}
            id={value} // htlmlFor targets this id.
            value={value}
            checked={isChecked}
            onChange={handleRadioChange}
          />
          {label}
        </label>
      </div>
    </div>
  );
};

/*
export const RadioItem = styled.div`
  display: flex;
  flex-direction: row;

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  input[type="radio"]:checked + label {
    border: 1px solid #c1d1f1;
    background-color: #eef3fb;
  }

  input[type="radio"]:focus + label {
    border: 1px solid #c1d1f1;
  }
`;

const RadioLabel = styled.label<RadioProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 1px solid #cbd2d9;
  color: #1f2933;
  height: 50px;
  width: 120px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-left: -1px;
  cursor: pointer;
  border-radius: ${({ align }) =>
    (align === "left" && "4px 0 0 4px") ||
    (align === "center" && "0 0 0 0") ||
    (align === "right" && "0 4px 4px 0") ||
    ("center" && "4px 0 0 4px")};
`;

*/

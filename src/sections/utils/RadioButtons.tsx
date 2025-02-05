import React from "react";
import clsx from "clsx";

export interface RadioProps {
  name?: string;
  label?: string;
  value?: string;
  isChecked?: boolean;
  disabled?: boolean;
  handleChange?: any;
  align?: "left" | "center" | "right";
}

export const Radio: React.FC<RadioProps> = ({
  name,
  label,
  value,
  isChecked,
  disabled,
  handleChange,
}) => {
  const handleRadioChange = (e: any) => {
    const { id } = e.currentTarget;
    handleChange(id); // Send back id to radio group for comparison
  };

  return (
    <div className={`content-center disabled:bg-gray-200`}>
      <button className="">
        <label
          className={clsx(
            "flex items-center content-center  bg-blue-500 hover:bg-opacity-50 text-white px-4 pt-[8px] pb-[9px] rounded-md select-none",
            {
              "bg-opacity-100": isChecked,
              "bg-transparent hover:bg-blue-500 hover:opacity-70 hover:text-white  text-zinc-600 outline outline-1 outline-zinc-600":
                !isChecked,
              "bg-opacity-50 text-slate-300 outline-slate-200": disabled,
              "outline-gray-300 text-gray-300": !isChecked && disabled,
            }
          )}
          htmlFor={value}
        >
          <input
            type="radio"
            className="hidden"
            name={name}
            disabled={disabled}
            id={value} // htlmlFor targets this id.
            value={value}
            checked={isChecked}
            onChange={handleRadioChange}
          />
          {label}
        </label>
      </button>
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

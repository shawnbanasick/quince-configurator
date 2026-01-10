import React from "react";

const Button = ({ label, onClick, styleClass, id }) => {
  return (
    <button onClick={onClick} id={id} className={`px-4 py-2 rounded-lg  ml-4 ${styleClass}`}>
      {label}
    </button>
  );
};

export default Button;

/*
className="px-4 py-2 rounded-lg text-white  ml-4"


primary button
styleClass="bg-blue-500 hover:bg-blue-700"


secondary button
 styleClass="bg-green-500 hover:bg-green-700 ml-4"
 */

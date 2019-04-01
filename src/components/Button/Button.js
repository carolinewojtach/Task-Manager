import React from "react";
import "./Button.css";

const Button = ({ type, id, action, text, className }) => {
  return (
    <div>
      <button
        className={className}
        type={type}
        key={id}
        onClick={() => action()}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;

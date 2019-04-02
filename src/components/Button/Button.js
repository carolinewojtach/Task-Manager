import React from "react";
import "./Button.css";

const Button = ({ id, action, text, className }) => {
  return (
    <div>
      <button
        className={className}
        type="button"
        key={id}
        onClick={() => action()}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;

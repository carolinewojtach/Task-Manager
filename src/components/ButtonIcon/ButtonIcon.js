import React from "react";
import "./ButtonIcon.css";

const ButtonIcon = ({ type, id, action }) => {
  return (
    <div className="col-1 icon">
      <i className={type} key={id} onClick={() => action()} />
    </div>
  );
};
export default ButtonIcon;

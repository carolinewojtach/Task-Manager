import React from "react";
import "./ButtonIcon.css";

const ButtonIcon = ({ type, id, action }) => {
  return (
    <div className="icon">
      <i className={type} key={id} onClick={() => action(id)} />
    </div>
  );
};
export default ButtonIcon;

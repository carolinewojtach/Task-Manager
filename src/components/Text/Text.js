import React from "react";

import "./Text.css";

const Text = ({ text, className }) => {
  return (
    <div>
      <p className={className}>{text}</p>
    </div>
  );
};

export default Text;

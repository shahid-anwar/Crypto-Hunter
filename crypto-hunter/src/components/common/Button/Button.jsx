import "./styles.css";

import React from "react";

const Button = ({ text, outlined, onClick }) => {
  return (
    <div className={outlined ? "btn-outlined" : "btn"} onClick={() => onClick}>
      {text}
    </div>
  );
};

export default Button;

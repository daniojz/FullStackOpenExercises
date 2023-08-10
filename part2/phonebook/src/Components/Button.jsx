import React from "react";

const Button = ({ text, handleClick, value }) => (
  <button onClick={handleClick} value={value}>
    {text}
  </button>
);

export default Button;

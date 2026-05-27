import React from "react";
import "./Css/Input.css";

const Input = ({ name, value, onChange, className, ...props }) => {
  return (
    <input
      className={`input ${className}`}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
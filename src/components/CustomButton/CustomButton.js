import React from "react";
import classes from "./CustomButton.module.css";

const CustomButton = ({
  label,
  type,
  disabled = false,
  handleClick,
  classNames,
  data,
}) => {
  return (
    <div className={classes.Clean_add}>
      <button
        className={classNames}
        onClick={() => handleClick(data)}
        type={type}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default CustomButton;

import React from "react";
import classes from "./CustomButton.module.css";

const CustomButton = ({ title, type, color, background, height, handleFunction, icon, value, border, theme, disabled, width }) => {
  return (
    <button
      type={type}
      value={value}
      onClick={handleFunction}
      className={border ? `${classes.hover_grey} ${classes.customButton}` : disabled ? classes.disable : classes.customButton}
      disabled={disabled}>
      {icon && icon}
      {title && title}
    </button>
  );
};

export default CustomButton;

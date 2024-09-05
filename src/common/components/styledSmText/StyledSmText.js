import React from "react";
import styles from "./StyledSmText.module.css";

const StyledSmText = ({ fontColor, content, lineHeigh = "" ,py='0'}) => {
  return (
    <p
      className={`${fontColor} text-justify font-normal ${styles.styledClass} ${lineHeigh} ${py} `}
    >
      {content}
    </p>
  );
};

export default StyledSmText;

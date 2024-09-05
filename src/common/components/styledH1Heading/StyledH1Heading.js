import React from "react";
import styles from "./StyledH1Heading.module.css";

const StyledH1Heading = ({ fontColor, content }) => {
  return (
    <h1 className={`${fontColor} font-bold ${styles.styledClass} `}>
      {content}
    </h1>
  );
};

export default StyledH1Heading;

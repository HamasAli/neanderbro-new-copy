import React from "react";
import styles from "./StyledH4Heading.module.css";

const StyledH4Heading = ({ fontColor, content }) => {
  return (
    <h4 className={`${fontColor} font-bold ${styles.styledClass} `}>
      {content}
    </h4>
  );
};

export default StyledH4Heading;

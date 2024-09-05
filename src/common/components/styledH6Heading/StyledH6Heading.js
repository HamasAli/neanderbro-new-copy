import React from "react";
import styles from "./StyledH6Heading.module.css";

const StyledH6Heading = ({ fontColor, content }) => {
  return (
    <h6 className={`${fontColor} font-bold ${styles.styledClass} `}>
      {content}
    </h6>
  );
};

export default StyledH6Heading;

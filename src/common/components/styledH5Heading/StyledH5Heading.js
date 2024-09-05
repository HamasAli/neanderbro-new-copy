import React from "react";
import styles from "./StyledH5Heading.module.css";

const StyledH5Heading = ({ fontColor, content,py='0' }) => {
  return (
    <h5 className={`${fontColor} font-bold ${styles.styledClass} ${py} `}>
      {content}
    </h5>
  );
};

export default StyledH5Heading;

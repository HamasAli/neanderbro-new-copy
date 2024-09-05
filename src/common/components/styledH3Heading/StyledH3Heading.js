import React from "react";
import styles from "./StyledH3Heading.module.css";

const StyledH3Heading = ({ fontColor, content }) => {
  return (
    <h3 className={`${fontColor} font-bold font-montserrat ${styles.styledClass} `} >
      {content}
    </h3>
  );
};

export default StyledH3Heading;

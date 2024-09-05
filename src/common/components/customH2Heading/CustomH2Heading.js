import React from "react";
import styles from "./CustomH2Heading.module.css";

const CustomH2Heading = ({ fontColor, content, customColor, privacyText }) => {
  const words = content.split(" ");

  return (
    <h2 className={`${fontColor} font-bold leading-snug md:leading-tight  ${styles.styledClass}`}>
      {words.map((word, index) => {
        return (
          <span key={index} className={`${privacyText.includes(word) && customColor} font-privacyFont`}>
          {" "}{word}{" "}
          </span>
        );
      })}
    </h2>
  );
};

export default CustomH2Heading;

import React from "react";
import styles from "./CustomH1Heading.module.css";

const CustomH1Heading = ({ fontColor, content, customColor, diffText }) => {
  const words = content.split(" ");

  return (
    <h1 className={`${fontColor} font-bold leading-snug md:leading-tight  ${styles.styledClass}`}>
      {words.map((word, index) => {
        return (
          <span key={index} className={`${diffText.includes(word) && customColor} font-montserrat`}>
          {" "}{word}{" "}
          </span>
        );
      })}
    </h1>
  );
};

export default CustomH1Heading;

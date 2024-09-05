import React from 'react'
import styles from "./StyledLgText.module.css";

const StyledLgText = ({fontColor, content}) => {
  return (
    <p className={`${fontColor} font-normal ${styles.styledClass} `}>{content}</p>
  )
}

export default StyledLgText

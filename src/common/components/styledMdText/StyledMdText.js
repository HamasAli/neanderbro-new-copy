import React from 'react'
import styles from "./StyledMdText.module.css";

const StyledMdText = ({fontColor, content}) => {
  return (
    <p className={`${fontColor} font-normal ${styles.styledClass} `}>{content}</p>
  )
}

export default StyledMdText

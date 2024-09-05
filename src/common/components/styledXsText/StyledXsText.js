import React from 'react'
import styles from "./StyledXsText.module.css";

const StyledXsText = ({fontColor, content}) => {
  return (
    <p className={`${fontColor} font-normal ${styles.styledClass} `}>{content}</p>
  )
}

export default StyledXsText

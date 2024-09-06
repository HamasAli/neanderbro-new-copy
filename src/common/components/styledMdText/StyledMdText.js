import React from 'react'
import styles from "./StyledMdText.module.css";

const StyledMdText = ({ fontColor, content, fontBold }) => {
  return (
    <p className={`${fontColor} ${fontBold ? fontBold : 'font-normal'} ${styles.styledClass} `}>{content}</p>
  )
}

export default StyledMdText

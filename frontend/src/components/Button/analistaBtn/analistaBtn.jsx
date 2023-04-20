import React from 'react'

import styles from "./analistaBtn.module.css"

export const Button = (props) => {
  return (
    <button className={`${styles.btn} ${props.className}`} type="button" onClick={props.onClick}>
      <span className={`${styles.span}`} data-text={props.value1} data-text-after={props.value2}></span>
    </button>
  )
}
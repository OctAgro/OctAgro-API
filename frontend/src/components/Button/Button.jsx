import React from 'react'

import styles from "./Button.module.css"

const Button = (props) => {
  return (

    <button className={styles.btn} type="submit">
        <span className={styles.span} data-text={props.value1} data-text-after={props.value2}></span>
    </button>
  )
}

export default Button
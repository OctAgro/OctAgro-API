import React from 'react';
import styles from "./Button.module.css";

export const Button = ({ style, type, onClick, value1, value2 }) => {
  if (type) {
    return (
      <button className={`${styles.btn}`} type="submit" onClick={onClick} style={style}>
        <span className={`${styles.span}`} data-text={value1} data-text-after={value2}></span>
      </button>
    );
  } else {
    return (
      <button className={`${styles.btn}`} type="button" onClick={onClick} style={style}>
        <span className={`${styles.span}`} data-text={value1} data-text-after={value2}></span>
      </button>
    );
  }
}

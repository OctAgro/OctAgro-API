import React from 'react';
import styles from "./Button.module.css";

export const Button = ({ className, type, onClick, value1, value2 }) => {
  if (type) {
    return (
      <button className={`${styles.btn} ${className}`} type="submit" onClick={onClick}>
        <span className={`${styles.span}`} data-text={value1} data-text-after={value2}></span>
      </button>
    );
  } else {
    return (
      <button className={`${styles.btn} ${className}`} type="button" onClick={onClick}>
        <span className={`${styles.span}`} data-text={value1} data-text-after={value2}></span>
      </button>
    );
  }
}

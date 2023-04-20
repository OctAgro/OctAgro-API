import React from "react";

// IMPORTANDO CSS
import styles from "./Modal.module.css";

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export function Modal({ isOpen, onClick, children }) {
  if (isOpen) {
    return (
      <div className={styles.external}>
        <div className={styles.icon}>
          <FontAwesomeIcon onClick={onClick} icon={faCircleXmark} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    );
  }

  return null;
}

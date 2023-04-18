import React from "react";

// IMPORTANDO CSS
import styles from "./Modal.module.css";

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className={styles.external}>
        {children}

        <FontAwesomeIcon onClick={setModalOpen} icon={faCircleXmark} className={styles.icon}/>
      </div>
    );
  }

  return null;
}

import React from "react"

import { Link } from "react-router-dom"

// IMPORTANDO CSS
import styles from "./Modal.module.css"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

export function Modal({ isOpen, onClick, children }) {
  if (isOpen) {
    return (
      <div className={styles.external}>
        <Link>
          <FontAwesomeIcon
            onClick={onClick}
            icon={faCircleXmark}
            className={styles.icon}
          />
        </Link>

        {children}
      </div>
    )
  }

  return null
}

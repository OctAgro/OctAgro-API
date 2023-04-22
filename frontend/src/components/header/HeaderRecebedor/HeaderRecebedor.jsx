import React from "react"
import styles from "./HeaderRecebedor.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons"

export const HeaderRecebedor = (props) => {
  const arrow = props.arrow
  const link = props.link

  return (
    <div className={styles.external}>
      {arrow ? (
        <div className={styles.arrow}>
          <Link to={link} className={styles.arrow}>
            <FontAwesomeIcon icon={faCircleChevronLeft} className={styles.iconArrow} />
          </Link>
        </div>
      ) : null}

      <div className={styles.clipboards}>
        <div className={styles.clipboardA}>
          <div className={styles.leftSideA}>
            <FontAwesomeIcon className="icon" icon={faClipboard} />
          </div>
          <div className={styles.rightSideA}>
            <h2>0</h2>
            <h3>
              Mercadorias <br /> em Caminho
            </h3>
          </div>
        </div>

        <div className={styles.clipboardB}>
          <div className={styles.leftSideB}>
            <FontAwesomeIcon className={styles.icon} icon={faClipboard} />
          </div>
          <div className={styles.rightSideB}>
            <h2>0</h2>
            <h3>
              Total <br /> Mercadorias
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

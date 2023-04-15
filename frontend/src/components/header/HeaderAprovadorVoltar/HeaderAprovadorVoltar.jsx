import React from "react";
import styles from "./HeaderAprovadorVoltar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const HeaderAprovadorVoltar = () => {
  return (
    <div className={styles.external}>

      <a href="/aprovador/home">
        <FontAwesomeIcon icon={faCircleChevronLeft} className={styles.icon} />
      </a>

      <div className={styles.clipboardA}>
        <div className={styles.leftSideA}>
          <FontAwesomeIcon className="icon" icon={faClipboard} />
        </div>
        <div className={styles.rightSideA}>
          <h2>0</h2>
          <h3>
            Relatório(s) <br /> pendentes
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
            Total <br /> de relatórios
          </h3>
        </div>
      </div>
    </div>
  );
};

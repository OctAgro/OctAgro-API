import React from "react";

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

// IMPORTANDO CSS
import styles from "./MercadoriasPendentes.module.css";

export const MercadoriasPendentes = (mercadoriasPendentes) => {
  if (mercadoriasPendentes) {
    return (
      <div className={styles.external}>
        <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} />
        <p className={styles.text}>Não há mercadorias pendentes</p>
      </div>
    );
  } else {
    null;
  }
};

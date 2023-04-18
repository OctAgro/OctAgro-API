import React from "react";

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

// IMPORTANDO CSS
import styles from "./RelatoriosPendentes.module.css";

export const RelatoriosPendentes = (relatoriosPendentes) => {
  if (relatoriosPendentes) {
    return (
      <div className={styles.external}>
        <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} />
        <p className={styles.text}>Não há relatórios pendentes</p>
      </div>
    );
  } else {
    null;
  }
};

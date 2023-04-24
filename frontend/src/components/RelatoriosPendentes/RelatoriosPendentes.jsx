import React, { useContext } from "react"

import { TabelaRelatorios } from "../TabelaRelatorios/TabelaRelatorios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"

import styles from "./RelatoriosPendentes.module.css"

import { RelatoriosAprovadorContext } from "../../context/RelatoriosAprovadorContext"

export const RelatoriosPendentes = () => {
  const relatoriosPendentes = useContext(RelatoriosAprovadorContext)

  if (relatoriosPendentes === 0) {
    return (
      <div className={styles.external}>
        <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} />
        <p className={styles.text}>Não há relatórios pendentes</p>
      </div>
    )
  } else {
    return <TabelaRelatorios />
  }
}

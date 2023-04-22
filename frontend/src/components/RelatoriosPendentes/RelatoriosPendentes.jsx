import React, { useContext } from "react"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"

// IMPORTANDO COMPONENTES
import { TabelaRelatorios } from "../TabelaRelatorios/TabelaRelatorios"

// IMPORTANDO CSS
import styles from "./RelatoriosPendentes.module.css"

// IMPORTANDO O CONTEXTO
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
    // SE TIVER RELATORIOS PENDENTES VAI RENDERIZAR A LISTA DOS RELATORIOS JA NA HOME
    return <TabelaRelatorios />
  }
}

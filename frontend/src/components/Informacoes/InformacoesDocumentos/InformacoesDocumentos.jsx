import React from "react"
import { Link } from "react-router-dom"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// IMPORTANDO CSS
import styles from "./InformacoesDocumentos.module.css"

export const InformacoesDocumentos = ({ numeroPedido }) => {
  return (
    <div className={styles.external}>
      <div className={styles.inside}>
        <h1>Nota Fiscal - Pedido {numeroPedido} </h1>
        <div className={styles.insideLeft}></div>
      </div>
      <div className={styles.inside}>
        <h1>Relatório de Compra</h1>
        <div className={styles.insideRight}></div>
      </div>
      <div>
        <Link to={`/aprovador/relatorio/${numeroPedido}`}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        </Link>
      </div>
    </div>
  )
}

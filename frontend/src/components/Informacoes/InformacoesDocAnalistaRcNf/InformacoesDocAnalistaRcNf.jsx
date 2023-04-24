import React from "react"
import { Link, useParams } from "react-router-dom"

// IMPORTANDO MODELO DE DOCUMENTOS
import notaFiscalModelo from "../../../assets/notaFiscalModelo.png"
import pedidoCompraModelo from "../../../assets/pedidoCompraModelo.png"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

// IMPORTANDO CSS
import styles from "./InformacoesDocAnalistaRcNf.module.css"

export const InformacoesDocAnalistaRcNf = () => {
  const { id } = useParams()
  const pedidoId = parseInt(id)

  return (
    <div className={styles.external}>
      <div className={styles.inside}>
        <h1>Nota Fiscal - Pedido {pedidoId} </h1>
        <div className={styles.insideLeft}>
          <img className={styles.notaFiscal} src={notaFiscalModelo} alt="Nota Fiscal" />
        </div>
      </div>
      <div className={styles.inside}>
        <h1>Relatório de Compra</h1>
        <div className={styles.insideRight}>
          <img className={styles.relatorioCompra} src={pedidoCompraModelo} alt="Relatório de Compra" />
        </div>
      </div>
      <div>
        <Link to={`/analista/mercadoria/${pedidoId}`}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        </Link>
      </div>
    </div>
  )
}

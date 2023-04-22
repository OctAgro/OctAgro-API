import React from "react"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import styles from "./TabelaMercadorias.module.css"

export const TabelaMercadorias = ({ numeroPedido, fornecedor, tipoCarga, estado }) => {
  return (
    <div className={styles.table}>
      <div className={styles.title}>
        <h1>Entrada de mercadoria</h1>
      </div>

      <table className={styles.tableBackground}>
        <thead>
          <tr>
            <th>Número do Pedido</th>
            <th>Fornecedor</th>
            <th>Tipo de Carga</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableRow}>
            <td className={styles.tableData}>{numeroPedido}</td>
            <td className={styles.tableData}>{fornecedor}</td>
            <td className={styles.tableData}>{tipoCarga}</td>
            <td className={styles.tableData}>{estado}</td>
            <td className={styles.tableData}>
              <button className={styles.button}>
                <Link to={`/recebedor/entradamercadoria/${numeroPedido}`}>
                  Analisar <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

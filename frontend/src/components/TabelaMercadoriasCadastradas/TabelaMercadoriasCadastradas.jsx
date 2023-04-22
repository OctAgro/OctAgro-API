import React from "react"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons"

import styles from "./TabelaMercadoriasCadastradas.module.css"

export const TabelaMercadoriasCadastradas = ({ numeroPedido, fornecedor, tipoCarga, statusAnalise }) => {
  const handleExclusao = () => {
    // logica de exclusao + modal
  }

  return (
    <div className={styles.table}>
      <div className={styles.title}>
        <h1>Gerenciar mercadorias</h1>
      </div>

      <table className={styles.tableBackground}>
        <thead>
          <tr>
            <th>Número do Pedido</th>
            <th>Fornecedor</th>
            <th>Tipo de Carga</th>
            <th>Status da Análise</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableRow}>
            <td className={styles.tableData}>{numeroPedido}</td>
            <td className={styles.tableData}>{fornecedor}</td>
            <td className={styles.tableData}>{tipoCarga}</td>
            <td className={styles.tableData}>{statusAnalise}</td>
            <td className={styles.tableData}>
              <div className={styles.actionsMercadoria}>
                <div>
                  <button className={styles.button}>
                    <Link to={`/recebedor/mercadoriascadastradas/${numeroPedido}`}>
                      Editar <FontAwesomeIcon icon={faPencil} />
                    </Link>
                  </button>
                </div>
                <div>
                  <button className={styles.button} onClick={handleExclusao}>
                    Excluir <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

import {React, useContext } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"

import styles from "../TabelaRelatorios/TabelaRelatorios.module.css"

import { RelatoriosAprovadorContext } from "../../context/RelatoriosAprovadorContext"

export const TabelaRelatorios = () => {
  const dados = useContext(RelatoriosAprovadorContext)

  const listaRelatorios = dados[0]
  console.log(listaRelatorios)

  return (
    <div className={styles.table}>
      <div className={styles.title}>
        <h1>Relatórios Pendentes</h1>
      </div>

      <table className={styles.tableBackground}>
        <thead>
          <tr>
            <th>Nº Pedido</th>
            <th>Descrição</th>
            <th>Situação</th>
            <th>Funcionário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {listaRelatorios.map((pedido) => (
            <tr key={pedido.id_pedido}>
              <td className={styles.tableData}>{pedido.id_relatorio_aprovador}</td>
              <td className={styles.tableData}>{pedido.descricao}</td>
              <td className={styles.tableData}>{pedido.info_analista_status ? 'Aprovado' : 'Recusado'} </td>
              <td className={styles.tableData}>{pedido.id_usuario}</td>
              <td className={styles.tableData}>
                <button className={styles.button}>
                  <Link to={`/aprovador/relatorio/${pedido.id_relatorio_aprovador}`}>
                    Analisar <FontAwesomeIcon icon={faClipboardList} />
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

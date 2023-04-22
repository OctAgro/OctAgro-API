import { React, useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"

import styles from "../TabelaRelatorios/TabelaRelatorios.module.css"

// IMPORTANDO O CONTEXTO
import { RelatoriosAprovadorContext } from "../../context/RelatoriosAprovadorContext"

export const TabelaRelatorios = () => {
  const [listaRelatorios, setListaRelatorios] = useState(['Loading'])

  const dados = useContext(RelatoriosAprovadorContext)

  useEffect(() => {
    const lista = dados[0]
    setListaRelatorios(lista)
  }, [dados])

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
          {(listaRelatorios != []) ? (
            listaRelatorios.map((listaRelatorios) => (
              <tr key={listaRelatorios.id_pedido}>
                <td className={styles.tableData}>{listaRelatorios.id_relatorio_aprovador}</td>
                <td className={styles.tableData}>{listaRelatorios.descricaoFuturaDoPedido}</td>
                <td className={styles.tableData}>{listaRelatorios.info_analista_status ? "ACEITO" : "RECUSADO"}</td>
                <td className={styles.tableData}>{listaRelatorios.id_usuario}</td>
                <td className={styles.tableData}>
                  <button className={styles.button}>
                    <Link to={`/aprovador/relatorio/${listaRelatorios.id_relatorio_aprovador}`}>
                      Analisar <FontAwesomeIcon icon={faClipboardList} />
                    </Link>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>Carregando...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

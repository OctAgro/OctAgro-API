import { React, useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"

import styles from "../TabelaRelatorios/TabelaRelatorios.module.css"

import { RelatoriosAprovadorContext } from "../../context/RelatoriosAprovadorContext"
import { encontrarPedidos } from "../../hooks/encontrarPedidos"

export const TabelaRelatorios = () => {
  const dados = useContext(RelatoriosAprovadorContext)

  const listaRelatorios = dados[0]
  console.log(listaRelatorios)

  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidos()
      setPedidos(dadosPedidos)
    }
    fetchPedidos()
  }, [])

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
        {pedidos?.map((pedido) => (
            <tr key={pedido.id_pedido}>
              <td className={styles.tableData}>{pedido.id_pedido}</td>
              <td className={styles.tableData}>{pedido.produto.descricao}</td>
              <td className={styles.tableData}>{pedido.info_analista_status ? 'Aprovado' : 'Recusado'} </td>
              <td className={styles.tableData}>{pedido.produto.data_entrada_empresa}</td>
              <td className={styles.tableData}>
                <button className={styles.button}>
                  <Link to={`/aprovador/relatorio/${pedido.id_pedido}`}>
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

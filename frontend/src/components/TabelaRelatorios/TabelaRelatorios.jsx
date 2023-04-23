import {React,useState,useEffect} from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"

import styles from "../TabelaRelatorios/TabelaRelatorios.module.css"

import { encontrarPedidos } from "../../hooks/encontrarPedidos"

export const TabelaRelatorios = () => {
  console.log(encontrarPedidos())

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
            <th>Quantidade</th>
            <th>Unidade Medida</th>
            <th>Fornecedor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {pedidos.map((pedido) => (
            <tr key={pedido.id_pedido}>
              <td className={styles.tableData}>{pedido.id_pedido}</td>
              <td className={styles.tableData}>{pedido.produto}</td>
              <td className={styles.tableData}>{pedido.quantidade}</td>
              <td className={styles.tableData}>{pedido.unidade_medida}</td>
              <td className={styles.tableData}>{pedido.fornecedor}</td>
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

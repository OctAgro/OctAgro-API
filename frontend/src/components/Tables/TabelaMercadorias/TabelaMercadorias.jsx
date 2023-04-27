import { React, useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"

import styles from "./TabelaMercadorias.module.css"

import { buscarRelatoriosRecebedor } from "../../../hooks/buscarRelatorios"

// TABELA REFERENTE AO ANALISTA <-------------

export const TabelaMercadorias = () => {
  const [relatoriosRecebedor, setRelatoriosRecebedor] = useState([])
  useEffect(() => {
    async function fetchRelatoriosRecebedor() {
      const dadosPedidos = await buscarRelatoriosRecebedor()
      setRelatoriosRecebedor(dadosPedidos)
    }
    fetchRelatoriosRecebedor()
  }, [])
  
  console.log('Relatorios' , relatoriosRecebedor)

  return (
    <div className={styles.table}>
      <div className={styles.title}>
        <h1>Mercadorias Recebidas</h1>
      </div>

      <table className={styles.tableBackground}>
        <thead>
          <tr>
            <th>Nº Pedido</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(relatoriosRecebedor.data) ? (
            relatoriosRecebedor.data.map((relatorio) => (
              <tr key={relatorio.id_relatorio_recebedor}>
                <td className={styles.tableData}>{relatorio.pedido.id_pedido}</td>
                <td className={styles.tableData}>{relatorio.pedido.produto.descricao}</td>
                <td className={styles.tableData}>{relatorio.pedido.produto.data_entrada_empresa}</td>
                <td className={styles.tableData}>
                  <button className={styles.button}>
                    <Link to={`/analista/mercadoria/${relatorio.id_relatorio_recebedor}`}>
                      Analisar <FontAwesomeIcon icon={faClipboardList} />
                    </Link>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className={styles.tableData} colSpan="4">
                Carregando...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

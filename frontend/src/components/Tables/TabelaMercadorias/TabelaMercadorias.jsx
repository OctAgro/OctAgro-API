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
        <h1>Relatórios Pendentes</h1>
      </div>

      <table className={styles.tableBackground}>
        <thead>
          <tr>
            <th>Nº Pedido</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Estado de Aprovação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {relatoriosRecebedor?.data?.map((relatorio) => (
              <tr key={relatorio.pedido.pedido_id}>
                <td className={styles.tableData}>{relatorio.pedido.id_pedido}</td>
                <td className={styles.tableData}>{relatorio.pedido.produto.descricao}</td>
                <td className={styles.tableData}>{relatorio.pedido.produto.data_entrada_empresa}</td>
                <td className={styles.tableData}> {relatorio.status_aprovacao}</td>
                <td className={styles.tableData}>
                {relatorio.status_aprovacao === 'Pendente' ? (
                  <button className={styles.button}>
                    <Link to={`/analista/mercadoria/${relatorio.pedido.id_pedido}`}>
                      Analisar <FontAwesomeIcon icon={faClipboardList} />
                    </Link>
                  </button>
                ) : (
                  <button className={styles.button}>
                    <Link to={`/analista/mercadoriascadastradas/${relatorio.pedido.id_pedido}`}>
                      Visualizar <FontAwesomeIcon icon={faClipboardList} />
                    </Link>
                  </button>
                )}
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

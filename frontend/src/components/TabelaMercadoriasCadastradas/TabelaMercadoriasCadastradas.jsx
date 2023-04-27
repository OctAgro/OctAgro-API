import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons"

import styles from "./TabelaMercadoriasCadastradas.module.css"

import { encontrarPedidos } from "../../hooks/encontrarPedidos"

export const TabelaMercadoriasCadastradas = () => {
  const handleExclusao = () => {
    // logica de exclusao + modal
  }

  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidos()
      setPedidos(dadosPedidos)
    }
    fetchPedidos()
  }, [])

  console.log(pedidos)

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
            <th>Estado de Aprovação (aprovado/recusado)</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pedidos?.map((pedido) => (
            <tr key={pedido.id_pedido}>
              <td className={styles.tableData}>{pedido.id_pedido}</td>
              <td className={styles.tableData}>{pedido.fornecedor.nome_fornecedor}</td>
              <td className={styles.tableData}>{pedido.produto.nome_produto}</td>
              <td className={styles.tableData}>{pedido.status_pedido}</td>
              <td className={styles.tableData}>
                <div className={styles.actionsMercadoria}>
                  <div>
                    <button className={styles.button}>
                      <Link to={`/recebedor/mercadoriascadastradas/${pedido.id_pedido}`}>
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
          ))}
        </tbody>
      </table>
    </div>
  )
}

import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPencil, faCheckDouble } from "@fortawesome/free-solid-svg-icons"

import styles from "./TabelaMercadoriasCadastradas.module.css"

import { encontrarPedidos } from "../../hooks/encontrarPedidos"
import { buscarRelatoriosRecebedor } from "../../hooks/buscarRelatorios"

export const TabelaMercadoriasCadastradas = () => {
  const handleExclusao = () => {
    // logica de exclusao + modal
  }

  //trazendo todos os pedidos
  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidos()
      setPedidos(dadosPedidos)
    }
    fetchPedidos()
  }, [])

  console.log(pedidos)

  //trazendo todos os relatorios de recebedor
  const [relatoriosRecebedor, setRelatoriosRecebedor] = useState([])
  useEffect(() => {
    async function fetchRelatoriosRecebedor() {
      const todosRelatoriosRecebedor = await buscarRelatoriosRecebedor()
      setRelatoriosRecebedor(todosRelatoriosRecebedor)
    }
    fetchRelatoriosRecebedor()
  }, [])

  console.log('Relatorios' , relatoriosRecebedor.data)

  return (
    <div className={styles.table}>
      <div className={styles.title}>
        <h1>Lista de Mercadorias Avaliadas</h1>
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
        {relatoriosRecebedor.data !== undefined ? (
          relatoriosRecebedor.data.map((relatorios) => (
            <tr key={relatorios.pedido.id_pedido}>
              <td className={styles.tableData}>{relatorios.pedido.id_pedido}</td>
              <td className={styles.tableData}>{relatorios.pedido.fornecedor.nome_fornecedor}</td>
              <td className={styles.tableData}>{relatorios.pedido.produto.nome_produto}</td>
              <td className={styles.tableData}>{relatorios.pedido.status_aprovacao}</td>
              <td className={styles.tableData}>
                <div className={styles.actionsMercadoria}>
                  <div>
                    <button className={styles.button}>
                      <Link to={`/recebedor/mercadoriascadastradas/${relatorios.pedido.id_pedido}`}>
                        Editar <FontAwesomeIcon icon={faPencil} />
                      </Link>
                    </button>
                  </div>
                  {/* REMOVENDO BOTÃO DE EXCLUSÃO */}
                  {/* <div>
                    <button className={styles.button} onClick={handleExclusao}>
                      Excluir <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div> */}
                </div>
              </td>
            </tr>
          ))

        //SE VIER UNDEFINED DA TABELA RELATORIO RECEBEDOR DEVERIA APARECER ESSA MENSAGEM
        ) : (
          <div className={styles.external}>
            <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} />
            <p className={styles.text}>Não há mercadorias pendentes</p>
          </div>
        )}

        </tbody>
      </table>
    </div>
  )
}

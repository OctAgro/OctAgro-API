import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPencil, faCheckDouble } from "@fortawesome/free-solid-svg-icons"

import styles from "./TabelaMercadoriasCadastradasAprovador.module.css"

import { encontrarPedidos } from "../../hooks/encontrarPedidos"
import { buscarRelatoriosAprovador } from "../../hooks/buscarRelatorios"
import { excluirRelatorioAprovador } from "../../hooks/excluirRelatorioAprovador"

export const TabelaMercadoriasCadastradasAprovador = () => {

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
  const [relatoriosAprovador, setRelatoriosAprovador] = useState([])
  
  useEffect(() => {
    async function fetchRelatoriosAprovador() {
      const todosRelatoriosAprovador = await buscarRelatoriosAprovador()
      setRelatoriosAprovador(todosRelatoriosAprovador)
    }
    fetchRelatoriosAprovador()
  }, [])

  console.log('Relatorios: ', relatoriosAprovador)

  const [analistaExcluir, setAnalistaExcluir] = useState(null)

  const handleExclusao = async (idRelatorio) => {
    try {
      const exclusao = await excluirRelatorioAprovador(idRelatorio)
      console.log(exclusao)
      window.location.reload()
    } catch (erro) {
      alert(erro)
    }
  }

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
            <th>Estado de Aprovação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {relatoriosAprovador?.data !== undefined ? (
          relatoriosAprovador?.data?.map((relatorios) => (
            <tr key={relatorios.id_relatorio_aprovador}>
              <td className={styles.tableData}>{relatorios.pedido.id_pedido}</td>
              <td className={styles.tableData}>{relatorios.pedido.fornecedor.nome_fornecedor}</td>
              <td className={styles.tableData}>{relatorios.pedido.produto.nome_produto}</td>
              <td className={styles.tableData}>{relatorios.status_aprovacao}</td>
              <td className={styles.tableData}>
                <div className={styles.actionsMercadoria}>
                  <div>
                    <button className={styles.button}>
                      <Link to={`/aprovador/mercadoriascadastradas/${relatorios.pedido.id_pedido}`}>
                        Editar <FontAwesomeIcon icon={faPencil} />
                      </Link>
                    </button>
                  </div>
                  <div>
                    <button className={styles.button} onClick={() => {
                          handleExclusao(relatorios.pedido.id_pedido)
                        }}>
                      Excluir <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
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

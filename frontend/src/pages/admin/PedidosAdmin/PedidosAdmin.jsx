import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { Modal } from "../../../components/Modal/Modal"
import { HeaderPedidos } from "../../../components/header/HeaderAdmin/HeaderPedidos/HeaderPedidos"

import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faTriangleExclamation, faTrash, faPersonCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./PedidosAdmin.module.css"

// Importando Hooks
import { encontrarPedidosAdministrador } from "../../../hooks/encontrarPedidos"
import { excluirPedido } from "../../../hooks/excluirPedido"

export const PedidosAdmin = () => {

  //importando todos os Pedidos
  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidosAdministrador()
      setPedidos(dadosPedidos)
    }
    fetchPedidos()
  }, [])

  console.log("pedidos: ", pedidos)

  const handleExclusao = async () => {
    try {
      const exclusao = await excluirPedido(pedidoExcluir)
      setErrorMessage(exclusao.data.message)
      setOpenModalProdutoExcluir(true)
    } catch (erro) {
      setErrorMessage(erro.response.data.message)
      setOpenModalProdutoExcluir(true)
      alert(errorMessage)
    }
  }

  /* // HANDLES DO MODAL DE ATUALIZAR
  const handleCloseModalPedidoAtualizado = () => {
    setOpenModalPedidoAtualizado(false)
  }

  const handleOpenModalPedidoAtualizado = () => {
    setOpenModalPedidoAtualizado(true)
  } */

  // HANDLES DO MODAL DE EXCLUIR WARNING
  const handleCloseModalPedidoExcluirWarning = () => {
    setOpenModalPedidoExcluirWarning(false)
  }

  const handleOpenModalPedidoExcluirWarning = () => {
    setOpenModalPedidoExcluirWarning(true)
  }

  function handleCloseAndOpenModals() {
    handleCloseModalPedidoExcluirWarning(false)
    handleOpenModalPedidoExcluir(false)
    handleExclusao()
  }

  // HANDLES DO MODAL DE EXCLUIR
  const handleCloseModalPedidoExcluir = () => {
    setOpenModalPedidoExcluir(false)
    window.location.reload()
  }

  const handleOpenModalPedidoExcluir = () => {
    setOpenModalPedidoExcluir(true)
  }

  const [errorMessage, setErrorMessage] = useState("")

  const [pedidoExcluir, setPedidoExcluir] = useState(null)

  /* const [openModalPedidoAtualizado, setOpenModalPedidoAtualizado] = useState(false) */
  const [openModalPedidoExcluirWarning, setOpenModalPedidoExcluirWarning] = useState(false)
  const [openModalPedidoExcluir, setOpenModalPedidoExcluir] = useState(false)

  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}><SidebarAdmin /></div>
        <div id={styles["header"]}><HeaderPedidos /></div>
        <div id={styles["barraPesquisa"]}>
          <div>
            <BarraAdmin linkVoltar="/admin/home" linkCadastrar="/admin/pedidos/cadastrar">
              <FontAwesomeIcon icon={faPersonCirclePlus} title="Cadastrar novo Pedido!" />
            </BarraAdmin>

            <div>
              {/* <input type="button" onClick={handleOpenModalPedidoAtualizado} value="Atualizar" /> */}
              <input type="button" onClick={handleOpenModalPedidoExcluirWarning} value="Excluir" />
            </div>

            {/* MODAL ATUALIZAR
            <Modal isOpen={openModalPedidoAtualizado} onClick={handleCloseModalPedidoAtualizado}>
              <div className={styles.conteudoModal}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                <p> (nomeDoPedido) foi atualizado com sucesso! (puxar do backend)</p>
                <input
                  className={styles.botaoConfirmarModal}
                  type="button"
                  value="OK"
                  onClick={handleCloseModalPedidoAtualizado}
                />
              </div>
            </Modal> */}

            {/* MODAL EXCLUIR_WARNING */}
            <Modal
              isOpen={openModalPedidoExcluirWarning}
              onClick={handleCloseModalPedidoExcluirWarning}
            >
              <div className={styles.conteudoModal}>
                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeModal} />
                <p> Tem certeza que deseja excluir o Pedido?</p>
                <input
                  className={styles.botaoRecusarModal}
                  type="button"
                  value="NÃO"
                  onClick={handleCloseModalPedidoExcluirWarning}
                />
                <input
                  className={styles.botaoConfirmarModal}
                  type="button"
                  value="SIM"
                  onClick={handleCloseAndOpenModals}
                />
              </div>
            </Modal>

            {/* MODAL EXCLUIR */}
            <Modal isOpen={openModalPedidoExcluir} onClick={handleCloseModalPedidoExcluir}>
              <div className={styles.conteudoModal}>
                <FontAwesomeIcon icon={faTrash} className={styles.iconeModal} />
                <p> (nomeDoPedido) foi excluído! (puxar do backend)</p>
                <input
                  className={styles.botaoConfirmarModal}
                  type="button"
                  value="OK"
                  onClick={handleCloseModalPedidoExcluir}
                />
              </div>
            </Modal>
          </div>
        </div>

        {/* ---- BODY ---- */}
        <div id={styles["body"]}>
          <div className={styles.divBody}>
            <table className={styles.tableBackground}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>CNPJ</th>
                  <th>Razão Social</th>
                  <th>Produtos</th>
                  <th>Ações</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {pedidos?.map((pedido) => (
                  <tr key={pedido.id_pedido}>
                    <td className={styles.tableData}>{pedido.id_pedido}</td>
                    <td className={styles.tableData}>{pedido.fornecedor.CNPJ}</td>
                    <td className={styles.tableData}>{pedido.fornecedor.razao_social}</td>
                    <td className={styles.tableData}>{pedido.produto.nome_produto}</td>
                    <td className={styles.tableData}>

                      {/* verificando com é o estado da aprovação para mostrar ação */}
                      <button className={styles.button}>
                        <Link to={``}>
                          Editar <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Link>
                      </button>
                    </td>
                    <td className={styles.tableData}>
                      <button
                        className={styles.button}
                        onClick={() => {
                          setPedidoExcluir(pedido.id_pedido)
                          setOpenModalPedidoExcluirWarning(true)
                        }}
                      >
                        Excluir <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </PedidosProvider>
  )
}

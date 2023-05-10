import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { Modal } from "../../../components/Modal/Modal"
import { HeaderFornecedores } from "../../../components/header/HeaderAdmin/HeaderFornecedores/HeaderFornecedores"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck,
  faTriangleExclamation,
  faTrash,
  faPersonCirclePlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./FornecedoresAdmin.module.css"

// Importando Hooks
import { encontrarPedidos } from "../../../hooks/encontrarPedidos"

export const FornecedoresAdmin = () => {
  //importando todos os Pedidos
  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidos()
      setPedidos(dadosPedidos)
    }
    fetchPedidos()
  }, [])

  console.log("pedidos: ", pedidos)

  // HANDLES DO MODAL DE ATUALIZAR
  const handleCloseModalFornecedorAtualizado = () => {
    setOpenModalFornecedorAtualizado(false)
  }

  const handleOpenModalFornecedorAtualizado = () => {
    setOpenModalFornecedorAtualizado(true)
  }

  // HANDLES DO MODAL DE EXCLUIR WARNING
  const handleCloseModalFornecedorExcluirWarning = () => {
    setOpenModalFornecedorExcluirWarning(false)
  }

  const handleOpenModalFornecedorExcluirWarning = () => {
    setOpenModalFornecedorExcluirWarning(true)
  }

  function handleCloseAndOpenModals() {
    handleCloseModalFornecedorExcluirWarning()
    handleOpenModalFornecedorExcluir()
  }

  // HANDLES DO MODAL DE EXCLUIR
  const handleCloseModalFornecedorExcluir = () => {
    setOpenModalFornecedorExcluir(false)
  }

  const handleOpenModalFornecedorExcluir = () => {
    setOpenModalFornecedorExcluir(true)
  }

  const [openModalFornecedorAtualizado, setOpenModalFornecedorAtualizado] = useState(false)
  const [openModalFornecedorExcluirWarning, setOpenModalFornecedorExcluirWarning] = useState(false)
  const [openModalFornecedorExcluir, setOpenModalFornecedorExcluir] = useState(false)

  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAdmin />
        </div>
        <div id={styles["header"]}>
          <HeaderFornecedores />
        </div>
        <div id={styles["barraPesquisa"]}>
          <div>
            <BarraAdmin linkVoltar="/admin/home" linkCadastrar="/admin/fornecedores/cadastrar">
              <FontAwesomeIcon icon={faPersonCirclePlus} title="Cadastrar novo fornecedor!" />
            </BarraAdmin>

            <div>
              <input type="button" onClick={handleOpenModalFornecedorAtualizado} value="Atualizar" />
              <input type="button" onClick={handleOpenModalFornecedorExcluirWarning} value="Excluir" />
            </div>

            {/* MODAL ATUALIZAR */}
            <Modal isOpen={openModalFornecedorAtualizado} onClick={handleCloseModalFornecedorAtualizado}>
              <div className={styles.conteudoModal}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                <p> (nomeDoFornecedor) foi atualizado com sucesso! (puxar do backend)</p>
                <input
                  className={styles.botaoConfirmarModal}
                  type="button"
                  value="OK"
                  onClick={handleCloseModalFornecedorAtualizado}
                />
              </div>
            </Modal>

            {/* MODAL EXCLUIR_WARNING */}
            <Modal
              isOpen={openModalFornecedorExcluirWarning}
              onClick={handleCloseModalFornecedorExcluirWarning}
            >
              <div className={styles.conteudoModal}>
                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeModal} />
                <p> Tem certeza que deseja excluir o fornecedor?</p>
                <input
                  className={styles.botaoRecusarModal}
                  type="button"
                  value="NÃO"
                  onClick={handleCloseModalFornecedorExcluirWarning}
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
            <Modal isOpen={openModalFornecedorExcluir} onClick={handleCloseModalFornecedorExcluir}>
              <div className={styles.conteudoModal}>
                <FontAwesomeIcon icon={faTrash} className={styles.iconeModal} />
                <p> (nomeDoFornecedor) foi excluído! (puxar do backend)</p>
                <input
                  className={styles.botaoConfirmarModal}
                  type="button"
                  value="OK"
                  onClick={handleCloseModalFornecedorExcluir}
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
                      <button className={styles.button}>
                        <Link to={``}>
                          Excluir <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Link>
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

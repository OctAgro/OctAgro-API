import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderProdutos } from "../../../components/header/HeaderAdmin/HeaderProdutos/HeaderProdutos"
import { Modal } from "../../../components/Modal/Modal"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faTriangleExclamation, faTrash, faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./ProdutosAdmin.module.css"

// Importando Hooks
import { encontrarPedidos } from "../../../hooks/encontrarPedidos"

export const ProdutosAdmin = () => {

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

  // HANDLES DO MODAL DE CADASTRO
  const handleCloseModalProdutoCadastrado = () => {
    setOpenModalProdutoCadastrado(false)
  }

  const handleOpenModalProdutoCadastrado = () => {
    setOpenModalProdutoCadastrado(true)
  }

  // HANDLES DO MODAL DE ATUALIZAR
  const handleCloseModalProdutoAtualizado = () => {
    setOpenModalProdutoAtualizado(false)
  }

  const handleOpenModalProdutoAtualizado = () => {
    setOpenModalProdutoAtualizado(true)
  }

  // HANDLES DO MODAL DE EXCLUIR WARNING
  const handleCloseModalProdutoExcluirWarning = () => {
    setOpenModalProdutoExcluirWarning(false)
  }

  const handleOpenModalProdutoExcluirWarning = () => {
    setOpenModalProdutoExcluirWarning(true)
  }

  function handleCloseAndOpenModals() {
    handleCloseModalProdutoExcluirWarning()
    handleOpenModalProdutoExcluir()
  }

  // HANDLES DO MODAL DE EXCLUIR
  const handleCloseModalProdutoExcluir = () => {
    setOpenModalProdutoExcluir(false)
  }

  const handleOpenModalProdutoExcluir = () => {
    setOpenModalProdutoExcluir(true)
  }

  const [openModalProdutoCadastrado, setOpenModalProdutoCadastrado] = useState(false)
  const [openModalProdutoAtualizado, setOpenModalProdutoAtualizado] = useState(false)
  const [openModalProdutoExcluirWarning, setOpenModalProdutoExcluirWarning] = useState(false)
  const [openModalProdutoExcluir, setOpenModalProdutoExcluir] = useState(false)

  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}><SidebarAdmin /></div>
        <div id={styles["header"]}><HeaderProdutos /></div>
        <div id={styles["barraPesquisa"]}>
          <div>
            <BarraAdmin linkVoltar="/admin/home" linkCadastrar="/admin/produtos/cadastrar">
              <FontAwesomeIcon icon={faPlus} title="Cadastrar novo produto!" />
            </BarraAdmin>
            {/* AO CONSTRUIR O FORMULARIO, COMENTAR A DIV ABAIXO, ESTOU USANDO ESTE BOTÃO PARA APLICAR OS MODALS */}
            <div>
              <div>

                <input type="button" onClick={handleOpenModalProdutoAtualizado} value="Atualizar" />
                <input type="button" onClick={handleOpenModalProdutoExcluirWarning} value="Excluir" />
              </div>

              {/* MODAL CADASTRAR */}
              <Modal isOpen={openModalProdutoCadastrado} onClick={handleCloseModalProdutoCadastrado}>
                <div className={styles.conteudoModal}>
                  <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                  <p>Produto cadastrado com sucesso!</p>
                  <input
                    className={styles.botaoConfirmarModal}
                    type="button"
                    value="OK"
                    onClick={handleCloseModalProdutoCadastrado}
                  />
                </div>
              </Modal>

              {/* MODAL ATUALIZAR */}
              <Modal isOpen={openModalProdutoAtualizado} onClick={handleCloseModalProdutoAtualizado}>
                <div className={styles.conteudoModal}>
                  <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                  <p> (nomeDoProduto) foi atualizado com sucesso! (puxar do backend)</p>
                  <input
                    className={styles.botaoConfirmarModal}
                    type="button"
                    value="OK"
                    onClick={handleCloseModalProdutoAtualizado}
                  />
                </div>
              </Modal>

              {/* MODAL EXCLUIR_WARNING */}
              <Modal isOpen={openModalProdutoExcluirWarning} onClick={handleCloseModalProdutoExcluirWarning}>
                <div className={styles.conteudoModal}>
                  <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeModal} />
                  <p> Tem certeza que deseja excluir o Produto?</p>
                  <input
                    className={styles.botaoRecusarModal}
                    type="button"
                    value="NÃO"
                    onClick={handleCloseModalProdutoExcluirWarning}
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
              <Modal isOpen={openModalProdutoExcluir} onClick={handleCloseModalProdutoExcluir}>
                <div className={styles.conteudoModal}>
                  <FontAwesomeIcon icon={faTrash} className={styles.iconeModal} />
                  <p> (nomeDoProduto) foi excluído! (puxar do backend)</p>
                  <input
                    className={styles.botaoConfirmarModal}
                    type="button"
                    value="OK"
                    onClick={handleCloseModalProdutoExcluir}
                  />
                </div>
              </Modal>
            </div>
          </div>

          {/* --- BODY --- */}
          <div id={styles["body"]}>
            <div className={styles.divBody}>
              <table className={styles.tableBackground}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Fornecedor</th>
                    <th>Tipo</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {pedidos?.map((pedido) => (
                    <tr key={pedido.id_pedido}>
                      <td className={styles.tableData}>{pedido.id_pedido}</td>
                      <td className={styles.tableData}>{pedido.produto.nome_produto}</td>
                      <td className={styles.tableData}>{pedido.fornecedor.nome_fornecedor}</td>
                      <td className={styles.tableData}>{pedido.produto.tipo}</td>
                      <td className={styles.tableData}>{pedido.produto.descricao}</td>
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
      </div>

    </PedidosProvider>
  )
}

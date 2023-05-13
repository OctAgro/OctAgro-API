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
import { faTriangleExclamation, faTrash, faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./ProdutosAdmin.module.css"

// Importando Hooks
import { encontrarPedidos } from "../../../hooks/encontrarPedidos"
import { excluirProduto } from "../../../hooks/excluirProduto"
import { buscarProduto } from "../../../hooks/procurarProduto"

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

  console.log("Pedidos: ", pedidos)

  //trazendo lista de todos os Produtos
  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    async function fetchProdutos() {
      const dadosProdutos = await buscarProduto()
      setProdutos(dadosProdutos)
    }
    fetchProdutos()
  }, [])

  console.log("produtos: ", produtos)

  const handleExclusao = async () => {
    try {
      const exclusao = await excluirProduto(produtoExcluir)
      setErrorMessage(exclusao.data.message)
      setOpenModalProdutoExcluir(true)
    } catch (erro) {
      setErrorMessage(erro.response.data.message)
      setOpenModalProdutoExcluir(true)
      alert(errorMessage)
    }
  }

  // HANDLES DO MODAL DE EXCLUIR WARNING
  const handleCloseModalProdutoExcluirWarning = () => {
    setOpenModalProdutoExcluirWarning(false)
  }

  function handleCloseAndOpenModals() {
    setOpenModalProdutoExcluir(false)
    setOpenModalProdutoExcluirWarning(false)
    handleExclusao()
  }

  // HANDLES DO MODAL DE EXCLUIR
  const handleCloseModalProdutoExcluir = () => {
    setOpenModalProdutoExcluir(false)
    window.location.reload()
  }

  // Error message do Modal acima
  const [errorMessage, setErrorMessage] = useState("")

  const [produtoExcluir, setprodutoExcluir] = useState(null)
  const [openModalProdutoExcluirWarning, setOpenModalProdutoExcluirWarning] = useState(false)
  const [openModalProdutoExcluir, setOpenModalProdutoExcluir] = useState(false)

  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAdmin />
        </div>
        <div id={styles["header"]}>
          <HeaderProdutos />
        </div>
        <div id={styles["barraPesquisa"]}>
          <div>
            <BarraAdmin linkVoltar="/admin/home" linkCadastrar="/admin/produtos/cadastrar">
              <FontAwesomeIcon icon={faPlus} title="Cadastrar novo produto!" />
            </BarraAdmin>

            {/* MODAL EXCLUIR_WARNING */}
            <Modal 
              isOpen={openModalProdutoExcluirWarning}
              onClick={handleCloseModalProdutoExcluirWarning}
            >
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
                <p> {errorMessage}</p>
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
                  <th>Quantidade</th>
                  <th>Tipo</th>
                  <th>Descrição</th>
                  <th>Ações</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos?.map((produto) => (
                  <tr key={produto.id_produto}>
                    <td className={styles.tableData}>{produto.id_produto}</td>
                    <td className={styles.tableData}>{produto.nome_produto}</td>
                    <td className={styles.tableData}>{produto.quantidade_produto}</td>
                    <td className={styles.tableData}>{produto.tipo}</td>
                    <td className={styles.tableData}>{produto.descricao}</td>
                    <td className={styles.tableData}>
                      {/* verificando com é o estado da aprovação para mostrar ação */}
                      <button className={styles.button}>
                        <Link to={`/admin/produtos/atualizar/${produto.id_produto}`}>
                          Editar <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Link>
                      </button>
                    </td>
                    <td className={styles.tableData}>
                      <button
                        className={styles.button}
                        onClick={() => {
                          setprodutoExcluir(produto.id_produto)
                          setOpenModalProdutoExcluirWarning(true)
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

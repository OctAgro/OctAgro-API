import React, { useState } from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderProdutos } from "../../../components/header/HeaderAdmin/HeaderProdutos/HeaderProdutos"
import { Modal } from "../../../components/Modal/Modal"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faTriangleExclamation, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./ProdutosAdmin.module.css"

export const ProdutosAdmin = () => {
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
      <div className={styles.main}>
        <SidebarAdmin />
        <div className={styles.container}>
          <HeaderProdutos />
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
        </div>
      </div>
    </PedidosProvider>
  )
}

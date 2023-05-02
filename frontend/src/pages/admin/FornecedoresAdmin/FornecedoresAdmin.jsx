import React, { useState } from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { Modal } from "../../../components/Modal/Modal"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./FornecedoresAdmin.module.css"
import { HeaderFornecedores } from "../../../components/header/HeaderAdmin/HeaderFornecedores/HeaderFornecedores"

export const FornecedoresAdmin = () => {
  // HANDLES DO MODAL DE CADASTRO
  const handleCloseModalFornecedorCadastrado = () => {
    setOpenModalFornecedorCadastrado(false)
  }

  const handleOpenModalFornecedorCadastrado = () => {
    setOpenModalFornecedorCadastrado(true)
  }

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

  // HANDLES DO MODAL DE EXCLUIR
  const handleCloseModalFornecedorExcluir = () => {
    setOpenModalFornecedorExcluir(false)
  }

  const handleOpenModalFornecedorExcluir = () => {
    setOpenModalFornecedorExcluir(true)
  }

  const [openModalFornecedorCadastrado, setOpenModalFornecedorCadastrado] = useState(false)
  const [openModalFornecedorAtualizado, setOpenModalFornecedorAtualizado] = useState(false)
  const [openModalFornecedorExcluirWarning, setOpenModalFornecedorExcluirWarning] = useState(false)
  const [openModalFornecedorExcluir, setOpenModalFornecedorExcluir] = useState(false)

  function handleCloseAndOpenModals() {
    handleCloseModalFornecedorExcluirWarning()
    handleOpenModalFornecedorExcluir()
  }

  return (
    <PedidosProvider>
      <div className={styles.main}>
        <SidebarAdmin />
        <div className={styles.container}>
          <HeaderFornecedores />
          <div>{/* <body /> */}</div>

          {/* AO CONSTRUIR O FORMULARIO, COMENTAR A DIV ABAIXO, ESTOU USANDO ESTE BOTÃO PARA APLICAR OS MODALS */}
          <div>
            <div>
              <input type="button" onClick={handleOpenModalFornecedorCadastrado} value="Cadastrar" />
              <input type="button" onClick={handleOpenModalFornecedorAtualizado} value="Atualizar" />
              <input type="button" onClick={handleOpenModalFornecedorExcluirWarning} value="Excluir" />
            </div>

            {/* MODAL CADASTRAR */}
            <Modal isOpen={openModalFornecedorCadastrado} onClick={handleCloseModalFornecedorCadastrado}>
              <div className={styles.conteudoModal}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                <p>Fornecedor cadastrado com sucesso!</p>
                <input
                  className={styles.botaoConfirmarModal}
                  type="button"
                  value="OK"
                  onClick={handleCloseModalFornecedorCadastrado}
                />
              </div>
            </Modal>

            {/* MODAL ATUALIZAR */}
            <Modal isOpen={openModalFornecedorAtualizado} onClick={handleCloseModalFornecedorAtualizado}>
              <div className={styles.conteudoModal}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                <p> (nomeDoFornecedor) foi atualizado com sucesso!</p>
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
                <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                <p> (nomeDoFornecedor) foi excluído!</p>
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
      </div>
    </PedidosProvider>
  )
}

import React, { useState } from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { Modal } from "../../../components/Modal/Modal"
import { HeaderFornecedores } from "../../../components/header/HeaderAdmin/HeaderFornecedores/HeaderFornecedores"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faTriangleExclamation, faTrash, faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./FornecedoresAdmin.module.css"

export const FornecedoresAdmin = () => {

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
        <div id={styles["sidebar"]}><SidebarAdmin /></div>
        <div id={styles["header"]}><HeaderFornecedores /></div>
        <div id={styles["barraPesquisa"]}>
        <div>
            <BarraAdmin linkVoltar="/admin/home" linkCadastrar="/admin/fornecedores/cadastrar">
              <FontAwesomeIcon icon={faPersonCirclePlus} title="Cadastrar novo fornecedor!"/>
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
        <div id={styles["body"]}>
        {/*  < Body /> */}  
        </div>          
      </div>
    </PedidosProvider>
  )
}

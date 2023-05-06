import React, { useState } from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderProdutos } from "../../../components/header/HeaderAdmin/HeaderProdutos/HeaderProdutos"
import { Modal } from "../../../components/Modal/Modal"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"
import { FormAtualizarProduto } from "../../../components/Forms/FormAtualizarProduto/FormAtualizarProduto"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./AtualizarProdutosAdmin.module.css"


export const AtualizarProdutosAdmin = () => {
  // HANDLES DO MODAL DE ATUALIZAR PRODUTOS
  const handleCloseModalProdutoAtualizado = () => {
    setOpenModalProdutoAtualizado(false)
  }

  const handleOpenModalProdutoAtualizado = (e) => {
    e.preventDefault()
    setOpenModalProdutoAtualizado(true)
  }

  const [openModalProdutoAtualizado, setOpenModalProdutoAtualizado] = useState(false)

  return (
    <PedidosProvider>
      <div className={styles.main}>
        <SidebarAdmin />
        <div className={styles.container}>
          <HeaderProdutos />
          <div>
            <BarraAdmin linkVoltar="/admin/produtos" linkCadastrar="/admin/produtos/cadastrar">
              <FontAwesomeIcon icon={faPlus} title="Cadastrar novo produto!" />
            </BarraAdmin>
            {/* AO CONSTRUIR O FORMULARIO, COMENTAR A DIV ABAIXO, ESTOU USANDO ESTE BOTÃO PARA APLICAR OS MODALS */}
            <div>
              <FormAtualizarProduto onClick={handleOpenModalProdutoAtualizado} />

              {/* MODAL CADASTRAR */}
              <Modal isOpen={openModalProdutoAtualizado} onClick={handleCloseModalProdutoAtualizado}>
                <div className={styles.conteudoModal}>
                  <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                  <p>Produto atualizado com sucesso!</p>
                  <input
                    className={styles.botaoConfirmarModal}
                    type="button"
                    value="OK"
                    onClick={handleCloseModalProdutoAtualizado}
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

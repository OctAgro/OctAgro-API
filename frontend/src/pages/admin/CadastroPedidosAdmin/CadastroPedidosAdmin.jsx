import React, { useState } from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderPedidos } from "../../../components/header/HeaderAdmin/HeaderPedidos/HeaderPedidos"
import { Modal } from "../../../components/Modal/Modal"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"
import { FormCadastroPedidos } from "../../../components/Forms/FormCadastroPedidos/FormCadastroPedidos"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./CadastroPedidosAdmin.module.css"

export const CadastroPedidosAdmin = () => {
  // HANDLES DO MODAL DE CADASTRO
  const handleCloseModalPedidosCadastrado = () => {
    setOpenModalPedidosCadastrado(false)
  }

  const handleOpenModalPedidosCadastrado = (e) => {
    e.preventDefault()
    setOpenModalPedidosCadastrado(true)
  }

  const [openModalPedidosCadastrado, setOpenModalPedidosCadastrado] = useState(false)

  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}><SidebarAdmin />
        </div>
        <div id={styles["header"]}><HeaderPedidos />
        </div>

        <div id={styles["barraPesquisa"]}>
          <BarraAdmin linkVoltar="/admin/pedidos" linkCadastrar="/admin/pedidos/cadastrar">
            <FontAwesomeIcon icon={faPlus} title="Cadastrar novo Pedidos!" />
          </BarraAdmin>
          {/* AO CONSTRUIR O FORMULARIO, COMENTAR A DIV ABAIXO, ESTOU USANDO ESTE BOTÃO PARA APLICAR OS MODALS */}

        </div>

        <div id={styles["body"]}>

          <FormCadastroPedidos onClick={handleOpenModalPedidosCadastrado} />

          {/* MODAL CADASTRAR */}
          <Modal isOpen={openModalPedidosCadastrado} onClick={handleCloseModalPedidosCadastrado}>
            <div className={styles.conteudoModal}>
              <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
              <p>Pedidos cadastrado com sucesso!</p>
              <input
                className={styles.botaoConfirmarModal}
                type="button"
                value="OK"
                onClick={handleCloseModalPedidosCadastrado}
              />
            </div>
          </Modal>

        </div>
      </div>
    </PedidosProvider>
  )
}

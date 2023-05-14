import React, { useState } from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderFornecedores } from "../../../components/header/HeaderAdmin/HeaderFornecedores/HeaderFornecedores"
import { Modal } from "../../../components/Modal/Modal"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"
import { FormFornecedorUpdate } from "../../../components/Forms/FormFornecedorUpdate/FormFornecedorUpdate"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./AtualizarFornecedoresAdmin.module.css"

export const AtualizarFornecedoresAdmin = () => {
  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}><SidebarAdmin /></div>
        <div id={styles["header"]}><HeaderFornecedores /></div>
        <div id={styles["barraPesquisa"]}>
        <BarraAdmin linkVoltar="/admin/fornecedores" linkCadastrar="/admin/fornecedores/cadastrar">
              <FontAwesomeIcon icon={faPersonCirclePlus} title="Cadastrar novo fornecedor!" />
            </BarraAdmin>
        </div>
        <div id={styles["body"]}>
        <FormFornecedorUpdate />
        </div>
      </div>      
    </PedidosProvider>
  )
}

import React, { useState } from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderFornecedores } from "../../../components/header/HeaderAdmin/HeaderFornecedores/HeaderFornecedores"
import { Modal } from "../../../components/Modal/Modal"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"
import { FormCadastroFornecedor } from "../../../components/Forms/FormCadastroFornecedor/FormCadastroFornecedor"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./CadastroFornecedoresAdmin.module.css"

export const CadastroFornecedoresAdmin = () => {
  return (
    <PedidosProvider>
      <div className={styles.main}>
        <SidebarAdmin />
        <div className={styles.container}>
          <HeaderFornecedores />
          <div>
            <BarraAdmin linkVoltar="/admin/fornecedores" linkCadastrar="/admin/fornecedores/cadastrar">
              <FontAwesomeIcon icon={faPersonCirclePlus} title="Cadastrar novo fornecedor!" />
            </BarraAdmin>

            <div>
              <FormCadastroFornecedor />
            </div>
          </div>
        </div>
      </div>
    </PedidosProvider>
  )
}

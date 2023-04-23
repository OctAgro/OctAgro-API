import React from "react"

// importando os componentes
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"
import { FormRecebedorUpdate } from "../../../components/Forms/FormRecebedorUpdate/FormRecebedorUpdate"

import styles from "./FormularioRecebedorUpdate.module.css"

export const FormularioRecebedorUpdate = () => {
  return (
    <div className={styles.main}>
      <SidebarRecebedor />

      <div className={styles.container}>
        <div className={styles.header}>
          <HeaderRecebedor arrow="True" link="/recebedor/mercadoriascadastradas" />
        </div>

        <div className={styles.content}>
          <FormRecebedorUpdate numeroPedido="1001" nomeProduto="Trigo" nomeAnalista="Thiago Zani" />
        </div>
      </div>
    </div>
  )
}

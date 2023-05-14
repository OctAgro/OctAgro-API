import React from "react"

// importando os componentes
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"
import { FormAnalistaUpdate } from "../../../components/Forms/FormAnalistaUpdate/FormAnalistaUpdate"

import styles from "./FormularioAnalistaUpdate.module.css"

// Importando o Provider
import { MercadoriasProvider } from "../../../context/MercadoriasRecebedorContext"

export const FormularioAnalistaUpdate = () => {
  return (
    <MercadoriasProvider>
      <div className={styles.main}>
        <SidebarAnalista />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderRecebedor arrow="True" link="/analista/mercadoriascadastradas" />
          </div>

          <div className={styles.content}>
            <FormAnalistaUpdate />
          </div>
        </div>
      </div>
    </MercadoriasProvider>
  )
}

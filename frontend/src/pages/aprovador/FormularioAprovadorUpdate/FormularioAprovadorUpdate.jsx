import React from "react"

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"
import { FormAprovadorUpdate } from "../../../components/Forms/FormAprovadorUpdate/FormAprovadorUpdate"

import styles from "./FormularioAprovadorUpdate.module.css"

// Importando o Provider
import { MercadoriasProvider } from "../../../context/MercadoriasRecebedorContext"

export const FormularioAprovadorUpdate = () => {
  return (
    <MercadoriasProvider>
      <div className={styles.main}>
        <SidebarAprovador />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderAprovador arrow="True" link="/analista/mercadoriascadastradas" />
          </div>

          <div className={styles.content}>
            <FormAprovadorUpdate />
          </div>
        </div>
      </div>
    </MercadoriasProvider>
  )
}

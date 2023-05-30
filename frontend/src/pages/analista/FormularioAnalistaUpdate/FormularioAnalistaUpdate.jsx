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
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAnalista />
        </div>
        <div id={styles["header"]}>
          <HeaderRecebedor arrow="True" link="/analista/mercadoriascadastradas" />
        </div>

        <div id={styles["body"]}>
          <FormAnalistaUpdate />
        </div>
      </div>
    </MercadoriasProvider>
  )
}

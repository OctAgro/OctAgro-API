import React from "react"

// importando os componentes
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"
import { FormRecebedorUpdate } from "../../../components/Forms/FormRecebedorUpdate/FormRecebedorUpdate"

import styles from "./FormularioRecebedorUpdate.module.css"

// Importando o Provider
import { MercadoriasProvider } from "../../../context/MercadoriasRecebedorContext"

export const FormularioRecebedorUpdate = () => {
  return (
    <MercadoriasProvider>

      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarRecebedor />
        </div>
        <div id={styles["header"]}>
          <HeaderRecebedor arrow="True" link="/recebedor/mercadoriascadastradas" />
        </div>

        <div id={styles["body"]}>
          <FormRecebedorUpdate />
        </div>
      </div>

    </MercadoriasProvider>
  )
}

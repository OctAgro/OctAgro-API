import React from "react"

// importando os componentes
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista"
import { HeaderAnalista } from "../../../components/header/HeaderAnalista/HeaderAnalista"
import { FormAnalista } from "../../../components/Forms/FormAnalista/FormAnalista"

import styles from "./FormularioAnalista.module.css"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

export const FormularioAnalista = () => {
  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAnalista />
        </div>
        <div id={styles["header"]}>
          <HeaderAnalista arrow="True" link="/analista/mercadoria" />
        </div>

        <div id={styles["body"]}>
          <FormAnalista hasButton="True" />
        </div>
      </div>
    </PedidosProvider>
  )
}

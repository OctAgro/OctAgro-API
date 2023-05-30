import React from "react"

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"
import { FormAprovador } from "../../../components/Forms/FormAprovador/FormAprovador"

// importando o provider
import { RelatoriosProvider } from "../../../context/RelatoriosAprovadorContext"

import styles from "./FormularioAprovador.module.css"



export const FormularioAprovador = () => {
  return (
    <RelatoriosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAnalista />
        </div>
        <div id={styles["header"]}>
          <HeaderAprovador arrow="True" link="/aprovador/relatorio" />
        </div>

        <div id={styles["body"]}>
          <FormAprovador />
        </div>
      </div>
    </RelatoriosProvider>
  )
}

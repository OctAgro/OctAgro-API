import React from "react"

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { TabelaRelatorios } from "../../../components/TabelaRelatorios/TabelaRelatorios"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"

// importando o CSS do module.css
import styles from "./RelatorioAprovador.module.css"

// Importando o Provider
import { RelatoriosProvider } from "../../../context/RelatoriosAprovadorContext"

export const RelatorioAprovador = () => {
  return (
    <RelatoriosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAprovador />
        </div>
        <div id={styles["header"]}>
          <HeaderAprovador arrow="True" link="/aprovador/home" />
        </div>

        <div id={styles["body"]}>
          <TabelaRelatorios
          />
        </div>
      </div>
    </RelatoriosProvider>
  )
}

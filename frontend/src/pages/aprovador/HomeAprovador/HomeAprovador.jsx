import React from "react"

// IMPORTANDO COMPONENTES
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"
import { RelatoriosPendentes } from "../../../components/RelatoriosPendentes/RelatoriosPendentes"

// IMPORTANDO CSS
import styles from "./HomeAprovador.module.css"

// Importando o Provider
import { RelatoriosProvider } from "../../../context/RelatoriosAprovadorContext"

export const HomeAprovador = () => {
  return (
    <RelatoriosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAprovador />
        </div>

        <div id={styles["header"]}>          <HeaderAprovador />
        </div>

        <div id={styles["body"]}>
          <RelatoriosPendentes />
        </div>
      </div>
    </RelatoriosProvider>
  )
}

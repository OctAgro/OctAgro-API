import React, { useState, useContext } from "react"

// IMPORTANDO COMPONENTES
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"
import { RelatoriosPendentes } from "../../../components/RelatoriosPendentes/RelatoriosPendentes"

// IMPORTANDO CSS
import styles from "./HomeAprovador.module.css"

// IMPORTANDO O PROVIDER
import { RelatoriosProvider } from "../../../context/RelatoriosAprovadorContext"

export const HomeAprovador = () => {
  const [relatoriosPendentes, setRelatoriosPendentes] = useState(1)

  return (
    <RelatoriosProvider>
      <div className={styles.main}>
        <SidebarAprovador />
        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderAprovador />
          </div>
          <div>
            <RelatoriosPendentes />
          </div>
        </div>
      </div>
    </RelatoriosProvider>
  )
}

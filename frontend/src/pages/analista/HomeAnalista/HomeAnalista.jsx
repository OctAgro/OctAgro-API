import React from "react"
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista"
import { HeaderAnalista } from "../../../components/header/HeaderAnalista/HeaderAnalista"
import { MercadoriasPendentes } from "../../../components/MercadoriasPendentes/MercadoriasPendentes"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

import styles from "./HomeAnalista.module.css"

export const HomeAnalista = () => {
  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAnalista />
        </div>

        <div id={styles["header"]}>          <HeaderAnalista />
        </div>

        <div id={styles["body"]}>
          <MercadoriasPendentes />
        </div>
      </div>
    </PedidosProvider >
  )
}

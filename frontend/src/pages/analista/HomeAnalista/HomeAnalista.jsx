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
      <div className={styles.main}>
        <SidebarAnalista />

        <div className={styles.container}>
          <HeaderAnalista />
          <div>
            <MercadoriasPendentes />
          </div>
        </div>
      </div>
    </PedidosProvider>
  )
}

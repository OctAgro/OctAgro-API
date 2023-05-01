import React from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderRelatorios } from "../../../components/header/HeaderAdmin/HeaderRelatorios/HeaderRelatorios"

// Importando CSS
import styles from "./RelatoriosAdmin.module.css"

export const RelatoriosAdmin = () => {
  return (
    <PedidosProvider>
      <div className={styles.main}>
        <SidebarAdmin />
        <div className={styles.container}>
          <HeaderRelatorios />
          <div>
            {/* <body /> */}
          </div>
        </div>
      </div>
    </PedidosProvider>
  )
}

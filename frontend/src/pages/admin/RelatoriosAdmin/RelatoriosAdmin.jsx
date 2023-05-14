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
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}><SidebarAdmin /></div>
        <div id={styles["header"]}><HeaderRelatorios /></div>
        <div id={styles["barraPesquisa"]}>
        </div>
      </div>
    </PedidosProvider>
  )
}

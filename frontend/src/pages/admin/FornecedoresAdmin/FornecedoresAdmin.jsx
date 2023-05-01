import React from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"

// Importando CSS
import styles from "./FornecedoresAdmin.module.css"
import { HeaderFornecedores } from "../../../components/header/HeaderAdmin/HeaderFornecedores/HeaderFornecedores"

export const FornecedoresAdmin = () => {
  return (
    <PedidosProvider>
      <div className={styles.main}>
        <SidebarAdmin />   
        <div className={styles.container}>
          <HeaderFornecedores />
          <div>
            {/* <body /> */}
          </div>
        </div>
      </div>
    </PedidosProvider>
  )
}

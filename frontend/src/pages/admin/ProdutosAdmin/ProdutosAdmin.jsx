import React from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"

// Importando CSS
import styles from "./ProdutosAdmin.module.css"

export const ProdutosAdmin = () => {
  return (
    <PedidosProvider>
      <div className={styles.main}>
        <SidebarAdmin />   
        <div className={styles.container}>
         
          <h1>Olá ProdutosAdmin</h1>
        
          {/* <Header /> */}
          <div>
            {/* <body /> */}
          </div>
        </div>
      </div>
    </PedidosProvider>
  )
}

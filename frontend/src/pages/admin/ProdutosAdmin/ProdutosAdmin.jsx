import React from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderProdutos } from "../../../components/header/HeaderAdmin/HeaderProdutos/HeaderProdutos"

// Importando CSS
import styles from "./ProdutosAdmin.module.css"

export const ProdutosAdmin = () => {
  return (
    <PedidosProvider>
      <div className={styles.main}>
        <SidebarAdmin />   
        <div className={styles.container}>       
          <HeaderProdutos />
          <div>
            {/* <body /> */}
          </div>
        </div>
      </div>
    </PedidosProvider>
  )
}

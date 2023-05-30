import React from "react"

// IMPORTANDO COMPONENTES
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"

import { TabelaMercadoriasRecebedor } from "../../../components/TabelaMercadorias/TabelaMercadoriasRecebedor/TabelaMercadoriasRecebedor"

// IMPORTANDO CSS
import styles from "./RecebimentoRecebedor.module.css"

// Importando o Provider
import { MercadoriasProvider } from "../../../context/MercadoriasRecebedorContext"

export const RecebimentoRecebedor = () => {
  return (
    <MercadoriasProvider>
      
        <div id={styles["main"]}>
          <div id={styles["sidebar"]}>
            <SidebarRecebedor />
          </div>
          <div id={styles["header"]}>
            <HeaderRecebedor arrow="True" link="/recebedor/home" />
          </div>
          <div id={styles["body"]}>
          <TabelaMercadoriasRecebedor />
          </div>
        </div>

      </MercadoriasProvider>
      )
}

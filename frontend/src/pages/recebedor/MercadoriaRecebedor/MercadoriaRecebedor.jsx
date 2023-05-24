import React from "react"

// IMPORTANDO COMPONENTES
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"

import { TabelaMercadoriasCadastradas } from "../../../components/TabelaMercadoriasCadastradas/TabelaMercadoriasCadastradas"

// IMPORTANDO CSS
import styles from "./MercadoriaRecebedor.module.css"

// Importando o Provider
import { MercadoriasProvider } from "../../../context/MercadoriasRecebedorContext"

export const MercadoriaRecebedor = () => {
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
          <TabelaMercadoriasCadastradas />
        </div>
      </div>

    </MercadoriasProvider>
  )
}

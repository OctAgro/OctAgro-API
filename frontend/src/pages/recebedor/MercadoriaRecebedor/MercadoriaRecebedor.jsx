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
      <div className={styles.main}>
        <SidebarRecebedor />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderRecebedor arrow="True" link="/recebedor/home" />
          </div>

          <div className={styles.content}>
            <TabelaMercadoriasCadastradas />
          </div>
        </div>
      </div>
    </MercadoriasProvider>
  )
}

import React from "react"

// IMPORTANDO COMPONENTES
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"

import { TabelaMercadoriasCadastradasAprovador } from "../../../components/TabelaMercadoriasCadastradasAprovador/TabelaMercadoriasCadastradasAprovador"

// IMPORTANDO CSS
import styles from "./MercadoriaAprovador.module.css"

// Importando o Provider
/* import { MercadoriasProvider } from "../../../context/MercadoriasRecebedorContext" */

export const MercadoriaAprovador = () => {
  return (
      <div className={styles.main}>
        <SidebarAprovador />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderAprovador arrow="True" link="/aprovador/home" />
          </div>

          <div className={styles.content}>
            <TabelaMercadoriasCadastradasAprovador />
          </div>
        </div>
      </div>
  )
}

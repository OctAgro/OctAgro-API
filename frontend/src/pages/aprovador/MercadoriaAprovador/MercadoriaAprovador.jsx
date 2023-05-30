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
    
    <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAprovador />
        </div>
        <div id={styles["header"]}>
        <HeaderAprovador arrow="True" link="/aprovador/home" />
        </div>

        <div id={styles["body"]}>
        <TabelaMercadoriasCadastradasAprovador />
        </div>
      </div>
  )
}

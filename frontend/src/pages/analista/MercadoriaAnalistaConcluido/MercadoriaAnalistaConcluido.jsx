import React from "react"

// importando os componentes
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista"
import { TabelaMercadoriasCadastradasAnalista } from "../../../components/TabelaMercadoriasCadastradasAnalista/TabelaMercadoriasCadastradasAnalista"
import { HeaderAnalista } from "../../../components/header/HeaderAnalista/HeaderAnalista"

// importando o CSS do module.css
import styles from "./MercadoriaAnalista.module.css"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

export const MercadoriaAnalistaConcluido = () => {
  return (
    <PedidosProvider>

      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAnalista />
        </div>

        <div id={styles["header"]}>          <HeaderAnalista arrow="True" link="/analista/home" />
        </div>

        <div id={styles["body"]}>
          <TabelaMercadoriasCadastradasAnalista />
        </div>
      </div>
    </PedidosProvider>
  )
}

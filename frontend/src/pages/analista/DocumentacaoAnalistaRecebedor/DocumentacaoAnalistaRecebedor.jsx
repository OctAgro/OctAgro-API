import React from "react"

// IMPORTANDO CSS
import styles from "./DocumentacaoAnalistaRecebedor.module.css"

import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista"

import { InformacoesRecebedorPageAnalista } from "../../../components/Informacoes/InformacoesRecebedorPageAnalista/InformacoesRecebedorPageAnalista"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

export const DocumentacaoAnalistaRecebedor = () => {
  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAnalista />
        </div>        

        <div id={styles["body"]}>
          <InformacoesRecebedorPageAnalista />
        </div>
      </div>

    </PedidosProvider>
  )
}

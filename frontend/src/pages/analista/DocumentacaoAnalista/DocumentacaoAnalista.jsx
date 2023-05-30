import React from "react"

// importando os componentes
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista"

import { InformacoesDocAnalistaRcNf } from "../../../components/Informacoes/InformacoesDocAnalistaRcNf/InformacoesDocAnalistaRcNf"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// importando o css
import styles from "./DocumentacaoAnalista.module.css"

export const DocumentacaoAnalista = () => {
  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAnalista />
        </div>
        <div id={styles["header"]}>          
        </div>
        
        <div id={styles["body"]}>
          <InformacoesDocAnalistaRcNf />
        </div>
      </div>
    </PedidosProvider>
  )
}

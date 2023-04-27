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
      <div className={styles.main}>
        <SidebarAnalista />
        <div className={styles.container}>
          <div className={styles.content}>
            <InformacoesDocAnalistaRcNf />
          </div>
        </div>
      </div>
    </PedidosProvider>
  )
}

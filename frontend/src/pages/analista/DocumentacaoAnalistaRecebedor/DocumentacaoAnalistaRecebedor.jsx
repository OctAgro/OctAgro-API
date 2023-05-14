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
      <div className={styles.main}>
        <SidebarAnalista />
        <div className={styles.container}>
          <InformacoesRecebedorPageAnalista />
        </div>
      </div>
    </PedidosProvider>
  )
}
